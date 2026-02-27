import React from 'react';

const About: React.FC = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"]
        },
        {
            title: "Frameworks",
            skills: ["TensorFlow", "PyTorch", "React", "Next.js", "Tailwind"]
        },
        {
            title: "Tools",
            skills: ["Docker", "Git", "AWS", "Linux", "PostgreSQL"]
        }
    ];

    return (
        <section id="about" className="py-24 px-6 lg:px-10 bg-[#F4F4F4]">
            {/* Editorial Header */}
            <div className="border-b-2 border-black pb-8 mb-12 flex justify-between items-end reveal">
                <h2 className="text-[8vw] leading-none font-bold tracking-tighter">PROFILE</h2>
                <span className="hidden md:block text-xs font-bold uppercase tracking-widest mb-2">University Student</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                {/* Left Column: Stats Only */}
                <div className="lg:col-span-4 flex flex-col justify-start h-full sticky top-24">
                    {/* Stats */}
                    <div className="space-y-6">
                        <div className="border-t border-black pt-4 reveal delay-100">
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Education</h4>
                            <p className="font-serif text-lg italic">B.Tech Computer Science</p>
                            <p className="text-sm text-gray-500 mt-1">2024 - 2028 (Expected)</p>
                        </div>
                        <div className="border-t border-black pt-4 reveal delay-200">
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Current Focus</h4>
                            <p className="font-serif text-lg italic">Machine Learning</p>
                        </div>
                        <div className="border-t border-black pt-4 reveal delay-300">
                            <h4 className="text-xs font-bold uppercase tracking-widest mb-2">Location</h4>
                            <p className="font-serif text-lg italic">India</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Copy & Skills */}
                <div className="lg:col-span-8">
                    <div className="mb-20">
                        <p className="font-serif text-3xl lg:text-5xl leading-tight text-black mb-12 indent-24 reveal">
                            I believe that <span className="italic">learning</span> is a continuous loop. As a Computer Science sophomore, I am bridging the gap between <span className="border-b-2 border-black">theory</span> and application.
                        </p>

                        <div className="font-sans text-sm leading-relaxed text-gray-800 space-y-6 max-w-2xl reveal delay-100">
                            <p>
                                <span className="font-bold uppercase mr-2">The Journey.</span>
                                Currently in my second year of engineering, I spend my time outside of lectures building real-world projects. I am passionate about understanding how Large Language Models work under the hood and how they can be deployed effectively.
                            </p>
                            <p>
                                My coursework provides the mathematical foundation—Linear Algebra, Calculus, Statistics—while my personal projects allow me to break things and rebuild them better. I am actively looking for internships to apply my growing skillset in a professional environment.
                            </p>
                        </div>
                    </div>

                    {/* Redesigned Skills Section - 3 Column Grid */}
                    <div className="mt-20">
                        <div className="flex items-center gap-4 mb-12 reveal">
                            <div className="h-[2px] w-12 bg-black"></div>
                            <h3 className="font-bold text-4xl md:text-5xl tracking-tighter uppercase">Technical Arsenal</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {skillCategories.map((category, idx) => (
                                <div key={idx} className={`relative flex flex-col reveal delay-${(idx + 1) * 100}`}>
                                    <div className="border-b border-black/10 pb-4 mb-6">
                                        <span className="font-mono text-xs text-gray-400 mb-1 block">0{idx + 1}</span>
                                        <h4 className="font-serif text-2xl italic text-black">{category.title}</h4>
                                    </div>
                                    <div className="flex flex-wrap gap-x-2 gap-y-3">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="relative group overflow-hidden px-4 py-2 bg-white border border-black/10 text-xs font-bold uppercase tracking-wide transition-all duration-300 hover:border-black hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] cursor-default"
                                            >
                                                <span className="relative z-10">{skill}</span>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;