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
  category = "Impression",
  action = "view",
  threshold = 0.5,
  rootMargin = "0px",
  children,
}: ImpressionTrackerProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  // Tracks whether we are currently "in view" (above threshold)
  const inViewRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const send = () => {
      if (isLocalhost()) {
        // eslint-disable-next-line no-console
        console.log("[ImpressionTracker]", { category, action, id });
        return;
      }

      if (typeof window !== "undefined" && Array.isArray(window._paq)) {
        window._paq.push(["trackEvent", category, action, id]);
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        const nowInView = entry.isIntersecting && entry.intersectionRatio >= threshold;

        // Fire when we transition from out-of-view -> in-view
        if (!inViewRef.current && nowInView) {
          inViewRef.current = true;
          send();
          return;
        }

        // Reset when it leaves view (so next re-enter fires again)
        if (inViewRef.current && !nowInView) {
          inViewRef.current = false;
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [id, category, action, threshold, rootMargin]);

  return <div ref={ref}>{children}</div>;
}