import React from "react";
import { TimerOff, UsersRound } from "lucide-react";
import ListWithIcons, { type ListWithIconsRow } from "./ListWithIcons";

type Props = {};

const ROWS: ListWithIconsRow[] = [
  {
    Icon: TimerOff,
    label: "Before,",
    text: "teachers were expected to differentiate instruction with barely any time to breathe.",
  },
  {
    Icon: UsersRound,
    label: "Now Slonig",
    text: "organizes students to support each other’s differentiated learning, saving teachers up to 80% of their time.",
  },
];

export default function BeforeAfter({}: Props) {
  return (
    <section className="relative w-full text-slate-900 pt-15">
      <ListWithIcons rows={ROWS} />
    </section>
  );
}