import React, { useState, useRef } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const FloatingArsenalCard: React.FC<{
  category: SkillCategory;
  idx: number;
}> = ({ category, idx }) => {
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
    
    const rotateX = -((y - centerY) / centerY) * 14;
    const rotateY = ((x - centerX) / centerX) * 14;
    
    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const floatClasses = ['animate-float-1', 'animate-float-2', 'animate-float-3'];
  const floatClass = floatClasses[idx % floatClasses.length];

  return (
    <div 
      className={`relative [perspective:1200px] reveal delay-${(idx + 1) * 100}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(30px) scale3d(1.03, 1.03, 1.03)`
            : undefined,
          transition: isHovered
            ? 'transform 0.1s ease-out, box-shadow 0.2s ease-out'
            : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease-out',
        }}
        className={`
          ${!isHovered ? floatClass : ''}
          relative p-7 rounded-3xl bg-white/95 backdrop-blur-xl border border-black/[0.08]
          shadow-[0_15px_35px_-10px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)]
          hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.18),0_10px_20px_-5px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.08)]
          preserve-3d cursor-pointer overflow-hidden flex flex-col justify-between min-h-[260px]
        `}
      >
        {/* Dynamic Specular 3D Glare */}
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 220px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.9), transparent 80%)`,
            opacity: glare.opacity,
          }}
        />

        {/* 3D Elevated Header */}
        <div 
          className="border-b border-black/5 pb-4 mb-6 flex items-center justify-between transition-transform duration-300"
          style={{ transform: 'translateZ(26px)' }}
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-black/80" />
            <h4 className="font-sans font-semibold text-lg tracking-tight text-black">{category.title}</h4>
          </div>
          <span className="font-mono text-xs font-semibold text-black/30 px-2 py-0.5 rounded-md bg-black/[0.03]">
            0{idx + 1}
          </span>
        </div>
        
        {/* 3D Elevated Skill Pills */}
        <div 
          className="flex flex-wrap gap-2.5 transition-transform duration-300"
          style={{ transform: 'translateZ(34px)' }}
        >
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="px-3.5 py-1.5 rounded-xl bg-black/[0.03] border border-black/[0.08] text-xs font-mono font-medium text-black/85 shadow-sm hover:bg-black hover:text-white hover:border-black hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Subtle 3D Depth Floor Accent */}
        <div 
          className="mt-6 pt-3 flex justify-between items-center text-[10px] font-mono text-black/30 tracking-widest uppercase"
          style={{ transform: 'translateZ(18px)' }}
        >
          <span>Production Ready</span>
          <span className="text-black/50">● Active</span>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frameworks",
      skills: ["TensorFlow", "PyTorch", "React", "Next.js", "Tailwind CSS"]
    },
    {
      title: "Tools & Infra",
      skills: ["Docker", "Git", "AWS", "Linux", "PostgreSQL", "Vite"]
    }
  ];

  return (
    <section id="about" className="py-28 px-6 lg:px-12 bg-[#FAFAFA] border-t border-black/5 overflow-hidden">
      {/* Editorial Header */}
      <div className="border-b border-black/15 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 reveal">
        <div>
          <span className="font-mono text-xs text-black/40 uppercase tracking-[0.25em] block mb-2">Background</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Profile & Stack</h2>
        </div>
        <span className="font-mono text-xs text-black/50 tracking-wider">
          COMPUTER SCIENCE UNDERGRADUATE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Quick Facts (Sticky) */}
        <div className="lg:col-span-4 flex flex-col justify-start lg:sticky lg:top-28 h-fit space-y-6">
          <div className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm space-y-6">
            <div className="reveal delay-100">
              <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest block mb-1">Education</span>
              <p className="font-sans text-base font-semibold text-black">B.Tech Computer Science</p>
              <p className="text-xs text-black/50 mt-0.5">2024 — 2028 (Expected)</p>
            </div>

            <div className="border-t border-black/5 pt-5 reveal delay-200">
              <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest block mb-1">Current Focus</span>
              <p className="font-sans text-base font-semibold text-black">Machine Learning & Scalable AI</p>
            </div>

            <div className="border-t border-black/5 pt-5 reveal delay-300">
              <span className="font-mono text-[10px] text-black/40 uppercase tracking-widest block mb-1">Location</span>
              <p className="font-sans text-base font-semibold text-black">India (Open to Remote / Relocation)</p>
            </div>
          </div>
        </div>

        {/* Right Column: Narrative & Technical Arsenal */}
        <div className="lg:col-span-8">
          {/* Manifesto / Bio */}
          <div className="mb-20">
            <p className="font-sans text-2xl sm:text-3xl lg:text-4xl leading-snug font-light text-black mb-10 reveal">
              I believe that <span className="font-medium text-black">learning</span> is a continuous feedback loop. As a Computer Science sophomore, I focus on bridging the gap between mathematical foundations and high-performance applications.
            </p>

            <div className="font-sans text-sm sm:text-base font-light leading-relaxed text-black/75 space-y-5 max-w-2xl reveal delay-100">
              <p>
                Currently in my second year of engineering, I invest my time outside of lectures architecting real-world tools. I am fascinated by the inner mechanics of Large Language Models and transformer pipelines, alongside efficient backend architectures.
              </p>
              <p>
                My coursework solidifies theoretical rigor — Linear Algebra, Probability, Algorithm Design — while practical development challenges me to build scalable, production-ready software.
              </p>
            </div>
          </div>

          {/* 3D Floating Technical Arsenal Grid */}
          <div className="mt-16 pt-12 border-t border-black/10">
            <div className="flex items-center justify-between mb-10 reveal">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-black" />
                <h3 className="font-sans font-bold text-2xl tracking-tight text-black uppercase">
                  Technical Arsenal
                </h3>
              </div>
              <span className="font-mono text-[11px] text-black/40 uppercase tracking-wider hidden sm:block">
                Interactive 3D Perspective
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
              {skillCategories.map((category, idx) => (
                <FloatingArsenalCard 
                  key={category.title}
                  category={category}
                  idx={idx}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;