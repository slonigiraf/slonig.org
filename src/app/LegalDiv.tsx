type Props = {
  children: React.ReactNode[];
};

export default function LegalDiv({ children }: Props) {

  return (
    <div
      className={[
        "prose prose-slate mt-10 max-w-none text-left",

        // force all headings black + consistent weight/letter-spacing
        "[&_:is(h1,h2,h3,h4,h5,h6)]:!text-black",
        "[&_:is(h1,h2,h3,h4,h5,h6)]:!tracking-tight",
        "[&_:is(h1,h2,h3)]:!font-extrabold",
        "[&_:is(h4,h5,h6)]:!font-bold",

        // sizes + line heights
        "[&h2]:text-[clamp(24px,2.4vw,34px)] [&h2]:leading-[1.15]",
        "[&h3]:text-[clamp(18px,1.6vw,22px)] [&h3]:leading-[1.2]",
        "[&h4]:text-[16px] [&h4]:leading-[1.25]",

        // spacing rules
        "[&_:is(h2,h3,h4)]:!mb-2",
        "[&_:is(h2,h3,h4)]:!mt-5",
      ].join(" ")}
    >
      {children}
    </div>
  );
}