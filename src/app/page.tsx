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





const Agitation = () => (
  <Section id="why_slonig" className="bg-white">
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
const EvidenceSection = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="text-center mb-10">
      <Badge>Evidence base</Badge>
      <h2 className="text-3xl font-bold text-slate-900">Why peer tutoring is worth reorganizing around</h2>
      <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
        The paper summarizes decades of research: adult 1:1 tutoring can be extremely powerful, but expensive to scale;
        peer tutoring shows meaningful effects—yet usually fails operationally without structure and tutor training.
      </p>
    </div>

    <div className="grid lg:grid-cols-4 gap-6">
      <Card className="p-6">
        <div className="font-bold text-slate-900">Adult 1:1 tutoring</div>
        <div className="mt-2 text-3xl font-extrabold text-slate-900">~2σ</div>
        <div className="mt-2 text-sm text-slate-600">
          Bloom’s “2-sigma problem”: tutored + mastery learning students performed about two standard deviations above
          traditional classrooms.
        </div>
      </Card>

      <Card className="p-6">
        <div className="font-bold text-slate-900">Professional tutoring (meta)</div>
        <div className="mt-2 text-3xl font-extrabold text-slate-900">d ≈ 0.59</div>
        <div className="mt-2 text-sm text-slate-600">
          Tutor quality matters: professional teachers outperform nonprofessionals.
        </div>
      </Card>

      <Card className="p-6">
        <div className="font-bold text-slate-900">Peer tutoring in math (meta)</div>
        <div className="mt-2 text-3xl font-extrabold text-slate-900">d ≈ 0.34–0.37</div>
        <div className="mt-2 text-sm text-slate-600">
          Same-age and cross-age peer tutoring in mathematics shows substantial average effects.
        </div>
      </Card>

      <Card className="p-6">
        <div className="font-bold text-slate-900">Why Slonig exists</div>
        <div className="mt-2 text-3xl font-extrabold text-slate-900">Operational gap</div>
        <div className="mt-2 text-sm text-slate-600">
          The paper argues adoption fails because peer tutoring usually requires planning, matching, training, and monitoring—
          Slonig is designed to remove those barriers.
        </div>
      </Card>
    </div>

    <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
        <div className="text-slate-700">
          <span className="font-semibold text-slate-900">Important:</span> the paper reports rapid onboarding/usability pilots,
          but explicitly notes that larger studies (e.g., RCTs) are needed to quantify learning gains.
        </div>
      </div>
    </div>
  </Section>
);

const DesignPrinciplesSection = () => (
  <Section className="bg-slate-50 border-t border-slate-100">
    <div className="text-center mb-10">
      <Badge>Design principles</Badge>
      <h2 className="text-3xl font-bold text-slate-900">Built for real classrooms: simple, private, low-prep</h2>
      <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
        The platform is described as open-source and free to use, with student data stored locally on the user’s device,
        and lesson materials integrated so teachers don’t need extra prep.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="p-8">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Layers className="w-5 h-5 text-blue-700" />
          Open-source & CC materials
        </div>
        <p className="mt-3 text-slate-600">
          Free for students/teachers/parents; lesson materials licensed under Creative Commons; community can evolve content
          “like Wikipedia.”
        </p>
      </Card>

      <Card className="p-8">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          Privacy by design
        </div>
        <p className="mt-3 text-slate-600">
          User data (names, learning history, progress) is stored only on the personal device; no contact info collection is
          required by design.
        </p>
      </Card>

      <Card className="p-8">
        <div className="flex items-center gap-2 font-bold text-slate-900">
          <Clock className="w-5 h-5 text-amber-700" />
          Minimal teacher workload
        </div>
        <p className="mt-3 text-slate-600">
          Content lives in the app; teachers don’t prepare materials; teacher intro can be brief (paper describes a short
          onboarding/training approach).
        </p>
      </Card>
    </div>
  </Section>
);

