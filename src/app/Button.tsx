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
    "inline-flex items-center justify-center select-none font-extrabold uppercase tracking-widest transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    // Matches your screenshot: big orange pill + white text + soft shadow
    primary:
      "rounded-full px-24 py-6 text-3xl text-white bg-[#E8A057] shadow-[0_10px_18px_rgba(0,0,0,0.16)] hover:bg-[#E39A4E] hover:shadow-[0_14px_22px_rgba(0,0,0,0.18)] active:translate-y-[1px]",
    secondary:
      "rounded-lg px-6 py-3 text-base text-white bg-amber-500 shadow-md hover:bg-amber-600",
    outline:
      "rounded-lg px-6 py-3 text-base border-2 border-blue-900 text-blue-900 hover:bg-blue-50",
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