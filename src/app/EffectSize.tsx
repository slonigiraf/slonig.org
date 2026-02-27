type Props = {};

export default function EffectSize({ }: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center tracking-tight text-[color:var(--secondary-color)]">
            Slonig outperforms digital math programs<br />— and often even tutoring
          </h2>
          <div className="mt-0 flex justify-center">
            <div className="w-full ">
              <img
                src="/effect-size.svg"
                alt="Slonig effect size"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}