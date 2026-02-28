"use client";

import React, { useState } from "react";

type Props = {
  id: string;
  caption: string;
  expanded?: boolean;
  outlined?: boolean;
};

const APPOINTMENT_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0TmcFsCgKSTrSWKTr1oZCd2JIFmc8IJSwpoxsGPSt6nAX891ynanbn7FBx8SSqxJfa0oQaf0br";

export default function RequestDemo({
  id,
  caption,
  expanded = true,
  outlined = false,
}: Props) {
  const [form, setForm] = useState({ name: "", email: "" });

  const openCalendar = () => {
    // ✅ Same behavior everywhere: open Google Appointments directly
    window.open(APPOINTMENT_URL, "_blank", "noopener,noreferrer");
  };

  const hijackToCalendar = (
    e: React.SyntheticEvent<HTMLElement> | React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    openCalendar();
  };

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

  

  

const buttonClass = [
    "inline-flex items-center justify-center select-none font-extrabold",
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

  const collapsedPrimaryBtn = buttonClass + " uppercase tracking-widest";

  const collapsedOutlinedBtn = [
    "inline-flex items-center justify-center",
    "rounded-full border-2 border-white/90",
    "px-10 py-4 text-xl font-semibold text-white",
    "transition hover:bg-white/10",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70",
  ].join(" ");

  // ✅ collapsed = button only
  if (!expanded) {
    return (
      <button
        type="button"
        onClick={openCalendar}
        className={
          outlined
            ? collapsedOutlinedBtn
            : [
                collapsedPrimaryBtn,
                "!py-2 !px-4 text-sm inline-flex items-center gap-2",
              ].join(" ")
        }
      >
        {caption}
      </button>
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
                className={"h-[54px] " + buttonClass}
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
    </section>
  );
}