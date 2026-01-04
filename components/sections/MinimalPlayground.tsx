"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

// --- 1. HELPER: Force Video Autoplay ---
const PlaygroundVideo = ({ src }: { src: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.muted = true;
            video.play().catch((err) => console.log("Autoplay prevented:", err));
        }
    }, []);

    return (
        <video
            ref={videoRef}
            src={src}
            loop
            muted
            playsInline
            autoPlay
            className="w-full h-auto object-cover"
        />
    );
};

// --- 2. DATA ---
type PlaygroundItem = {
    id: number;
    type: "image" | "video";
    src: string;      
    alt: string;
};

// We define the items here
const allItems: PlaygroundItem[] = [
    { id: 1, type: "image", src: "/images/work/1.webp", alt: "UI Experiment" },
    { id: 2, type: "image", src: "/images/work/2.jpg", alt: "3D Render" },
    { id: 3, type: "video", src: "/videos/demo.mp4", alt: "Demo Video" },
    { id: 4, type: "image", src: "/images/work/3.webp", alt: "Visuals" },
    { id: 5, type: "image", src: "/images/work/4.webp", alt: "Typography" },
    { id: 6, type: "image", src: "/images/work/6.png", alt: "Mobile UI" },
];

export const MinimalPlayground = () => {
  return (
    <section className="w-full py-32 bg-white text-neutral-900 border-t border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-black mb-4">
                The Playground
            </h2>
            <p className="text-lg text-neutral-600 max-w-md font-medium">
                Experiments, motion tests, and visual output.
            </p>
        </div>

        {/* --- 3. CSS COLUMNS LAYOUT (The Fix) --- */}
        {/* columns-1 (mobile) -> columns-2 (tablet) -> columns-3 (desktop) */}
        {/* 'space-y-8' adds vertical gap between items in the same column */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            
            {allItems.map((item, index) => (
                <PlaygroundCard key={item.id} item={item} index={index} />
            ))}

        </div>
      </div>
    </section>
  );
};

// --- 4. CARD COMPONENT ---
const PlaygroundCard = ({ item, index }: { item: PlaygroundItem, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            // 'break-inside-avoid' is CRITICAL. It stops the image from being cut in half.
            className="break-inside-avoid relative w-full rounded-2xl overflow-hidden bg-neutral-100 group mb-8"
        >
            {item.type === "image" ? (
                <>
                    <Image 
                        src={item.src}
                        alt={item.alt}
                        width={800} 
                        height={600} 
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/5 pointer-events-none"></div>
                </>
            ) : (
                <PlaygroundVideo src={item.src} />
            )}
        </motion.div>
    );
};