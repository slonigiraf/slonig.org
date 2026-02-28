"use client";

import React, { useEffect, useState } from "react";
import { Loader2, AlertCircle, CheckCircle2, X } from "lucide-react";

type Props = {
  id: string;
  caption: string;
};

const APPOINTMENT_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0TmcFsCgKSTrSWKTr1oZCd2JIFmc8IJSwpoxsGPSt6nAX891ynanbn7FBx8SSqxJfa0oQaf0br";

export default function LidCollector({ id, caption }: Props) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [page, setPage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errorText, setErrorText] = useState("");
  const [success, setSuccess] = useState(false);

  // ✅ modal
  const [calendarOpen, setCalendarOpen] = useState(false);
  const openCalendar = () => setCalendarOpen(true);
  const closeCalendar = () => setCalendarOpen(false);

  // Open the popup when user tries to interact with inputs/buttons
  const hijackToCalendar = (
    e: React.SyntheticEvent<HTMLElement> | React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    openCalendar();
  };

  useEffect(() => {
    if (typeof window !== "undefined") setPage(window.location.pathname);
  }, []);

  // Close on ESC
  useEffect(() => {
    if (!calendarOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCalendar();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [calendarOpen]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "cf-name") setForm((s) => ({ ...s, name: value }));
    if (name === "cf-email") setForm((s) => ({ ...s, email: value }));
  };

  const preventEnterSubmit = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const inputClass =
    "h-[54px] w-full rounded-xl bg-white px-6 text-[18px] text-slate-900 placeholder:text-slate-500/70 shadow-[0_10px_22px_rgba(0,0,0,0.18)] outline-none ring-0 focus:shadow-[0_12px_28px_rgba(0,0,0,0.22)]";

  // same height + full width; no disabled styles needed now
  const buttonClass =
    "h-[54px] w-full rounded-full bg-[#f3a312] px-8 text-[18px] font-extrabold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition hover:brightness-95 active:translate-y-[1px]";

  return (
    <section className="relative mt-10 w-full text-slate-900">
      {/* ✅ full width panel (no max-w container) */}
     <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative w-full overflow-visible rounded-3xl bg-gradient-to-r from-[#0b63ff] via-[#00a9d6] to-[#19d46a] px-6 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:px-12 md:py-12">
          <h2 className="mb-6 text-center text-[clamp(28px,3.2vw,44px)] font-extrabold leading-[1.05] !text-white">
            {caption}
          </h2>

          {!success ? (
            <form
              id={id}
              onSubmit={(e) => e.preventDefault()} // ✅ never block button due to HTML validation
              onKeyDown={preventEnterSubmit}
              noValidate // ✅ allow empty inputs; no browser validation UI
            >
              {/* ✅ 3 items now: name, email, button */}
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[18px]">
                <input
                  className={inputClass}
                  name="cf-name"
                  placeholder="Name"
                  value={form.name}
                  onChange={onChange}
                  // ✅ open calendar on interaction
                  onMouseDown={hijackToCalendar}
                  onTouchStart={hijackToCalendar}
                />

                <input
                  type="email"
                  className={inputClass}
                  name="cf-email"
                  placeholder="Email"
                  value={form.email}
                  onChange={onChange}
                  onMouseDown={hijackToCalendar}
                  onTouchStart={hijackToCalendar}
                />

                <button
                  className={buttonClass}
                  type="button" // ✅ not submit: always clickable regardless of inputs
                  onMouseDown={hijackToCalendar}
                  onTouchStart={hijackToCalendar}
                >
                  {submitting ? (
                    <span className="inline-flex items-center justify-center gap-3">
                      <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                      Sending…
                    </span>
                  ) : (
                    caption
                  )}
                </button>

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
            <div className="flex justify-center py-2">
              <h2 className="m-0 inline-flex items-center gap-3 text-[clamp(22px,2.2vw,32px)] font-extrabold text-white">
                <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                Thanks! We’ll call you back
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* ✅ Calendar popup */}
      {calendarOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60"
          role="dialog"
          aria-modal="true"
          aria-label="Schedule an appointment"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeCalendar();
          }}
        >
          <div className="h-full w-full sm:flex sm:items-center sm:justify-center sm:p-4">
            <div
              className="
                h-[100svh] w-[100vw]
                bg-white
                sm:h-auto sm:w-full sm:max-w-4xl sm:rounded-3xl
                sm:shadow-[0_20px_70px_rgba(0,0,0,0.35)]
                overflow-hidden
              "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-14 items-center justify-end border-b border-slate-200 px-3 sm:rounded-t-3xl">
                <button
                  type="button"
                  onClick={closeCalendar}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow hover:bg-slate-50 active:translate-y-[1px] touch-manipulation"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="h-[calc(100svh-56px)] w-full sm:h-[565px]">
                <iframe
                  title="Google Calendar Appointments"
                  src={APPOINTMENT_URL}
                  className="h-full w-full"
                  frameBorder="0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}