"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { trackMatomoEvent, type MatomoEvent } from "@/lib/matomo";

type MatomoAnchorProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "onClick" | "href"
> & {
  href: string;

  trackName: string;
  matomoCategory?: string; // default "NAVIGATION"
  matomoAction?: string;   // default "NAVIGATE"
  matomoValue?: number;    // default 1
  includeHrefInName?: boolean;

  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function MatomoAnchor({
  href,
  trackName,
  matomoCategory = "NAVIGATION",
  matomoAction = "NAVIGATE",
  includeHrefInName = false,
  onClick,
  ...rest
}: MatomoAnchorProps) {
  const pathname = usePathname();
  const finalName = includeHrefInName ? `${trackName}|${href}` : trackName;

  const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
    const event: MatomoEvent = {
      category: matomoCategory,
      action: matomoAction,
      name: `${pathname}: ${finalName}`,
    };
    trackMatomoEvent(event);

    onClick?.(e);
  };

  return <a href={href} {...rest} onClick={handleClick} />;
}