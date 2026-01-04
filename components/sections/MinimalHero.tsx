"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react"; 

export const MinimalHero = () => {
  return (
    // Mobile: pt-24 (tight), Desktop: pt-32. Removed min-h requirement to prevent gaps on mobile.
    <section className="w-full flex flex-col justify-center bg-white text-neutral-900 pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="max-w-7xl mx-auto px-5 md:px-12 w-full">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="relative z-10"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-500">
              Online & Building
            </span>
          </div>

          {/* Headline - RESPONSIVE SCALING */}
          {/* Mobile: text-5xl, Tablet: text-7xl, Desktop: text-9xl */}
          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8 md:mb-12 -ml-0.5">
            Rhythm in <br />
            <span className="text-neutral-400">Design.</span> <br />
            Logic in <span className="text-neutral-400">Code.</span>
          </h1>

          {/* Subline */}
          <p className="max-w-lg md:max-w-2xl text-lg md:text-2xl text-neutral-800 font-medium leading-relaxed mb-8 md:mb-12">
             I design interfaces that feel musical and build systems that are technically robust.
          </p>

          {/* Button */}
          <div className="flex flex-wrap gap-4">
            <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-neutral-900 text-white rounded-full hover:bg-black transition-all"
            >
                <span className="font-bold text-xs md:text-sm uppercase tracking-widest">
                    Download Resume
                </span>
                <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};