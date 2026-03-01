type Props = {};

export default function Assessments({ }: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl">
          <h2>Assessments Included</h2>
          <div className="mt-6 flex justify-center md:mt-8">
            <div className="w-full max-w-xs overflow-hidden rounded-sm shadow-sm md:max-w-sm">
              <img
                src="/assessments.jpg"
                alt="Slonig provides a complete set of assessments"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-5 mx-auto max-w-3xl text-center">
            <span>Slonig provides a complete set of assessments to evaluate students before and after the intervention, compare Slonig’s outcomes with teaching as usual, and build confidence to use it regularly.</span>
          </div>
        </div>
      </div>
    </section>
  );
}