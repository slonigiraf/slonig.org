import ExpandableList, { ExpandableListRow } from "./ExpandableList";
import {
  Sprout,
  TrendingUp,
  Rocket,
  FileX2,
} from "lucide-react";

type Props = {

};

const ROWS: ExpandableListRow[] = [
  {
    Icon: Sprout,
    label: "Student training program",
    text: "Slonig includes a one-lesson onboarding module that teaches students how to use the app. After this brief training, any student can start working in pairs effectively using Slonig’s built-in tools and guidance.",
  },
  {
    Icon: TrendingUp,
    label: "Students match into compatible pairs",
    text: "Pairing students is challenging—it requires understanding both their current skills and their personal compatibility. Slonig uses principles from game theory to address this challenge efficiently. It allows students to form pairs voluntarily, taking into consideration psychological compatibility, working efficiency with a particular partner, and the partner’s availability.",
  },
  {
    Icon: Rocket,
    label: "Game currency",
    text: "Most common problem of the peer-learning activities is that students like to get help from classmates but not will to provide such a help back to the classroom. To fix this issue with use the same approach that keeps USA economics working more efficient than rest of the world – students use game currency. If you receive help – you pay for to your classmate, if you provide help – you get paid. Since we give out equal initial amount of game currency to all students, we ensure that finally education are equal for all students, and doesn’t depend on how much money parents have – all students get 1:1 support during lessons, as they were working with professional tutors.",
  },
  {
    Icon: FileX2,
    label: "Learning in the zone of proximal development",
    text: "Slonig structures content into courses, each made up of modules, which consist of small, individual skills. Students master all the skills in one module before moving to the next always learning in the zone of proximal development. Examples of skills: Writing fractions from graphical context; Writing fractions from textual context; Find a numerator; Find a denominator. Since all educational content is broken down into very small, specific skills, a common concern raised by teachers is that complex student abilities cannot be reduced to just a sum of those parts. Even if a student masters each individual skill, it doesn’t guarantee they will develop the full, integrated ability. Slonig addresses this by introducing complex skills—composite abilities that are taught only after the relevant foundational skills have been acquired. For example, the complex skill “Multiply mixed numbers” is taught only after the student has learned to: “Convert a mixed number to an improper fraction” and “Multiply fractions”.",
  },
];

export default function SlonigFeatures({}: Props) {

  return (
    <section className="relative w-full text-slate-900">
          <h2>Slonig features</h2>
          <ExpandableList rows={ROWS} />
        </section>
  );
}