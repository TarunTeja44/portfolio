import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Index', href: '#projects' },
    { name: 'Profile', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed w-full z-40 top-0 left-0 p-6 lg:p-10 mix-blend-difference text-white pointer-events-none">
      <div className="flex items-center justify-between w-full">
        {/* Logo - Minimalist Type */}
        <div className="flex-shrink-0 cursor-pointer group pointer-events-auto" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-sans font-bold text-xl tracking-tighter uppercase group-hover:italic transition-all">Tarun.TP©</span>
        </div>
        
        {/* Desktop Nav - Brutalist Labels */}
        <div className="hidden md:flex items-center gap-12 pointer-events-auto">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-sm font-bold uppercase tracking-widest hover:line-through decoration-2 decoration-white transition-all cursor-none"
            >
              <span className="text-[10px] align-top mr-1 opacity-50">0{index + 1}</span>
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile Button */}
        <div className="flex md:hidden pointer-events-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black z-50 flex flex-col justify-between p-6 pointer-events-auto">
           <div className="flex justify-end">
             <button onClick={() => setIsOpen(false)}>
               <X className="h-8 w-8" />
             </button>
           </div>
           
           <div className="flex flex-col space-y-2">
             {navLinks.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-6xl italic hover:pl-4 transition-all duration-300"
                >
                  <span className="font-sans text-sm not-italic block mb-2 text-gray-400">0{i+1}</span>
                  {link.name}
                </a>
              ))}
           </div>

           <div className="font-sans text-xs uppercase tracking-widest text-gray-400">
             © 2025 Tarun Teja P.
           </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;