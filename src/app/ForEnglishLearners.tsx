import {
  Languages,
  MessageSquareText,
} from "lucide-react";
import ListWithIcons, { type ListWithIconsRow } from "./ListWithIcons";
import ImpressionTracker from "./ImpressionTracker";

type Props = {};

const ROWS: ListWithIconsRow[] = [
  {
    Icon: Languages,
    label: "Bilingual clarity:",
    text: "Classmates can explain ideas in a student’s first language when needed—so concepts click faster and misconceptions drop.",
  },
  {
    Icon: MessageSquareText,
    label: "Speak math with confidence:",
    text: "Students practice math vocabulary out loud using Slonig’s sentence starters, hints, and examples—building fluent “math English.”",
  },
];

export default function ForEnglishLearners({}: Props) {
  return (
    <section className="relative w-full text-slate-900">
      <ImpressionTracker id={"ForEnglishLearners"} />
      <h2>Helps English Learners Build Math Confidence</h2>
      <ListWithIcons rows={ROWS} />
    </section>
  );
}