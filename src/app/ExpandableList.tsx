import React from "react";

export type ExpandableListRow = {
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;

  // optional text
  text?: string;

  // optional extra content under text
  node?: React.ReactNode;
};

type ExpandableListProps = {
  collapsed?: boolean;
  rows: ExpandableListRow[];

  outerClassName?: string;
  innerClassName?: string;

  // table-ish styling
  tableClassName?: string;
  rowDetailsClassName?: string;

  // cells
  cellChevronClassName?: string;
  cellIconClassName?: string;
  cellLabelClassName?: string;

  // expand styling
  summaryClassName?: string;
  expandedCellClassName?: string;
  expandedTextClassName?: string;

  // node styling
  expandedNodeClassName?: string;
};

export default function ExpandableList({
  collapsed = false,
  rows,
  outerClassName = "mx-auto max-w-6xl px-6",
  innerClassName = "mx-auto max-w-4xl",

  tableClassName = "overflow-hidden rounded-xl border border-slate-200 bg-white",
  rowDetailsClassName = "group border-b border-slate-200 last:border-b-0",

  cellChevronClassName = "flex justify-center pt-[0.15rem]",
  cellIconClassName = "flex justify-center pt-[0.15rem]",
  cellLabelClassName = "text-[var(--secondary-color)] font-semibold",

  summaryClassName =
    "cursor-pointer list-none select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary-color)]/40",

  expandedCellClassName = "px-4 pb-5",
  expandedTextClassName = "mt-2 text-slate-700 leading-relaxed",
  expandedNodeClassName = "mt-3",
}: ExpandableListProps) {
  return (
    <div className={outerClassName}>
      <div className={innerClassName}>
        <div className={tableClassName} role="table" aria-label="Expandable list">
          {rows.map(({ Icon, label, text, node }, idx) => {
            const hasIcon = Boolean(Icon);

            // ✅ if no icon, keep a tiny gutter (5px) instead of full icon column
            const gridCols = hasIcon
              ? "grid-cols-[2.75rem_3rem_1fr]"
              : "grid-cols-[2.75rem_5px_1fr]";

            return (
              <details
                key={label}
                className={rowDetailsClassName}
                open={idx === 0 && !collapsed}
              >
                {/* Summary row */}
                <summary className={summaryClassName}>
                  <div className={`grid ${gridCols} items-start px-4 py-4`} role="row">
                    {/* Chevron */}
                    <div className={cellChevronClassName} role="cell">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 text-slate-600 transition-transform group-open:rotate-180"
                        title="Expand"
                      >
                        ▾
                      </span>
                    </div>

                    {/* Icon (or 5px gutter) */}
                    <div
                      className={`${cellIconClassName} ${
                        hasIcon ? "" : "w-[5px] overflow-hidden p-0"
                      }`}
                      role="cell"
                      aria-hidden={!hasIcon}
                    >
                      {hasIcon ? (
                        <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                      ) : null}
                    </div>

                    {/* Label */}
                    <div role="cell" className="flex items-center min-w-0">
                      <span className={cellLabelClassName}>{label}</span>
                    </div>
                  </div>
                </summary>

                {/* Expanded content */}
                {(text || node) && (
                  <div className={expandedCellClassName}>
                    <div className={`grid ${gridCols}`}>
                      <div aria-hidden="true" /> {/* chevron spacer */}

                      {/* ✅ ALWAYS keep icon-column spacer so content stays in the 1fr column */}
                      <div
                        aria-hidden="true"
                        className={hasIcon ? "" : "w-[5px]"}
                      />

                      <div>
                        {text ? <div className={expandedTextClassName}>{text}</div> : null}
                        {node ? <div className={expandedNodeClassName}>{node}</div> : null}
                      </div>
                    </div>
                  </div>
                )}
              </details>
            );
          })}
        </div>
      </div>
    </div>
  );
}