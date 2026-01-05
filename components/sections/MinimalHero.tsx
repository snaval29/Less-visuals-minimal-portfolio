"use client";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Image from "next/image";
import { HeroBackground } from "./HeroBackground"; // ✅ Ensure this file exists in the same folder

export const MinimalHero = () => {
  return (
    /* 🚀 Added dark:bg-neutral-950 and dark:text-white */
    <section className="relative w-full flex flex-col justify-start bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white pt-20 pb-0 md:pt-32 md:pb-20 font-sans overflow-hidden transition-colors duration-500">
      
      {/* --- ASSET LAYER (LIGHT MODE ONLY) --- */}
      {/* ✅ dark:hidden ensures these 3D assets disappear in dark mode */}
      <div className="absolute inset-0 pointer-events-none z-0 dark:hidden">
        
        {/* 1. Headphones */}
        <div className="absolute top-[12%] left-[2%] w-16 h-16 sm:top-[12%] sm:left-[10%] sm:w-20 sm:h-20 md:top-[19%] md:left-[25%] md:w-28 md:h-28 lg:top-[18%] lg:left-[25%] lg:w-40 lg:h-40 mix-blend-multiply opacity-90 transition-all duration-500">
          <Image
            src="/images/headphone.png"
            alt="3D Headphones"
            fill
            className="object-contain saturate-[0.8]"
            priority
          />
        </div>

        {/* 2. Bulb-Pencil */}
        <div className="absolute top-[16%] right-[6%] w-14 h-14 sm:top-[15%] sm:right-[15%] sm:w-20 sm:h-20 md:top-[25%] md:right-[25%] md:w-26 md:h-26 lg:top-[22%] lg:right-[30%] lg:w-44 lg:h-44 rotate-[35deg] mix-blend-multiply opacity-95 transition-all duration-500">
          <Image src="/images/bulb.png" alt="3D Idea Bulb" fill className="object-contain" />
        </div>

        {/* 3. Microphone */}
        <div className="absolute bottom-[10%] right-[10%] w-18 h-18 sm:bottom-[5%] sm:left-[15%] sm:w-24 sm:h-24 md:bottom-[8%] md:left-[40%] md:w-24 md:h-24 lg:bottom-[6%] lg:left-[32%] lg:w-38 lg:h-38 -rotate-[15deg] mix-blend-multiply opacity-80 transition-all duration-500">
          <Image src="/images/mic.png" alt="3D Microphone" fill className="object-contain saturate-[0.85]" />
        </div>
      </div>

      {/* --- DARK MODE BACKGROUND EFFECT --- */}
      {/* ✅ hidden dark:block only shows the stars/meteors in dark mode */}
      <div className="hidden dark:block absolute inset-0 z-0">
        <HeroBackground />
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-0"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-6 relative z-30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
              Online & Building
            </span>
          </div>

          <h1 className="text-[15vw] leading-[0.9] md:text-[9.5rem] md:leading-[0.82] font-bold tracking-tighter mb-8 text-black dark:text-white transition-colors duration-500">
            Hi! <br />
            <span className="text-neutral-500 dark:text-neutral-400">Naval</span> Here.
          </h1>

          <p className="max-w-[85%] md:max-w-lg text-lg md:text-2xl text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed mb-10 tracking-tight">
             I design interfaces that feel <span className="text-black dark:text-white italic">musical</span> and build systems that are technically robust. 
          </p>

          <div className="flex items-center gap-6 mb-16 md:mb-0">
            <a 
                href="/resume.pdf" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-2xl shadow-xl active:scale-95 transition-all duration-300"
            >
                <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Get Resume</span>
                <Download size={14} className="dark:text-black" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};