"use client";

import React, { useEffect, useCallback, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import RequestDemo from "./RequestDemo";

type Props = {
  /**
   * Optional override. If omitted, it auto-detects by pathname === "/".
   */
  indexPage?: boolean;
};

const PENDING_HASH_KEY = "slonig_pending_nav_hash";

export const Navbar: React.FC<Props> = ({ indexPage }) => {
  const pathname = usePathname();
  const effectiveIndexPage = indexPage ?? pathname === "/";

  const navRef = useRef<HTMLElement | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  // Portal root set only on client (prevents hydration issues)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  // Measure panel height so overlay starts *below* the menu (no grey behind menu)
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelH, setPanelH] = useState(0);

  // Keep navbar height updated (real height, not a guess)
  const navbarHRef = useRef(64);

  // Cancel/override previous scroll attempts when user clicks again
  const scrollTokenRef = useRef(0);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const update = () => {
      const h = Math.round(el.getBoundingClientRect().height || 64);
      navbarHRef.current = h;
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const openMobile = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(true);
  }, []);

  const stopAnyOngoingSmoothScroll = () => {
    // A common trick: an "auto" scroll to current Y interrupts smooth scrolling in many browsers.
    window.scrollTo({ top: window.scrollY, behavior: "auto" });
  };

  /**
   * Robust offset scrolling:
   * - waits until the computed target Y is stable for a few frames (layout shifts done)
   * - cancels any previous attempt via token
   * - does a small correction shortly after if something shifted
   */
  const scrollToHashWithOffsetStable = useCallback((hash: string) => {
    const token = ++scrollTokenRef.current;

    const goTop = () => {
      stopAnyOngoingSmoothScroll();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!hash || hash === "#top" || hash === "#") {
      goTop();
      return;
    }

    const id = hash.startsWith("#") ? hash.slice(1) : hash;

    stopAnyOngoingSmoothScroll();

    let tries = 0;
    const maxTries = 180; // ~3s @60fps (covers route+hydration+font/video shifts)
    let stableCount = 0;
    let lastY: number | null = null;

    const computeY = (el: HTMLElement) => {
      const navbarH = navbarHRef.current || 64;
      const rect = el.getBoundingClientRect();
      return Math.max(0, rect.top + window.scrollY - navbarH);
    };

    const tick = () => {
      // aborted by a newer scroll request
      if (token !== scrollTokenRef.current) return;

      const el = document.getElementById(id);
      if (!el) {
        tries += 1;
        if (tries < maxTries) requestAnimationFrame(tick);
        return;
      }

      const y = computeY(el);

      // Stability check: target Y stops changing (layout settled)
      if (lastY !== null && Math.abs(y - lastY) < 1) {
        stableCount += 1;
      } else {
        stableCount = 0;
      }
      lastY = y;

      if (stableCount >= 3) {
        // Final smooth scroll to stable target
        stopAnyOngoingSmoothScroll();
        window.scrollTo({ top: y, behavior: "smooth" });

        // Optional correction after a short delay (if something still shifted)
        // Keep it gentle: only correct if we're clearly off.
        window.setTimeout(() => {
          if (token !== scrollTokenRef.current) return;
          const el2 = document.getElementById(id);
          if (!el2) return;

          const y2 = computeY(el2);
          const offBy = Math.abs(window.scrollY - y2);

          if (offBy > 4) {
            // Use auto to "snap" exactly without a second animation
            window.scrollTo({ top: y2, behavior: "auto" });
          }
        }, 450);

        return;
      }

      tries += 1;
      if (tries < maxTries) requestAnimationFrame(tick);
    };

    // double rAF helps after route changes: lets browser apply scroll restoration / initial layout
    requestAnimationFrame(() => requestAnimationFrame(tick));
  }, []);

  const navTo = useCallback(
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeMobile();

      // Not on index page -> store target, go to "/#hash"
      if (!effectiveIndexPage) {
        try {
          sessionStorage.setItem(PENDING_HASH_KEY, hash);
        } catch {}
        window.location.assign(`/${hash}`); // full navigation
        return;
      }

      // On index page -> robust offset scroll now
      scrollToHashWithOffsetStable(hash);
    },
    [closeMobile, effectiveIndexPage, scrollToHashWithOffsetStable]
  );

  // ✅ layout.tsx: Navbar persists; react to route changes when we land on "/"
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    let pending: string | null = null;
    try {
      pending = sessionStorage.getItem(PENDING_HASH_KEY);
      if (pending) sessionStorage.removeItem(PENDING_HASH_KEY);
    } catch {}

    const target = pending || window.location.hash;
    if (!target) return;

    scrollToHashWithOffsetStable(target);
  }, [pathname, scrollToHashWithOffsetStable]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    const prevHtmlOverflow = document.documentElement.style.overflow;
    const prevBodyOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = prevHtmlOverflow || "";
      document.body.style.overflow = prevBodyOverflow || "";
    }

    return () => {
      document.documentElement.style.overflow = prevHtmlOverflow || "";
      document.body.style.overflow = prevBodyOverflow || "";
    };
  }, [mobileOpen]);

  // Close on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen, closeMobile]);

  // Measure the panel height (and keep it updated)
  useEffect(() => {
    if (!mobileOpen) return;

    const el = panelRef.current;
    if (!el) return;

    const update = () => setPanelH(el.getBoundingClientRect().height);
    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);

    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [mobileOpen]);

  return (
    <nav
      ref={navRef as any}
      className="fixed top-0 left-0 right-0 z-50 w-full bg-white backdrop-blur-md border-b border-slate-200"
    >
      {/* Navbar row */}
      <div className="flex h-16 items-center justify-between px-6 py-2">
        {/* Brand */}
        <a href="/#top" className="flex items-center" onClick={navTo("#top")}>
          <img
            src="/named-logo.svg"
            alt="Slonig"
            className="h-10 w-auto lg:h-10"
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden lg:flex gap-12 items-center text-lg font-bold text-[var(--secondary-color)]">
          <a
            href="/#how_it_works"
            className="hover:text-blue-900"
            onClick={navTo("#how_it_works")}
          >
            How It Works
          </a>
          <a
            href="/#efficacy"
            className="hover:text-blue-900"
            onClick={navTo("#efficacy")}
          >
            Efficacy
          </a>
          <a
            href="/#curriculum"
            className="hover:text-blue-900"
            onClick={navTo("#curriculum")}
          >
            Curriculum
          </a>
          <a
            href="/#roi"
            className="hover:text-blue-900"
            onClick={navTo("#roi")}
          >
            ROI
          </a>

          <RequestDemo
            expanded={false}
            id={"navbar-button"}
            caption={"Request a Demo"}
          />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={mobileOpen ? closeMobile : openMobile}
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[var(--secondary-color)] hover:bg-slate-100"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu via portal */}
      {portalRoot && mobileOpen
        ? createPortal(
            <div className="lg:hidden fixed left-0 right-0 bottom-0 top-16 z-[9999]">
              {/* Panel */}
              <div
                ref={panelRef}
                className="absolute left-0 right-0 top-0 border-t border-slate-200 bg-white shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mx-auto max-w-7xl px-6 py-4">
                  <div className="mt-4 flex flex-col gap-4 text-base font-semibold text-[var(--secondary-color)]">
                    <a
                      href="/#how_it_works"
                      className="hover:text-blue-900"
                      onClick={navTo("#how_it_works")}
                    >
                      How It Works
                    </a>
                    <a
                      href="/#efficacy"
                      className="hover:text-blue-900"
                      onClick={navTo("#efficacy")}
                    >
                      Efficacy
                    </a>
                    <a
                      href="/#curriculum"
                      className="hover:text-blue-900"
                      onClick={navTo("#curriculum")}
                    >
                      Curriculum
                    </a>
                    <a
                      href="/#roi"
                      className="hover:text-blue-900"
                      onClick={navTo("#roi")}
                    >
                      ROI
                    </a>

                    <RequestDemo
                      expanded={false}
                      id={"navbar-button"}
                      caption={"Request a Demo"}
                    />
                  </div>
                </div>
              </div>

              {/* Overlay ONLY below the panel */}
              <div
                className="absolute left-0 right-0 bottom-0 bg-black/20"
                style={{ top: panelH }}
                onClick={closeMobile}
                role="button"
                aria-label="Close menu overlay"
              />
            </div>,
            portalRoot
          )
        : null}
    </nav>
  );
};

export default Navbar;