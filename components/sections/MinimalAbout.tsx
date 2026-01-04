"use client";
import { motion } from "framer-motion";
import { Mic, Palette, Terminal, Cpu } from "lucide-react";

export const MinimalAbout = () => {
    return (
        <section 
            id="about" 
            className="w-full py-24 md:py-32 bg-white text-neutral-900 border-t border-neutral-100 font-sans"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* ✅ FIX: items-start + relative on the grid ensures the 
                   sticky container stays within this section's boundaries.
                */}
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    
                    {/* LEFT: The Hook - Locked Position */}
                    <div className="lg:col-span-5 lg:sticky lg:top-40 lg:self-start">
                        <motion.h2 
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] mb-8"
                        >
                            I treat code like <br className="hidden md:block" />
                            <span className="text-neutral-400">sheet music.</span>
                        </motion.h2>
                        
                        <div className="flex flex-wrap gap-3">
                            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200/50">
                                <Palette size={14} className="text-neutral-500" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Designer</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200/50">
                                <Mic size={14} className="text-neutral-500" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Vocalist</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full border border-neutral-200/50">
                                <Terminal size={14} className="text-neutral-500" />
                                <span className="text-[10px] font-bold uppercase tracking-widest">Engineer</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: The Content - This scrolls while the left stays put */}
                    <div className="lg:col-span-7 flex flex-col gap-12 transform-gpu">
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-xl md:text-2xl font-medium leading-relaxed text-neutral-800 tracking-tight"
                        >
                            Most see design and logic as opposites. I see them as <span className="text-black font-bold">rhythm and structure.</span> 
                            <br/><br/>
                            Currently finishing my Master's in AI/ML at Chandigarh University. I build interfaces that feel musical and systems that are technically robust.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Palette size={18} className="text-neutral-400" />
                                    <h3 className="font-bold text-xs uppercase tracking-widest">Design & Motion</h3>
                                </div>
                                <ul className="space-y-3 text-neutral-500 font-medium text-sm md:text-base">
                                    <li>Figma (UI/UX)</li>
                                    <li>Framer (Web Design)</li>
                                    <li>Spline (3D)</li>
                                    <li>Rive & Lottie (Motion)</li>
                                </ul>
                            </div>

                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Cpu size={18} className="text-neutral-400" />
                                    <h3 className="font-bold text-xs uppercase tracking-widest">Engineering</h3>
                                </div>
                                <ul className="space-y-3 text-neutral-500 font-medium text-sm md:text-base">
                                    <li>Python / Django / Node.js</li>
                                    <li>SAS Model Studio</li>
                                    <li>AWS Cloud</li>
                                    <li>Vibe Coding (AI Workflows)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-8 mt-4 border-t border-neutral-100 flex items-center gap-4">
                            <div className="h-12 w-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                                N
                            </div>
                            <div>
                                <p className="text-black font-bold text-lg leading-none mb-1 tracking-tight">Naval Sharma</p>
                                <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest">
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