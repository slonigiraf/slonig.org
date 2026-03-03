type Props = {
  children: React.ReactNode;
};

export default function LegalList({ children }: Props) {
  return (
    <ol
      className={[
        "mt-8 pl-0 list-none !text-black",

        // counter setup
        "[counter-reset:policysec]",
        "[&>li]:[counter-increment:policysec]",
        "[&>li+li]:mt-6",

        // h3 line
        "[&>li>h3]:!mt-0",
        "[&>li>h3]:!text-black",
        "[&>li>h3]:flex",
        "[&>li>h3]:items-baseline",
        "[&>li>h3]:gap-3",

        // "1." prefix
        "[&>li>h3::before]:content-[counter(policysec)'.']",
        "[&>li>h3::before]:shrink-0",
        "[&>li>h3::before]:w-8",
        "[&>li>h3::before]:text-right",
        "[&>li>h3::before]:font-extrabold",
        "[&>li>h3::before]:text-black",

        // first paragraph spacing
        "[&>li>p:first-of-type]:mt-2",
      ].join(" ")}
    >
      {children}
    </ol>
  );
}