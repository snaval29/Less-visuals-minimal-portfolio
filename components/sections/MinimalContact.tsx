"use client";
import { Github, Linkedin, Instagram, Dribbble, Palette } from "lucide-react"; 

export const MinimalContact = () => {
  return (
    // Mobile: pt-16, Desktop: pt-32
    <section id="contact" className="w-full bg-white text-neutral-900 pb-8 md:pb-12 pt-16 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Mobile: p-8, Desktop: p-20. Rounded corners scaled down. */}
        <div className="bg-neutral-900 rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 text-white overflow-hidden relative">
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
                
                <div className="flex flex-col gap-6 w-full">
                    {/* Responsive Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
                        Let’s build something <br/>
                        <span className="text-neutral-500">meaningful.</span>
                    </h2>

                    {/* Responsive Email - break-all ensures it doesn't push width out */}
                    <a 
                        href="mailto:snaval294@gmail.com" 
                        className="group inline-flex items-center text-lg sm:text-2xl md:text-3xl font-bold hover:text-neutral-300 transition-colors break-all"
                    >
                        <span className="border-b border-neutral-600 pb-1">
                            snaval294@gmail.com
                        </span>
                    </a>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                        Connect
                    </p>
                    <div className="flex flex-wrap gap-3">
                         {/* Icons (No changes needed, they scale well) */}
                         <a href="https://www.linkedin.com/in/snaval29" className="p-3 bg-neutral-800 rounded-xl"><Linkedin size={20}/></a>
                         <a href="https://github.com/snaval29" className="p-3 bg-neutral-800 rounded-xl"><Github size={20}/></a>
                         <a href="https://www.instagram.com/naval_sha.rma/" className="p-3 bg-neutral-800 rounded-xl"><Instagram size={20}/></a>
                         <a href="https://dribbble.com/snaval" className="p-3 bg-neutral-800 rounded-xl"><Dribbble size={20}/></a>
                         <a href="https://www.behance.net/navalsharma6" className="p-3 bg-neutral-800 rounded-xl"><Palette size={20}/></a>
                    </div>
                </div>
            </div>

            <div className="mt-12 md:mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between text-neutral-500 text-xs font-medium gap-4">
                <p>© 2026 Naval Sharma.</p>
            </div>

        </div>
      </div>
    </section>
  );
};