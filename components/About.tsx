import React, { useState, useRef } from 'react';
import { Terminal, Play, CheckCircle2, Sparkles, Search, Cpu, Database, Server, Code2, BookOpen, Award, ArrowUpRight } from 'lucide-react';
import { SkillCategory } from '../types';
import { soundFx } from '../utils/sound';

const skillCategoriesData: SkillCategory[] = [
  {
    title: "AI & Languages",
    iconName: "code",
    skills: [
      { name: "Python", level: 95, highlighted: true },
      { name: "PyTorch", level: 90, highlighted: true },
      { name: "TensorFlow", level: 82 },
      { name: "C++", level: 85 },
      { name: "TypeScript", level: 90, highlighted: true },
      { name: "JavaScript", level: 92 },
      { name: "SQL", level: 88 }
    ]
  },
  {
    title: "Frameworks & UI",
    iconName: "cpu",
    skills: [
      { name: "React 19", level: 95, highlighted: true },
      { name: "Next.js", level: 88, highlighted: true },
      { name: "FastAPI", level: 90, highlighted: true },
      { name: "Flask", level: 85 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 86 },
      { name: "Vite", level: 92 }
    ]
  },
  {
    title: "Infrastructure & Tools",
    iconName: "database",
    skills: [
      { name: "Docker", level: 86, highlighted: true },
      { name: "Git & GitHub", level: 94, highlighted: true },
      { name: "PostgreSQL", level: 88 },
      { name: "AWS Cloud", level: 80 },
      { name: "Linux / POSIX", level: 90 },
      { name: "REST & WebSockets", level: 92 },
      { name: "HuggingFace", level: 88 }
    ]
  }
];

const SANDBOX_RUNS = {
  nlp: {
    title: "NLP Claim Fact-Checker",
    cmd: "python fact_verify.py --claim 'AI models reduce urban congestion by 30%'",
    logs: [
      "[INFO] Loading fine-tuned RoBERTa transformer weights...",
      "[TOKENIZER] Encoded 14 subword tokens (vocab_size=50265)",
      "[ATTENTION] Cross-verifying claims against knowledge graph...",
      "[RESULT] Confidence Score: 94.8% Verified Fact",
      "[INFERENCE] Latency: 18.4ms · GPU VRAM: 320MB",
      "✓ Claim verified with 0 hallucinations."
    ]
  },
  astar: {
    title: "NaviFlow A* Traffic Solver",
    cmd: "python route_optimize.py --source 'Node_42' --dest 'Node_899'",
    logs: [
      "[GRAPH] Loaded metropolitan graph: 45,210 nodes, 98,400 edges",
      "[ASTAR] Evaluating heuristic: Euclidean distance + density penalty",
      "[OPTIMIZE] Rerouting around corridor #14 (severe congestion detected)",
      "[OUTPUT] Optimal path found: 14.2 km · Estimated time: 18 mins",
      "[BENCHMARK] Traversal time: 6.2ms · Cost reduction: -31.4%",
      "✓ Route broadcasted to navigation mesh."
    ]
  },
  geo: {
    title: "Geospatial Dispatch Engine",
    cmd: "python emergency_dispatch.py --lat 17.3850 --lng 78.4867",
    logs: [
      "[GEO] Acquired user coordinates: (17.3850° N, 78.4867° E)",
      "[INDEX] Spatial R-Tree query across 500+ registered emergency squads...",
      "[DISPATCH] Nearest verified hospital squad #104 located (1.4 km)",
      "[BROADCAST] Low-latency socket payload transmitted via WebSocket",
      "[STATUS] Responder ETA: 4.5 mins · Channel established",
      "✓ Emergency protocol handshake complete."
    ]
  }
};

