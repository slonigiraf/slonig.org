import RequestDemo from "./RequestDemo";

type Props = {};

export default function JoinProfessionals({ }: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl">
          <h2>Works with 31 organizations across 16 countries</h2>
          <div className="mt-6 flex justify-center md:mt-8">
            <div className="w-full overflow-hidden max-w-3xl">
              <img
                src="/map.jpg"
                alt="Slonig collaborates with 31 organizations across 16 countries"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="mx-auto max-w-3xl text-center">
              <RequestDemo
                expanded={false}
                id={"curriculum-button"}
                caption={"Join Us"}
              />
          </div>
        </div>
      </div>
    </section>
  );
}