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
      icon: <Linkedin className="w-6 h-6" />
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: '@TarunTeja44',
      url: 'https://github.com/TarunTeja44',
      icon: <Github className="w-6 h-6" />
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@tarunteja._',
      url: 'https://www.instagram.com/tarunteja._?igsh=cno3MGRjbmY4amFz',
      icon: <Instagram className="w-6 h-6" />
    },
    {
      id: 'email',
      name: 'Email',
      handle: 'puligilatarunteja@gmail.com',
      url: 'mailto:puligilatarunteja@gmail.com',
      icon: <Mail className="w-6 h-6" />
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate API call
    setTimeout(() => {
        setFormStatus('sent');
        setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-10 bg-black text-white relative overflow-hidden">
      
      {/* Giant Background Text */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
        <span className="text-[30vw] font-bold tracking-tighter whitespace-nowrap reveal duration-1000">FUTURE</span>
      </div>

      <div className="max-w-screen-2xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Heading & Social Grid */}
            <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-8 reveal">
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <h2 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-gray-500">Open for Opportunities</h2>
                    </div>
                    
                    <h3 className="font-serif text-5xl lg:text-7xl leading-[0.9] mb-12 reveal delay-100">
                        Ready to build <br/> the <span className="italic text-gray-400">extraordinary?</span>
                    </h3>

                    {/* New Unique Social Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
                        {socialLinks.map((link, idx) => (
                            <a 
                                key={link.id}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative p-6 border border-white/10 hover:border-white/100 bg-white/5 hover:bg-white transition-all duration-500 overflow-hidden flex flex-col justify-between h-[160px] reveal delay-${(idx + 1) * 100}`}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="text-white group-hover:text-black transition-colors duration-500">
                                        {link.icon}
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                                </div>
                                
                                <div>
                                    <span className="block font-sans font-bold text-xl tracking-tight text-white group-hover:text-black transition-colors duration-500 mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">
                                        {link.name}
                                    </span>
                                    <span className="text-xs font-sans uppercase tracking-widest text-gray-500 group-hover:text-black/60 transition-colors duration-500 break-all">
                                        {link.handle}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-6 lg:pl-12 reveal delay-300">
                <form onSubmit={handleSubmit} className="space-y-8 bg-white/5 p-8 lg:p-12 border border-white/10 backdrop-blur-sm">
                    <div className="group">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-white transition-colors">Your Name</label>
                        <input
                            type="text"
                            required
                            className="w-full bg-transparent text-xl py-4 border-b border-white/20 focus:border-white focus:outline-none transition-colors placeholder-white/10 text-white"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="group">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-white transition-colors">Email Address</label>
                        <input
                            type="email"
                            required
                            className="w-full bg-transparent text-xl py-4 border-b border-white/20 focus:border-white focus:outline-none transition-colors placeholder-white/10 text-white"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="group">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 block group-focus-within:text-white transition-colors">The Vision</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-transparent text-xl py-4 border-b border-white/20 focus:border-white focus:outline-none resize-none transition-colors placeholder-white/10 text-white"
                            placeholder="Tell me about your project..."
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={formStatus !== 'idle'}
                        className="w-full bg-white text-black text-sm font-bold uppercase tracking-widest py-6 hover:bg-gray-200 transition-colors flex justify-between px-8 group mt-8 disabled:opacity-50"
                    >
                        <span>{formStatus === 'idle' ? 'Send Signal' : formStatus === 'sending' ? 'Sending...' : 'Signal Sent'}</span>
                        <ArrowUpRight className={`w-5 h-5 transition-transform ${formStatus === 'idle' ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''}`} />
                    </button>
                </form>
            </div>
        </div>
        
        <div className="mt-24 border-t border-white/10 pt-8 flex justify-between items-center text-xs uppercase tracking-widest text-gray-500 reveal delay-500">
            <p>© 2025 Tarun Teja P. Engineering & Design.</p>
            <p className="hidden md:block">Based in India</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;