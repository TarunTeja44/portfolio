import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Cpu, Activity, Layers } from 'lucide-react';
import { Project } from '../types';
import { soundFx } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundFx.playClick();
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={() => {
          soundFx.playClick();
          onClose();
        }}
      />

      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0F0F0F] border border-white/15 rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {project.category.toUpperCase()}
            </span>
            <span className="font-mono text-xs text-white/40">ID: {project.id}</span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 custom-scrollbar">
          {/* Hero Banner with Preview */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video max-h-[320px] bg-black">
            <img 
              src={project.imageUrl} 
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                if (!t.src.includes('placehold.co')) {
                  t.src = "https://placehold.co/1200x675/1a1a1a/ffffff.png?text=System+Architecture+Preview";
                }
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-6">
              <div>
                <h3 className="font-sans text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-white/80 font-light max-w-xl">
                  {project.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-wider">{m.label}</span>
                  <span className="font-sans font-bold text-xl sm:text-2xl text-emerald-400 mt-1">{m.value}</span>
                </div>
              ))}
            </div>
          )}

          {/* Deep Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50">
              <Layers className="w-3.5 h-3.5 text-emerald-400" />
              <span>Architectural Overview</span>
            </div>
            <p className="font-sans text-sm sm:text-base font-light text-white/80 leading-relaxed">
              {project.fullOverview || project.description}
            </p>
          </div>

          {/* Key Features */}
          {project.keyFeatures && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Core Capabilities</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/85 font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/50">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              <span>Engineered With</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white/90"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-6 border-t border-white/10 bg-white/[0.02] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playSuccess()}
                onMouseEnter={() => soundFx.playHover()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-semibold text-xs uppercase tracking-wider transition-all active:scale-[0.98]"
              >
                <span>Launch Live System</span>
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-all border border-white/10"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <span className="font-mono text-[11px] text-white/30">
            Press ESC to return
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
