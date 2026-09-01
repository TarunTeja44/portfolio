import React from 'react';

const About: React.FC = () => {
  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "React", "Next.js", "FastAPI", "Flask", "Tailwind CSS"]
    },
    {
      category: "Tools & Infrastructure",
      skills: ["Docker", "Git", "Linux", "AWS", "PostgreSQL", "Vite"]
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto border-b border-neutral-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 reveal">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Background & Technical Skills
        </h2>
        <span className="text-xs font-mono text-neutral-400">
          Profile
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Academic & Bio */}
        <div className="md:col-span-6 space-y-8 reveal">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-black">
              Engineering Foundations
            </h3>
            <p className="text-sm sm:text-base font-normal text-neutral-600 leading-relaxed">
              I am currently a second-year undergraduate pursuing a Bachelor of Technology in Computer Science (2024–2028) in India.
            </p>
            <p className="text-sm sm:text-base font-normal text-neutral-600 leading-relaxed">
              My engineering approach centers on understanding theoretical underpinnings — linear algebra, statistics, and graph theory — and applying them to architect reliable software systems.
            </p>
          </div>

          <div className="p-5 rounded-lg bg-neutral-50 border border-neutral-200 space-y-3 text-xs font-mono">
            <div className="flex justify-between pb-2 border-b border-neutral-200">
              <span className="text-neutral-500">Status</span>
              <span className="text-black font-medium">Undergraduate (Year 2)</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-neutral-200">
              <span className="text-neutral-500">Major</span>
              <span className="text-black font-medium">Computer Science</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-neutral-200">
              <span className="text-neutral-500">Timeline</span>
              <span className="text-black font-medium">2024 — 2028</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-500">Focus</span>
              <span className="text-black font-medium">AI / Machine Learning</span>
            </div>
          </div>
        </div>

        {/* Right Column: Skills Stack */}
        <div className="md:col-span-6 space-y-8 reveal delay-100">
          <h3 className="text-2xl font-bold tracking-tight text-black">
            Technical Stack
          </h3>

          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.category} className="space-y-2.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-medium">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded text-xs font-mono text-neutral-800 bg-neutral-100 border border-neutral-200 hover:border-neutral-400 transition-colors"
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
    </section>
  );
};

export default About;