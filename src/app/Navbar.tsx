"use client";

import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import Button from "./Button";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const openMobile = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileOpen(true);
  }, []);

  const navTo = useCallback(
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeMobile();

      if (hash === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      {/* Navbar row */}
      <div className="flex h-16 items-center justify-between px-6 py-2">
        {/* Brand */}
        <a href="#top" className="flex items-center" onClick={navTo("#top")}>
          <img src="/named-logo.svg" alt="Slonig" className="h-10 w-auto md:h-10" />
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-12 items-center text-lg font-bold text-slate-900">
          <a href="#why_slonig" className="hover:text-blue-900" onClick={navTo("#why_slonig")}>
            Why Slonig?
          </a>
          <a href="#how_it_works" className="hover:text-blue-900" onClick={navTo("#how_it_works")}>
            How It Works
          </a>
          <a href="#efficacy" className="hover:text-blue-900" onClick={navTo("#efficacy")}>
            Efficacy
          </a>
          <a href="#roi" className="hover:text-blue-900" onClick={navTo("#roi")}>
            ROI
          </a>
          <a href="#lead" className="shrink-0" onClick={navTo("#lead")}>
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

      {/* Mobile menu via portal (fixes overlay click issues caused by stacking contexts) */}
      {mounted && mobileOpen
        ? createPortal(
            <div className="md:hidden fixed inset-0 z-[9999]">
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/20"
                onClick={closeMobile}
                aria-label="Close menu overlay"
                role="button"
              />

              {/* Panel (stop click bubbling so it doesn't close immediately) */}
              <div
                className="absolute left-0 right-0 top-16 border-t border-slate-200 bg-white shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mx-auto max-w-7xl px-6 py-4">
                  <div className="mt-4 flex flex-col gap-4 text-base font-semibold text-slate-900">
                    <a href="#why_slonig" className="hover:text-blue-900" onClick={navTo("#why_slonig")}>
                      Why Slonig?
                    </a>
                    <a href="#how_it_works" className="hover:text-blue-900" onClick={navTo("#how_it_works")}>
                      How It Works
                    </a>
                    <a href="#efficacy" className="hover:text-blue-900" onClick={navTo("#efficacy")}>
                      Efficacy
                    </a>
                    <a href="#roi" className="hover:text-blue-900" onClick={navTo("#roi")}>
                      ROI
                    </a>

                    <a href="#lead" className="shrink-0" onClick={navTo("#lead")}>
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
            </div>,
            document.body
          )
        : null}
    </nav>
  );
};

export default Navbar;