import { BarChart3, DollarSign, Section, Sparkles } from "lucide-react";

type Props = {

};

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

export default function ValueStack({ }: Props) {

  return (
    <section id="impact" className="bg-slate-50">
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
    </section>
  );
}