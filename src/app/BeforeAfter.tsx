import { TimerOff, UsersRound } from "lucide-react";

type Props = {};

type Row = {
  key: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  text: string;
};

const ROWS: Row[] = [
  {
    key: "before",
    Icon: TimerOff,
    label: "Before,",
    text: "teachers were expected to differentiate instruction with barely any time to breathe.",
  },
  {
    key: "now",
    Icon: UsersRound,
    label: "Now Slonig",
    text: "organizes students to support each other’s differentiated learning, saving teachers up to 80% of their time.",
  },
];

export default function BeforeAfter({}: Props) {
  return (
    <section className="relative w-full text-slate-900">
      <div className="mx-auto max-w-6xl px-6 pt-15 pb-5">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-[2.25rem_1fr] gap-x-4 gap-y-6 sm:grid-cols-[2.75rem_1fr] sm:gap-x-5 md:grid-cols-[3rem_1fr] md:gap-x-6">
            {ROWS.map(({ key, Icon, label, text }) => (
              <div key={key} className="contents">
                <div className="flex items-start justify-center pt-[0.4em]">
                  <Icon
                    className="h-6 w-6 shrink-0 sm:h-7 sm:w-7 md:h-8 md:w-8"
                    aria-hidden="true"
                  />
                </div>

                <p className="text-xl leading-relaxed sm:text-2xl md:text-3xl">
                  <span className="font-semibold text-[var(--secondary-color)]">
                    {label}
                  </span>{" "}
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}