import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Check, Copy, Send, Sparkles, MessageSquare, Terminal } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SocialLink } from '../types';
import { soundFx } from '../utils/sound';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'transmitting' | 'sent'>('idle');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const socialLinks: SocialLink[] = [
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'Tarun Teja',
      url: 'https://www.linkedin.com/in/tarun-teja-a2a409334',
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
      url: 'https://www.instagram.com/tarunteja._',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      id: 'email',
      name: 'Email Direct',
      handle: 'puligilatarunteja@gmail.com',
      url: 'mailto:puligilatarunteja@gmail.com',
      icon: <Mail className="w-5 h-5" />
    }
  ];

  const handleCopy = (text: string, id: string) => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    setCopiedItem(id);
    setTimeout(() => setCopiedItem(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundFx.playClick();
    setFormStatus('transmitting');

    setTimeout(() => {
      setFormStatus('sent');
      soundFx.playSuccess();

      // Confetti burst for rewarding user action
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#10b981', '#ffffff', '#38bdf8', '#34d399']
      });

      setTimeout(() => {
        setFormStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 3500);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-6 lg:px-12 bg-black text-white relative overflow-hidden border-t border-white/10">
      {/* Background Graphic Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] flex items-center justify-center select-none">
        <span className="text-[36vw] font-black tracking-tighter uppercase whitespace-nowrap">
          TRANSMIT
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Social Matrix */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 mb-6 reveal">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                  Open for Internship Opportunities
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white reveal delay-100">
                Let's build something <span className="text-emerald-400">remarkable</span>.
              </h3>

              <p className="font-sans text-sm sm:text-base font-light text-white/70 leading-relaxed max-w-lg mt-4 reveal delay-200">
                Whether you're hiring for an AI / Engineering internship, looking to collaborate on machine learning research, or want to discuss systems architecture — my inbox is open.
              </p>
            </div>

            {/* Quick Interactive Social Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4">
              {socialLinks.map((link, idx) => (
                <div
                  key={link.id}
                  className={`group p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-emerald-500/40 hover:bg-white/[0.06] transition-all duration-300 flex flex-col justify-between h-[130px] reveal delay-${(idx + 1) * 100}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-white/75 group-hover:text-emerald-400 transition-colors">
                      {link.icon}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleCopy(link.handle, link.id)}
                        onMouseEnter={() => soundFx.playHover()}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/40 hover:text-white transition-all cursor-pointer"
                        title="Copy to clipboard"
                      >
                        {copiedItem === link.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>

                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFx.playClick()}
                        onMouseEnter={() => soundFx.playHover()}
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white/40 hover:text-white transition-all"
                        title="Open external link"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div>
                    <span className="block font-sans font-bold text-sm text-white group-hover:text-emerald-400 transition-colors">
                      {link.name}
                    </span>
                    <span className="font-mono text-xs text-white/40 truncate block mt-0.5">
                      {copiedItem === link.id ? '✓ Copied to clipboard!' : link.handle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-6 reveal delay-200">
            <form 
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl space-y-6 shadow-2xl"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-white/40 uppercase tracking-wider">
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct Signal Dispatch</span>
                </span>
                <span>Port 443 / SSL</span>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2 block">
                  Your Name / Organization
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan · Technical Recruiter"
                  className="w-full bg-white/5 text-sm sm:text-base px-4 py-3.5 rounded-xl border border-white/10 focus:border-emerald-400 focus:outline-none transition-colors text-white placeholder-white/20"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@company.com"
                  className="w-full bg-white/5 text-sm sm:text-base px-4 py-3.5 rounded-xl border border-white/10 focus:border-emerald-400 focus:outline-none transition-colors text-white placeholder-white/20"
                />
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-white/60 mb-2 block">
                  Message / Role Scope
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about the engineering problem or internship position..."
                  className="w-full bg-white/5 text-sm sm:text-base px-4 py-3.5 rounded-xl border border-white/10 focus:border-emerald-400 focus:outline-none resize-none transition-colors text-white placeholder-white/20"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                onMouseEnter={() => soundFx.playHover()}
                className="w-full py-4 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-[0.98] text-black font-sans font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-between group disabled:opacity-50 cursor-pointer shadow-[0_0_30px_rgba(16,185,129,0.3)]"
              >
                <span>
                  {formStatus === 'idle' ? 'Send Transmission' : formStatus === 'transmitting' ? 'Encrypting & Transmitting...' : 'Transmission Sent Successfully ✓'}
                </span>
                <Send className={`w-4 h-4 transition-transform duration-300 ${formStatus === 'idle' ? 'group-hover:translate-x-1' : ''}`} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Subfooter */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono uppercase tracking-widest text-white/40 reveal delay-300">
          <p>© 2025 Tarun Teja P. — Engineered with precision & speed.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              All Systems Operational
            </span>
            <span>India · UTC+5:30</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;