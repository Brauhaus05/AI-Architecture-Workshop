import { motion } from "motion/react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-grid-line">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="size-6 bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-background-dark text-lg font-bold">
                architecture
              </span>
            </div>
            <span className="font-display font-bold text-lg tracking-tight uppercase">
              A.I. ARCHITECT
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-[10px] text-muted tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="text-primary">●</span> NEXT_COHORT: MAY_2026
            </span>
            <span className="flex items-center gap-2">
              <span className="text-primary">●</span> LIMITED_SPOTS
            </span>
          </div>
        </div>
        <nav className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs tracking-tighter uppercase">
            <a
              className="hover:text-primary transition-colors"
              href="#curriculum"
            >
              CURRICULUM
            </a>
            <a className="hover:text-primary transition-colors" href="#stack">
              TECH_STACK
            </a>
            <a
              className="hover:text-primary transition-colors"
              href="#instructor"
            >
              INSTRUCTOR
            </a>
          </div>
          <button className="bg-primary text-white font-mono text-xs font-bold px-6 py-2 hover:brightness-110 transition-all">
            APPLY NOW_
          </button>
        </nav>
      </div>
    </header>
  );
}
