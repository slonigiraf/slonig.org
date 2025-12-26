import React from 'react';
import { 
  Users, 
  BrainCircuit, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';

// --- Shared Components ---

const Section = ({ 
  children, 
  className = "", 
  id = "" 
}: { 
  children: React.ReactNode; 
  className?: string; 
  id?: string;
}) => (
  <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "" 
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline'; 
  className?: string 
}) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2";
  const variants = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-lg hover:shadow-xl",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 shadow-md",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-900 uppercase bg-blue-100 rounded-full">
    {children}
  </span>
);

// --- Page Sections ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
      <Layers className="w-6 h-6 text-blue-900" />
      <span>PeerScale<span className="text-blue-600">.Ed</span></span>
    </div>
    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
      <a href="#problem" className="hover:text-blue-900">The Challenge</a>
      <a href="#solution" className="hover:text-blue-900">The Approach</a>
      <a href="#impact" className="hover:text-blue-900">Impact</a>
    </div>
    <Button variant="primary" className="!py-2 !px-4 text-sm">
      Principal Login
    </Button>
  </nav>
);

const Hero = () => (
  <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
    <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <Badge>Instructional Capacity Building</Badge>
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
        Scale Academic Mastery with <br className="hidden md:block" />
        <span className="text-blue-700">Structured Peer Learning</span>
      </h1>
      
      <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
        Turn your classrooms into self-sustaining learning communities. 
        Our platform provides the <span className="font-semibold text-slate-900">guided scaffolding</span> for students to teach each other with fidelity—acting as a force multiplier for your teachers.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="primary">
          Schedule Instructional Consult
          <ArrowRight className="w-4 h-4" />
        </Button>
        <Button variant="outline">
          See How It Works
        </Button>
      </div>

      <p className="mt-8 text-sm text-slate-500">
        Trusted by forward-thinking principals in K-12
      </p>
    </div>
  </div>
);

const Agitation = () => (
  <Section id="problem" className="bg-white">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">The "One-to-Many" Model is Breaking</h2>
      <p className="text-lg text-slate-600 mb-8">
        Teachers are stretched thinner than ever. Between diverse learning gaps and administrative burdens, 
        providing 1:1 remediation to every student is mathematically impossible.
      </p>
      <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-left">
        <p className="italic text-red-900 font-medium">
          "When students are passive consumers of information, engagement drops and teachers burn out 
          trying to carry the cognitive load for the entire room."
        </p>
      </div>
    </div>
  </Section>
);

const Solution = () => (
  <Section id="solution" className="bg-slate-900 text-white">
    <div className="text-center mb-16">
      <Badge>The Solution</Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">The "Protégé Effect"—Operationalized</h2>
      <p className="text-slate-300 max-w-2xl mx-auto">
        Research confirms the best way to learn is to teach. We didn't just build an app; 
        we digitized evidence-based Reciprocal Teaching methods.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
        <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
          <BrainCircuit className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Intelligent Pairing</h3>
        <p className="text-slate-400">
          The system identifies productive knowledge gaps, automatically pairing students who need help with those who just mastered the concept for maximum efficacy.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
        <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
          <ShieldCheck className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Scaffolding, Not Screens</h3>
        <p className="text-slate-400">
          Students work face-to-face. The platform acts as a "coach on the side," providing step-by-step prompts to ensure the tutor asks the right questions.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
        <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
          <CheckCircle2 className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Automated Facilitation</h3>
        <p className="text-slate-400">
          Because logistics are automated, teachers are freed to circulate, observe high-leverage interactions, and provide targeted support.
        </p>
      </div>
    </div>
  </Section>
);

const ValueStack = () => (
  <Section id="impact" className="bg-slate-50">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Expand Capacity Without Increasing Headcount</h2>
      <p className="text-slate-600">Addressing the core KPIs of school leadership.</p>
    </div>

    <div className="grid lg:grid-cols-3 gap-12">
      {/* Benefit 1 */}
      <div className="space-y-4">
        <div className="h-1 w-20 bg-amber-500 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900">For Teacher Sustainability</h3>
        <p className="text-slate-600 leading-relaxed">
          <strong className="text-slate-900">The Ultimate Force Multiplier.</strong> Shift the cognitive load from the teacher to the students. By utilizing students as instructional assets, you reduce teacher fatigue and allow them to facilitate rather than lecture.
        </p>
      </div>

      {/* Benefit 2 */}
      <div className="space-y-4">
        <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900">For Student Outcomes</h3>
        <p className="text-slate-600 leading-relaxed">
          <strong className="text-slate-900">From Passive to Active.</strong> Moving students from listening to teaching requires higher-order thinking. Our structured approach builds academic confidence and deeper retention for both students.
        </p>
      </div>

      {/* Benefit 3 */}
      <div className="space-y-4">
        <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
        <h3 className="text-xl font-bold text-slate-900">For Admin Insight</h3>
        <p className="text-slate-600 leading-relaxed">
          <strong className="text-slate-900">Visible Learning Data.</strong> Peer interactions usually happen in a black box. Our platform captures granular data on misconceptions, giving you a heat map of real-time learning gaps.
        </p>
      </div>
    </div>
  </Section>
);

const Evidence = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Built on Evidence, Not Just Code</h2>
        <p className="text-lg text-slate-600 mb-6">
          Our methodology is grounded in decades of research on Reciprocal Teaching, Cooperative Learning, and John Hattie’s "Visible Learning."
        </p>
        <ul className="space-y-3">
          <li className="flex items-center gap-3 text-slate-700">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span>Peer Tutoring Effect Size: 0.55</span>
          </li>
          <li className="flex items-center gap-3 text-slate-700">
            <Users className="w-5 h-5 text-blue-600" />
            <span>Increases Social-Emotional Skills</span>
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 bg-slate-100 p-8 rounded-2xl italic text-slate-700 text-lg border border-slate-200">
        "We didn't need another game. We needed a way to clone our best teachers. This platform structures the peer interactions so effectively that learning happens even when the teacher is working with a small group."
        <div className="mt-4 font-bold text-slate-900 not-italic">— Dr. Sarah Jenkins, Principal</div>
      </div>
    </div>
  </Section>
);

const CTA = () => (
  <section className="py-24 px-6 bg-blue-900 text-white text-center">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop Trying to Hire Your Way Out of Learning Gaps.</h2>
      <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
        Unlock the capacity sitting in your classrooms right now. Let’s discuss your instructional goals.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Button variant="secondary" className="justify-center text-lg px-8 py-4">
          Request Principal Consultation
        </Button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-lg font-bold text-white flex items-center gap-2">
         <Layers className="w-5 h-5 text-blue-500" />
         PeerScale.Ed
      </div>
      <div className="text-sm">
        © {new Date().getFullYear()} Instructional Systems Inc. All rights reserved.
      </div>
    </div>
  </footer>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <Hero />
      <Agitation />
      <Solution />
      <ValueStack />
      <Evidence />
      <CTA />
      <Footer />
    </main>
  );
}