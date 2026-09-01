import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Works', href: '#projects' },
    { name: 'Profile', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 20,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed w-full z-40 top-0 left-0 p-6 lg:px-12 mix-blend-difference text-white pointer-events-none">
      <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div 
          className="flex-shrink-0 cursor-pointer pointer-events-auto group" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="font-sans font-bold text-lg tracking-tight text-white uppercase group-hover:opacity-75 transition-opacity">
            Tarun Teja<span className="font-mono text-xs text-white/50 ml-1">©25</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 pointer-events-auto">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xs font-mono uppercase tracking-widest text-white/80 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span className="text-[10px] text-white/40">0{index + 1}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>
        
        {/* Mobile Toggle Button */}
        <div className="flex md:hidden pointer-events-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 -mr-2 text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 flex flex-col justify-between p-8 pointer-events-auto">
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-white/50">Navigation</span>
            <button onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X className="h-7 w-7" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-5xl font-light tracking-tight text-white hover:text-white/70 transition-colors flex items-baseline gap-4"
              >
                <span className="font-mono text-sm text-white/30">0{i + 1}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          <div className="font-mono text-xs uppercase tracking-widest text-white/40">
            © 2025 Tarun Teja P.
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;