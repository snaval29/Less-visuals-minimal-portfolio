"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Dribbble, Palette } from "lucide-react"; 

export const MinimalContact = () => {
  return (
    <section 
      id="contact" 
      /* ✅ Added dark:bg-neutral-950 and transition for theme switching */
      className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white pb-8 md:pb-12 pt-16 md:pt-32 font-sans transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* ✅ Card remains dark in both modes for impact, but inner borders/text adjust */}
        <div className="bg-neutral-900 dark:bg-neutral-900/50 border border-transparent dark:border-neutral-800 rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 text-white overflow-hidden relative transform-gpu">
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start gap-12">
                
                <div className="flex flex-col gap-6 w-full">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter leading-tight"
                    >
                        Let’s build something <br/>
                        <span className="text-neutral-500 dark:text-neutral-400">meaningful.</span>
                    </motion.h2>

                    <motion.a 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        href="mailto:snaval294@gmail.com" 
                        className="group inline-flex items-center text-lg sm:text-2xl md:text-3xl font-bold hover:text-neutral-400 transition-colors break-all tracking-tight"
                    >
                        <span className="border-b-2 border-neutral-700 group-hover:border-neutral-500 transition-all pb-1">
                            snaval294@gmail.com
                        </span>
                    </motion.a>
                </div>

                <div className="flex flex-col gap-4 w-full md:w-auto">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-500">
                        Connect
                    </p>
                    <div className="flex flex-wrap gap-3">
                         <SocialLink href="https://www.linkedin.com/in/snaval29" icon={<Linkedin size={20}/>} />
                         <SocialLink href="https://github.com/snaval29" icon={<Github size={20}/>} />
                         <SocialLink href="https://www.instagram.com/naval_sha.rma/" icon={<Instagram size={20}/>} />
                         <SocialLink href="https://dribbble.com/snaval" icon={<Dribbble size={20}/>} />
                         <SocialLink href="https://www.behance.net/navalsharma6" icon={<Palette size={20}/>} />
                    </div>
                </div>
            </div>

            {/* ✅ Footer within card: Adjusted border and text color for dark mode */}
            <div className="mt-12 md:mt-24 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between text-neutral-500 dark:text-neutral-400 text-[10px] font-bold uppercase tracking-widest gap-4">
                <p>© 2026 Naval Sharma.</p>
                <p className="hidden md:block">Built with Rhythm & Logic</p>
            </div>

        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="p-4 bg-neutral-800 dark:bg-neutral-800/50 border border-transparent dark:border-neutral-700/50 rounded-2xl hover:bg-neutral-700 dark:hover:bg-neutral-700 hover:scale-110 active:scale-95 transition-all duration-300"
  >
    {icon}
  </a>
);