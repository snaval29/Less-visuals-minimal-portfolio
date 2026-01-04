"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export const MinimalCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Smooth spring physics to prevent the "jittery" feel of standard state updates
  const springConfig = { damping: 25, stiffness: 200 };
  const smoothX = useSpring(0, springConfig);
  const smoothY = useSpring(0, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a") || target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [smoothX, smoothY]);

  return (
    <>
      {/* 1. Main Dot - Using mix-blend-difference for 100% visibility */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block border border-black/10"
        style={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* 2. Outer Ring - Increased stroke and visibility */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          // Centers the 40px (w-10) ring
          translateX: -20,
          translateY: -20,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          // Adds a slight opacity change to the border when hovering
          opacity: isHovering ? 0.5 : 1,
        }}
      />
    </>
  );
};