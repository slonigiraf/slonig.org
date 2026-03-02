"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Loader2, AlertCircle } from "lucide-react";
import "altcha";

type Props = {
  id: string;
  caption: string;
};

type AltchaState = "unverified" | "verifying" | "verified" | "error";

export default function Subscribe({ id, caption }: Props) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [page, setPage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [success, setSuccess] = useState(false);

  // ALTCHA
  const altchaId = useMemo(() => `${id}-altcha`, [id]);
  const [altchaState, setAltchaState] = useState<AltchaState>("unverified");
  const [altchaPayload, setAltchaPayload] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") setPage(window.location.pathname);
  }, []);

  // Listen to widget state changes and grab payload when verified.
  useEffect(() => {
    const el = document.getElementById(altchaId) as any | null;
    if (!el) return;

    const onStateChange = (ev: any) => {
      const state = ev?.detail?.state as AltchaState | undefined;
      const payload = ev?.detail?.payload as string | undefined;

      if (state) setAltchaState(state);

      if (state === "verified" && typeof payload === "string" && payload.length > 0) {
        setAltchaPayload(payload);
      }

      // If it becomes unverified/error again, clear payload
      if (state !== "verified") {
        setAltchaPayload("");
      }
    };

    el.addEventListener("statechange", onStateChange);
    return () => el.removeEventListener("statechange", onStateChange);
  }, [altchaId]);

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

      // Require ALTCHA verification
      if (altchaState !== "verified" || !altchaPayload) {
        setErrorText("Please complete the verification.");
        return;
      }

      const payload = {
        name: form.name,
        email: form.email,
        form_id: id,
        page,
        altcha: altchaPayload, // ✅ submit base64 payload
      };

      const res = await fetch("/api/add-lid", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (!result?.success) {
        setErrorText(result?.error ? `Please fix the errors: ${result.error}` : "Please fix the errors!");
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
  const altchaOk = altchaState === "verified";

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
                    disabled={submitting || altchaBusy || !altchaOk}
                    title={!altchaOk ? "Complete verification first" : undefined}
                  >
                    {submitting ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Sending…
                      </span>
                    ) : altchaBusy ? (
                      <span className="inline-flex items-center justify-center gap-3">
                        <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                        Verifying…
                      </span>
                    ) : (
                      caption
                    )}
                  </button>

                  {/* ✅ ALTCHA widget (full row) */}
                  <div className="lg:col-span-3 flex justify-center">
                    <div className="rounded-xl bg-white/95 px-4 py-3 shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                      {/* The widget will create a hidden input named "altcha" by default,
                          but since you post JSON, we capture payload via event too. */}
                      <altcha-widget
                        id={altchaId}
                        challengeurl="/api/altcha-challenge"
                        name="altcha"
                      ></altcha-widget>
                    </div>
                  </div>

                  {errorText && (
                    <div className="lg:col-span-3">
                      <span className="inline-flex w-full items-center gap-2 rounded-xl bg-white/95 px-4 py-3 text-slate-900 shadow-[0_10px_22px_rgba(0,0,0,0.12)]">
                        <AlertCircle className="h-[18px] w-[18px]" aria-hidden="true" />
                        {errorText}
                      </span>
                    </div>
                  )}

                  <div className="lg:col-span-3 text-center">
                    <div className="mt-1 text-sm text-slate-900/85">
                      *By submitting, I agree to the{" "}
                      <a className="underline underline-offset-4" href="https://slonig.org/privacy-policy">
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