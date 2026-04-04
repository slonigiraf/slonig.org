// ImpressionTracker.tsx
"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackMatomoEvent } from "@/lib/matomo";

type ImpressionTrackerProps = {
  id: string;
  category?: string;
  action?: string;
  threshold?: number;
  rootMargin?: string;
  sec?: number;
  children?: React.ReactNode;
};

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
  const pathname = usePathname();

  const actionResolved = useMemo(() => {
    return action ?? pathname;
  }, [action, pathname]);

  const inViewRef = useRef(false);
  const startMsRef = useRef<number | null>(null);
  const totalMsRef = useRef(0);

  const sendOnExit = () => {
    const totalMs = totalMsRef.current;
    const totalSec = totalMs / 1000;

    if (totalSec >= sec) {
      trackMatomoEvent({
        category,
        action,
        name: `${pathname}: ${id}`,
        value: totalMs,
      });
    } else {
      trackMatomoEvent({
        category,
        action: "SCROLL",
        name: `${pathname}: ${id}`,
        value: totalMs,
      });
    }
  };

  const closeSession = () => {
    if (inViewRef.current && startMsRef.current !== null) {
      totalMsRef.current += Date.now() - startMsRef.current;
    }

    sendOnExit();

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

        if (!inViewRef.current && qualified) {
          inViewRef.current = true;
          startMsRef.current = Date.now();
          return;
        }

        if (inViewRef.current && !qualified) {
          closeSession();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);

    return () => {
      if (inViewRef.current) closeSession();
      io.disconnect();
    };
  }, [id, category, actionResolved, threshold, rootMargin, sec]);

  return <div ref={ref}>{children}</div>;
}