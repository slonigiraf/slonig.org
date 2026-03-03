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

  /**
   * Minimum qualified time (in seconds) required before we report on exit.
   * If total qualified time < sec, we won't send.
   */
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

  // Are we currently qualified in-view (>= threshold)?
  const inViewRef = useRef(false);

  // Timestamp when we entered qualified view (ms)
  const startMsRef = useRef<number | null>(null);

  // Accumulated qualified time (ms) for the current session
  const totalMsRef = useRef(0);

  const sendOnExit = () => {
    const totalMs = totalMsRef.current;
    const totalSec = totalMs / 1000;

    // Apply minimum dwell-time filter
    if (totalSec < sec) return;

    if (isLocalhost()) {
      // eslint-disable-next-line no-console
      console.log("[ImpressionTracker exit]", {
        category,
        action,
        id,
        totalMs,
      });
      return;
    }

    if (typeof window !== "undefined" && Array.isArray(window._paq)) {
      // Matomo: trackEvent(category, action, name, value)
      // value should be an integer; we send milliseconds.
      window._paq.push(["trackEvent", category, action, id, totalMs]);
    }
  };

  const closeSession = () => {
    // If we were in-view, add the last segment
    if (inViewRef.current && startMsRef.current !== null) {
      totalMsRef.current += Date.now() - startMsRef.current;
    }

    // Send on exit (if >= sec)
    sendOnExit();

    // Reset for next session
    inViewRef.current = false;
    startMsRef.current = null;
    totalMsRef.current = 0;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const qualified =
          entry.isIntersecting && entry.intersectionRatio >= threshold;

        // Enter qualified view
        if (!inViewRef.current && qualified) {
          inViewRef.current = true;
          startMsRef.current = Date.now();
          return;
        }

        // Leave qualified view (exit)
        if (inViewRef.current && !qualified) {
          closeSession();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);

    return () => {
      // If component unmounts while still in view, treat it as an exit
      if (inViewRef.current) closeSession();
      io.disconnect();
    };
  }, [id, category, action, threshold, rootMargin, sec]);

  return <div ref={ref}>{children}</div>;
}