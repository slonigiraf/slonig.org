import Badge from "./Badge";


type Props = {

};

export default function StopSpendingOn({ }: Props) {

  return (
    <section className="bg-slate-50 border-t border-slate-100">
      <div className="text-center mb-12">
        <Badge><span>Reallocate budget</span></Badge>
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
    </section>
  );
}