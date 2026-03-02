"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";

type Props = {
  id: string;
  caption: string;
};

// ALTCHA can also emit "expired"
type AltchaState = "unverified" | "verifying" | "verified" | "error" | "expired";

export default function Subscribe({ id, caption }: Props) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [page, setPage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [success, setSuccess] = useState(false);

  // ALTCHA
  const altchaId = useMemo(() => `${id}-altcha`, [id]);
  const altchaRef = useRef<HTMLElement | null>(null);

  const [altchaLoaded, setAltchaLoaded] = useState(false);
  const [altchaState, setAltchaState] = useState<AltchaState>("unverified");
  const [altchaPayload, setAltchaPayload] = useState<string>("");

  useEffect(() => {
    setPage(window.location.pathname);
  }, []);

  // ✅ Load ALTCHA only in browser (prevents "customElements is not defined")
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        await import("altcha");
        if (cancelled) return;
        setAltchaLoaded(true);
      } catch {
        if (cancelled) return;
        setAltchaLoaded(false);
        setAltchaState("error");
        setAltchaPayload("");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  // ✅ Attach ALTCHA listeners via ref
  useEffect(() => {
    if (!altchaLoaded) return;

    const el = altchaRef.current;
    if (!el) return;

    const readHiddenInput = () => {
      const input =
        (el.querySelector('input[name="altcha"]') as HTMLInputElement | null) ||
        (document.querySelector(
          `#${CSS.escape(altchaId)} input[name="altcha"]`
        ) as HTMLInputElement | null) ||
        (document.querySelector(
          `form#${CSS.escape(id)} input[name="altcha"]`
        ) as HTMLInputElement | null);

      return input?.value || "";
    };

    const onLoad = () => {
      const existing = readHiddenInput();
      if (existing) {
        setAltchaState("verified");
        setAltchaPayload(existing);
      }
    };

    const onStateChange = (ev: any) => {
      const state = ev?.detail?.state as AltchaState | undefined;
      const payload = ev?.detail?.payload as string | undefined;

      if (state) setAltchaState(state);

      if (state === "verified") {
        const p =
          (typeof payload === "string" && payload.length > 0 && payload) ||
          readHiddenInput();
        setAltchaPayload(p || "");
      } else {
        setAltchaPayload("");
      }
    };

    const onVerified = (ev: any) => {
      setAltchaState("verified");

      const p = ev?.detail?.payload || ev?.detail?.solution || ev?.detail?.token || "";

      const payload =
        (typeof p === "string" && p.length > 0 ? p : readHiddenInput()) || "";

      setAltchaPayload(payload);
    };

    const onError = () => {
      setAltchaState("error");
      setAltchaPayload("");
    };

    const onExpired = () => {
      setAltchaState("expired");
      setAltchaPayload("");
    };

    el.addEventListener("load", onLoad as any);
    el.addEventListener("statechange", onStateChange as any);
    el.addEventListener("verified", onVerified as any);
    el.addEventListener("error", onError as any);
    el.addEventListener("expired", onExpired as any);

    // If it verified before listeners attached (rare), still pick it up:
    const existing = readHiddenInput();
    if (existing) {
      setAltchaState("verified");
      setAltchaPayload(existing);
    }

    return () => {
      el.removeEventListener("load", onLoad as any);
      el.removeEventListener("statechange", onStateChange as any);
      el.removeEventListener("verified", onVerified as any);
      el.removeEventListener("error", onError as any);
      el.removeEventListener("expired", onExpired as any);
    };
  }, [altchaLoaded, altchaId, id]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "cf-name") setForm((s) => ({ ...s, name: value }));
    if (name === "cf-email") setForm((s) => ({ ...s, email: value }));
  };

  const preventEnterSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setErrorText("");
    if (submitting) return;

    try {
      setSubmitting(true);

      if (!form.name || !form.email) {
        setErrorText("Please fill in all fields.");
        return;
      }

      if (altchaState !== "verified" || !altchaPayload) {
        setErrorText("Verification is still running—please try again in a moment.");
        return;
      }

      const payload = {
        name: form.name,
        email: form.email,
        form_id: id,
        page,
        altcha: altchaPayload,
      };

      const res = await fetch("/api/add-lid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!result?.success) {
        setErrorText(
          result?.error
            ? `Please fix the errors: ${result.error}`
            : "Please fix the errors!"
        );
        return;
      }

      setSuccess(true);
    } catch {
      setErrorText("Please fix the errors!");
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass =
    "h-[54px] w-full rounded-xl bg-white px-6 text-[18px] text-slate-900 placeholder:text-slate-500/70 shadow-[0_10px_22px_rgba(0,0,0,0.18)] outline-none ring-0 focus:shadow-[0_12px_28px_rgba(0,0,0,0.22)]";

  const buttonClass =
    "h-[54px] w-full rounded-full bg-[#f3a312] px-8 text-[18px] font-extrabold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition hover:brightness-95 active:translate-y-[1px] disabled:cursor-not-allowed disabled:opacity-75";

  const altchaBusy = altchaState === "verifying";

  // ✅ NEW: "Verifying Data…" only when user typed something AND not yet verified
  const hasAnyInput = form.name.trim().length > 0 || form.email.trim().length > 0;
  const showVerifyingData = hasAnyInput && altchaState !== "verified";

  const canSubmit =
    !submitting &&
    !altchaBusy &&
    altchaLoaded &&
    altchaState === "verified" &&
    !!altchaPayload;

  return (
    <section className="relative mt-10 w-full text-slate-900">
      <div className="w-full">
        <div className="mx-auto w-full max-w-none">
          <div className="relative w-full overflow-visible bg-gradient-to-r from-[#0b63ff] via-[#00a9d6] to-[#19d46a] px-6 py-10 text-center shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:px-12">
            <p className="mb-[15px] text-center text-[clamp(28px,3.2vw,44px)] font-extrabold leading-[1.05] !text-white">
              {caption}
            </p>

            {!success ? (
              <form id={id} onSubmit={onSubmit} onKeyDown={preventEnterSubmit}>
                {/* ✅ Invisible ALTCHA: verifies automatically in background */}
                {altchaLoaded && (
                  <altcha-widget
                    ref={(node) => {
                      altchaRef.current = node as any;
                    }}
                    id={altchaId}
                    challengeurl="/api/altcha-challenge"
                    name="altcha"
                    auto="onload"
                    className="sr-only"
                    aria-hidden="true"
                  />
                )}

                <div className="mx-auto grid w-full max-w-none grid-cols-1 gap-4 lg:max-w-4xl lg:grid-cols-3 lg:gap-[18px]">
                  <input
                    className={inputClass}
                    name="cf-name"
                    placeholder="Name"
                    value={form.name}
                    onChange={onChange}
                    required
                  />

                  <input
                    type="email"
                    className={inputClass}
                    name="cf-email"
                    placeholder="Email"
                    value={form.email}
                    onChange={onChange}
                    required
                  />

                  <button
                    className={buttonClass}
                    type="submit"
                    disabled={!canSubmit}
                    title={
                      altchaLoaded
                        ? altchaState !== "verified"
                          ? "Verifying in background…"
                          : undefined
                        : "Loading verification…"
                    }
                  >
                    {submitting ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        Sending…
                      </span>
                    ) : showVerifyingData ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        Verifying Data…
                      </span>
                    ) : altchaBusy ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        Verifying…
                      </span>
                    ) : !altchaLoaded ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        Loading…
                      </span>
                    ) : (
                      caption
                    )}
                  </button>

                  {errorText && (
                    <div className="lg:col-span-3">
                      <span className="inline-flex w-full items-center gap-2 rounded-xl bg-white/95 px-4 py-3 text-slate-900 shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                        <AlertCircle className="h-[18px] w-[18px]" aria-hidden />
                        {errorText}
                      </span>
                    </div>
                  )}

                  <div className="lg:col-span-3 text-center">
                    <div className="mt-1 text-sm text-slate-900/85">
                      *By submitting, I agree to the{" "}
                      <a
                        className="underline underline-offset-4"
                        href="https://slonig.org/privacy-policy"
                      >
                        privacy policy
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="flex justify-center">
                <p className="m-0 inline-flex items-center gap-3 text-[clamp(22px,2.2vw,32px)] font-extrabold text-white">
                  Thanks! You’re subscribed.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}