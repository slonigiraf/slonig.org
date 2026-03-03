"use client";

import { useEffect, useRef } from "react";

type ImpressionTrackerProps = {
  /** Your internal ID for what was seen (e.g. "hero", "pricing_card_2") */
  id: string;

  /** Matomo event category/action */
  category?: string;
  action?: string;

  /** How much must be visible to count (0.5 = 50%) */
  threshold?: number;
  rootMargin?: string;

  /** How many seconds it must remain >= threshold before reporting */
  sec?: number;

  children?: React.ReactNode;
};

declare global {
  interface Window {
    _paq?: any[];
  }
}

function isLocalhost() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "::1";
}

export default function ImpressionTracker({
  id,
  category = "IMPRESSION",
  action = "VIEW",
  threshold = 0.5,
  rootMargin = "0px",
  sec = 2,
  children,
}: ImpressionTrackerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Are we currently "qualified in-view" (>= threshold)?
  const inViewRef = useRef(false);

  // Did we already send for the current in-view session?
  const sentRef = useRef(false);

  // Pending timer id
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clearTimer = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };

    const send = () => {
      if (sentRef.current) return;
      sentRef.current = true;

      if (isLocalhost()) {
        // eslint-disable-next-line no-console
        console.log("[ImpressionTracker]", { category, action, id, sec });
        return;
      }

      if (typeof window !== "undefined" && Array.isArray(window._paq)) {
        window._paq.push(["trackEvent", category, action, id]);
      }
    };

    const startTimerIfNeeded = () => {
      clearTimer();

      // Fire immediately if sec is 0 or negative
      if (sec <= 0) {
        send();
        return;
      }

      timerRef.current = window.setTimeout(() => {
        // Only send if we are still qualified in-view at timer completion
        if (inViewRef.current) send();
      }, Math.round(sec * 1000));
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const qualified =
          entry.isIntersecting && entry.intersectionRatio >= threshold;

        // Transition: out -> in (qualified)
        if (!inViewRef.current && qualified) {
          inViewRef.current = true;
          sentRef.current = false; // new session
          startTimerIfNeeded();
          return;
        }

        // Transition: in (qualified) -> out (not qualified)
        if (inViewRef.current && !qualified) {
          inViewRef.current = false;
          clearTimer(); // didn’t stay long enough (or session ended)
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => {
      clearTimer();
      io.disconnect();
    };
  }, [id, category, action, threshold, rootMargin, sec]);

  return <div ref={ref}>{children}</div>;
}