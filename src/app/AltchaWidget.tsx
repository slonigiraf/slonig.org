"use client";

import React from "react";

export type AltchaWidgetProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  "children" | "ref"
> & {
  /** ALTCHA attributes */
  id: string;
  challengeurl: string;
  name?: string;
  auto?: string; // e.g. "onload"

  /** Normal React props you want */
  className?: string;

  /** Use your normal ref object */
  innerRef?: React.RefObject<HTMLElement | null>;
};

export default function AltchaWidget({
  innerRef,
  className,
  ...rest
}: AltchaWidgetProps) {
  // We intentionally cast once here because ALTCHA's JSX typings are too narrow
  // and omit standard DOM props like className / aria-*.
  return React.createElement("altcha-widget", {
    ref: innerRef as any,
    className,
    ...rest,
  } as any);
}