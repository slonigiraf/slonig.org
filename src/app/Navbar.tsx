import React from "react";
import { Layers } from "lucide-react";
import Button from "./Button";

export const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
      <Layers className="w-6 h-6 text-blue-900" />
      <span>
        Slonig<span className="text-blue-600">.org</span>
      </span>
    </div>

    <div className="hidden md:flex gap-15 items-center text-lg font-bold text-slate-900">
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

    
  </nav>
);

export default Navbar;