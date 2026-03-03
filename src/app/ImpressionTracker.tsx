"use client";

import { useEffect, useMemo, useRef } from "react";
import { usePathname } from "next/navigation";

type ImpressionTrackerProps = {
  id: string;
  category?: string;
  action?: string;
  threshold?: number;
  rootMargin?: string;
  sec?: number;
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

/** "/" -> "index", "/legal/privacy-policy" -> "legal/privacy-policy" */
function pageIdFromPathname(pathname: string | null | undefined) {
  if (!pathname || pathname === "/") return "index";
  const clean = pathname.split("?")[0]?.split("#")[0] ?? "/";
  const parts = clean.split("/").filter(Boolean);
  return parts.length ? parts.join("/") : "index";
}

export default function ImpressionTracker({
  id,
  category = "IMPRESSION",
  action,
  threshold = 0.5,
  rootMargin = "0px",
  sec = 2,
}: ImpressionTrackerProps) {
  // Marker inside the parent you want to track
  const markerRef = useRef<HTMLSpanElement | null>(null);

  const pathname = usePathname();
  const actionResolved = useMemo(() => {
    return action ?? pageIdFromPathname(pathname);
  }, [action, pathname]);

  const inViewRef = useRef(false);
  const startMsRef = useRef<number | null>(null);
  const totalMsRef = useRef(0);

  const sendOnExit = () => {
    const totalMs = totalMsRef.current;
    const totalSec = totalMs / 1000;
    if (totalSec < sec) return;

    if (isLocalhost()) {
      // eslint-disable-next-line no-console
      console.log("[ImpressionTracker exit]", {
        category,
        action: actionResolved,
        id,
        totalMs,
      });
      return;
    }

    if (typeof window !== "undefined" && Array.isArray(window._paq)) {
      window._paq.push(["trackEvent", category, actionResolved, id, totalMs]);
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
    const marker = markerRef.current;
    const parent = marker?.parentElement;

    // Nothing to observe (rare, but guard)
    if (!parent) return;

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

    io.observe(parent);

    return () => {
      if (inViewRef.current) closeSession();
      io.disconnect();
    };
  }, [id, category, actionResolved, threshold, rootMargin, sec]);

  // Invisible marker; still exists in DOM so we can find parentElement.
  return <span ref={markerRef} style={{ display: "none" }} aria-hidden="true" />;
}