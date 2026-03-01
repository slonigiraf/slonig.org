import ExpandableList, { ExpandableListRow } from "./ExpandableList";
import {
  Sprout,
  UsersRound,
  Coins,
  Layers,
  Workflow,
  CheckCheck,
  Route,
  ShieldCheck,
  Presentation,
  Eye,
  BarChart3,
  ClipboardCheck,
  Sparkles,
} from "lucide-react";

type Props = {};

const ROWS: ExpandableListRow[] = [
  {
    Icon: Sprout,
    label: "Student Training Program",
    text: "Slonig includes a one-lesson onboarding module that teaches students how to use the app. After this brief training, any student can start working in pairs effectively using Slonig’s built-in tools and guidance.",
  },
  {
    Icon: UsersRound,
    label: "Students Match into Compatible Pairs",
    text: "Pairing students is challenging—it requires understanding both their current skills and their personal compatibility. Slonig uses principles from game theory to address this challenge efficiently. It allows students to form pairs voluntarily, taking into consideration psychological compatibility, working efficiency with a particular partner, and the partner’s availability.",
  },
  {
    Icon: Coins,
    label: "Game Currency",
    text: "Most common problem of the peer-learning activities is that students like to get help from classmates but not will to provide such a help back to the classroom. To fix this issue with use the same approach that keeps USA economics working more efficient than rest of the world – students use game currency. If you receive help – you pay for to your classmate, if you provide help – you get paid. Since we give out equal initial amount of game currency to all students, we ensure that finally education are equal for all students, and doesn’t depend on how much money parents have – all students get 1:1 support during lessons, as they were working with professional tutors.",
  },
  {
    Icon: Layers,
    label: "Learning in the Zone of Proximal Development",
    text: "Slonig structures content into courses, each made up of modules, which consist of small, individual skills. Students master all the skills in one module before moving to the next always learning in the zone of proximal development. Examples of skills: Writing fractions from graphical context; Writing fractions from textual context; Find a numerator; Find a denominator. Since all educational content is broken down into very small, specific skills, a common concern raised by teachers is that complex student abilities cannot be reduced to just a sum of those parts. Even if a student masters each individual skill, it doesn’t guarantee they will develop the full, integrated ability. Slonig addresses this by introducing complex skills—composite abilities that are taught only after the relevant foundational skills have been acquired. For example, the complex skill “Multiply mixed numbers” is taught only after the student has learned to: “Convert a mixed number to an improper fraction” and “Multiply fractions”.",
  },
  {
    Icon: Workflow,
    label: "Built-in Interaction Algorithm",
    text: "Slonig guides both classmates step-by-step with a consistent algorithm designed to ensure effective learning (see Figure below). The classmate acting the tutor role (tutor) pose an exercise and assessing the classmate (tutee) response. If the response is incorrect, the tutor provides immediate feedback with the correct answer, and prompts the student to repeat it, leveraging the benefits of active recall and retrieval practice (Roediger & Butler, 2011). Once the student responds correctly, the tutor requests that they generate a similar exercise, engaging them in productive struggle and promoting transfer through student-generated examples (Ebersbach et al., 2020; Ramirez-Velarde et al., 2014). The tutor then deliberately introduces an error when attempting the student’s exercise and asks the student to correct it—an application of the learning-by-teaching strategy, which has been shown to enhance metacognitive monitoring and conceptual understanding (Fiorella & Mayer, 2013). The student is awarded a digital badge only if their performance, including correction of the tutor’s mistake, is perfect on that day; otherwise, the session is repeated the following day to harness the benefits of spaced repetition (Cepeda et al., 2006). This tutor-led algorithm supports mastery learning (Bloom, 1984) by ensuring that each student progresses only after demonstrating comprehensive understanding and the ability to apply, explain, and correct the target skill. When awarded a digital badge, the tutee gains the confidence to tutor the same skill to someone else.",
  },
  {
    Icon: CheckCheck,
    label: "Mastery Learning",
    text: "A learner can’t get a skill marked as learned until they has demonstrated proficiency, which is defined as completing all steps of the skill’s learning algorithm without any errors during the current working in a pair session). This usually happens after two sessions on different days for the same skill.",
  },
  {
    Icon: Route,
    label: "Personalized Learning Track",
    text: "Slonig tracks each student’s acquired skills and suggests the next appropriate ones, ensuring learning remains within the student’s zone of proximal development.",
  },
  {
    Icon: ShieldCheck,
    label: "Quality Control",
    text: "At the end of each session, the classmate acting as a tutor either awards a digital badge or suggests repeating the skill later. Badges include metadata: the skill ID, a cryptographic proof tied to the student, and a game currency stake placed by the tutor. If a badge is given without proper teaching, it can be challenged by another tutor, teacher, or parent—potentially lowering the tutor’s currency balance. While misuse is theoretically possible, it rarely occurs in practice. Since students typically tutor friends, they avoid actions that would harm those relationships.",
  },
  {
    Icon: Presentation,
    label: "Introducing New Material Without Lectures",
    text: "Slonig allows a teacher to convert all lessons into peer tutoring without introducing new material through lectures or textbooks. This approach carries the risk that the entire class might wrongly learn a specific skill, so to prevent this, the teacher participates in teaching some students 1:1. Although this may seem less efficient from the teacher's perspective compared to lecturing the whole class, in practice, lectures typically result in only 20% of students mastering the skill, while the rest passively listen (Bloom, 1984). When considering not just the teacher's time but also the collective time of all students, it becomes clear that spreading a new skill through the peer learning network is faster and more effective than repeatedly explaining the same concept in lectures with little success.",
  },
  {
    Icon: Eye,
    label: "Teacher and Parent Control Over Student Progress",
    text: "Since Slonig awards badges, there is no need for additional assessments—every student's skills are visible within the platform. Moreover, a teacher can request permission from a student to assess their skills. This means the teacher has the right to revoke any badge if they believe the student has not truly mastered the corresponding skill. The same can be done by a principal or a parent, making education transparent for all stakeholders.",
  },
  {
    Icon: BarChart3,
    label: "Schoolwide Monitoring and Metrics",
    text: "It’s possible to measure learning speed as the number of badges a student receives per lesson. From an administrative perspective, in addition to reviewing students' badges, evaluating teacher efficiency shifts from comparing average grades across teachers and classes to observing learning speed—which is harder to manipulate than grades.",
  },
  {
    Icon: ClipboardCheck,
    label: "Assessment",
    text: "Slonig provides you with whole set of assessments to evaluate students pre and post intervention, compare Slonig outcomes to teaching as usual and to become confident to use it on a regular basis.",
  },
  {
    Icon: Sparkles,
    label: "Better Than AI",
    text: "Slonig outperforms any existent AI-based tutor systems.",
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