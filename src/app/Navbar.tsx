"use client";

import React, { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const openMobile = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(true);
  };

  const closeMobile = () => setMobileOpen(false);

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

  // Close when clicking outside the mobile panel
  useEffect(() => {
    if (!mobileOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (panelRef.current?.contains(target)) return;
      closeMobile();
    };

    document.addEventListener("pointerdown", onPointerDown, { capture: true });
    return () => {
      document.removeEventListener("pointerdown", onPointerDown, { capture: true } as any);
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      {/* Navbar row: make it taller and reduce padding so logo fills more of it */}
      <div className="flex h-16 items-center justify-between px-6 py-2">
        {/* Brand */}
        <a
          href="#top"
          className="flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMobile();
          }}
        >
          <img
            src="/named-logo.svg"
            alt="Slonig"
            className="h-10 w-auto md:h-10"
          />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 items-center text-lg font-bold text-slate-900">
          <a href="#why_slonig" className="hover:text-blue-900">
            Why Slonig?
          </a>
          <a href="#how_it_works" className="hover:text-blue-900">
            How It Works
          </a>
          <a href="#efficacy" className="hover:text-blue-900">
            Efficacy
          </a>
          <a href="#roi" className="hover:text-blue-900">
            ROI
          </a>
          <a href="#lead" className="shrink-0">
            <Button variant="primary" className="!py-2 !px-4 text-sm inline-flex items-center gap-2">
              Request a Demo
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={mobileOpen ? closeMobile : openMobile}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-900 hover:bg-slate-100"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile panel (attached to top, below navbar) */}
      {mobileOpen && (
        <>
          {/* Overlay */}
          <div className="md:hidden fixed inset-0 top-16 z-40 bg-black/20" />

          <div
            ref={panelRef}
            className="md:hidden fixed left-0 right-0 top-16 z-50 border-t border-slate-200 bg-white shadow-lg"
          >
            <div className="mx-auto max-w-7xl px-6 py-4">
              <div className="mt-4 flex flex-col gap-4 text-base font-semibold text-slate-900">
                <a href="#why_slonig" onClick={closeMobile} className="hover:text-blue-900">
                  Why Slonig?
                </a>
                <a href="#how_it_works" onClick={closeMobile} className="hover:text-blue-900">
                  How It Works
                </a>
                <a href="#efficacy" onClick={closeMobile} className="hover:text-blue-900">
                  Efficacy
                </a>
                <a href="#roi" onClick={closeMobile} className="hover:text-blue-900">
                  ROI
                </a>

                <a href="#lead" onClick={closeMobile} className="shrink-0">
                  <Button
                    variant="primary"
                    className="w-full !py-2 !px-4 text-sm inline-flex items-center justify-center gap-2"
                  >
                    Request a Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;