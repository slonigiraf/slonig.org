type Props = {};

type Slide = {
  imgLaptop: string;
  imgMobile: string;
  alt: string;
  text: string;
};

const slides: Slide[] = [
  {
    imgLaptop: "/collaboration.jpg",
    imgMobile: "/collaboration-mobile.jpg",
    alt: "Two students working together",
    text: "During the first lesson, the app trains students on how to help their classmates.",
  },
  {
    imgLaptop: "/laptop.jpg",
    imgMobile: "/laptop-mobile.jpg",
    alt: "Student using a laptop",
    text: "Students work in pairs and use instant hints from Slonig on how to teach math more effectively. Both students are allowed to start with no prior knowledge of the skill they’re practicing.",
  },
  {
    imgLaptop: "/teacher.jpg",
    imgMobile: "/teacher-mobile.jpg",
    alt: "Teacher monitoring students",
    text: "Every 15 minutes, students switch partners and roles—if they were teaching, they begin learning.",
  },
];

function ArrowDown({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M12 4v13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M7 13l5 5 5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HowSlonigWorks({}: Props) {
  return (
    <section className="w-full bg-white text-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            How Slonig works
          </h2>

          <div className="mt-8 flex flex-col items-center gap-6 md:gap-8">
            {slides.map((s, idx) => (
              <div key={idx} className="w-full">
                {/* Slide */}
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                  <div className="w-full max-w-xs overflow-hidden rounded-sm shadow-sm md:max-w-sm">
                    <picture>
                      <source media="(max-width: 767px)" srcSet={s.imgMobile} />
                      <img
                        src={s.imgLaptop}
                        alt={s.alt}
                        className="h-auto w-full object-cover"
                        loading="lazy"
                      />
                    </picture>
                  </div>

                  <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
                    {s.text}
                  </p>
                </div>

                {/* Arrow between slides */}
                {idx < slides.length - 1 && (
                  <div className="mt-6 flex justify-center md:mt-8">
                    <ArrowDown className="h-10 w-10 text-[var(--secondary-color)] md:h-12 md:w-12" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-slate-600 md:text-base">
            Students learn by explaining ideas to each other, while the app provides structure and occasional hints.
          </p>
        </div>
      </div>
    </section>
  );
}