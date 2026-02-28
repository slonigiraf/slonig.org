"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";

type Quote = {
  text: string;
  byline?: string;
};

type Props = {
  quotes: Quote[];
  initialIndex?: number;
  className?: string;

  // Styling
  bgClassName?: string;
  textClassName?: string;
  heightClassName?: string;
};

export default function QuoteCarousel({
  quotes,
  initialIndex = 0,
  className = "",
  bgClassName = "bg-[var(--primary-color)]",
  textClassName = "text-white",
  heightClassName = "min-h-[220px] md:min-h-[240px]",
}: Props) {
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
    locked: boolean; // locks to horizontal once we detect intent
  }>({ startX: 0, startY: 0, active: false, locked: false });

  const SWIPE_PX = 40; // threshold

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // only primary pointer
    if (e.pointerType === "mouse") return;
    swipe.current = {
      startX: e.clientX,
      startY: e.clientY,
      active: true,
      locked: false,
    };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!swipe.current.active) return;

    const dx = e.clientX - swipe.current.startX;
    const dy = e.clientY - swipe.current.startY;

    // Decide if gesture is horizontal; then prevent vertical page scroll while swiping.
    if (!swipe.current.locked) {
      if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
        swipe.current.locked = Math.abs(dx) > Math.abs(dy);
      }
    }

    if (swipe.current.locked) {
      e.preventDefault(); // requires touchAction: "pan-y" below
    }
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!swipe.current.active) return;

    const dx = e.clientX - swipe.current.startX;
    const dy = e.clientY - swipe.current.startY;

    swipe.current.active = false;

    // Only trigger if it was mostly horizontal
    if (Math.abs(dx) < Math.abs(dy)) return;

    if (dx <= -SWIPE_PX) next();
    else if (dx >= SWIPE_PX) prev();
  };
  // --- end swipe support ---

  return (
    <section className="relative w-full mt-16 text-slate-900">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={[
            "relative w-full overflow-visible rounded-3xl",
            "px-6 py-10 md:px-12 md:py-12",
            heightClassName,
            bgClassName,
            className,
          ].join(" ")}
          // Allow horizontal swipe gestures without killing vertical scroll
          style={{ touchAction: "pan-y" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => (swipe.current.active = false)}
        >
          {/* Big quote marks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-10 top-3 -translate-x-1/4 -translate-y-1/4 text-white opacity-95"
            style={{ fontSize: 100, lineHeight: 0.9, fontWeight: 900 }}
          >
            “
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[30px] right-10 translate-x-1/4 translate-y-1/4 text-white opacity-95"
            style={{ fontSize: 100, lineHeight: 0.9, fontWeight: 900 }}
          >
            ”
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <p
              className={[
                "max-w-4xl font-semibold tracking-tight",
                textClassName,
              ].join(" ")}
            >
              “{q.text}”
            </p>

            {q.byline ? (
              <p className={["mt-3 font-semibold text-sm", textClassName].join(" ")}>
                {q.byline}
              </p>
            ) : null}

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">{dots}</div>

            {/* Optional prev/next (hidden but accessible) */}
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