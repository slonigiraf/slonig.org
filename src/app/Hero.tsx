import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="relative w-full text-white" style={{ backgroundColor: "var(--primary-color)" }}>
      <div className="mx-auto max-w-6xl px-6 pt-24 pb-5">
        <div className="mx-auto flex flex-col items-center text-center">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Reach 70% +
            <br />
            <span className="block mt-3 sm:mt-4">Math Proficiency Schoolwide</span>
          </h1>

          <p className="mt-3 max-w-4xl text-xl leading-relaxed sm:text-2xl md:text-3xl">
            Math achievement shouldn’t mirror family income, so we&nbsp;
            <br className="hidden md:block" />
            discovered a method that gets schools above 70% proficiency—
            <br className="hidden md:block" />
            without relying on “star” teachers or wealthy parents.
          </p>

          <div className="mt-3">
            <a
              href="#request_demo"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/90 px-10 py-4 text-xl font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}