const AlgorithmSection = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="text-center mb-10">
      <Badge>Teaching algorithm</Badge>
      <h2 className="text-3xl font-bold text-slate-900">A scripted tutoring loop that drives mastery</h2>
      <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
        The paper describes a built-in tutor algorithm: immediate feedback + repetition, then student-generated examples,
        then “student corrects tutor’s deliberate mistake,” and badges only when perfect—otherwise repeat next day (spaced
        repetition).
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-6">
      <Card className="p-8">
        <div className="font-bold text-slate-900">What the tutor does (guided prompts)</div>
        <ol className="mt-4 space-y-3 text-slate-700">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>Gives an exercise and checks the answer.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>If incorrect: provides the correct answer and has the student repeat it (retrieval practice).</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>After correct: asks student to create a similar exercise (transfer via generation).</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>Tutor makes a deliberate mistake; student must correct it (learning-by-teaching).</span>
          </li>
        </ol>
      </Card>

      <Card className="p-8">
        <div className="font-bold text-slate-900">How mastery is enforced</div>
        <ul className="mt-4 space-y-3 text-slate-700">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>Badge is awarded only if the session is perfect that day; otherwise repeat tomorrow (spaced repetition).</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>Tutor cannot mark a skill “learned” unless the full algorithm is completed without errors that session.</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
            <span>Skill progression is structured into modules; composite “complex skills” unlock after prerequisites.</span>
          </li>
        </ul>
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          This section is based on the “Built-in tutoring algorithm / mastery learning / skill-based learning” description and
          Figure 1 narrative.
        </div>
      </Card>
    </div>
  </Section>
);

const QualityControlSection = () => (
  <Section className="bg-slate-900 text-white">
    <div className="text-center mb-10">
      <Badge>Quality control</Badge>
      <h2 className="text-3xl font-bold">Badges + stakes make “fake progress” expensive</h2>
      <p className="mt-3 text-slate-300 max-w-3xl mx-auto">
        The paper describes badges containing skill metadata and a stake (Slon) placed by the tutor; badges can be challenged
        (e.g., by another tutor/teacher/parent), which can reduce the tutor’s Slon—discouraging sloppy tutoring.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
        <div className="flex items-center gap-2 font-bold">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          Verifiable outcomes
        </div>
        <p className="mt-3 text-slate-200">
          Badges include skill ID + proof tied to the student, so “what was learned” is visible and reviewable.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
        <div className="flex items-center gap-2 font-bold">
          <DollarSign className="w-5 h-5 text-amber-400" />
          Stake-based accountability
        </div>
        <p className="mt-3 text-slate-200">
          Tutors stake Slon when awarding a badge; improper awarding can be challenged, lowering tutor Slon.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8">
        <div className="flex items-center gap-2 font-bold">
          <School className="w-5 h-5 text-blue-400" />
          Transparent for adults
        </div>
        <p className="mt-3 text-slate-200">
          Teachers (and potentially principals/parents) can review progress and revoke badges if mastery isn’t real.
        </p>
      </div>
    </div>
  </Section>
);

const ExponentialSpreadSection = () => {
  const rows = [
    { lesson: 1, minutes: 0, students: 1 },
    { lesson: 1, minutes: 10, students: 2 },
    { lesson: 1, minutes: 20, students: 4 },
    { lesson: 1, minutes: 30, students: 8 },
    { lesson: 1, minutes: 40, students: 16 },
    { lesson: 1, minutes: 50, students: 32 },
    { lesson: 2, minutes: 60, students: 64 },
    { lesson: 2, minutes: 70, students: 128 },
    { lesson: 2, minutes: 80, students: 256 },
    { lesson: 2, minutes: 90, students: 512 },
    { lesson: 2, minutes: 100, students: 1024 },
  ];

  return (
    <Section className="bg-white border-t border-slate-100">
      <div className="text-center mb-10">
        <Badge>Scalability model</Badge>
        <h2 className="text-3xl font-bold text-slate-900">Teach 1 student → the class learns fast</h2>
        <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
          The paper argues new skills can spread through peer tutoring without lectures: if a “typical skill” takes ~10 minutes,
          the number of students who can teach it can double each cycle (Table 1).
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card className="p-8">
          <div className="font-bold text-slate-900">The claim (from Table 1)</div>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
              <span>~50 minutes: up to ~32 students can master a skill (class-scale).</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
              <span>~100 minutes: model extrapolates to 1,000+ learners (school-scale).</span>
            </li>
          </ul>
          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            This section summarizes “Introducing new material without lectures” + Table 1.
          </div>
        </Card>

        <Card className="p-0 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
            <div className="font-bold text-slate-900">Table 1 (rendered as HTML)</div>
            <div className="text-sm text-slate-600">Exponential growth of skill mastery (paper’s example).</div>
          </div>
          <div className="p-6 overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left text-slate-500">
                  <th className="py-2 pr-4">Lesson</th>
                  <th className="py-2 pr-4">Minutes</th>
                  <th className="py-2 pr-4">Students mastered</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="py-2 pr-4 text-slate-900 font-medium">{r.lesson}</td>
                    <td className="py-2 pr-4 text-slate-700">{r.minutes}</td>
                    <td className="py-2 pr-4 text-slate-900 font-semibold">{r.students}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </Section>
  );
};

