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
          <div className="text-sm">
            <p><b>Datasources:</b></p>
            <ul className="list-disc pl-5">
              <li>https://www.evidenceforessa.org/programs/math/. To calculate average and SD, we used math programs that were marked as "Strong". We categorized programs into groups manually.</li>
              <li>Alegre-Ansuategui, F. J., Moliner, L., Lorenzo, G., &amp; Maroto, A. (2017). Peer Tutoring and Academic Achievement in Mathematics: A Meta-Analysis. EURASIA Journal of Mathematics, Science and Technology Education, 14(1).</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}