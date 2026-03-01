import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs"; // nodemailer needs Node runtime (not Edge)

function isEmail(s: unknown) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function clean(s: unknown, max = 200) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

async function verifyRecaptchaV3(token: string, remoteip?: string) {
  // IMPORTANT: secret must NOT be NEXT_PUBLIC_ (that’s for client)
  const secret = process.env.RECAPTCHA_SECRET;
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

  if (!data?.success) return { ok: false, reason: "recaptcha_failed", data };

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
    secure,
    auth: { user, pass },
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({} as any));

    const name = clean(body?.name, 100);
    const tel = clean(body?.tel, 50);
    const email = clean(body?.email, 150);
    const page = clean(body?.page, 200);
    const form_id = clean(body?.form_id, 50);
    const token = clean(body?.token, 1000000);

    if (!name || !email || !form_id || !token) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email." }, { status: 400 });
    }

    const xff = req.headers.get("x-forwarded-for") || "";
    const remoteip = (xff.split(",")[0] || "").trim();

    const rec = await verifyRecaptchaV3(token, remoteip);
    if (!rec.ok) {
      return NextResponse.json(
        { success: false, error: `reCAPTCHA failed: ${rec.reason}` },
        { status: 400 }
      );
    }

    const transporter = makeTransporter();

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
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("add-lid error:", err);
    return NextResponse.json({ success: false, error: "Server error." }, { status: 500 });
  }
}