const OnboardingProtocolSection = () => {
  const steps = [
    { n: 1, t: "Choose any tutee." },
    { n: 2, t: "Tutee scans QR to launch the site (first load may be slow)." },
    { n: 3, t: "Tutee types full name." },
    { n: 4, t: "Tutee chooses a familiar topic." },
    { n: 5, t: "Tutee toggles “learn with a tutor”." },
    { n: 6, t: "Tutor scans the QR from tutee’s screen." },
    { n: 7, t: "Tutor teaches a skill by following the on-screen green prompts; uses Next/Yes/No." },
    { n: 8, t: "At end: tutee scans tutor QR and taps Reward; tutee gets badge, tutor gets Slon." },
    { n: 9, t: "Student chooses someone else to teach; give them the cheat sheet; agree on reward." },
    { n: 10, t: "Ensure the student teaches the new person correctly." },
    { n: 11, t: "Student rewards you as agreed." },
  ];

  return (
    <Section className="bg-slate-50 border-t border-slate-100">
      <div className="text-center mb-10">
        <Badge>1-lesson rollout</Badge>
        <h2 className="text-3xl font-bold text-slate-900">Peer-led onboarding that actually works</h2>
        <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
          The paper compares three onboarding methods and reports that “frontal” and “video” introductions didn’t produce
          real understanding, while the peer-tutoring onboarding did (Table 2).
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <Card className="p-8">
          <div className="font-bold text-slate-900">The protocol (Table 2)</div>
          <div className="mt-3 text-slate-600 text-sm">
            Designed so the number of “guides” doubles each ~10-minute cycle (class trained in one lesson; school in two).
          </div>

          <div className="mt-6 space-y-3">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
                  {s.n}
                </div>
                <div className="text-slate-700">{s.t}</div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8">
          <div className="font-bold text-slate-900">What you can say on the principal call</div>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
              <span>“We don’t train staff for weeks—students train each other in one lesson.”</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
              <span>“No prep: the content and prompts are built in.”</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5" />
              <span>“We can start with 2 classes and prove operational adoption fast.”</span>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
            <div className="flex items-start gap-3">
              <Users className="w-5 h-5 text-blue-700 mt-0.5" />
              <div className="text-slate-700">
                Pilot notes in the paper describe successful peer-led onboarding in small groups across multiple ages, and
                emphasize that larger evaluation is the next step.
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Section>
  );
};

const ResearchPartnersSection = () => (
  <Section className="bg-white border-t border-slate-100">
    <div className="text-center mb-10">
      <Badge>Research partners</Badge>
      <h2 className="text-3xl font-bold text-slate-900">Want to run an RCT or quasi-experiment?</h2>
      <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
        The paper explicitly calls for further randomized controlled trials to assess long-term effectiveness across diverse
        settings. If you’re a district, university, or research org, let’s design a clean evaluation.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-6">
      <Card className="p-8">
        <div className="font-bold text-slate-900">Suggested outcomes</div>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>Badge velocity (badges per lesson) as “learning speed”</li>
          <li>Growth measures (district/state assessments)</li>
          <li>Engagement and behavior indicators</li>
        </ul>
        <div className="mt-4 text-sm text-slate-600">
          The paper discusses schoolwide monitoring and learning speed via badge counts.
        </div>
      </Card>

      <Card className="p-8">
        <div className="font-bold text-slate-900">Suggested design</div>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>Start with 2 classes (pilot)</li>
          <li>Scale to grade-level rollout</li>
          <li>Compare vs. business-as-usual or alternative intervention</li>
        </ul>
      </Card>

      <Card className="p-8">
        <div className="font-bold text-slate-900">Implementation constraints</div>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>Same-age, in-class, face-to-face tutoring</li>
          <li>Structured prompts + incentive balancing</li>
          <li>Minimal teacher prep requirements</li>
        </ul>
        <div className="mt-4 text-sm text-slate-600">
          These constraints mirror the platform design principles and classroom deployment approach described in the paper.
        </div>
      </Card>
    </div>

    <div className="mt-10 text-center">
      <a href="#lead">
        <Button variant="primary">
          Propose a Study / Pilot <ArrowRight className="w-4 h-4" />
        </Button>
      </a>
    </div>
  </Section>
);

