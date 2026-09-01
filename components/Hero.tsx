import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col justify-between px-6 lg:px-12 pt-28 pb-12 relative overflow-hidden bg-white selection:bg-black selection:text-white">
      {/* Background Architectural Grid Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-black/[0.04] hidden lg:block pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-black/[0.04] pointer-events-none" />

      {/* Top Status Strip */}
      <div className="reveal flex items-center justify-between z-10">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-black/10 bg-black/[0.02] text-xs font-medium tracking-wide">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-black/80 font-mono text-[11px] uppercase tracking-wider">Available for Internships · 2025</span>
        </div>

        <span className="hidden sm:block font-mono text-xs text-black/40 tracking-wider">
          EST. 2004 — IN
        </span>
      </div>

      {/* Centerpiece Typographic Composition */}
      <div className="my-auto py-12 relative z-10">
        <div className="flex flex-col">
          <h1 className="text-[13vw] sm:text-[12vw] lg:text-[11vw] leading-[0.85] font-black tracking-[-0.04em] text-black uppercase reveal delay-100 select-none">
            Engineering
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-6 mt-2">
            <h2 className="text-[13vw] sm:text-[12vw] lg:text-[11vw] leading-[0.85] font-extralight tracking-[-0.03em] text-black/75 uppercase reveal delay-200 select-none">
              Student
            </h2>
            <p className="max-w-md font-sans text-sm sm:text-base font-light text-black/70 leading-relaxed reveal delay-300 lg:text-right">
              Crafting intelligent software at the intersection of <span className="font-medium text-black">Computer Science</span> and <span className="font-medium text-black">Artificial Intelligence</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Metrics Strip */}
      <div className="flex flex-wrap items-end justify-between gap-6 pt-6 border-t border-black/10 relative z-10 reveal delay-400">
        <div className="flex gap-10 sm:gap-16 font-sans text-xs">
          <div>
            <span className="block font-mono text-[10px] text-black/40 uppercase tracking-widest mb-1">Focus</span>
            <span className="font-medium text-black">Machine Learning & Systems</span>
          </div>
          <div>
            <span className="block font-mono text-[10px] text-black/40 uppercase tracking-widest mb-1">Degree</span>
            <span className="font-medium text-black">B.Tech CSE (2024–2028)</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-black/40 uppercase tracking-widest">
          <span>Scroll to explore</span>
          <span className="animate-bounce">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;