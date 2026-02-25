type Props = {};

export default function Collaboration({}: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-10">
        <div className="mx-auto max-w-5xl">
          {/* Title */}
          <h2 className="text-center tracking-tight text-[color:var(--secondary-color)]">
            Students learn from peers not from screens
          </h2>

          {/* Image */}
         <div className="mt-6 flex justify-center md:mt-8">
            <div className="w-full max-w-xs overflow-hidden rounded-sm shadow-sm md:max-w-sm">
              <img
                src="/collaboration.jpg"
                alt="Two students working together"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-10 md:mt-12">
            <p className="max-w-5xl text-center leading-tight tracking-tight">
              Slonig organizes students work face-to-face, 
              <br/>
              and just one of them rarely look for hints from the app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}