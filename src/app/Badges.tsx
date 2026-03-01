import React from "react";
import { Headset, Languages, MonitorSmartphone, ShieldCheck } from "lucide-react";

type Props = {
  className?: string;
};

const BADGES = [
  {
    Icon: MonitorSmartphone,
    text: "Works on Any\nDevice & Browser",
  },
  {
    Icon: Languages,
    text: "In Spanish\nand English",
  },
  {
    Icon: Headset,
    text: "Supports You Any\nTime You Need",
  },
  {
    Icon: ShieldCheck,
    text: "Keeps Your Data\nProtected",
  },
];

export default function Badges({ className = "" }: Props) {
  return (
    <section className={`w-full bg-white ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <div className="grid grid-cols-2 gap-x-10 gap-y-12 md:grid-cols-4 md:gap-x-14">
          {BADGES.map(({ Icon, text }) => (
            <div key={text} className="flex flex-col items-center text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-sky-50">
                <Icon className="h-12 w-12 text-[color:var(--secondary-color)]" strokeWidth={1.8} />
              </div>

              <div className="mt-5 whitespace-pre-line text-[15px] font-medium leading-6 text-slate-900">
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}