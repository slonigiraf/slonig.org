"use client";

import React, { useCallback, useMemo, useState } from "react";

type Quote = {
  text: string;
  byline?: string; // e.g. "Student, 10th grade"
};

type Props = {
  quotes: Quote[];
  initialIndex?: number;
  className?: string;

  // Styling
  bgClassName?: string; // default matches screenshot
  textClassName?: string;
  heightClassName?: string; // e.g. "min-h-[240px]"
};

export default function QuoteCarousel({
  quotes,
  initialIndex = 0,
  className = "",
  bgClassName = "bg-[#F5D24A]", // warm yellow like screenshot
  textClassName = "text-slate-900",
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

  return (
    <section className="relative w-full text-slate-900">
      {/* Center the card within the page/container */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <div
          className={[
            "relative w-full overflow-hidden rounded-3xl",
            "px-6 py-10 md:px-12 md:py-12",
            heightClassName,
            bgClassName,
            className,
          ].join(" ")}
        >
          {/* Big quote marks */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-6 text-white opacity-95"
            style={{ fontSize: 120, lineHeight: 0.9, fontWeight: 900 }}
          >
            “
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 right-8 text-white opacity-95"
            style={{ fontSize: 120, lineHeight: 0.9, fontWeight: 900 }}
          >
            ”
          </div>

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <p
              className={[
                "max-w-4xl font-semibold tracking-tight",
                "text-2xl md:text-3xl",
                textClassName,
              ].join(" ")}
            >
              “{q.text}”
            </p>

            {q.byline ? (
              <p className={["mt-3 text-xl md:text-2xl font-semibold", textClassName].join(" ")}>
                {q.byline}
              </p>
            ) : null}

            {/* Dots */}
            <div className="mt-8 flex items-center justify-center gap-2">{dots}</div>

            {/* Optional prev/next (hidden but accessible; you can style/show if you want) */}
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