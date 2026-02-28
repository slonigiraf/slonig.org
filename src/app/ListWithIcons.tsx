import React from "react";

export type ListWithIconsRow = {
  key: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  text: string;
};

type ListWithIconsProps = {
  rows: ListWithIconsRow[];

  // Optional layout overrides (defaults match your current markup)
  outerClassName?: string; // mx-auto max-w-6xl px-6 pt-15 pb-5
  innerClassName?: string; // mx-auto max-w-4xl
  gridClassName?: string; // grid cols + gaps
  iconWrapClassName?: string; // flex items-start justify-center pt-[0.4em]
  iconClassName?: string; // h/w responsive
  textClassName?: string; // leading-relaxed
  labelClassName?: string; // font + color
};

export default function ListWithIcons({
  rows,
  outerClassName = "mx-auto max-w-6xl px-6",
  innerClassName = "mx-auto max-w-4xl",
  gridClassName = "grid grid-cols-[2.25rem_1fr] gap-x-4 gap-y-6 sm:grid-cols-[2.75rem_1fr] sm:gap-x-5 md:grid-cols-[3rem_1fr] md:gap-x-6",
  iconWrapClassName = "flex items-start justify-center pt-[0.4em]",
  iconClassName = "h-6 w-6 shrink-0 sm:h-7 sm:w-7 md:h-8 md:w-8",
  textClassName = "leading-relaxed",
  labelClassName = "font-semibold text-[var(--secondary-color)]",
}: ListWithIconsProps) {
  return (
    <div className={outerClassName}>
      <div className={innerClassName}>
        <div className={gridClassName}>
          {rows.map(({ key, Icon, label, text }) => (
            <div key={key} className="contents">
              <div className={iconWrapClassName}>
                <Icon className={iconClassName} aria-hidden="true" />
              </div>

              <p className={textClassName}>
                <span className={labelClassName}>{label}</span>{" "}
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}