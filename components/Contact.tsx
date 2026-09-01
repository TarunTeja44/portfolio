import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Mail, Check, Copy } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "puligilatarunteja@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
      setTimeout(() => setFormSent(false), 4000);
    }, 1000);
  };

  const socialLinks = [
    {
      name: 'Email',
      value: email,
      url: `mailto:${email}`,
      icon: <Mail className="w-4 h-4" />
    },
    {
      name: 'GitHub',
      value: '@TarunTeja44',
      url: 'https://github.com/TarunTeja44',
      icon: <Github className="w-4 h-4" />
    },
    {
      name: 'LinkedIn',
      value: 'Tarun Teja',
      url: 'https://www.linkedin.com/in/tarun-teja-a2a409334',
      icon: <Linkedin className="w-4 h-4" />
    },
    {
      name: 'Instagram',
      value: '@tarunteja._',
      url: 'https://www.instagram.com/tarunteja._',
      icon: <Instagram className="w-4 h-4" />
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12 reveal">
        <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
          Contact & Channels
        </h2>
        <span className="text-xs font-mono text-neutral-400">
          Connect
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left Column: Direct Info */}
        <div className="md:col-span-5 space-y-6 reveal">
          <div className="space-y-3">
            <h3 className="text-3xl font-bold tracking-tight text-black">
              Let's connect.
            </h3>
            <p className="text-sm font-normal text-neutral-600 leading-relaxed">
              I am open to internship opportunities, research collaborations, and engineering discussions.
            </p>
          </div>

          {/* Social Links List */}
          <div className="divide-y divide-neutral-200 border-y border-neutral-200">
            {socialLinks.map((item) => (
              <div key={item.name} className="py-3.5 flex items-center justify-between text-xs font-mono">
                <span className="text-neutral-500 flex items-center gap-2">
                  {item.icon}
                  {item.name}
                </span>

                <div className="flex items-center gap-3">
                  {item.name === 'Email' && (
                    <button
                      onClick={handleCopyEmail}
                      className="text-neutral-400 hover:text-black transition-colors"
                      title="Copy email address"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  )}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:opacity-60 transition-opacity inline-flex items-center gap-1 font-medium"
                  >
                    <span>{item.value}</span>
                    <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Clean Form */}
        <div className="md:col-span-7 reveal delay-100">
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-xl bg-neutral-50 border border-neutral-200 space-y-4">
            <h4 className="text-base font-semibold text-black pb-2 border-b border-neutral-200">
              Send a message
            </h4>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5 block">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full bg-white text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-black focus:outline-none transition-colors placeholder-neutral-400"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5 block">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full bg-white text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-black focus:outline-none transition-colors placeholder-neutral-400"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5 block">
                Message
              </label>
              <textarea
                required
                rows={4}
                placeholder="What would you like to discuss?"
                className="w-full bg-white text-sm px-3.5 py-2.5 rounded-lg border border-neutral-300 focus:border-black focus:outline-none resize-none transition-colors placeholder-neutral-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || formSent}
              className="w-full py-3 px-4 rounded-lg bg-black text-white text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors disabled:opacity-50"
            >
              {formSent ? 'Message sent ✓' : isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>

      {/* Minimal Footer */}
      <div className="pt-20 mt-20 border-t border-neutral-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-400">
        <p>© {new Date().getFullYear()} Tarun Teja P. All rights reserved.</p>
        <p>Built with React & Tailwind CSS.</p>
      </div>
    </section>
  );
};

export default Contact;