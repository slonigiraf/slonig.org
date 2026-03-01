import React from "react";
import { Users, Award, Settings, Coffee } from "lucide-react";

import ListWithIcons, { type ListWithIconsRow } from "./ListWithIcons";

type Props = {};

const ROWS: ListWithIconsRow[] = [
  {
    Icon: Users,
    label: "Pair work all lesson:",
    text: "Students spend 100% of lesson time working in pairs—no lectures.",
  },
  {
    Icon: Award,
    label: "No “smart kid” required:",
    text: "Both students in a pair can start from zero and still reach mastery—no high achiever needed.",
  },
  {
    Icon: Settings,
    label: "Classroom organization is automated:",
    text: "The platform handles new-skill introduction, partner switches, quality checks, exit tickets, and even homework—so the teacher can simply rely on it.",
  },
  {
    Icon: Coffee,
    label: "Teacher workload goes down:",
    text: "Technology finally reduces teacher workload instead of adding more busywork.",
  },
];

export default function ThinkPairShareComparison({}: Props) {
  return (
    <section className="relative w-full text-slate-900">
      <h2>How Slonig differs from other peer-learning approaches</h2>
      <ListWithIcons rows={ROWS} />
    </section>
  );
}