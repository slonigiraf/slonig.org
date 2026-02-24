"use client";

import React, { useEffect, useState } from "react";
import { Layers, Menu, X } from "lucide-react";
import Button from "./Button";

export const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="#top"
          className="text-xl font-bold text-slate-900 flex items-center gap-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            closeMobile();
          }}
        >
          <Layers className="w-6 h-6 text-blue-900" />
          <span>
            Slonig<span className="text-blue-600">.org</span>
          </span>
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
            <Button
              variant="primary"
              className="!py-2 !px-4 text-sm inline-flex items-center gap-2"
            >
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
          {/* Click-away overlay */}
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={closeMobile}
            className="md:hidden fixed inset-0 top-[72px] z-40 bg-black/20"
          />

          <div className="md:hidden fixed left-0 right-0 top-[72px] z-50 border-t border-slate-200 bg-white shadow-lg">
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