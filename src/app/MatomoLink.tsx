"use client";

import React from "react";
import Link, { type LinkProps } from "next/link";
import { trackMatomoEvent, type MatomoEvent } from "@/lib/matomo";
import { usePathname } from "next/navigation";

type MatomoLinkProps = Omit<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href" | "onClick"
> &
    LinkProps & {
        /** Human-readable / stable identifier you want to see in Matomo */
        trackName: string;

        /** Optional overrides */
        matomoCategory?: string; // default "FOOTER"
        matomoAction?: string; // default "CLICK"
        matomoValue?: number; // default 1

        /**
         * If provided, we call it after tracking.
         * (If your handler calls e.preventDefault(), navigation won't happen.)
         */
        onClick?: React.MouseEventHandler<HTMLAnchorElement>;

        /**
         * If true, include href in event name (e.g. "privacy_policy|/privacy-policy")
         * Useful if you ever change routes but want historical clarity.
         */
        includeHrefInName?: boolean;
    };

function hrefToString(href: import("next/link").LinkProps["href"]): string {
    if (typeof href === "string") return href;

    const pathname = href.pathname ?? "";
    const hash = href.hash ? `#${String(href.hash).replace(/^#/, "")}` : "";

    const params = new URLSearchParams();

    if (href.query) {
        for (const [k, v] of Object.entries(href.query)) {
            if (v == null) continue;

            if (Array.isArray(v)) {
                for (const vv of v) params.append(k, String(vv));
            } else {
                params.append(k, String(v));
            }
        }
    }

    const query = params.toString();
    return `${pathname}${query ? `?${query}` : ""}${hash}`;
}

export default function MatomoLink({
    trackName,
    matomoCategory = "NAVIGATION",
    matomoAction = "NAVIGATE",
    matomoValue = 1,
    includeHrefInName = false,
    onClick,
    href,
    ...rest
}: MatomoLinkProps) {
    const pathname = usePathname();
    const hrefStr = hrefToString(href);
    const finalName = includeHrefInName ? `${trackName}|${hrefStr}` : trackName;

    const handleClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
        // Track first (Matomo queues in _paq; very fast)
        const event: MatomoEvent = {
            category: matomoCategory,
            action: matomoAction,
            name: `${pathname}: ${finalName}`,
            value: matomoValue,
        };
        trackMatomoEvent(event);

        // Then delegate to caller
        onClick?.(e);
    };

    return <Link href={href} {...rest} onClick={handleClick} />;
}