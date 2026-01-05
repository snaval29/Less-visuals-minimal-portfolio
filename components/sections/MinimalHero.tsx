"use client"
import { motion } from "framer-motion"
import { Download } from "lucide-react"
import Image from "next/image"

export const MinimalHero = () => {
  return (
    /* FIXED: pb-4 on mobile and pb-20 on desktop to eliminate the large white gap before the Work section */
    <section className="relative w-full min-h-[75vh] md:min-h-[85vh] flex flex-col justify-start bg-white text-neutral-900 pt-20 pb-4 sm:pt-24 md:pt-32 md:pb-20 font-sans overflow-hidden">
      
      {/* --- ASSET LAYER --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* 1. Headphones */}
        <div
          className="absolute 
          top-[8%] left-[5%] w-10 h-10
          sm:top-[12%] sm:left-[10%] sm:w-20 sm:h-20
          md:top-[19%] md:left-[25%] md:w-28 md:h-28
          lg:top-[18%] lg:left-[25%] lg:w-40 lg:h-40
          mix-blend-multiply opacity-80 transition-all duration-500"
        >
          <Image
            src="/images/headphone.png"
            alt="3D Headphones"
            fill
            className="object-contain saturate-[0.8]"
            priority
          />
        </div>

        {/* 2. Bulb-Pencil */}
        <div
          className="absolute 
          top-[12%] right-[8%] w-8 h-8
          sm:top-[15%] sm:right-[15%] sm:w-20 sm:h-20
          md:top-[25%] md:right-[25%] md:w-26 md:h-26
          lg:top-[22%] lg:right-[30%] lg:w-44 lg:h-44
          rotate-[35deg] mix-blend-multiply opacity-95 transition-all duration-500"
        >
          <Image src="/images/bulb.png" alt="3D Idea Bulb" fill className="object-contain" />
        </div>

        {/* 3. Microphone: RE-ALIGNED specifically for the screenshot issue */}
        <div
          className="absolute 
          bottom-[5%] left-[60%] w-14 h-14
          sm:bottom-[5%] sm:left-[15%] sm:w-24 sm:h-24
          md:bottom-[8%] md:left-[40%] md:w-24 md:h-24
          lg:bottom-[6%] lg:left-[32%] lg:w-38 lg:h-38
          -rotate-[15deg] mix-blend-multiply opacity-75 transition-all duration-500"
        >
          <Image src="/images/mic.png" alt="3D Microphone" fill className="object-contain saturate-[0.85]" />
        </div>
      </div>

      {/* --- CONTENT LAYER --- */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-4 md:mt-0"
        >
          {/* Status Badge */}
          <div className="flex items-center gap-2 mb-5 sm:mb-6 md:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase text-neutral-500">
              Online & Building
            </span>
          </div>

          {/* Headline */}
          <h1
            className="
            text-[15vw] leading-[0.92]
            xs:text-[14vw] xs:leading-[0.9]
            sm:text-6xl sm:leading-[0.88]
            md:text-8xl md:leading-[0.85]
            lg:text-[9.5rem]
            xl:text-[10.5rem]
            font-bold tracking-tighter mb-6 sm:mb-8 md:mb-10 -ml-1 text-black
            max-w-[95%] sm:max-w-none"
          >
            Hi! <br />
            <span className="text-neutral-500">Naval</span> Here.
          </h1>

          {/* Subline */}
          <p
            className="
            max-w-[90%] xs:max-w-xs sm:max-w-md md:max-w-lg 
            text-[15px] sm:text-lg md:text-xl lg:text-2xl 
            text-neutral-500 font-medium 
            leading-relaxed mb-8 sm:mb-10 md:mb-12 
            tracking-tight"
          >
            I design interfaces that feel <span className="text-black italic">musical</span> and build systems that are
            technically robust.
          </p>

          {/* CTA Button */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 md:gap-10 mb-2">
            <a
              href="/resume.pdf"
              target="_blank"
              className="
                  group relative inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 
                  px-7 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 
                  bg-neutral-900 text-white rounded-xl sm:rounded-xl md:rounded-2xl 
                  transition-all duration-300 transform-gpu
                  active:scale-95 active:translate-y-0.5
                  shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)]
                  before:absolute before:inset-0 before:rounded-xl sm:before:rounded-xl md:before:rounded-2xl before:border-t before:border-white/20
                "
              rel="noreferrer"
            >
              <span className="font-bold text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.2em] relative z-10">
                Get Resume
              </span>
              <Download
                size={12}
                className="sm:w-[13px] sm:h-[13px] md:w-[14px] md:h-[14px] group-hover:translate-y-1 transition-transform relative z-10"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}