import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: "01",
    title: "RealNews.ai",
    category: "ai",
    tagline: "Misinformation Detection System",
    description: "Deep learning pipeline using fine-tuned transformer models to detect bias, claim verification, and factual divergence in news articles.",
    tags: ["NLP", "Transformers", "PyTorch", "React", "FastAPI"],
    imageUrl: "https://i.postimg.cc/sf07TgXy/realnews.png",
    link: "https://realnews.ai",
    github: "https://github.com/TarunTeja44",
  },
  {
    id: "02",
    title: "NaviFlow",
    category: "systems",
    tagline: "Urban Traffic Optimization Engine",
    description: "Graph-theoretic traffic simulation platform implementing dynamic A* pathfinding and weighted congestion cost functions in real time.",
    tags: ["Graph Algorithms", "Pathfinding", "Google Maps API", "ML", "Python"],
    imageUrl: "https://i.postimg.cc/Bvc2p58V/naviflow.png",
    link: "https://github.com/TarunTeja44",
    github: "https://github.com/TarunTeja44",
  },
  {
    id: "03",
    title: "Emergency Hotlines",
    category: "web",
    tagline: "Geospatial Emergency Aggregator",
    description: "Emergency services dispatch aggregator connecting citizens to nearest medical, fire, and safety squads with offline caching support.",
    tags: ["Geolocation", "Flask", "React", "PostgreSQL"],
    imageUrl: "https://i.postimg.cc/7LvNmYKX/emergency.png",
    github: "https://github.com/TarunTeja44",
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-b border-neutral-200">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 reveal">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Selected Works (2023–2025)
        </h2>
        <span className="text-xs font-mono text-neutral-400">
          03 Projects
        </span>
      </div>

      {/* Projects List */}
      <div className="divide-y divide-neutral-200 border-y border-neutral-200">
        {projects.map((project) => (
          <article 
            key={project.id}
            className="py-10 group hover:bg-neutral-50/70 transition-colors px-4 -mx-4 rounded-lg reveal"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Left Details */}
              <div className="space-y-3 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-neutral-400 font-medium">
                    {project.id}
                  </span>
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-black group-hover:underline underline-offset-4 decoration-neutral-300">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-neutral-500 hidden sm:inline">
                    — {project.tagline}
                  </span>
                </div>

                <p className="text-sm font-normal text-neutral-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded text-xs font-mono text-neutral-600 bg-neutral-100 border border-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Action Links */}
              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider shrink-0 pt-1">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-black hover:opacity-60 transition-opacity font-medium"
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-black transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Archive Footer */}
      <div className="mt-12 text-center reveal">
        <a
          href="https://github.com/TarunTeja44"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-black uppercase tracking-wider transition-colors pb-1 border-b border-neutral-300 hover:border-black"
        >
          <span>View all repositories on GitHub</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>
    </section>
  );
};

export default Projects;