import React, { useState, useEffect } from 'react';
import { ArrowDownRight, Terminal, Sparkles, Github, ArrowUpRight, Cpu, Compass } from 'lucide-react';
import { soundFx } from '../utils/sound';

const CYPHERS = "ABCDEF0123456789_<>!*[]#";

const TextScramble: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const scramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);
    soundFx.playHover();
    let iteration = 0;
    const maxIterations = text.length * 2.5;

    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 2.5) {
              return text[index];
            }
            return CYPHERS[Math.floor(Math.random() * CYPHERS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsScrambling(false);
      }
      iteration++;
    }, 28);
  };

  useEffect(() => {
    // Initial scramble on mount
    const timer = setTimeout(scramble, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span 
      onMouseEnter={scramble}
      className={`cursor-pointer inline-block transition-colors ${className}`}
    >
      {displayText}
    </span>
  );
};

const Hero: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);

  const heroMetrics = [
    { label: "Systems Shipped", value: "03+", desc: "NLP, Traffic, Emergency" },
    { label: "Core Stack", value: "PyTorch & React", desc: "Fullstack Intelligence" },
    { label: "Academic Standing", value: "2024–2028", desc: "B.Tech Computer Science" },
    { label: "Inference Target", value: "< 25ms", desc: "Low-Latency Architectures" },
  ];

  return (
    <section className="min-h-[100dvh] flex flex-col justify-between px-6 lg:px-12 pt-28 pb-10 relative overflow-hidden bg-black text-white selection:bg-emerald-500 selection:text-black">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-emerald-500/[0.07] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 rounded-full bg-cyan-500/[0.05] blur-[140px] pointer-events-none" />

      {/* Top Status & Terminal HUD */}
      <div className="reveal flex flex-wrap items-center justify-between gap-4 z-10">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-white/90 font-mono text-[11px] uppercase tracking-wider">
            Available for 2025 AI / Software Internships
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-white/40">
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-emerald-400" />
            <span>tarunteja@dev:~$ ready</span>
          </span>
          <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60">
            India · UTC+5:30
          </span>
        </div>
      </div>

      {/* Main Kinetic Typography Composition */}
      <div className="my-auto py-10 relative z-10">
        <div className="flex flex-col">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 reveal">
            <div className="h-[1px] w-8 bg-emerald-400/80" />
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-[0.3em]">
              Artificial Intelligence & Systems
            </span>
          </div>

          {/* Primary Giant Title */}
          <h1 className="text-[14vw] sm:text-[12vw] lg:text-[10.5vw] leading-[0.82] font-black tracking-[-0.04em] uppercase select-none reveal delay-100">
            <TextScramble text="ENGINEERING" className="hover:text-emerald-400 transition-colors" />
          </h1>

          {/* Secondary Title + Narrative Block */}
          <div className="flex flex-col lg:flex-row lg:items-baseline justify-between gap-8 mt-3">
            <h2 className="text-[14vw] sm:text-[12vw] lg:text-[10.5vw] leading-[0.82] font-extralight tracking-[-0.03em] text-white/70 uppercase select-none reveal delay-200">
              <TextScramble text="STUDENT" className="hover:text-white transition-colors" />
            </h2>

            <div className="max-w-md space-y-4 reveal delay-300 lg:text-right">
              <p className="font-sans text-sm sm:text-base font-light text-white/75 leading-relaxed">
                Hi, I'm <span className="font-semibold text-white">Tarun Teja P.</span> — a Computer Science sophomore building scalable machine learning pipelines, NLP detectors, and real-time backend systems.
              </p>
              
              {/* Magnetic Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 lg:justify-end pt-2">
                <a
                  href="#projects"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 active:scale-[0.97] shadow-[0_0_30px_rgba(16,185,129,0.35)]"
                >
                  <span>Explore Systems</span>
                  <ArrowDownRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/TarunTeja44"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  onMouseEnter={() => soundFx.playHover()}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-mono text-xs uppercase tracking-wider transition-all active:scale-[0.97]"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/40" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Interactive Metrics HUD */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-white/10 relative z-10 reveal delay-400">
        {heroMetrics.map((metric, idx) => (
          <div
            key={idx}
            onMouseEnter={() => {
              setActiveMetric(idx);
              soundFx.playHover();
            }}
            onMouseLeave={() => setActiveMetric(null)}
            className={`p-4 rounded-2xl border transition-all duration-300 cursor-default ${
              activeMetric === idx
                ? 'bg-white/[0.08] border-emerald-500/40 translate-y-[-2px] shadow-lg'
                : 'bg-white/[0.02] border-white/5 hover:border-white/20'
            }`}
          >
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
              {metric.label}
            </span>
            <div className="flex items-baseline justify-between">
              <span className="font-sans font-bold text-lg sm:text-xl text-white">
                {metric.value}
              </span>
              <span className="font-mono text-[10px] text-emerald-400/80">
                {metric.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;