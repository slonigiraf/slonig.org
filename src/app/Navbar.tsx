"use client";

import React, { useEffect, useCallback, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import RequestDemo from "./RequestDemo";

type Props = {
  indexPage?: boolean;
};

const PENDING_HASH_KEY = "slonig_pending_nav_hash";

export const Navbar: React.FC<Props> = ({ indexPage }) => {
  const pathname = usePathname();
  const effectiveIndexPage = indexPage ?? pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);

  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelH, setPanelH] = useState(0);

  const navRef = useRef<HTMLElement | null>(null);
  const navbarHRef = useRef(64);

  const scrollTokenRef = useRef(0);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  // Keep navbar height updated
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const update = () => {
      navbarHRef.current = Math.round(el.getBoundingClientRect().height || 64);
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

  const stopScrollNow = () => {
    window.scrollTo({ top: window.scrollY, behavior: "auto" });
  };

  const setUrlHashWithoutJump = (hash: string) => {
    const clean = hash.startsWith("#") ? hash : `#${hash}`;
    history.replaceState(null, "", `/${clean}`);
  };

  /**
   * ✅ Correct + smooth + offset scrolling:
   * - stop current scrolling in a dedicated 2-frame "stop phase"
   * - then measure/stabilize target position
   * - then start smooth scroll (nothing can auto-cancel it afterward)
   */
  const scrollToHashWithOffset = useCallback((hash: string) => {
    const token = ++scrollTokenRef.current;

    const isTop = !hash || hash === "#top" || hash === "#";

    // Update URL without jump
    setUrlHashWithoutJump(isTop ? "#top" : hash);

    // ---- STOP PHASE (2 frames) ----
    // We *only* do auto-scroll in this phase.
    // We will not start smooth scrolling until this phase is finished.
    stopScrollNow();
    requestAnimationFrame(() => {
      if (token !== scrollTokenRef.current) return;
      stopScrollNow();

      requestAnimationFrame(() => {
        if (token !== scrollTokenRef.current) return;

        if (isTop) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return;
        }

        const id = hash.startsWith("#") ? hash.slice(1) : hash;

        let tries = 0;
        const maxTries = 180;

        let stable = 0;
        let lastAbsTop: number | null = null;

        const tick = () => {
          if (token !== scrollTokenRef.current) return;

          const el = document.getElementById(id);
          if (!el) {
            tries += 1;
            if (tries < maxTries) requestAnimationFrame(tick);
            return;
          }

          // Absolute position of element in document (stable for layout-checking)
          const absTop = el.getBoundingClientRect().top + window.scrollY;

          if (lastAbsTop !== null && Math.abs(absTop - lastAbsTop) < 1) stable += 1;
          else stable = 0;

          lastAbsTop = absTop;

          // Wait for layout to settle for 2 frames
          if (stable >= 2) {
            const y = Math.max(0, absTop - (navbarHRef.current || 64));

            // ---- START SMOOTH SCROLL (no more auto-scroll after this) ----
            window.scrollTo({ top: y, behavior: "smooth" });

            // Optional correction after a bit (keeps it accurate if something loads late)
            window.setTimeout(() => {
              if (token !== scrollTokenRef.current) return;
              const el2 = document.getElementById(id);
              if (!el2) return;

              const absTop2 = el2.getBoundingClientRect().top + window.scrollY;
              const y2 = Math.max(0, absTop2 - (navbarHRef.current || 64));

              // If off, do a gentle smooth nudge
              if (Math.abs(window.scrollY - y2) > 6) {
                window.scrollTo({ top: y2, behavior: "smooth" });
              }
            }, 520);

            return;
          }

          tries += 1;
          if (tries < maxTries) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      });
    });
  }, []);

  const navTo = useCallback(
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeMobile();

      if (!effectiveIndexPage) {
        try {
          sessionStorage.setItem(PENDING_HASH_KEY, hash);
        } catch { }
        window.location.assign(`/${hash}`);
        return;
      }

      scrollToHashWithOffset(hash);
    },
    [closeMobile, effectiveIndexPage, scrollToHashWithOffset]
  );

  // layout.tsx: Navbar persists; react to route changes when we land on "/"
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    let pending: string | null = null;
    try {
      pending = sessionStorage.getItem(PENDING_HASH_KEY);
      if (pending) sessionStorage.removeItem(PENDING_HASH_KEY);
    } catch { }

    const target = pending || window.location.hash;
    if (!target) return;

    scrollToHashWithOffset(target);
  }, [pathname, scrollToHashWithOffset]);

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

  // Measure the mobile panel height (and keep it updated)
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
      <div className="flex h-16 items-center justify-between px-6 py-2">
        <a href="/#top" className="flex items-center" onClick={navTo("#top")}>
          <img src="/named-logo.svg" alt="Slonig" className="h-10 w-auto lg:h-10" />
        </a>

        <div className="no-global-link hidden lg:flex gap-12 items-center text-lg font-bold text-[var(--secondary-color)] [&>a]:hover:text-blue-900">
          <a href="/#how-it-works" onClick={navTo("#how-it-works")}>
            How It Works
          </a>
          <a href="/#efficacy" onClick={navTo("#efficacy")}>
            Efficacy
          </a>
          <a href="/#curriculum" onClick={navTo("#curriculum")}>
            Curriculum
          </a>
          <a href="/#roi" onClick={navTo("#roi")}>
            ROI
          </a>

          <RequestDemo expanded={false} id={"navbar-button"} caption={"Request a Demo"} />
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={mobileOpen ? closeMobile : openMobile}
          className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-[var(--secondary-color)] hover:bg-slate-100"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {portalRoot && mobileOpen
        ? createPortal(
          <div className="lg:hidden fixed left-0 right-0 bottom-0 top-16 z-[9999]">
            <div
              ref={panelRef}
              className="absolute left-0 right-0 top-0 border-t border-slate-200 bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="mt-4 flex flex-col gap-4 text-base font-semibold text-[var(--secondary-color)]">
                  <a href="/#how-it-works" className="hover:text-blue-900" onClick={navTo("#how-it-works")}>
                    How It Works
                  </a>
                  <a href="/#efficacy" className="hover:text-blue-900" onClick={navTo("#efficacy")}>
                    Efficacy
                  </a>
                  <a href="/#curriculum" className="hover:text-blue-900" onClick={navTo("#curriculum")}>
                    Curriculum
                  </a>
                  <a href="/#roi" className="hover:text-blue-900" onClick={navTo("#roi")}>
                    ROI
                  </a>

                  <RequestDemo expanded={false} id={"navbar-button"} caption={"Request a Demo"} />
                </div>
              </div>
            </div>

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