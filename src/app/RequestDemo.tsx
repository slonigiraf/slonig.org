"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type Props = {
  id: string;
  caption: string;
  expanded?: boolean;
};

const APPOINTMENT_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0TmcFsCgKSTrSWKTr1oZCd2JIFmc8IJSwpoxsGPSt6nAX891ynanbn7FBx8SSqxJfa0oQaf0br";

export default function RequestDemo({ id, caption, expanded = true }: Props) {
  const [form, setForm] = useState({ name: "", email: "" });
  const [calendarOpen, setCalendarOpen] = useState(false);

  // ✅ portal root (client-only)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  const openCalendar = () => setCalendarOpen(true);
  const closeCalendar = () => setCalendarOpen(false);

  const hijackToCalendar = (
    e: React.SyntheticEvent<HTMLElement> | React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    openCalendar();
  };

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

  // Full-width CTA inside expanded form (kept as-is)
  const buttonClass =
    "h-[54px] w-full rounded-full bg-[#f3a312] px-8 text-[18px] font-extrabold text-white shadow-[0_10px_22px_rgba(0,0,0,0.18)] transition hover:brightness-95 active:translate-y-[1px]";

  // Collapsed button should look like your <Button variant="primary" ...>
  // without importing/using Button component.
  const collapsedPrimaryBtn = [
    "inline-flex items-center justify-center select-none",
    "font-extrabold uppercase tracking-widest",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",

    "relative border border-transparent",
    "rounded-full",
    "text-white",

    "bg-[var(--primary-color)]",
    "bg-[linear-gradient(to_right,var(--light),var(--primary-color),var(--primary-color),var(--light))]",
    "bg-[length:300%_100%]",
    "transition-all duration-[400ms] ease-in-out",
    "hover:bg-[position:100%_0%]",
    "shadow-[0_10px_18px_rgba(0,0,0,0.16)] hover:shadow-[0_14px_22px_rgba(0,0,0,0.18)]",
    "active:translate-y-[1px]",
  ].join(" ");

  const CalendarModal =
    calendarOpen && portalRoot
      ? createPortal(
          <div
            className="fixed inset-0 z-[100000] bg-black/60"
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
          </div>,
          portalRoot
        )
      : null;

  // ✅ collapsed = button only
  if (!expanded) {
    return (
      <>
        <button
          type="button"
          onClick={openCalendar}
          className={[
            collapsedPrimaryBtn,
            // match your navbar usage:
            "!py-2 !px-4 text-sm inline-flex items-center gap-2",
          ].join(" ")}
        >
          {caption}
        </button>
        {CalendarModal}
      </>
    );
  }

  return (
    <section className="relative mt-10 w-full text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative w-full overflow-visible rounded-3xl bg-gradient-to-r from-[#0b63ff] via-[#00a9d6] to-[#19d46a] px-6 py-10 shadow-[0_18px_50px_rgba(0,0,0,0.18)] md:px-12 md:py-12">
          <h2 className="mb-6 text-center text-[clamp(28px,3.2vw,44px)] font-extrabold leading-[1.05] !text-white">
            {caption}
          </h2>

          <form
            id={id}
            onSubmit={(e) => e.preventDefault()}
            onKeyDown={preventEnterSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-[18px]">
              <input
                className={inputClass}
                name="cf-name"
                placeholder="Name"
                value={form.name}
                onChange={onChange}
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
                type="button"
                onMouseDown={hijackToCalendar}
                onTouchStart={hijackToCalendar}
              >
                {caption}
              </button>
            </div>
          </form>
        </div>
      </div>

      {CalendarModal}
    </section>
  );
}