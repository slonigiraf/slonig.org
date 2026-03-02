import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { verifySolution } from "altcha-lib";
import { webcrypto } from "node:crypto";

export const runtime = "nodejs";

if (!globalThis.crypto) globalThis.crypto = webcrypto as any;

function isEmail(s: unknown) {
  return typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function clean(s: unknown, max = 200) {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
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

    // ALTCHA payload (base64)
    const altcha = clean(body?.altcha, 2_000_000);

    if (!name || !email || !form_id || !altcha) {
      return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
    }
    if (!isEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email." }, { status: 400 });
    }

    const hmacKey = process.env.ALTCHA_HMAC_KEY;
    if (!hmacKey) {
      return NextResponse.json({ success: false, error: "Missing ALTCHA_HMAC_KEY." }, { status: 500 });
    }

    // ✅ Verify ALTCHA PoW solution
    const ok = await verifySolution(altcha, hmacKey);
    if (!ok) {
      return NextResponse.json({ success: false, error: "ALTCHA verification failed." }, { status: 400 });
    }

    const xff = req.headers.get("x-forwarded-for") || "";
    const remoteip = (xff.split(",")[0] || "").trim();

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