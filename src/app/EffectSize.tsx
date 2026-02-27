type Props = {};

export default function EffectSize({ }: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-10">
        <div className="mx-auto max-w-3xl">
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
              <li>https://www.evidenceforessa.org/programs/math/
                <br />
                We calculated the mean and standard deviation using only mathematics programs rated “Strong.” 
                Program-to-category assignments were performed manually based on our review of each program’s 
                description and stated focus areas.
              </li>
              <li>
                Alegre-Ansuategui, F. J., Moliner, L., Lorenzo, G., &amp; Maroto, A. (2017).
                Peer Tutoring and Academic Achievement in Mathematics: A Meta-Analysis.
                EURASIA Journal of Mathematics, Science and Technology Education, 14(1).
                <br />
                * Since Slonig is technology-aided peer tutoring, we used the effect size (Hedges’ g)
                reported in the Alegre-Ansuategui et al. meta-analysis, which synthesizes results
                from 50 independent peer-tutoring studies.
              </li>
            </ul>

            <p>
              Please note that it is difficult to compare results across studies because they were
              not conducted by the same research group and often involved students of different ages,
              socioeconomic backgrounds, and other differing conditions. Therefore, we can only
              roughly estimate that peer tutoring outperforms many other pedagogical interventions,
              but a claim like this ultimately requires its own randomized controlled trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}