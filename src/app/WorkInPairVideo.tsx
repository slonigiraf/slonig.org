"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = { onReady?: () => void };

export default function WorkInPairVideo({ onReady }: Props) {
  const firedRef = useRef(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // "ready" = we can let parent gate continue
  const [ready, setReady] = useState(false);

  // "isPlaying" = we have high confidence the video is actually rendering frames
  const [isPlaying, setIsPlaying] = useState(false);

  const markReady = () => {
    if (firedRef.current) return;
    firedRef.current = true;
    setReady(true);
    onReady?.();
  };

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let t: number | undefined;
    let rafId: number | undefined;

    const markRendering = () => {
      setIsPlaying(true);
      markReady();
    };

    const tryRVFC = () => {
      // Prefer "first rendered frame" signal when available
      const anyV = v as any;
      if (typeof anyV.requestVideoFrameCallback === "function") {
        anyV.requestVideoFrameCallback(() => {
          markRendering();
        });
        return true;
      }
      return false;
    };

    const onPlaying = () => {
      // If RVFC exists we still keep this as a backup; if not, it’s our signal.
      if (!isPlaying) markRendering();
    };

    const onError = () => {
      // If the video fails, don't hang: reveal placeholder and let parent continue.
      setIsPlaying(true);
      markReady();
    };

    // Start listening early
    v.addEventListener("playing", onPlaying, { passive: true });
    v.addEventListener("error", onError);

    // If autoplay already kicked in before hydration, catch it
    if (!tryRVFC()) {
      if (!v.paused && !v.ended) {
        // Give the browser one paint to avoid toggling during layout
        rafId = window.requestAnimationFrame(() => markRendering());
      }
    }

    // Safety fallback
    t = window.setTimeout(() => {
      setIsPlaying(true);
      markReady();
    }, 8000);

    return () => {
      if (t) window.clearTimeout(t);
      if (rafId) window.cancelAnimationFrame(rafId);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("error", onError);
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
          <div className="absolute inset-0 overflow-hidden rounded-2xl bg-black">
            {/* Placeholder stays visible until we know frames are rendering */}
            <img
              src="/work-in-pair.jpg"
              alt=""
              aria-hidden="true"
              className={[
                "absolute inset-0 z-20 h-full w-full object-cover",
                "transition-opacity duration-300",
                isPlaying ? "opacity-0" : "opacity-100",
              ].join(" ")}
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
              // do NOT use onLoadedData/onCanPlay to flip; those can cause the blink
              onError={() => {
                setIsPlaying(true);
                markReady();
              }}
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