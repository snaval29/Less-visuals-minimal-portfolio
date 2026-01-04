"use client";
import { Mic, Palette, Code2, Terminal, Cpu } from "lucide-react";

export const MinimalAbout = () => {
  return (
    <section id="about" className="w-full py-24 md:py-32 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* LEFT: The Hook */}
            <div className="lg:col-span-5 sticky top-32">
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-8">
                    I treat code like <br className="hidden md:block" />
                    <span className="text-neutral-400">sheet music.</span>
                </h2>
                
                {/* Identity Badges */}
                <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
                        <Palette size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Designer</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
                        <Mic size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Vocalist</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
                        <Terminal size={16} />
                        <span className="text-xs font-bold uppercase tracking-wider">Engineer</span>
                    </div>
                </div>
            </div>

            {/* RIGHT: The Content */}
            <div className="lg:col-span-7 flex flex-col gap-12">
                
                {/* Bio */}
                <p className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-800">
                    Most see design and logic as opposites. I see them as <span className="text-black font-bold">rhythm and structure.</span> 
                    <br/><br/>
                    Currently finishing my Master's in AI/ML at Chandigarh University. I build interfaces that feel musical and systems that are technically robust.
                </p>

                {/* THE TOOLKIT GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
                    
                    {/* Design Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Palette size={20} className="text-neutral-400" />
                            <h3 className="font-bold text-sm uppercase tracking-widest">Design & Motion</h3>
                        </div>
                        <ul className="space-y-3 text-neutral-600 font-medium">
                            <li>Figma (UI/UX)</li>
                            <li>Framer (Web Design)</li>
                            <li>Spline (3D)</li>
                            <li>Rive & Lottiefy (Motion)</li>
                        </ul>
                    </div>

                    {/* Tech Column */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Cpu size={20} className="text-neutral-400" />
                            <h3 className="font-bold text-sm uppercase tracking-widest">Engineering</h3>
                        </div>
                        <ul className="space-y-3 text-neutral-600 font-medium">
                            <li>Python / Django / Node.js</li>
                            <li>SAS Model Studio</li>
                            <li>AWS Cloud</li>
                            <li>Vibe Coding (AI Workflows)</li>
                        </ul>
                    </div>
                </div>

                {/* ✅ SIGNATURE BLOCK (Added Back) */}
                <div className="pt-8 mt-4 border-t border-neutral-100 flex items-center gap-4">
                    {/* Monogram Avatar */}
                    <div className="h-12 w-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                        N
                    </div>
                    
                    {/* Name & Title */}
                    <div>
                        <p className="text-black font-bold text-lg leading-none mb-1">Naval Sharma</p>
                        <p className="text-neutral-500 text-xs font-bold uppercase tracking-wider">
                            Chandigarh University 
                        </p>
                    </div>
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};