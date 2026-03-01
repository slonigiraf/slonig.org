import React from "react";
import {
  Calculator,
  BookOpen,
  Code2,
  Languages,
  Microscope,
  Globe2,
  BriefcaseBusiness,
  Sparkles,
} from "lucide-react";
import RequestDemo from "./RequestDemo";

type Props = {
  className?: string;
};

const BADGES = [
  { Icon: Calculator, text: "Math\nAvailable" },
  { Icon: BookOpen, text: "ELA\nUpon Request" },
  { Icon: Code2, text: "Computer Science\nUpon Request" },
  { Icon: Languages, text: "World Languages\nUpon Request" },
  { Icon: Microscope, text: "Science\nUpon Request" },
  { Icon: Globe2, text: "Social Studies\nUpon Request" },
  { Icon: BriefcaseBusiness, text: "Business\nUpon Request" },
  { Icon: Sparkles, text: "Many more\nUpon Request" },
];

export default function OtherSubjects({ className = "" }: Props) {
  return (
    <section className={`w-full bg-white ${className}`}>
      <h2>Other Subjects Available on Slonig</h2>

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4 md:gap-x-14">
          {BADGES.map(({ Icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[color:var(--primary-color)]/10">
                <Icon
                  className="h-12 w-12 text-[color:var(--secondary-color)]"
                  strokeWidth={1.8}
                />
              </div>

              <div className="mt-5 whitespace-pre-line text-[15px] font-medium leading-6 text-slate-900">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-3xl text-center">
        <RequestDemo expanded={false} id={"request-subject-button"} caption={"Request a Subject"} />
      </div>
    </section>
  );
}