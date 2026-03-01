import React from "react";
import {
  Users,
  BrainCircuit,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Layers,
  Phone,
  Mail,
  MessageCircle,
  School,
  DollarSign,
  Clock,
  Sparkles,
  AlertTriangle,
  Calculator,
  CirclePile,
  Bot,
} from "lucide-react";
import Button from "./Button";
import Navbar from "./Navbar";
import Hero from "./Hero";
import WorkInPairVideo from "./WorkInPairVideo";
import BeforeAfter from "./BeforeAfter";
import Collaboration from "./Collaboration";
import QuoteCarousel from "./QuoteCarousel";
import EffectSize from "./EffectSize";
import StableQuality from "./StableQuality";
import RequestDemo from "./RequestDemo";
import LessonIntegration from "./LessonIntegration";
import HowSlonigWorks from "./HowSlonigWorks";
import DirectCosts from "./DirectCosts";
import StopSpendingOn from "./StopSpendingOn";
import ValueStack from "./ValueStack";
import TeacherWork from "./TeacherWork";
import SlonigFeatures from "./SlonigFeatures";
import Assessments from "./Assessments";
import Diagnostics from "./Diagnostics";

const Section = ({
  children,
  className = "",
  id = "",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">{children}</div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-white flex items-center gap-2">
        <Layers className="w-5 h-5 text-blue-500" />
        Slonig
      </div>
      <div className="text-sm">© {new Date().getFullYear()} Slonig. All rights reserved.</div>
    </div>
  </footer>
);



export default async function LandingPage({ searchParams }: { searchParams?: Promise<Record<string, any>> }) {
  const sp = (await searchParams) ?? {};
  const success = sp.success === "1";

  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <WorkInPairVideo />
      <BeforeAfter />
      <Collaboration />
      <QuoteCarousel
        title="Students Say"
        quotes={[
          { text: "I could talk with my favorite classmates, everything somehow sticks in memory more easily.", byline: "Student, 10th grade", },
          { text: "With Slonig you can work particularly well.", byline: "Student, 9th grade" },
          { text: "I like that I can learn with friends.", byline: "Student, 9th grade" },
        ]}
      />
      <EffectSize />
      <StableQuality />
      <QuoteCarousel
        title="Educators Say"
        quotes={[
          { text: "As opposed to many apps which foster interaction and engagement with the technology itself, Slonig fosters interaction and engagement between the learners themselves. As such, this app can help create learner-centered classrooms where learners learn from each other as they take turns adopting the roles of tutor and learner.", byline: "Lee Mackenzie, Senior Lecturer in Education, Liverpool Hope University" },
          { text: "I have regularly found that when students teach one another and learn from one another, they engage more deeply with the content in my statistics/data science courses. I think a distributed and structured approach such as Slonig offers a solution and fosters a collaborative and educationally beneficial environment in the classroom.", byline: "Amish Mishra, Ph.D., Assistant Professor, Mathematics Department, Taylor University" },
          { text: "Slonig represents a turning point in today's education system and gives a true picture of how important peer learning is, continuously pointing out the benefits of this type of learning, and opens a broader perspective of moving to a higher level, that is, it functions on a large scale and has a tendency to spread.", byline: "Rade Keković, Adviser, Bureau for education Montenegro" },
          { text: "Aside from learning educational content, learners can develop key social and communication skills. In busy classrooms which are increasingly understaffed and under resourced, using this app can make a real difference to the classroom dynamic, not to mention the confidence and esteem of learners.", byline: "Lee Mackenzie, Senior Lecturer in Education, Liverpool Hope University" },
          { text: "As a computer science professor and education researcher focused on peer instruction and technology-enhanced pedagogy, I appreciate Slonig’s commitment to strengthening human-to-human learning rather than replacing it with AI.", byline: "Steve Geinitz, Associate Professor, Metropolitan State University of Denver" },
        ]}
      />
      <RequestDemo id="after_efficiency" caption="Request a Demo" />
      <LessonIntegration />
      <HowSlonigWorks />
      <TeacherWork />
      <QuoteCarousel
        title="Teachers Say"
        quotes={[
          {
            text: "Most of the time, students worked on their own. I just observed—and I was surprised they actually learned.",
            byline: "Kate, high school math teacher",
          },
          {
            text: "The approach used in Slonig helps enhance student motivation, communication, and interaction within the group.",
            byline: "Nic, high school chemistry teacher",
          },
          {
            text: "Slonig helps children develop skills such as teaching others what they already know, which changes how they perceive new information. I find the use of the Slonig in lessons very beneficial.",
            byline: "Mary, biology teacher",
          },
          {
            text: "I’ve seen remarkable results using Slonig. Not only did the students genuinely enjoy the experience, but those who took on mentoring roles truly blossomed.",
            byline: "Elena, ESL teacher",
          },
          {
            text: "Students appreciate the freedom Slonig lessons offer, allowing them to interact with any classmate and move around the classroom. This method is not just beneficial for students; it’s a game-changer for teachers as well.",
            byline: "Karina, history teacher",
          },
        ]}
      />
      <RequestDemo id="after_teacher_testimonials" caption="Request a Demo" />
      <SlonigFeatures />
      <Assessments />
      <Diagnostics />
      <QuoteCarousel
        title="Principals Say"
        quotes={[
          { text: "I’ve never seen anything similar to Slonig. Data looks fabulous!", byline: "Brenton DeFlitch, Principal, Wonderful College Prep Academy, CA" },
        ]}
      />

      <ValueStack />

      <Footer />

    </main>
  );
}