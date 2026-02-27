"use client";

import React, { useState } from "react";

type Props = {};

function DoubleChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none">
      <path
        d="M6 8l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 13l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EffectSize({}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center tracking-tight text-[color:var(--secondary-color)]">
            Slonig outperforms digital math programs
            <br />— and often even tutoring
          </h2>

          {/* Image */}
          <div className="mt-0 flex justify-center">
            <div className="w-full">
              <img
                src={open ? "/effect-size-full.svg" : "/effect-size.svg"}
                alt="Slonig effect size"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Details text (only when open) */}
          {open && (
            <div className="mt-4 text-sm">
              <p>
                <b>Datasources:</b>
              </p>
              <ul className="list-disc pl-5">
                <li>
                  https://www.evidenceforessa.org/programs/math/
                  <br />
                  We calculated the mean and standard deviation using only mathematics programs rated
                  “Strong.” Program-to-category assignments were performed manually based on our review
                  of each program’s description and stated focus areas.
                </li>
                <li>
                  Alegre-Ansuategui, F. J., Moliner, L., Lorenzo, G., &amp; Maroto, A. (2017). Peer
                  Tutoring and Academic Achievement in Mathematics: A Meta-Analysis. EURASIA Journal of
                  Mathematics, Science and Technology Education, 14(1).
                  <br />
                  * Since Slonig is technology-aided peer tutoring, we used the effect size (Hedges’ g)
                  reported in the Alegre-Ansuategui et al. meta-analysis, which synthesizes results from
                  50 independent peer-tutoring studies.
                </li>
              </ul>

              <p className="mt-3">
                Please note that it is difficult to compare results across studies because they were not
                conducted by the same research group and often involved students of different ages,
                socioeconomic backgrounds, and other differing conditions. Therefore, we can only roughly
                estimate that peer tutoring outperforms many other pedagogical interventions, but a claim
                like this ultimately requires its own randomized controlled trial.
              </p>
            </div>
          )}

          {/* Toggle */}
          <div className="mt-3 flex justify-center">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="group inline-flex flex-col items-center gap-1 text-sm font-semibold text-[color:var(--secondary-color)]"
            >
              <span>{open ? "Hide details" : "See details"}</span>
              <DoubleChevronDown
                className={`h-5 w-5 origin-center scale-x-150 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}