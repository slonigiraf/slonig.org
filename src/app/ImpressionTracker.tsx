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

  /** Fire only once per id per page load (default true). */
  once?: boolean;

  children?: React.ReactNode;
};

declare global {
  interface Window {
    _paq?: any[];
  }
}

const seenThisLoad = new Set<string>();

function isLocalhost() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "::1";
}

export default function ImpressionTracker({
  id,
  category = "Impression",
  action = "view",
  threshold = 0.5,
  rootMargin = "0px",
  once = true,
  children,
}: ImpressionTrackerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (once && seenThisLoad.has(id)) return;

    const send = () => {
      // On localhost: log to console instead of sending to Matomo
      if (isLocalhost()) {
        // eslint-disable-next-line no-console
        console.log("[ImpressionTracker]", { category, action, id });
        return;
      }

      // Production: send via Matomo JS tracker
      if (typeof window !== "undefined" && Array.isArray(window._paq)) {
        // trackEvent(category, action, name)
        window._paq.push(["trackEvent", category, action, id]);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          if (once) seenThisLoad.add(id);
          io.disconnect();
          send();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [id, once, threshold, rootMargin, category, action]);

  return <div ref={ref}>{children}</div>;
}