import React from "react";
import { CheckCircle2, ChevronDown, ArrowDownLeft } from "lucide-react";

type Props = {};

// --- Data -------------------------------------------------------------

const STATES = [
  "Not in the US",
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

type GradeKey =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

const GRADE_LABEL: Record<GradeKey, string> = {
  1: "1st",
  2: "2nd",
  3: "3rd",
  4: "4th",
  5: "5th",
  6: "6th",
  7: "7th",
  8: "8th",
  9: "9th",
  10: "10th",
  11: "11th",
  12: "12th",
};

const GRADE_SUBTITLE: Record<GradeKey, string> = {
  1: "First Grade",
  2: "Second Grade",
  3: "Third Grade",
  4: "Fourth Grade",
  5: "Fifth Grade",
  6: "Sixth Grade",
  7: "Seventh Grade",
  8: "Eighth Grade",
  9: "Ninth Grade",
  10: "Tenth Grade",
  11: "Eleventh Grade",
  12: "Twelfth Grade",
};

const FEATURED_ALIGNMENT: Record<GradeKey, string[]> = {
  1: [
    "Counting to 120 (read, write, compare)",
    "Add within 20 (fluency within 10)",
    "Subtract within 20 (fluency within 10)",
    "Place value: tens and ones (to 100)",
    "Compare two two-digit numbers",
    "Measure lengths (non-standard units)",
  ],
  2: [
    "Add and subtract within 100",
    "Fluency: add/subtract within 20",
    "Place value to 1,000",
    "Work with equal groups (foundations of multiplication)",
    "Measure and estimate lengths (inches, feet, cm, m)",
    "Tell time to the nearest 5 minutes",
  ],
  3: [
    "Multiply and divide within 100",
    "Understand fractions as numbers",
    "Fluency: add/subtract within 1,000",
    "Area and perimeter (rectangles)",
    "Solve two-step word problems",
    "Identify arithmetic patterns",
  ],
  4: [
    "Multiply multi-digit whole numbers",
    "Divide with remainders (one-digit divisor)",
    "Equivalent fractions and comparing fractions",
    "Add/subtract fractions with like denominators",
    "Decimals to hundredths",
    "Angle measurement and classification",
  ],
  5: [
    "Add/subtract fractions with unlike denominators",
    "Multiply fractions (including mixed numbers)",
    "Divide unit fractions and whole numbers",
    "Place value to thousandths (operations with decimals)",
    "Volume (rectangular prisms)",
    "Coordinate plane (first quadrant)",
  ],
  6: [
    "Ratios and rates (unit rate)",
    "Divide fractions by fractions",
    "Expressions and equations (one-variable)",
    "Area of triangles and parallelograms",
    "Statistical variability (dot plots, histograms, box plots)",
    "Negative numbers on the number line",
  ],
  7: [
    "Proportional relationships",
    "Operations with rational numbers",
    "Solve multi-step equations/inequalities",
    "Scale drawings and geometric constructions",
    "Probability of compound events",
    "Compare linear vs. non-linear patterns",
  ],
  8: [
    "Functions (compare, model, interpret)",
    "Linear equations and systems",
    "Transformations and congruence/similarity",
    "Pythagorean Theorem (applications)",
    "Irrational numbers and radicals",
    "Bivariate data (trend lines)",
  ],
  9: [
    "Interpret functions and key features",
    "Solve quadratic equations (multiple methods)",
    "Exponents and radicals (properties)",
    "Systems of equations (linear/quadratic)",
    "Descriptive statistics and distributions",
    "Modeling with equations and inequalities",
  ],
  10: [
    "Polynomial arithmetic (factoring, rewriting)",
    "Rational expressions and equations",
    "Triangle congruence and similarity",
    "Right-triangle trigonometry",
    "Circles: arcs, angles, and equations",
    "Conditional probability and independence",
  ],
  11: [
    "Exponential and logarithmic functions",
    "Advanced function composition and inverses",
    "Sequences and series (arithmetic/geometric)",
    "Statistics: sampling, experiments, inference basics",
    "Vector and matrix basics (where applicable)",
    "Modeling with trigonometric functions",
  ],
  12: [
    "Limits and rates of change (precalc/calc-ready)",
    "Derivatives (conceptual + applications)",
    "Integrals (accumulation + area under curve)",
    "Advanced probability distributions",
    "Regression and model selection",
    "Capstone modeling problems (multi-step)",
  ],
};

// --- UI ---------------------------------------------------------------

function GradeCard({
  grade,
  selected,
}: {
  grade: GradeKey;
  selected?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border shadow-sm transition",
        selected
          ? "border-emerald-200 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-emerald-200/50"
          : "border-slate-200 bg-white text-slate-900",
      ].join(" ")}
    >
      <div className="px-6 py-6 text-center">
        <div
          className={[
            "text-5xl font-extrabold tracking-tight",
            selected ? "text-white" : "text-slate-500",
          ].join(" ")}
        >
          {GRADE_LABEL[grade]}
        </div>
        <div
          className={[
            "mt-2 text-sm font-medium",
            selected ? "text-white/90" : "text-slate-500",
          ].join(" ")}
        >
          {GRADE_SUBTITLE[grade]}
        </div>
      </div>
    </div>
  );
}

export default function CurriculumAlignment({}: Props) {
  const selectedGrade: GradeKey = 1; // mock “selected” state for the static template
  const selectedState = "Select state";

  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-[28px] bg-emerald-50/70 p-8 md:p-10">
          {/* Top select */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-xl">
              <select
                defaultValue={selectedState}
                className="h-16 w-full appearance-none rounded-2xl bg-gradient-to-b from-blue-500 to-blue-600 px-6 text-center text-xl font-semibold text-white shadow-md outline-none ring-1 ring-blue-300/40"
              >
                <option value="Select state" disabled>
                  Select state
                </option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-6 top-1/2 h-6 w-6 -translate-y-1/2 text-white/90" />
            </div>
          </div>

          {/* Main grid */}
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            {/* Left */}
            <div>
              <div className="text-sm font-extrabold uppercase tracking-widest text-slate-700/70">
                Curriculum Alignment
              </div>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
                Matching your <br className="hidden md:block" />
                math standards
              </h2>

              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {(Object.keys(GRADE_LABEL) as unknown as GradeKey[]).map(
                  (g) => (
                    <GradeCard key={g} grade={g} selected={g === selectedGrade} />
                  )
                )}
              </div>

              <div className="mt-6 flex items-center gap-3 text-sm font-semibold text-slate-600">
                <ArrowDownLeft className="h-5 w-5 text-slate-500" />
                <span className="italic tracking-wide">Select your grade level</span>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-2xl border border-emerald-100 bg-white/60 p-6 shadow-sm md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="text-sm font-extrabold uppercase tracking-widest text-slate-700/70">
                    Featured Grade {selectedGrade} Alignment
                  </div>
                </div>
                <div className="hidden md:block text-slate-500">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold italic">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                    Example
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {FEATURED_ALIGNMENT[selectedGrade].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 text-blue-600" />
                    <div className="text-base font-medium text-slate-700">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 text-lg font-extrabold text-white shadow-md transition hover:brightness-105 active:brightness-95"
                >
                  Curriculum &amp; Standards Alignment <span aria-hidden>›</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}