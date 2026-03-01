import { BadgeDollarSign, PiggyBank, CalendarCheck, ShieldCheck } from "lucide-react";
import ListWithIcons, { type ListWithIconsRow } from "./ListWithIcons";

type Props = {};

const ROWS: ListWithIconsRow[] = [
  { Icon: BadgeDollarSign, label: "Avoided costs:", text: "$75K–$148K in staffing time saved" },
  { Icon: PiggyBank, label: "Net annual savings:", text: "$60K–$133K saved per school" },
  { Icon: CalendarCheck, label: "Break-even point:", text: "2 months to recover investment" },
  { Icon: ShieldCheck, label: "Money-back guarantee:", text: "Full refund if targets aren’t met" },
];

export default function ValueStack({}: Props) {
  return (
    <section className="relative w-full text-slate-900">
      <h2>400%–887% ROI&nbsp;First&nbsp;Year</h2>
      <div className="mt-6 flex justify-center">
        <div className="w-full max-w-3xl">
          <ListWithIcons rows={ROWS} />
        </div>
      </div>
    </section>
  );
}