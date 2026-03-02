"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = { onReady?: () => void };

export default function WorkInPairVideo({ onReady }: Props) {
  const firedRef = useRef(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const posterRef = useRef<HTMLImageElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const markReady = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    onReady?.();
  };

  // ✅ READY is driven by /work-in-pair.jpg being already loaded OR loading after mount
  useEffect(() => {
    const img = posterRef.current;
    if (!img) return;

    const checkNow = () => {
      // naturalWidth>0 distinguishes "loaded" vs "broken"
      if (img.complete) {
        markReady(); // either loaded or failed; don't hang
      }
    };

    checkNow();

    // In case the browser fires load after mount
    const onLoad = () => markReady();
    const onError = () => markReady();

    img.addEventListener("load", onLoad, { passive: true });
    img.addEventListener("error", onError);

    return () => {
      img.removeEventListener("load", onLoad);
      img.removeEventListener("error", onError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Video: only controls fade placeholder -> video
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let rafId: number | undefined;

    const markRendering = () => setIsPlaying(true);

    const tryRVFC = () => {
      const anyV = v as any;
      if (typeof anyV.requestVideoFrameCallback === "function") {
        anyV.requestVideoFrameCallback(() => markRendering());
        return true;
      }
      return false;
    };

    const onPlaying = () => markRendering();
    const onError = () => setIsPlaying(false);

    v.addEventListener("playing", onPlaying, { passive: true });
    v.addEventListener("error", onError);

    if (!tryRVFC()) {
      if (!v.paused && !v.ended) {
        rafId = window.requestAnimationFrame(() => markRendering());
      }
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("error", onError);
    };
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
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-black">
            <img
              ref={posterRef}
              src="/work-in-pair.jpg"
              alt=""
              aria-hidden="true"
              className={[
                "absolute inset-0 z-20 h-full w-full object-cover",
                "transition-opacity duration-300",
                isPlaying ? "opacity-0" : "opacity-100",
              ].join(" ")}
              // keep these too (they'll fire in non-cached cases)
              onLoad={markReady}
              onError={markReady}
              decoding="async"
            />

            <video
              ref={videoRef}
              className={[
                "absolute inset-0 z-10 h-full w-full object-cover",
                "transition-opacity duration-300",
                isPlaying ? "opacity-100" : "opacity-0",
              ].join(" ")}
              src="/work_in_pair.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Students work in pairs using Slonig"
              onError={() => setIsPlaying(false)}
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