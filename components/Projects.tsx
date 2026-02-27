import React, { useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "1",
    title: "RealNews.ai",
    description: "Misinformation Detection System",
    tags: ["NLP", "Transformers", "React"],
    imageUrl: "https://i.postimg.cc/sf07TgXy/realnews.png",
    link: "https://realnews.ai"
  },
  {
    id: "2",
    title: "NaviFlow",
    description: "Traffic Optimization",
    tags: ["Pathfinding", "Google Maps API", "ML"],
    imageUrl: "https://i.postimg.cc/Bvc2p58V/naviflow.png",
    link: "https://github.com/TarunTeja44"
  },
  {
    id: "3",
    title: "Emergency Hotlines",
    description: "Emergency Services Aggregator",
    tags: ["Geolocation", "Flask", "React"],
    imageUrl: "https://i.postimg.cc/7LvNmYKX/emergency.png",
    github: "https://github.com/TarunTeja44"
  }
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (previewRef.current) {
        // Move the preview container to follow cursor
        // We use plain DOM manipulation for performance to avoid re-renders on every pixel
        const x = e.clientX;
        const y = e.clientY;
        
        previewRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.currentTarget;
    if (!target.src.includes('placehold.co')) {
        target.src = "https://placehold.co/800x600/e5e5e5/333333.png?text=Image+Unavailable";
    }
  };

  return (
    <section 
        id="projects" 
        className="py-24 px-0 bg-white relative z-10 overflow-hidden" 
        onMouseMove={handleMouseMove}
    >
      <div className="px-6 lg:px-10 mb-12 flex items-end justify-between reveal">
         <h2 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gray-400">Selected Works (2023-2025)</h2>
         <span className="hidden md:block font-serif italic text-2xl">Digital Solutions</span>
      </div>

      <div className="flex flex-col border-t-2 border-black relative z-20 bg-white">
          {projects.map((project, index) => (
            <div 
                key={project.id}
                className="group relative border-b border-gray-200 hover:border-black transition-colors duration-300 py-12 lg:py-16 px-6 lg:px-10 flex flex-col md:flex-row items-baseline justify-between cursor-none bg-white hover:bg-gray-50/50 reveal"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                onClick={() => project.link ? window.open(project.link, '_blank') : window.open(project.github, '_blank')}
            >
                <div className="flex items-baseline gap-8 lg:gap-16">
                    <span className="font-mono text-xs text-gray-400 group-hover:text-black transition-colors">0{index + 1}</span>
                    <h3 className="relative font-serif text-4xl lg:text-6xl text-black overflow-hidden z-10 project-title transition-transform duration-500">
                        {project.title}
                    </h3>
                </div>
                
                <div className="mt-6 md:mt-0 flex items-center gap-8 lg:gap-16 z-10">
                    <div className="flex flex-col items-end text-right">
                        <span className="text-xs font-bold uppercase tracking-widest mb-2 opacity-60 group-hover:opacity-100 transition-opacity">{project.description}</span>
                        <div className="flex gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-[10px] uppercase border border-gray-200 group-hover:border-gray-400 px-2 py-1 rounded-full transition-colors">{tag}</span>
                            ))}
                        </div>
                    </div>
                    <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0" />
                </div>
            </div>
          ))}
      </div>

      {/* 
        Modern Floating Preview 
      */}
      <div 
        ref={previewRef}
        className="fixed top-0 left-0 pointer-events-none z-50 hidden md:block"
        style={{ 
            willChange: 'transform',
            transition: 'transform 0.1s ease-out' 
        }}
      >
        <div 
            className={`
                relative -translate-x-1/2 -translate-y-1/2 w-[400px] h-[260px] 
                bg-white p-2 rounded-xl shadow-2xl border border-gray-100
                transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] origin-center
                ${activeProject ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 rotate-12'}
            `}
        >
             <div className="relative w-full h-full overflow-hidden rounded-lg bg-gray-100">
                {projects.map((project) => (
                    <img 
                        key={project.id}
                        src={project.imageUrl} 
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                            activeProject === project.id 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                        }`}
                        onError={handleImageError}
                    />
                ))}
            </div>

            {/* Floating Badge on the preview card */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                <span className="text-[10px] uppercase font-bold tracking-widest whitespace-nowrap">View Case Study</span>
                <ArrowUpRight className="w-3 h-3" />
            </div>
        </div>
      </div>
      
      <div className="mt-24 text-center reveal">
         <a href="https://github.com/TarunTeja44" target="_blank" rel="noreferrer" className="inline-block border-b border-black pb-1 font-serif text-xl italic hover:text-gray-600 transition-colors">View All Projects Archive</a>
      </div>
    </section>
  );
};

export default Projects;