import React, { useState, useEffect } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles, ArrowUpRight, Terminal } from 'lucide-react';
import { soundFx } from '../utils/sound';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll-spy active section detection
      const sections = ['projects', 'about', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Systems', href: '#projects', id: 'projects' },
    { name: 'Profile & Stack', href: '#about', id: 'about' },
    { name: 'Transmit', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundFx.playClick();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 40,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const toggleSound = () => {
    const newState = soundFx.toggleSound();
    setIsAudioEnabled(newState);
  };

  return (
    <header className="fixed w-full z-40 top-0 left-0 p-4 sm:p-6 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand Pill */}
        <div 
          className="pointer-events-auto cursor-pointer group flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 hover:border-white/20 shadow-2xl transition-all active:scale-[0.98]"
          onClick={() => {
            soundFx.playClick();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onMouseEnter={() => soundFx.playHover()}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-sans font-bold text-sm text-white tracking-tight">
            Tarun Teja<span className="text-emerald-400 font-mono ml-0.5">.P</span>
          </span>
          <span className="hidden md:inline-block font-mono text-[10px] text-white/40 border-l border-white/10 pl-2">
            AI / SYSTEMS
          </span>
        </div>
        
        {/* Center Floating Navigation Island (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-white/10 text-white font-semibold shadow-inner'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-[10px] opacity-40">0{index + 1}</span>
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions Pill */}
        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => soundFx.playHover()}
            className="p-2.5 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 hover:border-white/20 text-white/70 hover:text-white transition-all cursor-pointer shadow-lg"
            title={isAudioEnabled ? "Mute interface audio FX" : "Enable interface audio FX"}
            aria-label="Toggle Audio"
          >
            {isAudioEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-white/40" />
            )}
          </button>

          {/* Direct CTA shortcut */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            onMouseEnter={() => soundFx.playHover()}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-black font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-[0.98]"
          >
            <span>Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              setIsOpen(!isOpen);
            }}
            className="md:hidden p-2.5 rounded-2xl bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-3xl text-white z-50 flex flex-col justify-between p-8 pointer-events-auto animate-in fade-in duration-200">
          <div className="flex justify-between items-center pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-sans font-bold text-sm text-white">Tarun Teja P.</span>
            </div>
            <button 
              onClick={() => {
                soundFx.playClick();
                setIsOpen(false);
              }}
              className="p-2 rounded-xl bg-white/10 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 my-auto">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-4xl sm:text-5xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors flex items-baseline gap-4"
              >
                <span className="font-mono text-sm text-emerald-400/60">0{i + 1}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-white/40">
            <span>© 2025 Tarun Teja P.</span>
            <span className="text-emerald-400">Available</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;