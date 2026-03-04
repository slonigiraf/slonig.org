"use client";

import React, { useCallback, useMemo, useRef, useState, useEffect } from "react";
import ImpressionTracker from "./ImpressionTracker";
import { trackMatomoEvent } from "@/lib/matomo";
import { usePathname } from "next/navigation";

type Quote = {
  text: string;
  byline?: string;
};

type Props = {
  title: string;
  quotes: Quote[];
  initialIndex?: number;
  className?: string;

  // Styling
  bgClassName?: string;
  textClassName?: string;
  heightClassName?: string;

  // Tracking options
  trackInitial?: boolean; // default false
};

export default function Testimonial({
  title,
  quotes,
  initialIndex = 0,
  className = "",
  bgClassName = "bg-[var(--primary-color)]",
  textClassName = "text-white",
  heightClassName = "",
  trackInitial = false,
}: Props) {
  const pathname = usePathname();
  const safeQuotes = quotes?.length ? quotes : [{ text: "Add a quote here…" }];

  const [active, setActive] = useState(() => {
    const i = Math.floor(initialIndex);
    return Math.min(Math.max(i, 0), safeQuotes.length - 1);
  });

  const goTo = useCallback(
    (i: number) => setActive(Math.min(Math.max(i, 0), safeQuotes.length - 1)),
    [safeQuotes.length]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  const q = safeQuotes[active];

  // --- Track quote changes (covers dots + swipe + buttons) ---
  const didMountRef = useRef(false);

  useEffect(() => {
    // Skip initial render unless explicitly enabled
    if (!didMountRef.current) {
      didMountRef.current = true;
      if (!trackInitial) return;
    }

    const byline = q.byline
      ? q.byline
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .join(" ")
        .replace(/[.,]+$/, "") // remove trailing commas/dots
      : "";

    trackMatomoEvent({
      category: "TESTIMONIAL",
      action: "CHANGE_QUOTE",
      name: `${pathname}: ${title} | ${byline}`,
      value: active + 1,
    });
  }, [active, q.byline, safeQuotes.length, title, trackInitial]);
  // --- end tracking ---

  const dots = useMemo(() => {
    return safeQuotes.map((_, i) => (
      <button
        key={i}
        type="button"
        onClick={() => goTo(i)}
        aria-label={`Go to quote ${i + 1}`}
        className={[
          "h-3 w-3 rounded-full transition-opacity",
          i === active ? "bg-white opacity-100" : "bg-white opacity-35 hover:opacity-60",
        ].join(" ")}
      />
    ));
  }, [active, goTo, safeQuotes]);

  // --- Swipe support (mobile) ---
  const swipe = useRef<{
    startX: number;
    startY: number;
    active: boolean;
    locked: boolean;
  }>({ startX: 0, startY: 0, active: false, locked: false });

  const SWIPE_PX = 40;

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse") return;
    swipe.current = { startX: e.clientX, startY: e.clientY, active: true, locked: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!swipe.current.active) return;

    const dx = e.clientX - swipe.current.startX;
    const dy = e.clientY - swipe.current.startY;

    if (!swipe.current.locked) {
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        swipe.current.locked = Math.abs(dx) > Math.abs(dy);
      }
    }

    if (swipe.current.locked) e.preventDefault();
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!swipe.current.active) return;

    const dx = e.clientX - swipe.current.startX;
    const dy = e.clientY - swipe.current.startY;

    swipe.current.active = false;

    if (Math.abs(dx) < Math.abs(dy)) return;

    if (dx <= -SWIPE_PX) next();
    else if (dx >= SWIPE_PX) prev();
  };
  // --- end swipe support ---

  return (
    <section className="relative w-full text-slate-900">
      <ImpressionTracker id={`Testimonial: ${title}`} />
      <h2>{title}</h2>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={[
            "relative w-full overflow-visible rounded-3xl",
            "px-6 py-10 md:px-12 md:py-12",
            heightClassName,
            bgClassName,
            className,
          ].join(" ")}
          style={{ touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (swipe.current.active = false)}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-10 top-3 -translate-x-1/4 -translate-y-1/4 text-white opacity-95"
            style={{ fontSize: 100, lineHeight: 0.9, fontWeight: 900 }}
          >
            “
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[33px] right-10 translate-x-1/4 translate-y-1/4 text-white opacity-95"
            style={{ fontSize: 100, lineHeight: 0.9, fontWeight: 900 }}
          >
            ”
          </div>

          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <p className={["max-w-4xl font-semibold tracking-tight", textClassName].join(" ")}>
              “{q.text}”
            </p>

            {q.byline ? (
              <p className={["mt-3 font-semibold text-sm", textClassName].join(" ")}>
                {q.byline}
              </p>
            ) : null}

            {dots.length > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">{dots}</div>
            )}

            <div className="sr-only">
              <button type="button" onClick={prev}>
                Previous
              </button>
              <button type="button" onClick={next}>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}