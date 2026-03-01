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
    text: "Slonig includes a one-lesson onboarding module that teaches students how to work in pairs effectively using Slonig’s built-in tools and guidance.",
  },
  {
    Icon: UsersRound,
    label: "Students Match into Compatible Pairs",
    text: "Pairing students is challenging—it requires understanding both their current skills and their personal compatibility. Slonig uses principles from game theory to address this properly. It considers psychological compatibility, how effectively a student works with a particular partner, and each partner’s availability.",
  },
  {
    Icon: Coins,
    label: "Game Currency",
    text: "A common problem with peer learning is that students like receiving help from classmates but are less willing to provide help in return. Slonig addresses this with the same kind of incentive system that helps societies function efficiently: in-game currency. If you receive help, you pay your classmate; if you provide help, you get paid. Because every student starts with the same initial amount of currency, access to 1:1 support becomes more equitable and does not depend on a family’s income. During lessons, all students can receive 1:1 support—similar to working with professional tutors.",
  },
  {
    Icon: Layers,
    label: "Learning in the Zone of Proximal Development",
    text: "Slonig structures content into courses, each made up of modules composed of small, individual skills. Students master all skills in a module before moving to the next, staying in the zone of proximal development. Examples of skills include: writing fractions from a graphical context; writing fractions from a textual context; finding a numerator; and finding a denominator. Because the content is broken into very small, specific skills, teachers sometimes worry that complex abilities cannot be reduced to a sum of parts—mastering each skill does not automatically guarantee full, integrated competence. Slonig addresses this by introducing complex (composite) skills that are taught only after the relevant foundational skills have been acquired. For example, the complex skill “Multiply Mixed Numbers” is taught only after the student has learned to “Convert a Mixed Number to an Improper Fraction” and “Multiply Fractions.”",
  },
  {
    Icon: Workflow,
    label: "Built-in Interaction Algorithm",
    text: "Slonig guides both classmates step by step with a consistent algorithm designed to ensure effective learning (see the figure below). The student in the tutor role poses an exercise and assesses the tutee’s response. If the response is incorrect, the tutor provides immediate feedback with the correct answer and prompts the student to repeat it, leveraging active recall and retrieval practice (Roediger & Butler, 2011). Once the student responds correctly, the tutor asks them to generate a similar exercise, creating productive struggle and promoting transfer through student-generated examples (Ebersbach et al., 2020; Ramirez-Velarde et al., 2014). The tutor then deliberately makes an error when attempting the student’s exercise and asks the student to correct it—an application of learning by teaching, which has been shown to enhance metacognitive monitoring and conceptual understanding (Fiorella & Mayer, 2013). A digital badge is awarded only if the student’s performance—including correcting the tutor’s mistake—is perfect that day; otherwise, the skill is repeated in a later session to harness the benefits of spaced repetition (Cepeda et al., 2006). This tutor-led algorithm supports mastery learning (Bloom, 1984) by ensuring that each student progresses only after demonstrating comprehensive understanding and the ability to apply, explain, and correct the target skill. When a badge is awarded, the tutee gains the confidence to tutor the same skill to someone else.",
  },
  {
    Icon: CheckCheck,
    label: "Mastery Learning",
    text: "A learner cannot have a skill marked as learned until they demonstrate proficiency, defined as completing all steps of the skill’s learning algorithm without errors during the current paired-learning session. This typically happens after two sessions on different days for the same skill.",
  },
  {
    Icon: Route,
    label: "Personalized Learning Track",
    text: "Slonig tracks each student’s acquired skills and suggests the next appropriate ones, ensuring that learning remains within the student’s zone of proximal development.",
  },
  {
    Icon: ShieldCheck,
    label: "Quality Control",
    text: "At the end of each session, the student in the tutor role either awards a digital badge or suggests repeating the skill later. Badges include metadata: the skill ID, a cryptographic proof tied to the student, and a game-currency stake placed by the tutor. If a badge is given without proper teaching, it can be challenged by another tutor, teacher, or parent—potentially lowering the tutor’s currency balance. While misuse is theoretically possible, it rarely occurs in practice. Because students typically tutor friends, they avoid actions that would harm those relationships.",
  },
  {
    Icon: Presentation,
    label: "Introducing New Material Without Lectures",
    text: "Slonig allows a teacher to convert lessons into peer tutoring without introducing new material through lectures or textbooks. This approach carries the risk that the entire class could learn a specific skill incorrectly, so the teacher prevents this by teaching some students 1:1. Although this may seem less efficient than lecturing from the teacher’s perspective, lectures typically result in only about 20% of students mastering the skill, while the rest passively listen (Bloom, 1984). When you consider not only teacher time but also the collective time of all students, spreading a new skill through the peer-learning network is often faster and more effective than repeatedly explaining the same concept in lectures with limited success.",
  },
  {
    Icon: Eye,
    label: "Teacher and Parent Control Over Student Progress",
    text: "Because Slonig awards badges, there is no need for additional assessments—every student’s skills are visible in the platform. In addition, a teacher can request a student’s permission to assess their skills and may revoke any badge if they believe the student has not truly mastered the corresponding skill. The same can be done by a principal or a parent, making learning transparent for all stakeholders.",
  },
  {
    Icon: BarChart3,
    label: "Schoolwide Monitoring and Metrics",
    text: "Learning speed can be measured as the number of badges a student earns per lesson. From an administrative perspective, evaluating teacher effectiveness can shift from comparing average grades across teachers and classes to observing learning speed—which is harder to manipulate than grades.",
  },
  {
    Icon: ClipboardCheck,
    label: "Assessment",
    text: "Slonig provides a full set of assessments to evaluate students before and after implementation, compare outcomes to teaching as usual, and build confidence to use the approach on a regular basis.",
  },
  {
    Icon: Sparkles,
    label: "Better Than AI",
    text: "Slonig outperforms existing AI-based tutoring systems.",
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