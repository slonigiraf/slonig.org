import nodemailer from "nodemailer";

function isEmail(s) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function clean(s, max = 200) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

async function verifyRecaptchaV3(token, remoteip) {
  const secret = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET;
  if (!secret) return { ok: false, reason: "Missing RECAPTCHA_SECRET" };
  if (!token) return { ok: false, reason: "Missing token" };

  const params = new URLSearchParams();
  params.set("secret", secret);
  params.set("response", token);
  if (remoteip) params.set("remoteip", remoteip);

  const resp = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  const data = await resp.json();

  // reCAPTCHA v3 returns { success, score, action, ... }
  if (!data?.success) return { ok: false, reason: "recaptcha_failed", data };

  // OPTIONAL: validate expected action
  // if (data.action !== "lid_collector") return { ok: false, reason: "bad_action", data };

  // OPTIONAL: tune threshold (0.5 is a common starting point)
  const score = typeof data.score === "number" ? data.score : 0;
  if (score < 0.5) return { ok: false, reason: "low_score", data };

  return { ok: true, score, data };
}

function makeTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const secure = String(process.env.SMTP_SECURE || "true") === "true";

  if (!host || !user || !pass) {
    throw new Error("SMTP env vars missing (SMTP_HOST/SMTP_USER/SMTP_PASS).");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for 587 (STARTTLS)
    auth: { user, pass },
  });
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ success: false, error: "Method Not Allowed" });

  try {
    const name = clean(req.body?.name, 100);
    const tel = clean(req.body?.tel, 50);
    const email = clean(req.body?.email, 150);
    const page = clean(req.body?.page, 200);
    const form_id = clean(req.body?.form_id, 50);
    const token = clean(req.body?.token, 1000000);

    if (!name || !email || !form_id || !token) {
      return res.status(400).json({ success: false, error: "Missing required fields." });
    }
    if (!isEmail(email)) {
      return res.status(400).json({ success: false, error: "Invalid email." });
    }

    // reCAPTCHA verification
    const remoteip =
      (req.headers["x-forwarded-for"]?.toString().split(",")[0] || req.socket?.remoteAddress || "").trim();

    const rec = await verifyRecaptchaV3(token, remoteip);
    if (!rec.ok) {
      return res.status(400).json({
        success: false,
        error: `reCAPTCHA failed: ${rec.reason}`,
      });
    }

    const transporter = makeTransporter();

    // Email content
    const subject = `New lead: ${name} (${form_id})`;
    const text =
      `New lead submitted\n\n` +
      `Name: ${name}\n` +
      `Tel: ${tel}\n` +
      `Email: ${email}\n` +
      `Form: ${form_id}\n` +
      `Page: ${page || "(unknown)"}\n` +
      `IP: ${remoteip || "(unknown)"}\n` +
      `reCAPTCHA score: ${rec.score}\n` +
      `Time: ${new Date().toISOString()}\n`;

    await transporter.sendMail({
      from: `"Lead Collector" <reshetovdenis@mailbook.org>`,
      to: "reshetovdenis@gmail.com",
      replyTo: email, // so you can reply directly to the lead
      subject,
      text,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("add-lid error:", err);
    return res.status(500).json({ success: false, error: "Server error." });
  }
}