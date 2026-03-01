import React from "react";
import {
  Sprout,
  TrendingUp,
  Rocket,
  FileX2,
} from "lucide-react";
import ListWithIcons, { type ListWithIconsRow } from "./ListWithIcons";

type Props = {};

const ROWS: ListWithIconsRow[] = [
  {
    Icon: Sprout,
    label: "Start small:",
    text: "Run Slonig as math centers—two same-level students, guided by Slonig.",
  },
  {
    Icon: TrendingUp,
    label: "Scale fast:",
    text: "Add more centers as you see results.",
  },
  {
    Icon: Rocket,
    label: "Go all-in:",
    text: "Make paired learning the default for everyone—and finally breathe.",
  },
  {
    Icon: FileX2,
    label: "Ditch the busywork:",
    text: "Skip textbooks and worksheets—Slonig teaches, checks, and prevents cheating.",
  },
];

export default function LessonIntegration({}: Props) {
  return (
    <section className="relative w-full text-slate-900">
      <h2>Safe Ways to Integrate Slonig Into Your Lesson</h2>
      <ListWithIcons rows={ROWS} />
    </section>
  );
}