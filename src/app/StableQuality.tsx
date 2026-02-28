type Props = {};

export default function StableQuality({ }: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6">
        <div className="mx-auto max-w-5xl">
          <h2>No more “star” teachers required</h2>
          <div className="flex justify-center w-full max-w-xl overflow-hidden md:max-w-3xl">
              <img
                src="/stable-quality.png"
                alt="Slonig provides schools with consistently high-quality teaching"
                className="h-auto w-full object-cover"
              />
          </div>

          <div className="md:max-w-3xl mt-5">
            <ul className="list-disc pl-5">
              <li>
                Two classes (A and B) were taught by the same teacher.
              </li>
              <li>
                In Class B, the teacher taught calculus using Slonig. For five of the six lessons, students worked independently with no direct teacher interaction.
              </li>
              <li>
                Despite minimal teacher involvement, students reached 71% proficiency.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}