import React from 'react';
import { ArrowDown, ArrowUpRight, Github, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto border-b border-neutral-200">
      {/* Top Meta Strip */}
      <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-neutral-500 mb-8 reveal">
        <span className="px-2.5 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-800 font-medium">
          Seeking 2025 Internships
        </span>
        <span>·</span>
        <span>B.Tech Computer Science (2024–2028)</span>
      </div>

      {/* Main Headline */}
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1] reveal">
          Tarun Teja P.
        </h1>

        <p className="text-xl sm:text-2xl font-light text-neutral-700 leading-relaxed reveal">
          Computer Science sophomore building intelligent software, NLP verification pipelines, and scalable backend systems.
        </p>

        <p className="text-sm sm:text-base font-normal text-neutral-500 leading-relaxed max-w-2xl reveal">
          Currently exploring transformer architectures, dynamic graph pathfinding, and geospatial services. Balancing academic mathematical foundations with practical, open-source engineering.
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-4 text-xs font-mono uppercase tracking-wider reveal">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            <span>View Projects</span>
            <ArrowDown className="w-3.5 h-3.5" />
          </a>

          <a
            href="https://github.com/TarunTeja44"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-neutral-300 text-neutral-700 hover:border-black hover:text-black transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>

          <a
            href="mailto:puligilatarunteja@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-neutral-300 text-neutral-700 hover:border-black hover:text-black transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;