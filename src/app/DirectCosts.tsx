import { CheckCircle2 } from "lucide-react";
import Badge from "./Badge";

type Props = {

};

export default function DirectCosts({ }: Props) {

  return (
    <section className="bg-slate-900 text-white">
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
    </section>
  );
}