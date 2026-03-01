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
    label: "Avoided costs:",
    text: "$75K–$148K",
  },
  {
    Icon: TrendingUp,
    label: "Net annual savings:",
    text: "$60K–$133K",
  },
  {
    Icon: Rocket,
    label: "Break-even:",
    text: "2 months",
  },
];

export default function ValueStack({}: Props) {
  return (
    <section className="relative w-full text-slate-900">
      <h2>400%–887% ROI First Year</h2>
      <ListWithIcons rows={ROWS} />
    </section>
  );
}