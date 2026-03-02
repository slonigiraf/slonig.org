import { NextResponse } from "next/server";
import { createChallenge } from "altcha-lib";
import { webcrypto } from "node:crypto";

export const runtime = "nodejs";

// Ensure Web Crypto is available (safe even if already present).
if (!globalThis.crypto) globalThis.crypto = webcrypto as any;

export async function GET() {
  const hmacKey = process.env.ALTCHA_HMAC_KEY;
  if (!hmacKey) {
    return NextResponse.json({ error: "Missing ALTCHA_HMAC_KEY" }, { status: 500 });
  }

  const challenge = await createChallenge({
    hmacKey,
    maxNumber: 1_000_000,
  });

  // Don’t cache challenges
  return NextResponse.json(challenge, {
    status: 200,
    headers: { "cache-control": "no-store" },
  });
}