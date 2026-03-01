type Props = {};

export default function Diagnostics({ }: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl">
          <h2>Diagnostics in Real Time</h2>
          <div className="mt-6 flex justify-center md:mt-8">
            <div className="w-full max-w-xs overflow-hidden md:max-w-sm">
              <img
                src="/diagnostics.png"
                alt="Slonig diagnoses learning gaps in real time"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-5 mx-auto max-w-3xl text-center">
            <span>Slonig provides precise, real-time skill-level diagnostics for each student—showing which skills are mastered and which aren’t. The best part is that it updates in real time.</span>
          </div>
        </div>
      </div>
    </section>
  );
}