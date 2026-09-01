import React, { useState, useRef } from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "01",
    title: "RealNews.ai",
    description: "Misinformation Detection System powered by Transformer NLP architectures",
    tags: ["NLP", "Transformers", "React", "Python"],
    imageUrl: "https://i.postimg.cc/sf07TgXy/realnews.png",
    link: "https://realnews.ai",
    github: "https://github.com/TarunTeja44"
  },
  {
    id: "02",
    title: "NaviFlow",
    description: "Adaptive Urban Traffic Optimization Engine with dynamic pathfinding",
    tags: ["Graph Algorithms", "Google Maps API", "ML", "FastAPI"],
    imageUrl: "https://i.postimg.cc/Bvc2p58V/naviflow.png",
    link: "https://github.com/TarunTeja44",
    github: "https://github.com/TarunTeja44"
  },
  {
    id: "03",
    title: "Emergency Hotlines",
    description: "Real-time Geospatial Emergency Services Aggregator with low latency dispatch",
    tags: ["Geolocation", "Flask", "React", "PostgreSQL"],
    imageUrl: "https://i.postimg.cc/7LvNmYKX/emergency.png",
    github: "https://github.com/TarunTeja44"
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (previewRef.current) {
      const x = e.clientX;
      const y = e.clientY;
      previewRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (!target.src.includes('placehold.co')) {
      target.src = "https://placehold.co/800x600/f4f4f4/111111.png?text=Preview+Available";
    }
  };

  return (
    <section 
      id="projects" 
      className="py-28 px-6 lg:px-12 bg-white relative z-10 overflow-hidden" 
      onMouseMove={handleMouseMove}
    >
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 reveal">
        <div>
          <span className="font-mono text-xs text-black/40 uppercase tracking-[0.25em] block mb-2">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Selected Works</h2>
        </div>
        <span className="font-mono text-xs text-black/50 tracking-wider">
          2023 — 2025 · 03 PROJECTS
        </span>
      </div>

      {/* Project Rows */}
      <div className="flex flex-col border-t border-black/15 relative z-20">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="group relative border-b border-black/10 py-10 lg:py-14 flex flex-col lg:flex-row lg:items-center justify-between gap-6 cursor-pointer transition-all duration-300 hover:bg-black/[0.015] px-2 md:px-4 reveal"
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
            onClick={() => project.link ? window.open(project.link, '_blank') : window.open(project.github, '_blank')}
          >
            <div className="flex items-baseline gap-6 lg:gap-12">
              <span className="font-mono text-xs font-semibold text-black/30 group-hover:text-black transition-colors">
                {project.id}
              </span>
              <h3 className="font-sans font-medium text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black transition-transform duration-300 group-hover:translate-x-3">
                {project.title}
              </h3>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-10 lg:text-right">
              <p className="font-sans text-xs sm:text-sm font-light text-black/60 max-w-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-1.5">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-[11px] font-mono text-black/60 px-2.5 py-1 rounded-full border border-black/10 bg-white group-hover:border-black/25 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300 self-start sm:self-auto shrink-0">
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cursor Preview */}
      <div 
        ref={previewRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
        style={{ 
          willChange: 'transform',
          transition: 'transform 0.08s ease-out' 
        }}
      >
        <div 
          className={`
            relative -translate-x-1/2 -translate-y-1/2 w-[380px] h-[240px] 
            bg-white/90 backdrop-blur-xl p-2 rounded-2xl shadow-2xl border border-black/10
            transition-all duration-300 ease-out origin-center
            ${activeProject ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
          `}
        >
          <div className="relative w-full h-full overflow-hidden rounded-xl bg-gray-100">
            {projects.map((project) => (
              <img 
                key={project.id}
                src={project.imageUrl} 
                alt={project.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  activeProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
                onError={handleImageError}
              />
            ))}
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/85 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
            <span className="text-[10px] font-mono uppercase tracking-wider whitespace-nowrap">Open Case Study</span>
            <ArrowUpRight className="w-3 h-3" />
          </div>
        </div>
      </div>
      
      {/* Archive Link */}
      <div className="mt-16 text-center reveal">
        <a 
          href="https://github.com/TarunTeja44" 
          target="_blank" 
          rel="noreferrer" 
          className="inline-flex items-center gap-2 font-mono text-xs text-black/60 uppercase tracking-widest hover:text-black transition-colors py-2 border-b border-black/20 hover:border-black"
        >
          <span>Explore GitHub Repositories</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};

export default Projects;