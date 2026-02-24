import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) {
  const baseStyle =
    "inline-flex items-center justify-center select-none font-extrabold uppercase tracking-widest focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    // Pill + gradient like your CSS snippet:
    primary: [
      "relative border border-transparent",
      "rounded-full px-24 py-6 text-3xl text-white",
      "bg-[var(--main)]",
      "bg-[linear-gradient(to_right,var(--light),var(--main),var(--main),var(--light))]",
      "bg-[length:300%_100%]",
      "transition-all duration-[400ms] ease-in-out",
      "hover:bg-[position:100%_0%]",
      "shadow-[0_10px_18px_rgba(0,0,0,0.16)] hover:shadow-[0_14px_22px_rgba(0,0,0,0.18)] active:translate-y-[1px]",
    ].join(" "),
    secondary:
      "rounded-lg px-6 py-3 text-base text-white bg-amber-500 shadow-md hover:bg-amber-600 transition-all duration-200",
    outline:
      "rounded-lg px-6 py-3 text-base border-2 border-blue-900 text-blue-900 hover:bg-blue-50 transition-all duration-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[
        baseStyle,
        variants[variant],
        disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}