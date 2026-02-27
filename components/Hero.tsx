import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col px-6 lg:px-10 pt-32 pb-12 relative overflow-hidden bg-white">
      
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-gray-100 hidden lg:block reveal delay-200"></div>
      <div className="absolute bottom-32 left-0 w-full h-px bg-gray-100 reveal delay-300"></div>

      <div className="flex-1 flex flex-col justify-center relative z-10">
        
        <div className="mb-8 reveal">
            <span className="inline-block px-3 py-1 border border-black text-xs font-bold uppercase tracking-widest mb-4 hover:bg-black hover:text-white transition-colors duration-300">
                Seeking Internships
            </span>
        </div>

        {/* Main Typography - Graphic Design Style */}
        <div className="flex flex-col">
            <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black mix-blend-multiply reveal delay-100">
                ENGINEERING
            </h1>
            <div className="flex items-center gap-4 lg:gap-12">
                 <h1 className="text-[12vw] leading-[0.8] font-serif italic text-black/90 reveal delay-200">
                    Student
                </h1>
                <div className="hidden lg:block h-px flex-1 bg-black mt-8 reveal delay-300"></div>
                <p className="hidden lg:block max-w-xs font-body text-sm leading-relaxed mt-4 reveal delay-300">
                    Exploring the intersection of Computer Science and AI. Building scalable systems while learning the theoretical foundations.
                </p>
            </div>
        </div>
      </div>

      {/* Footer of Hero */}
      <div className="flex justify-between items-end reveal delay-400">
        <div className="flex gap-12 font-body text-xs uppercase tracking-widest">
            <div>
                <span className="block text-gray-400 mb-1">Status</span>
                2nd Year Undergrad
            </div>
            <div>
                <span className="block text-gray-400 mb-1">Major</span>
                Computer Science
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;