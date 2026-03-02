"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

type Props = { onReady?: () => void };

export default function WorkInPairVideo({ onReady }: Props) {
  const [ready, setReady] = useState(false);
  const firedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const markReady = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    setReady(true);
    onReady?.();
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const checkNow = () => {
      // HAVE_CURRENT_DATA (2) means first frame is available
      if (v.readyState >= 2) markReady();
    };

    // ✅ If the video loaded before hydration, catch it here immediately
    checkNow();

    // ✅ Also catch “late” readiness after hydration
    v.addEventListener("loadeddata", checkNow, { passive: true });
    v.addEventListener("canplay", checkNow, { passive: true });
    v.addEventListener("playing", checkNow, { passive: true });

    // ✅ Safety fallback (still keep it)
    const t = window.setTimeout(() => {
      if (!firedRef.current) markReady();
    }, 8000);

    return () => {
      window.clearTimeout(t);
      v.removeEventListener("loadeddata", checkNow);
      v.removeEventListener("canplay", checkNow);
      v.removeEventListener("playing", checkNow);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, var(--primary-color) 0 70%, transparent 70% 100%)`,
        }}
      />

      <div className="px-10 sm:px-0 md:px-10">
        <div className="relative w-full max-w-4xl mx-auto aspect-video isolate">
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-black/5">
            {!ready && (
              <div className="absolute inset-0 z-20 grid place-items-center">
                <div className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span className="text-sm font-semibold text-slate-900">
                    Loading video…
                  </span>
                </div>
              </div>
            )}

            <video
              ref={videoRef}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
                ready ? "opacity-100" : "opacity-0"
              }`}
              src="/work_in_pair.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Students work in pairs using Slonig"
              onError={markReady}
            />
          </div>

          <img
            src="/evidence.png"
            alt="Evidence"
            className="
              pointer-events-none absolute z-30
              right-10 bottom-4 md:right-20 md:bottom-8
              w-24 sm:w-24 md:w-44
              translate-x-1/2 translate-y-1/2
              drop-shadow-md
            "
          />
        </div>
      </div>
    </div>
  );
}