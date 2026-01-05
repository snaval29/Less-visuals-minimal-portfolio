"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState, memo } from "react";

// --- 1. OPTIMIZED VIDEO (Only plays when visible) ---
const PlaygroundVideo = memo(({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      src={src}
      loop
      muted
      playsInline
      preload="metadata"
      className="w-full h-auto object-cover transform-gpu"
    />
  );
});

PlaygroundVideo.displayName = "PlaygroundVideo";

// --- 2. DATA ---
const allItems = [
  { id: 1, type: "image", src: "/images/work/1.webp", alt: "UI Experiment" },
  { id: 2, type: "image", src: "/images/work/2.jpg", alt: "3D Render" },
  { id: 3, type: "video", src: "/videos/demo.mp4", alt: "Demo Video" },
  { id: 4, type: "image", src: "/images/work/3.webp", alt: "Visuals" },
  { id: 5, type: "image", src: "/images/work/4.webp", alt: "Typography" },
  { id: 6, type: "image", src: "/images/work/6.png", alt: "Mobile UI" },
];

export const MinimalPlayground = () => {
  return (
    /* ✅ Added dark:bg-neutral-950 and dark:text-white transition */
    <section className="w-full py-24 md:py-32 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white border-t border-neutral-100 dark:border-neutral-900 font-sans transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black dark:text-white mb-4">
            The Playground
          </h2>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-md font-medium tracking-tight">
            Experiments, motion tests, and visual output.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 transform-gpu">
          {allItems.map((item, index) => (
            <PlaygroundCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- 3. CARD COMPONENT ---
const PlaygroundCard = ({ item, index }: { item: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index % 3 * 0.1, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      viewport={{ once: true, margin: "-50px" }}
      /* ✅ Updated card bg and border for dark mode */
      className="break-inside-avoid relative w-full rounded-3xl overflow-hidden bg-neutral-50 dark:bg-neutral-900 group mb-8 will-change-transform border border-neutral-100 dark:border-neutral-800 transition-colors duration-500"
    >
      {item.type === "image" ? (
        <div className="relative overflow-hidden">
          <Image 
            src={item.src}
            alt={item.alt}
            width={600} 
            height={800} 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* ✅ Adjusted overlay for better visibility in both modes */}
          <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5 dark:group-hover:bg-white/5 pointer-events-none" />
        </div>
      ) : (
        <PlaygroundVideo src={item.src} />
      )}
    </motion.div>
  );
};