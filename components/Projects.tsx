import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Sparkles, Layers, Eye, Star, Activity } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import ProjectModal from './ProjectModal';
import { soundFx } from '../utils/sound';

const projectsData: Project[] = [
  {
    id: "01",
    title: "RealNews.ai",
    category: "ai",
    tagline: "NLP Transformer Misinformation Detection Platform",
    description: "Deep learning pipeline utilizing fine-tuned transformer models to detect bias, hallucination, and factual divergence in live news articles.",
    fullOverview: "RealNews.ai analyzes real-time digital news streams and articles using custom token classification and attention-weight analysis. It scores credibility metrics across semantic claims, cross-references historical truth repositories, and generates an interpretable transparency score for readers.",
    tags: ["NLP", "Transformers", "PyTorch", "React 19", "FastAPI"],
    metrics: [
      { label: "Accuracy", value: "96.4%" },
      { label: "Avg Latency", value: "38ms" },
      { label: "Model Parameters", value: "110M" },
      { label: "Pipeline Status", value: "Live" }
    ],
    keyFeatures: [
      "Multi-head cross-attention claim verification",
      "Real-time URL scraping & heuristic semantic extraction",
      "Interactive hallucination confidence heatmap",
      "RESTful API with asynchronous streaming responses"
    ],
    imageUrl: "https://i.postimg.cc/sf07TgXy/realnews.png",
    link: "https://realnews.ai",
    github: "https://github.com/TarunTeja44",
    stars: 14,
    featured: true
  },
  {
    id: "02",
    title: "NaviFlow",
    category: "systems",
    tagline: "Adaptive Urban Traffic Routing & Optimization Engine",
    description: "Graph-theoretic traffic simulation platform implementing dynamic A* pathfinding and weighted congestion cost functions in real time.",
    fullOverview: "NaviFlow models urban road networks as dynamic weighted graphs. By ingesting simulated and live sensor feeds, it rebalances traffic distribution across metropolitan arteries, preventing gridlocks and minimizing carbon footprint through optimal path routing.",
    tags: ["Graph Theory", "Pathfinding", "Google Maps API", "Machine Learning", "Python"],
    metrics: [
      { label: "Throughput", value: "12k req/s" },
      { label: "Reroute Speed", value: "14ms" },
      { label: "Graph Nodes", value: "45,000+" },
      { label: "Efficiency", value: "+28%" }
    ],
    keyFeatures: [
      "Dynamic cost adjustment based on historical density spikes",
      "Hierarchical bidirectional A* graph traversal",
      "Interactive geospatial vector rendering",
      "Multi-agent vehicle simulation sandbox"
    ],
    imageUrl: "https://i.postimg.cc/Bvc2p58V/naviflow.png",
    link: "https://github.com/TarunTeja44",
    github: "https://github.com/TarunTeja44",
    stars: 9,
    featured: true
  },
  {
    id: "03",
    title: "Emergency Hotlines",
    category: "web",
    tagline: "Geospatial Low-Latency Emergency Services Aggregator",
    description: "Fullstack emergency dispatch aggregator connecting citizens to closest medical, fire, and safety squads with offline support and location triangulation.",
    fullOverview: "Built for crisis response, this platform eliminates friction in distress scenarios by leveraging browser geolocation, indexed offline databases, and emergency routing protocols to connect callers to verified rapid responders within seconds.",
    tags: ["Geolocation", "Flask", "React", "PostgreSQL", "PWA"],
    metrics: [
      { label: "Response", value: "< 1.2s" },
      { label: "Offline Cache", value: "100%" },
      { label: "Verified Squads", value: "500+" },
      { label: "Uptime", value: "99.9%" }
    ],
    keyFeatures: [
      "Zero-dependency instant GPS triangulation",
      "Offline service worker directory caching",
      "One-tap multi-channel emergency broadcast",
      "Multilingual accessibility voice-over support"
    ],
    imageUrl: "https://i.postimg.cc/7LvNmYKX/emergency.png",
    github: "https://github.com/TarunTeja44",
    stars: 6,
    featured: false
  }
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Systems', count: projectsData.length },
    { id: 'ai', label: 'AI & NLP', count: projectsData.filter(p => p.category === 'ai').length },
    { id: 'systems', label: 'Algorithms & Maps', count: projectsData.filter(p => p.category === 'systems').length },
    { id: 'web', label: 'Web Platforms', count: projectsData.filter(p => p.category === 'web').length },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section 
      id="projects" 
      className="py-28 px-6 lg:px-12 bg-black text-white relative z-10 overflow-hidden border-t border-white/10" 
    >
      {/* Background Lighting Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/[0.03] blur-[150px] pointer-events-none" />

      {/* Header & Filter Controls */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10 reveal">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-400 uppercase tracking-[0.25em] mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineered Solutions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
              Selected Works
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveCategory(cat.id);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500 text-black font-semibold shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                    : 'bg-white/[0.04] text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  activeCategory === cat.id ? 'bg-black/20 text-black' : 'bg-white/10 text-white/50'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bento Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {filteredProjects.map((project, idx) => {
          const isLarge = idx === 0;

          return (
            <div
              key={project.id}
              className={`
                group relative rounded-3xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/40
                p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-500
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(16,185,129,0.1)]
                hover:translate-y-[-4px] backdrop-blur-xl reveal delay-${(idx + 1) * 100}
                ${isLarge ? 'lg:col-span-12' : 'lg:col-span-6'}
              `}
            >
              {/* Card Glare Sheen Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-transparent transition-opacity duration-500 pointer-events-none" />

              <div>
                {/* Top Card Meta */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-emerald-400 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                      {project.id}
                    </span>
                    <span className="font-mono text-xs text-white/50 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {project.stars && (
                      <span className="inline-flex items-center gap-1 font-mono text-xs text-amber-300/80 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                        <Star className="w-3 h-3 fill-amber-300" />
                        {project.stars}
                      </span>
                    )}

                    <button
                      onClick={() => {
                        soundFx.playSuccess();
                        setSelectedProject(project);
                      }}
                      onMouseEnter={() => soundFx.playHover()}
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white/70 hover:text-white transition-all text-xs font-mono inline-flex items-center gap-1.5 cursor-pointer"
                      title="Inspect Architecture"
                    >
                      <Eye className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="hidden sm:inline">Inspect</span>
                    </button>
                  </div>
                </div>

                {/* Content + Preview Split for Large Cards */}
                <div className={`grid gap-8 ${isLarge ? 'lg:grid-cols-12 lg:items-center' : 'grid-cols-1'}`}>
                  {/* Text Column */}
                  <div className={isLarge ? 'lg:col-span-6' : ''}>
                    <h3 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors mb-3">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base font-light text-white/75 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Metrics Badges */}
                    {project.metrics && (
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {project.metrics.slice(0, 2).map((m, mIdx) => (
                          <div key={mIdx} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                            <span className="font-mono text-[10px] text-white/40 uppercase block">{m.label}</span>
                            <span className="font-sans font-bold text-lg text-emerald-400">{m.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image Preview Container */}
                  <div 
                    onClick={() => {
                      soundFx.playSuccess();
                      setSelectedProject(project);
                    }}
                    className={`relative rounded-2xl overflow-hidden border border-white/10 bg-black cursor-pointer group/img ${
                      isLarge ? 'lg:col-span-6 aspect-[16/10]' : 'aspect-video mb-6'
                    }`}
                  >
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                      onError={(e) => {
                        const t = e.currentTarget;
                        if (!t.src.includes('placehold.co')) {
                          t.src = "https://placehold.co/800x500/151515/ffffff.png?text=System+Architecture";
                        }
                      }}
                    />
                    
                    {/* Hover Overlay Button */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                      <span className="px-4 py-2 rounded-xl bg-white text-black font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-2xl">
                        <span>Inspect Architecture</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Tags & Action Links */}
              <div className="pt-6 mt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playSuccess()}
                      onMouseEnter={() => soundFx.playHover()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-wider"
                    >
                      <span>Live App</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      onMouseEnter={() => soundFx.playHover()}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-white/50 hover:text-white transition-colors uppercase tracking-wider"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Global Project Inspector Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

export default Projects;