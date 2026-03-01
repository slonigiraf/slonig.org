type Props = {};

export default function TeacherWork({ }: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl">
          {/* Title */}
          <h2 className="text-center tracking-tight text-[color:var(--secondary-color)]">
            Teachers Can Do 1:1 Interventions —&nbsp;or&nbsp;Breathe
          </h2>

          {/* Image */}
          <div className="mt-6 flex justify-center md:mt-8">
            <div className="w-full max-w-xs overflow-hidden rounded-sm shadow-sm md:max-w-sm">
              <img
                src="/teacher-work.jpg"
                alt="Two students working together"
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-5 mx-auto max-w-2xl text-center">
            <span>Teachers are no longer expected to teach brand-new material to eight different levels at once. 
              With Slonig, teachers’ time shifts almost entirely to 1:1 support—either coaching in the same 
              peer-teaching mode students use, or doing quick check-ins and targeted error correction, 
              guided by the platform.</span>
          </div>
        </div>
      </div>
    </section>
  );
}