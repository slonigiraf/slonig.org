"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import WorkInPairVideo from "./WorkInPairVideo";

type Props = {  };

export default function LoadingInfo({  }: Props) {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[9999] grid place-items-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2
            className="h-10 w-10 animate-spin"
            style={{ color: "var(--secondary-color)" }}
          />
          <div
            className="text-base font-semibold text-center"
            style={{ color: "var(--secondary-color)" }}
          >
            Loading…
          </div>
        </div>

        <div className="sr-only" aria-hidden>
          <WorkInPairVideo onReady={() => setReady(true)} />
        </div>
      </div>
    );
  }

  return <></>;
}