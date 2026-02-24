import React from "react";
import { Layers, ArrowRight } from "lucide-react";
import Button from "./Button";

export const Navbar: React.FC = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
      <Layers className="w-6 h-6 text-blue-900" />
      <span>
        Slonig<span className="text-blue-600">.org</span>
      </span>
    </div>

    <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
      <a href="#problem" className="hover:text-blue-900">
        The Challenge
      </a>
      <a href="#solution" className="hover:text-blue-900">
        How It Works
      </a>
      <a href="#impact" className="hover:text-blue-900">
        ROI
      </a>
      <a href="#lead" className="hover:text-blue-900">
        Get a Demo
      </a>
    </div>

    <a href="#lead" className="shrink-0">
      <Button variant="primary" className="!py-2 !px-4 text-sm inline-flex items-center gap-2">
        Request Consult <ArrowRight className="w-4 h-4" />
      </Button>
    </a>
  </nav>
);

export default Navbar;