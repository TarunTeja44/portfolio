import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const socialLinks = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'Tarun Teja',
      url: 'https://www.linkedin.com/in/tarun-teja-a2a409334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: '@TarunTeja44',
      url: 'https://github.com/TarunTeja44',
      icon: <Github className="w-5 h-5" />
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@tarunteja._',
      url: 'https://www.instagram.com/tarunteja._?igsh=cno3MGRjbmY4amFz',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'puligilatarunteja@gmail.com',
      url: 'mailto:puligilatarunteja@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-black text-white relative overflow-hidden">
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] flex items-center justify-center select-none">
        <span className="text-[35vw] font-black tracking-tighter uppercase whitespace-nowrap">
          TARUN
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column: Heading & Social Matrix */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 reveal">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-widest text-white/70">
                  Open for Opportunities
                </span>
              </div>
              
              <h3 className="font-sans font-light text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white mb-10 reveal delay-100">
                Ready to build <br/> the <span className="font-bold text-white">extraordinary</span> together.
              </h3>

              {/* Social Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {socialLinks.map((link, idx) => (
                  <a 
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white hover:text-black transition-all duration-300 flex flex-col justify-between h-[140px] reveal delay-${(idx + 1) * 100}`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="text-white/80 group-hover:text-black transition-colors">
                        {link.icon}
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    
                    <div>
                      <span className="block font-sans font-semibold text-base text-white group-hover:text-black transition-colors">
                        {link.name}
                      </span>
                      <span className="text-xs font-mono text-white/40 group-hover:text-black/60 transition-colors truncate block mt-0.5">
                        {link.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-6 reveal delay-300">
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.03] p-8 lg:p-10 rounded-3xl border border-white/10 backdrop-blur-xl">
              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-white/5 text-base px-4 py-3.5 rounded-xl border border-white/10 focus:border-white focus:outline-none transition-colors placeholder-white/20 text-white"
                  placeholder="Alex Morgan"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-white/5 text-base px-4 py-3.5 rounded-xl border border-white/10 focus:border-white focus:outline-none transition-colors placeholder-white/20 text-white"
                  placeholder="alex@company.com"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2 block">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full bg-white/5 text-base px-4 py-3.5 rounded-xl border border-white/10 focus:border-white focus:outline-none resize-none transition-colors placeholder-white/20 text-white"
                  placeholder="Tell me about your role or project vision..."
                />
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className="w-full bg-white text-black text-xs font-mono font-bold uppercase tracking-widest py-4 px-6 rounded-xl hover:bg-neutral-200 active:scale-[0.98] transition-all flex items-center justify-between group disabled:opacity-50"
              >
                <span>
                  {formStatus === 'idle' ? 'Send Transmission' : formStatus === 'sending' ? 'Transmitting...' : 'Transmission Sent ✓'}
                </span>
                <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${formStatus === 'idle' ? 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5' : ''}`} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Subfooter */}
        <div className="mt-20 border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40 reveal delay-400">
          <p>© 2025 Tarun Teja P. — Crafted with precision.</p>
          <p>India · UTC+5:30</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;