const CurrentSolutionsBlock = () => {
  const items = [
    {
      icon: Users,
      solution: "Hire more staff",
      why: "You can't hire teachers who don't exist in the applicant pool and don’t have budget for it.",
    },
    {
      icon: School,
      solution: "Adopt a new program / curriculum",
      why: "Great content doesn't matter if the delivery is inconsistent or the teacher is overwhelmed.",
    },
    {
      icon: BarChart3,
      solution: "Coaching + PD workshops",
      why: "High effort, low transfer: great in theory, hard to turn into daily routines under real constraints.",
    },
    {
      icon: Clock,
      solution: "After-school / pull-out tutoring",
      why: "Limited seats and inconsistent attendance; the students who need it most often can’t access it reliably.",
    },
    {
      icon: Calculator,
      solution: "Test prep & benchmarking",
      why: "Improves familiarity, not mastery. Scores plateau quickly.",
    },
    {
      icon: CirclePile,
      solution: "Ability grouping/tracking",
      why: "Widens achievement gaps, with lower-tracked students receiving watered-down curriculum.",
    },
    {
      icon: Sparkles,
      solution: "Personalized learning software",
      why: "'Screen time' isn’t 'instructional time.' Students learn how to cheat and click through screens—not math concepts.",
    },

    {
      icon: Bot,
      solution: "Ai-tutoring software",
      why: "Students come to school to interact with classmates, not to message robots.",
    },
  ];

  return (
    <Section className="bg-white border-t border-slate-100">
      <div className="text-center mb-10">
        <Badge>Current solutions</Badge>
        <h2 className="text-3xl font-bold text-slate-900">Current Solutions & Why They Fall Short</h2>
        <p className="mt-3 text-slate-600 max-w-3xl mx-auto">
          Most fixes add programs, not instructional capacity. They’re costly, hard to sustain, and rarely change what happens
          minute-by-minute in the classroom.
        </p>
      </div>

      <Card className="p-0 overflow-hidden">
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="grid md:grid-cols-12 gap-3 text-sm font-bold text-slate-700">
            <div className="md:col-span-5">What Principals Try</div>
            <div className="md:col-span-7">Why It Falls Short</div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          {items.map((x) => {
            const Icon = x.icon;
            return (
              <div key={x.solution} className="px-6 py-5">
                <div className="grid md:grid-cols-12 gap-4 items-start">
                  <div className="md:col-span-5">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-800" />
                      </div>
                      <div className="min-h-[40px] flex items-center">
                        <div className="font-extrabold text-slate-900 leading-tight">{x.solution}</div>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-7">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-slate-800">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-700 mt-0.5" />
                        <div className="text-sm leading-relaxed">{x.why}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <div className="mt-8 grid lg:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <BrainCircuit className="w-5 h-5 text-blue-700" />
            The core bottleneck
          </div>
          <p className="mt-2 text-sm text-slate-600">
            One teacher cannot deliver enough high-quality, immediate-feedback practice to every student—every lesson—without
            changing the operating system.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <ShieldCheck className="w-5 h-5 text-emerald-700" />
            The missing ingredient
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Fidelity and accountability: without a built-in structure, “initiative completed” replaces “skill mastered.”
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <DollarSign className="w-5 h-5 text-amber-700" />
            The budget reality
          </div>
          <p className="mt-2 text-sm text-slate-600">
            Most interventions are recurring costs. When funding tightens, the support disappears—and scores revert.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a href="#solution">
          <Button variant="primary">
            See the alternative: structured peer learning <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
      </div>
    </Section>
  );
};



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
        quotes={[
          {
            text: "I could talk with my favorite classmates, everything somehow sticks in memory more easily",
            byline: "Student, 10th grade",
          },
          { text: "Working in pairs helps me stay focused.", byline: "Student, 8th grade" },
          { text: "I learn faster when I explain it to someone.", byline: "Student, 9th grade" },
          { text: "It feels less scary to ask questions.", byline: "Student, 7th grade" },
        ]}
      />

      <EvidenceSection />
      <NotAlone />
      <SchoolsFacingItToo />
      <WhatChanged />

      <DesignPrinciplesSection />
      <Solution />

      <AlgorithmSection />
      <QualityControlSection />
      <ExponentialSpreadSection />
      <OnboardingProtocolSection />

      <DirectCosts />
      <StopSpendingOn />
      <ValueStack />

      <ResearchPartnersSection />

      <LeadSection success={success} />
      <GuaranteeBand />
      <ContactsBlock />
      <Footer />

    </main>
  );
}