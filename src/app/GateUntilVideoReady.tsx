"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import WorkInPairVideo from "./WorkInPairVideo"; // must accept onReady

type Props = {
  children: React.ReactNode;
};

export default function GateUntilVideoReady({ children }: Props) {
  const [ready, setReady] = useState(false);

  if (!ready) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="h-10 w-10 animate-spin" />
          <div className="text-center">
            <div className="text-base font-semibold text-slate-900">
              Loading…
            </div>
            <div className="text-sm text-slate-600">Preparing the video.</div>
          </div>
        </div>

        {/* Load video invisibly so it can trigger onReady */}
        <div className="sr-only" aria-hidden>
          <WorkInPairVideo onReady={() => setReady(true)} />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}