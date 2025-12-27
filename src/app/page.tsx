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
} from "lucide-react";

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

const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
}) => {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-200 inline-flex items-center gap-2 justify-center";
  const variants: Record<string, string> = {
    primary: "bg-blue-900 text-white hover:bg-blue-800 shadow-lg hover:shadow-xl",
    secondary: "bg-amber-500 text-white hover:bg-amber-600 shadow-md",
    outline: "border-2 border-blue-900 text-blue-900 hover:bg-blue-50",
  };

  return (
    <button type={type} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-wider text-blue-900 uppercase bg-blue-100 rounded-full">
    {children}
  </span>
);

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm ${className}`}>
    {children}
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
      <Layers className="w-6 h-6 text-blue-900" />
      <span>
        Slonig<span className="text-blue-600">.org</span>
      </span>
    </div>
    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
      <a href="#problem" className="hover:text-blue-900">The Challenge</a>
      <a href="#solution" className="hover:text-blue-900">How It Works</a>
      <a href="#impact" className="hover:text-blue-900">ROI</a>
      <a href="#lead" className="hover:text-blue-900">Get a Demo</a>
    </div>
    <a href="#lead">
      <Button variant="primary" className="!py-2 !px-4 text-sm">
        Request Consult <ArrowRight className="w-4 h-4" />
      </Button>
    </a>
  </nav>
);

const Hero = () => (
  <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
    <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
    <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
      <Badge>Instructional Capacity Building</Badge>
      <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
        Scale Academic Mastery with <br className="hidden md:block" />
        <span className="text-blue-700">Structured Peer Learning</span>
      </h1>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
        Slonig turns classrooms into structured learning-by-teaching. Students work face-to-face,
        with guided prompts and accountability—so teachers become facilitators, not firefighters.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a href="#lead">
          <Button variant="primary">
            Request Principal Consultation <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
        <a href="#solution">
          <Button variant="outline">See How It Works</Button>
        </a>
      </div>

      <div className="mt-10 max-w-4xl mx-auto grid sm:grid-cols-3 gap-6 text-left">
        <Card className="p-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <DollarSign className="w-5 h-5 text-amber-600" />
            $15K / school / year
          </div>
          <div className="mt-2 text-sm text-slate-600">$50 per student (typical 300-student school).</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <BarChart3 className="w-5 h-5 text-blue-700" />
            400%–887% ROI
          </div>
          <div className="mt-2 text-sm text-slate-600">Net savings: $60K–$133K annually.</div>
        </Card>
        <Card className="p-6">
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <Clock className="w-5 h-5 text-emerald-600" />
            ~2-month payback
          </div>
          <div className="mt-2 text-sm text-slate-600">Pilot: 2 classes · 1 month.</div>
        </Card>
      </div>
    </div>
  </div>
);

const Agitation = () => (
  <Section id="problem" className="bg-white">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-6">The “One-to-Many” Model is Breaking</h2>
      <p className="text-lg text-slate-600 mb-8">
        Teachers are stretched thin. Providing enough 1:1 remediation to close learning gaps is
        mathematically impossible without changing the classroom operating system.
      </p>
      <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-left">
        <p className="italic text-red-900 font-medium">
          “When students are passive consumers of information, engagement drops and teachers burn out
          trying to carry the cognitive load for the entire room.”
        </p>
      </div>
    </div>
  </Section>
);

const Solution = () => (
  <Section id="solution" className="bg-slate-900 text-white">
    <div className="text-center mb-16">
      <Badge>How It Works</Badge>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Learning-by-Teaching — Operationalized</h2>
      <p className="text-slate-300 max-w-2xl mx-auto">
        Students teach skills they already mastered. Slonig structures peer tutoring so it’s high-fidelity,
        face-to-face, and easy for teachers to run with zero prep.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
        <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
          <BrainCircuit className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Intelligent Pairing</h3>
        <p className="text-slate-300">
          Pairs students to maximize productive learning gaps—tutor just mastered it, tutee needs it now.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
        <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
          <ShieldCheck className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Scaffolding, Not Screens</h3>
        <p className="text-slate-300">
          Students work face-to-face. The platform gives step-by-step prompts so tutors ask the right questions.
        </p>
      </div>

      <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
        <div className="w-12 h-12 bg-blue-900/50 rounded-lg flex items-center justify-center mb-6">
          <CheckCircle2 className="w-6 h-6 text-blue-400" />
        </div>
        <h3 className="text-xl font-bold mb-3">Accountability</h3>
        <p className="text-slate-300">
          Built-in incentives (“Slon” currency) make peer tutoring real—less fake progress, more mastery.
        </p>
      </div>
    </div>
  </Section>
);

const ValueStack = () => (
  <Section id="impact" className="bg-slate-50">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">ROI That Principals Can Defend</h2>
      <p className="text-slate-600 max-w-3xl mx-auto">
        Typical model: $15,000 per school/year ($50/student) vs. $75K–$148K in annual cost avoidance
        → net savings $60K–$133K, ROI 400%–887%, payback about ~2 months.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <Card className="p-8">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <DollarSign className="w-5 h-5 text-amber-600" />
          Cost Avoidance
        </div>
        <div className="mt-3 text-3xl font-extrabold text-slate-900">$75K–$148K</div>
        <div className="mt-2 text-sm text-slate-600">Reduced external support, fewer failed initiatives, improved retention.</div>
      </Card>

      <Card className="p-8 border-blue-200">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <BarChart3 className="w-5 h-5 text-blue-700" />
          ROI
        </div>
        <div className="mt-3 text-3xl font-extrabold text-slate-900">400%–887%</div>
        <div className="mt-2 text-sm text-slate-600">Net savings $60K–$133K annually.</div>
      </Card>

      <Card className="p-8">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Sparkles className="w-5 h-5 text-emerald-600" />
          Pilot
        </div>
        <div className="mt-3 text-3xl font-extrabold text-slate-900">2 classes · 1 month</div>
        <div className="mt-2 text-sm text-slate-600">
          Start small with a principal-ready pilot.
        </div>
      </Card>
    </div>
  </Section>
);

function LeadSection({ success }: { success: boolean }) {
  return (
    <Section id="lead" className="bg-white border-t border-slate-100">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Badge>Get a Demo</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Request a Principal Consultation
          </h2>
          <p className="text-slate-600 text-lg mb-6">
            SSR-only form. No client JS required. We’ll follow up with next steps.
          </p>

          <div className="space-y-4">
            <Card className="p-6">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Phone className="w-5 h-5 text-blue-700" /> Phone
              </div>
              <div className="mt-1 text-slate-700">+1 302-310-4501</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <MessageCircle className="w-5 h-5 text-emerald-700" /> WhatsApp
              </div>
              <div className="mt-1 text-slate-700">+3 826-788-7600</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <Mail className="w-5 h-5 text-amber-700" /> Email
              </div>
              <div className="mt-1 text-slate-700">reshetovdenis@gmail.com</div>
            </Card>
          </div>
        </div>

        <Card className="p-8">
          <div className="text-slate-900 font-extrabold text-xl flex items-center gap-2">
            <ArrowRight className="w-5 h-5 text-blue-700" />
            Lead Form
          </div>
          <div className="mt-2 text-sm text-slate-600">Required: Name, School/District, Email</div>

          {success && (
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-emerald-800 text-sm flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 mt-0.5" />
              <div>Thanks — your request was submitted.</div>
            </div>
          )}

          <form action="/api/leads" method="POST" className="mt-6 space-y-4">
            {/* Honeypot (spam trap) */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold text-slate-800">Full name *</label>
                <input
                  name="fullName"
                  required
                  minLength={2}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  placeholder="Jane Rivera"
                  autoComplete="name"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Role</label>
                <select
                  name="role"
                  defaultValue="Principal"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                >
                  <option>Principal</option>
                  <option>Assistant Principal</option>
                  <option>Instructional Coach</option>
                  <option>District Leader</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-slate-800">School / District *</label>
                <input
                  name="schoolOrDistrict"
                  required
                  minLength={2}
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  placeholder="Howard Gardner Community Charter School"
                  autoComplete="organization"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Email *</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  placeholder="principal@school.org"
                  autoComplete="email"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Phone</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  placeholder="+1 (___) ___-____"
                  autoComplete="tel"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">State</label>
                <input
                  name="state"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  placeholder="CA"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">Students (approx.)</label>
                <input
                  name="students"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  placeholder="300"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-slate-800">Interest</label>
                <select
                  name="interest"
                  defaultValue="Principal Consultation"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                >
                  <option>Principal Consultation</option>
                  <option>Pilot (2 classes, 1 month)</option>
                  <option>Pricing & ROI</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-semibold text-slate-800">Message</label>
                <textarea
                  name="message"
                  className="mt-1 w-full min-h-[110px] rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-700 focus:ring-2 focus:ring-blue-100"
                  placeholder="Grade levels, goals, constraints, current interventions…"
                />
              </div>
            </div>

            <Button type="submit" variant="primary" className="w-full">
              Submit Request <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-xs text-slate-500">
              We don’t sell your information.
            </p>
          </form>
        </Card>
      </div>
    </Section>
  );
}

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

const PromoStrip = () => (
  <div className="bg-slate-950 text-slate-200">
    <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm">
      <span className="font-semibold text-white">For school leaders accountable for growth they can’t control.</span>
      <span className="hidden sm:inline text-slate-500">·</span>
      <span>Stop juggling initiatives. Start growing math scores.</span>
    </div>
  </div>
);

const NotAlone = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="text-center mb-10">
      <Badge>You’re Not Alone</Badge>
      <h2 className="text-3xl font-bold text-slate-900">This is the reality for many principals</h2>
      <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
        You’re accountable for math growth metrics, facing math teacher shortages, and balancing 10+ improvement initiatives
        with minimal score movement—while still being judged on outcomes you can’t directly control.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "You lead a school accountable for math growth metrics",
        "You’ve launched multiple math initiatives with minimal score movement",
        "You face teacher shortages, particularly in mathematics",
        "You’re rated on growth but lack control over instructional capacity",
        "You’re balancing 10+ improvement initiatives simultaneously",
      ].map((t) => (
        <div key={t} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-800">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <div className="font-medium">{t}</div>
          </div>
        </div>
      ))}
    </div>
  </Section>
);

const SchoolsFacingItToo = () => {
  const schools = [
    "Bakersfield High YouthBuild Charter School of California",
    "Ridgeview High",
    "Robert Louis Stevenson Middle",
    "Paramount High",
    "Stella Middle Charter Academy",
    "Central High East Campus",
    "Pittsburg Senior High",
    "Vista Charter Middle",
    "Lakewood High",
    "Los Angeles Academy of Arts & Enterprise Charter",
    "Pacifica High",
    "Henry T. Gage Middle",
    "Carter G. Woodson Public Charter",
    "Sunnymead Middle",
    "Vista Real Charter High",
    "Mountain View Middle",
    "Diego Valley East Public Charter",
    "Grizzly ChalleNGe Charter",
  ];

  return (
    <Section className="bg-slate-50 border-t border-slate-100">
      <div className="text-center mb-10">
        <Badge>Social proof</Badge>
        <h2 className="text-3xl font-bold text-slate-900">Leaders like you face it too</h2>
        <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
          Schools across regions see the same pattern: flat math growth + initiative overload + staffing constraints.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {schools.map((s) => (
          <div key={s} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700">
            {s}
          </div>
        ))}
      </div>

      <div className="mt-6 text-center text-sm text-slate-500">…and many more</div>
    </Section>
  );
};

const WhatChanged = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <Badge>Why now</Badge>
        <h2 className="text-3xl font-bold text-slate-900">What changed to enable a new approach</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">
          Middle and high school students now typically have a personal mobile device (laptop/tablet/smartphone) with camera
          and internet connectivity. At the same time, platforms like Roblox normalized the concept of in-game currency—students
          already understand paying peers for digital goods and services.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
        <div className="font-bold text-slate-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600" />
          Slonig uses this reality
        </div>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>Face-to-face peer tutoring guided by prompts (not extra screen time).</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>“Slon” in-platform currency to make accountability natural to students.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>Start in 5 minutes, no prep for teachers.</span>
          </li>
        </ul>
      </div>
    </div>
  </Section>
);

const DirectCosts = () => (
  <Section className="bg-slate-900 text-white">
    <div className="text-center mb-12">
      <Badge>Cost of “flat scores”</Badge>
      <h2 className="text-3xl font-bold">Direct costs & impact of the problem</h2>
      <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
        This is why “just add another initiative” fails—cost compounds while instructional capacity stays fixed.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8">
      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
        <h3 className="text-xl font-bold mb-4">Direct costs</h3>
        <ul className="space-y-3 text-slate-200">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
            <span>Teacher turnover: <strong>$20,000–$30,000</strong> per replacement.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
            <span>Failed initiatives: <strong>$50,000–$150,000</strong> annually on programs that don’t move the needle.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
            <span>Compliance & documentation: <strong>300+ admin hours</strong> per year tracking initiatives.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
            <span>Reactive tutoring: districts spend about <strong>$1,200 per student</strong> without fixing core instruction.</span>
          </li>
        </ul>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
        <h3 className="text-xl font-bold mb-4">Quick math (300-student school)</h3>
        <ul className="space-y-3 text-slate-200">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
            <span>Flat scores: <strong>$250K–$1M</strong> in lost growth funding over 2–3 years.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
            <span>3 teacher turnovers/year: <strong>$60K</strong> direct costs.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
            <span>Failed initiatives: <strong>$100K</strong> wasted annually.</span>
          </li>
        </ul>

        <div className="mt-6 rounded-xl bg-slate-900/50 border border-slate-700 p-5">
          <div className="text-slate-200">
            <strong>Total annual impact:</strong> <span className="text-white">$400K+</span> in direct + opportunity costs.
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const StopSpendingOn = () => (
  <Section className="bg-slate-50 border-t border-slate-100">
    <div className="text-center mb-12">
      <Badge>Reallocate budget</Badge>
      <h2 className="text-3xl font-bold text-slate-900">What schools can stop spending on</h2>
      <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
        Replace scattered spending with a system that shows what’s working.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      {[
        {
          title: "Workshops & external coaches",
          before: "$50K–$80K annually",
          after: "60% reduction",
          savings: "$30K–$48K/year",
        },
        {
          title: "Random new programs",
          before: "4–6 new programs/year",
          after: "Fund what the data proves",
          savings: "$25K–$50K/year",
        },
        {
          title: "Burnout-driven turnover",
          before: "Lose 1–3 math teachers/year",
          after: "≈12% better retention",
          savings: "$20K–$50K/year",
        },
      ].map((x) => (
        <div key={x.title} className="rounded-2xl border border-slate-200 bg-white p-8">
          <div className="font-bold text-slate-900">{x.title}</div>
          <div className="mt-4 space-y-2 text-slate-700 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-slate-500">Before</span>
              <span className="font-semibold">{x.before}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-slate-500">After</span>
              <span className="font-semibold">{x.after}</span>
            </div>
            <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-100 px-4 py-3 text-emerald-900">
              <span className="text-sm">Savings</span>
              <div className="text-xl font-extrabold leading-tight">{x.savings}</div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2 text-slate-900 font-semibold">
        Total cost avoidance: <span className="text-blue-700">$75K–$148K annually</span>
      </div>
    </div>
  </Section>
);

const GuaranteeBand = () => (
  <section className="py-16 px-6 bg-blue-900 text-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8 items-center">
      <div className="lg:col-span-2">
        <div className="text-sm uppercase tracking-wider text-blue-200 font-bold">Guarantee</div>
        <h3 className="mt-2 text-3xl font-extrabold">
          Give us 2 classes, 1 month — we’ll demonstrate a jaw-dropping impact, or your money back.
        </h3>
        <p className="mt-3 text-blue-200">
          Principal-ready pilot to prove outcomes fast.
        </p>
      </div>

      <div className="flex lg:justify-end">
        <a href="#lead">
          <Button variant="secondary" className="text-lg px-8 py-4">
            Request the Pilot <ArrowRight className="w-5 h-5" />
          </Button>
        </a>
      </div>
    </div>
  </section>
);

const ContactsBlock = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      <div>
        <Badge>Contacts</Badge>
        <h2 className="text-3xl font-bold text-slate-900">Talk to Denis</h2>
        <p className="mt-3 text-slate-600">
          Ready to discuss your math growth goals and a pilot plan?
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Phone className="w-5 h-5 text-blue-700" /> Phone
          </div>
          <div className="mt-2 text-slate-700">+1 302-310-4501</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <MessageCircle className="w-5 h-5 text-emerald-700" /> WhatsApp
          </div>
          <div className="mt-2 text-slate-700">+3 826-788-7600</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Mail className="w-5 h-5 text-amber-700" /> Email
          </div>
          <div className="mt-2 text-slate-700">reshetovdenis@gmail.com</div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <Layers className="w-5 h-5 text-blue-700" /> Website
          </div>
          <div className="mt-2 text-slate-700">slonig.org</div>
        </div>
      </div>
    </div>
  </Section>
);


export default async function LandingPage({ searchParams }: { searchParams?: Promise<Record<string, any>> }) {
  const sp = (await searchParams) ?? {};
  const success = sp.success === "1";

  return (
    <main className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

      <Navbar />
   
      <Hero />
      <Agitation />
      <NotAlone />
      <SchoolsFacingItToo />
      <WhatChanged />

      <Solution />
      <DirectCosts />
      <StopSpendingOn />
      <ValueStack />

      <LeadSection success={success} />
      <GuaranteeBand />
      <ContactsBlock />

      <Footer />
    </main>
  );
}