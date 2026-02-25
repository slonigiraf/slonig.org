type Props = {};

export default function BeforeAfter({}: Props) {
  return (
    <section className="relative w-full text-slate-900">
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-5">
        <div className="mx-auto flex flex-col items-center">
          {/* match Hero font scale + line-height */}
          <p className="mt-3 max-w-4xl text-xl leading-relaxed sm:text-2xl md:text-3xl">
            <span className="font-semibold text-[var(--secondary-color)]">
              Before Slonig
            </span>{" "}
            teachers were expected to differentiate while having no time to breath.
          </p>

          {/* match Hero paragraph scale */}
          <p className="mt-3 max-w-4xl text-xl leading-relaxed sm:text-2xl md:text-3xl">
            <span className="font-semibold text-[var(--secondary-color)]">
              Now Slonig
            </span>{" "}
             organizes students to support each other’s differentiated learning,
            saving teachers up to 80% of their time.
          </p>
        </div>
      </div>
    </section>
  );
}