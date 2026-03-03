"use client";

import React, { useEffect, useRef, useState } from "react";
import ImpressionTracker from "./ImpressionTracker";

function Spinner() {
  return (
    <div
      className="h-10 w-10 rounded-full border-4 border-white/40 border-t-white animate-spin"
      aria-label="Loading"
      role="status"
    />
  );
}

export default function WorkInPairVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // true only when we know frames are rendering (best-effort)
  const [isRendering, setIsRendering] = useState(false);

  // true after the video fires "playing"
  const [isPlaying, setIsPlaying] = useState(false);

  // spinner = show until we’re playing or we decide to stop waiting
  const showSpinner = !isPlaying;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    let rafId: number | undefined;

    const markRendering = () => setIsRendering(true);

    const tryRVFC = () => {
      const anyV = v as any;
      if (typeof anyV.requestVideoFrameCallback === "function") {
        anyV.requestVideoFrameCallback(() => markRendering());
        return true;
      }
      return false;
    };

    const onPlaying = () => {
      setIsPlaying(true);

      // Prefer “first rendered frame” if available, else assume playing => visible soon
      if (!tryRVFC()) {
        rafId = window.requestAnimationFrame(() => markRendering());
      }
    };

    const onError = () => {
      // If it fails, stop spinner (otherwise it would spin forever)
      setIsPlaying(true);
      setIsRendering(false);
    };

    v.addEventListener("playing", onPlaying, { passive: true });
    v.addEventListener("error", onError);

    // If autoplay already started before hydration, catch it
    if (!v.paused && !v.ended) {
      setIsPlaying(true);
      if (!tryRVFC()) rafId = window.requestAnimationFrame(() => markRendering());
    }

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="relative w-full">
      <ImpressionTracker id={"WorkInPairVideo"} />
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
            {/* Poster */}
            <img
              src="/work-in-pair.jpg"
              alt=""
              aria-hidden="true"
              className={[
                "absolute inset-0 z-20 h-full w-full object-cover",
                "transition-opacity duration-300",
                isRendering ? "opacity-0" : "opacity-100",
              ].join(" ")}
            />

            {/* Video */}
            <video
              ref={videoRef}
              className={[
                "absolute inset-0 z-10 h-full w-full object-cover",
                "transition-opacity duration-300",
                isRendering ? "opacity-100" : "opacity-0",
              ].join(" ")}
              src="/work_in_pair.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Students work in pairs using Slonig"
              onError={() => {
                setIsPlaying(true);
                setIsRendering(false);
              }}
            />

            {/* Spinner overlay (white) while NOT yet playing */}
            {showSpinner && (
              <div className="absolute inset-0 z-30 grid place-items-center pointer-events-none">
                <Spinner />
              </div>
            )}
          </div>

          <img
            src="/evidence.png"
            alt="Evidence"
            className="pointer-events-none absolute z-40 right-10 bottom-4 md:right-20 md:bottom-8 w-24 sm:w-24 md:w-44 translate-x-1/2 translate-y-1/2 drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}