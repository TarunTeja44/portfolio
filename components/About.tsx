import React from 'react';

const About: React.FC = () => {
  const skillCategories = [
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
    <section id="about" className="py-28 px-6 lg:px-12 bg-[#FAFAFA] border-t border-black/5">
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

          {/* Technical Arsenal Grid */}
          <div className="mt-16 pt-12 border-t border-black/10">
            <div className="flex items-center gap-3 mb-10 reveal">
              <span className="w-2 h-2 rounded-full bg-black" />
              <h3 className="font-sans font-bold text-2xl tracking-tight text-black uppercase">
                Technical Arsenal
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skillCategories.map((category, idx) => (
                <div 
                  key={idx} 
                  className={`p-6 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between reveal delay-${(idx + 1) * 100}`}
                >
                  <div className="border-b border-black/5 pb-4 mb-6 flex items-center justify-between">
                    <h4 className="font-sans font-semibold text-base text-black">{category.title}</h4>
                    <span className="font-mono text-xs text-black/30">0{idx + 1}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-black/[0.03] border border-black/[0.06] text-xs font-mono font-medium text-black/80 hover:bg-black hover:text-white hover:border-black transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;