const Floating3DCard: React.FC<{
  category: SkillCategory;
  idx: number;
  searchQuery: string;
}> = ({ category, idx, searchQuery }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = -((y - centerY) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFx.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare(prev => ({ ...prev, opacity: 0 }));
  };

  const floatClasses = ['animate-float-1', 'animate-float-2', 'animate-float-3'];
  const floatClass = floatClasses[idx % floatClasses.length];

  return (
    <div className={`relative [perspective:1200px] reveal delay-${(idx + 1) * 100}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(28px) scale3d(1.02, 1.02, 1.02)`
            : undefined,
          transition: isHovered
            ? 'transform 0.1s ease-out, box-shadow 0.2s ease-out'
            : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease-out',
        }}
        className={`
          ${!isHovered ? floatClass : ''}
          relative p-7 rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/10
          shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-emerald-500/40 hover:shadow-[0_25px_60px_rgba(16,185,129,0.15)]
          preserve-3d cursor-pointer overflow-hidden flex flex-col justify-between min-h-[300px]
        `}
      >
        {/* Dynamic Specular Light Glare */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 240px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.25), transparent 80%)`,
            opacity: glare.opacity,
          }}
        />

        {/* 3D Elevated Header */}
        <div 
          className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between transition-transform duration-300"
          style={{ transform: 'translateZ(26px)' }}
        >
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <h4 className="font-sans font-bold text-lg text-white tracking-tight">{category.title}</h4>
          </div>
          <span className="font-mono text-xs font-semibold text-emerald-400/80 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            0{idx + 1}
          </span>
        </div>
        
        {/* 3D Elevated Skill Pills */}
        <div 
          className="flex flex-wrap gap-2.5 transition-transform duration-300"
          style={{ transform: 'translateZ(34px)' }}
        >
          {category.skills.map((skill) => {
            const isMatched = searchQuery
              ? skill.name.toLowerCase().includes(searchQuery.toLowerCase())
              : true;

            return (
              <span
                key={skill.name}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 cursor-default ${
                  isMatched
                    ? skill.highlighted
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                      : 'bg-white/5 text-white/90 border border-white/10 hover:bg-white/15'
                    : 'opacity-25 bg-white/5 border border-transparent'
                }`}
              >
                {skill.name}
              </span>
            );
          })}
        </div>

        {/* Bottom Level Indicator */}
        <div 
          className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-white/40 uppercase tracking-wider"
          style={{ transform: 'translateZ(18px)' }}
        >
          <span>Production Proven</span>
          <span className="text-emerald-400">● 100% Tested</span>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [activeSandbox, setActiveSandbox] = useState<'nlp' | 'astar' | 'geo'>('nlp');
  const [isRunning, setIsRunning] = useState(false);
  const [visibleLogs, setVisibleLogs] = useState<string[]>(SANDBOX_RUNS.nlp.logs);
  const [searchQuery, setSearchQuery] = useState('');

  const runSimulation = (key: 'nlp' | 'astar' | 'geo') => {
    soundFx.playClick();
    setActiveSandbox(key);
    setIsRunning(true);
    setVisibleLogs([]);

    const fullLogs = SANDBOX_RUNS[key].logs;
    fullLogs.forEach((log, index) => {
      setTimeout(() => {
        setVisibleLogs(prev => [...prev, log]);
        soundFx.playHover();
        if (index === fullLogs.length - 1) {
          setIsRunning(false);
          soundFx.playSuccess();
        }
      }, (index + 1) * 220);
    });
  };

  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-black text-white relative z-10 overflow-hidden border-t border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-1/3 -right-60 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 reveal">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Identity & Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Profile & Stack
            </h2>
          </div>
          <span className="font-mono text-xs text-white/40 tracking-wider">
            COMPUTER SCIENCE SOPHOMORE @ 2024–2028
          </span>
        </div>

        {/* Narrative & Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Quick Profile Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-6 shadow-2xl reveal">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Academic Status</span>
              <p className="font-sans text-xl font-bold text-white">B.Tech Computer Science</p>
              <p className="font-mono text-xs text-emerald-400">Class of 2028 · 2nd Year Undergrad</p>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-1">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Primary Specialization</span>
              <p className="font-sans text-base font-semibold text-white">Machine Learning & NLP Pipelines</p>
            </div>

            <div className="border-t border-white/10 pt-5 space-y-1">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Geographic Base</span>
              <p className="font-sans text-base font-semibold text-white">India · Open for Remote Roles</p>
            </div>

            <div className="border-t border-white/10 pt-5">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Actively seeking Summer/Fall 2025 Internships</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-8 space-y-6 reveal delay-100">
            <p className="font-sans text-2xl sm:text-3xl lg:text-4xl font-light text-white/90 leading-snug">
              I view software engineering as a discipline of <span className="font-semibold text-emerald-400">continuous feedback loops</span> — translating mathematical rigor into robust, production-grade applications.
            </p>

            <div className="font-sans text-sm sm:text-base font-light leading-relaxed text-white/75 space-y-4 max-w-3xl">
              <p>
                As a second-year engineering student, my focus extends beyond academic textbooks. I build real-world software across Transformer-based NLP, algorithmic routing graph networks, and high-concurrency API services.
              </p>
              <p>
                My university coursework delivers fundamental depth in <span className="text-white font-medium">Linear Algebra, Probability, and Data Structures</span>, while my independent projects train me to ship, benchmark, and scale fullstack intelligence tools.
              </p>
            </div>
          </div>
        </div>

        {/* 3D Floating Technical Arsenal with Live Search */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 reveal">
            <div className="flex items-center gap-3">
              <Cpu className="w-5 h-5 text-emerald-400" />
              <h3 className="font-sans font-bold text-2xl tracking-tight text-white uppercase">
                Technical Arsenal
              </h3>
            </div>

            {/* Real-time Filter Search */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter stack (e.g. Python, PyTorch)..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs font-mono text-white placeholder-white/30 focus:border-emerald-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {skillCategoriesData.map((category, idx) => (
              <Floating3DCard 
                key={category.title}
                category={category}
                idx={idx}
                searchQuery={searchQuery}
              />
            ))}
          </div>
        </div>

        {/* Interactive Live AI & Systems Sandbox Simulator */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl space-y-6 shadow-2xl reveal">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                <Terminal className="w-4 h-4" />
                <span>Interactive Runtime Sandbox</span>
              </div>
              <h4 className="font-sans text-xl font-bold text-white">
                Live Backend Simulator
              </h4>
            </div>

            {/* Switch Simulation Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => runSimulation('nlp')}
                disabled={isRunning}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeSandbox === 'nlp'
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                1. NLP Detector
              </button>

              <button
                onClick={() => runSimulation('astar')}
                disabled={isRunning}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeSandbox === 'astar'
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                2. Graph Pathfinder
              </button>

              <button
                onClick={() => runSimulation('geo')}
                disabled={isRunning}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeSandbox === 'geo'
                    ? 'bg-emerald-500 text-black font-bold'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                3. Dispatch Protocol
              </button>
            </div>
          </div>

          {/* Terminal Console Output */}
          <div className="p-5 rounded-2xl bg-[#090909] border border-white/10 font-mono text-xs space-y-2.5 overflow-hidden">
            <div className="flex items-center justify-between text-white/40 pb-2 border-b border-white/5 text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {SANDBOX_RUNS[activeSandbox].title}
              </span>
              <span>{SANDBOX_RUNS[activeSandbox].cmd}</span>
            </div>

            <div className="space-y-1.5 min-h-[140px] pt-2">
              {visibleLogs.map((log, lIdx) => (
                <div 
                  key={lIdx} 
                  className={`animate-in fade-in duration-200 ${
                    log.startsWith('✓') ? 'text-emerald-400 font-bold' : log.includes('RESULT') || log.includes('OUTPUT') ? 'text-amber-300' : 'text-white/80'
                  }`}
                >
                  {log}
                </div>
              ))}
              {isRunning && (
                <div className="text-emerald-400/80 animate-pulse">
                  ➜ executing neural layers...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;