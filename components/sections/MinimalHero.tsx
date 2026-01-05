"use client"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Image from "next/image"

export const MinimalHero = () => {
  return (
    <section className="relative w-full flex flex-col justify-start bg-white text-neutral-900 pt-16 pb-0 md:pt-32 md:pb-20 font-sans overflow-hidden">
      
      {/* --- ASSET LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* 1. Headphones: Moved DOWN and RIGHT so they are visible under the navbar */}
        <div className="absolute top-[8%] left-[8%] w-14 h-14 md:top-[18%] md:left-[25%] md:w-40 md:h-40 mix-blend-multiply opacity-90">
          <Image 
            src="/images/headphone.png" 
            alt="3D Headphones" 
            fill 
            className="object-contain saturate-[0.8]" 
            priority 
          />
        </div>

        {/* 2. Bulb-Pencil: Tucked into the top right corner */}
        <div className="absolute top-[10%] right-[5%] w-10 h-10 md:top-[22%] md:right-[30%] md:w-44 md:h-44 rotate-[35deg] mix-blend-multiply opacity-95">
          <Image src="/images/bulb.png" alt="3D Idea Bulb" fill className="object-contain" />
        </div>

        {/* 3. Microphone: RE-POSITIONED to sit right next to the CTA button on mobile */}
        <div className="absolute bottom-[10%] right-[10%] w-16 h-16 md:bottom-[6%] md:left-[32%] md:w-38 md:h-38 -rotate-[15deg] mix-blend-multiply opacity-80">
          <Image src="/images/mic.png" alt="3D Microphone" fill className="object-contain saturate-[0.85]" />
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-500">
              Online & Building
            </span>
          </div>

          <h1 className="text-[15vw] leading-[0.9] md:text-[9.5rem] md:leading-[0.82] font-bold tracking-tighter mb-8 text-black">
            Hi! <br />
            <span className="text-neutral-500">Naval</span> Here.
          </h1>

          <p className="max-w-[90%] md:max-w-lg text-lg md:text-2xl text-neutral-500 font-medium leading-relaxed mb-10">
             I design interfaces that feel <span className="text-black italic">musical</span> and build systems that are technically robust. 
          </p>

          <div className="flex items-center gap-6 mb-12 md:mb-0">
            <a 
                href="/resume.pdf" 
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-2xl shadow-xl"
            >
                <span className="font-bold text-[10px] uppercase tracking-[0.2em]">Get Resume</span>
                <Download size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};