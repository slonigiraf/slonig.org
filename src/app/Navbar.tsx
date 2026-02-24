import React from "react";
import { Layers, Menu, X } from "lucide-react";
import Button from "./Button";

export const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 w-full max-w-full overflow-x-clip bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="flex items-center justify-between px-6 py-4">
      {/* Brand */}
      <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
        <Layers className="w-6 h-6 text-blue-900" />
        <span>
          Slonig<span className="text-blue-600">.org</span>
        </span>
      </div>

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

      {/* Mobile menu (SSR-friendly, no JS) */}
      <details className="md:hidden group">
        <summary
          aria-label="Toggle menu"
          className="list-none cursor-pointer inline-flex items-center justify-center rounded-lg p-2 text-slate-900 hover:bg-slate-100"
        >
          <Menu className="w-6 h-6 group-open:hidden" />
          <X className="w-6 h-6 hidden group-open:block" />
        </summary>

        {/* Use fixed positioning to avoid horizontal overflow on mobile */}
        <div className="fixed left-4 right-4 top-[72px] rounded-xl border border-slate-200 bg-white/95 backdrop-blur-md shadow-lg p-4">
          <div className="flex flex-col gap-4 text-base font-semibold text-slate-900">
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
                className="w-full !py-2 !px-4 text-sm inline-flex items-center justify-center gap-2"
              >
                Request a Demo
              </Button>
            </a>
          </div>
        </div>
      </details>
    </div>
  </nav>
);

export default Navbar;