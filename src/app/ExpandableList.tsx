import React from "react";

export type ExpandableListRow = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  text: string;
};

type ExpandableListProps = {
  rows: ExpandableListRow[];

  outerClassName?: string;
  innerClassName?: string;

  // table-ish styling
  tableClassName?: string;
  rowDetailsClassName?: string;
  rowGridClassName?: string;

  // cells
  cellChevronClassName?: string;
  cellIconClassName?: string;
  cellLabelClassName?: string;

  // expand styling
  summaryClassName?: string;
  expandedCellClassName?: string;
  expandedTextClassName?: string;
};

export default function ExpandableList({
  rows,
  outerClassName = "mx-auto max-w-6xl px-6",
  innerClassName = "mx-auto max-w-4xl",

  tableClassName = "overflow-hidden rounded-xl border border-slate-200 bg-white",
  rowDetailsClassName = "group border-b border-slate-200 last:border-b-0",

  // 3 “table columns”: chevron | icon | label
  rowGridClassName = "grid grid-cols-[2.75rem_3rem_1fr] items-start px-4 py-4",

  cellChevronClassName = "flex justify-center pt-[0.15rem]",
  cellIconClassName = "flex justify-center pt-[0.15rem]",
  cellLabelClassName = "text-[var(--secondary-color)] font-semibold",

  summaryClassName =
    "cursor-pointer list-none select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary-color)]/40",

  // Expanded block has its own padding; content is laid out with the same grid
  expandedCellClassName = "px-4 pb-5",
  expandedTextClassName = "mt-2 text-slate-700 leading-relaxed",
}: ExpandableListProps) {
  return (
    <div className={outerClassName}>
      <div className={innerClassName}>
        <div className={tableClassName} role="table" aria-label="Expandable list">
          {rows.map(({ Icon, label, text }, idx) => (
            <details key={label} className={rowDetailsClassName} open={idx === 0}>
              {/* Summary row */}
              <summary className={summaryClassName}>
                <div className={rowGridClassName} role="row">
                  {/* Chevron (before icon) */}
                  <div className={cellChevronClassName} role="cell">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-transform group-open:rotate-180"
                      title="Expand"
                    >
                      ▾
                    </span>
                  </div>

                  {/* Icon */}
                  <div className={cellIconClassName} role="cell">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                  </div>

                  {/* Label (collapsed text) */}
                  <div role="cell" className="flex items-center">
                    <span className={cellLabelClassName}>{label}</span>
                  </div>
                </div>
              </summary>

              {/* Expanded content: starts under ICON column (col 2) */}
              <div className={expandedCellClassName}>
                <div className="grid grid-cols-[2.75rem_3rem_1fr]">
                  <div aria-hidden="true" /> {/* col 1 spacer (chevron col) */}
                  <div className="col-span-2">
                    <div className={expandedTextClassName}>{text}</div>
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}