"use client";

import React, { useEffect, useCallback, useState, useRef } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";
import RequestDemo from "./RequestDemo";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Portal root set only on client (prevents hydration issues)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  // Measure panel height so overlay starts *below* the menu (no grey behind menu)
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [panelH, setPanelH] = useState(0);

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const openMobile = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(true);
  }, []);

  const NAVBAR_H = 64; // h-16
  const scrollToWithOffset = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const y = rect.top + window.scrollY - NAVBAR_H;

    window.scrollTo({
      top: Math.max(0, y),
      behavior: "smooth",
    });
  };

  const navTo = useCallback(
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeMobile();

      if (hash === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) scrollToWithOffset(el);
    },
    [closeMobile]
  );

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
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white backdrop-blur-md border-b border-slate-200">
      {/* Navbar row */}
      <div className="flex h-16 items-center justify-between px-6 py-2">
        {/* Brand */}
        <a href="#top" className="flex items-center" onClick={navTo("#top")}>
          <img src="/named-logo.svg" alt="Slonig" className="h-10 w-auto md:h-10" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 items-center text-lg font-bold text-[var(--secondary-color)]">
          <a href="#how_it_works" className="hover:text-blue-900" onClick={navTo("#how_it_works")}>
            How It Works
          </a>
          <a href="#efficacy" className="hover:text-blue-900" onClick={navTo("#efficacy")}>
            Efficacy
          </a>
          <a href="#roi" className="hover:text-blue-900" onClick={navTo("#roi")}>
            ROI
          </a>
          <RequestDemo expanded={false} id={"navbar-button"} caption={"Request a Demo"} />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={mobileOpen ? closeMobile : openMobile}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-[var(--secondary-color)] hover:bg-slate-100"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu via portal:
          - portalRoot exists only on client -> no hydration mismatch
          - no grey behind the menu panel
          - overlay starts below the panel + click outside closes
      */}
      {portalRoot && mobileOpen
        ? createPortal(
          <div className="md:hidden fixed left-0 right-0 bottom-0 top-16 z-[9999]">
            {/* Panel */}
            <div
              ref={panelRef}
              className="absolute left-0 right-0 top-0 border-t border-slate-200 bg-white shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto max-w-7xl px-6 py-4">
                <div className="mt-4 flex flex-col gap-4 text-base font-semibold text-[var(--secondary-color)]">
                  <a href="#how_it_works" className="hover:text-blue-900" onClick={navTo("#how_it_works")}>
                    How It Works
                  </a>
                  <a href="#efficacy" className="hover:text-blue-900" onClick={navTo("#efficacy")}>
                    Efficacy
                  </a>
                  <a href="#roi" className="hover:text-blue-900" onClick={navTo("#roi")}>
                    ROI
                  </a>

                  <RequestDemo expanded={false} id={"navbar-button"} caption={"Request a Demo"} />
                </div>
              </div>
            </div>

            {/* Overlay ONLY below the panel (so nothing behind menu is grey) */}
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