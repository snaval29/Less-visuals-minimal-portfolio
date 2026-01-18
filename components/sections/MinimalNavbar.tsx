"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Music, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle"; 

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const MinimalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (isOpen) return; 
      
      if (currentScroll < 50) {
        setIsVisible(true);
      } else if (currentScroll > lastScrollY.current) {
        setIsVisible(false); 
      } else {
        setIsVisible(true); 
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-neutral-100 dark:border-neutral-900 transform-gpu ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo - Added transition-colors */}
          <Link href="/" className="flex items-center gap-2 z-[110] relative transition-colors duration-500">
            <Music size={18} className="text-black dark:text-white" />
            <span className="text-xl font-bold tracking-tighter text-black dark:text-white">nav.wav</span>
          </Link>

          <div className="flex items-center gap-4 md:gap-8">
            
            {/* ThemeToggle - Ensure this is visible and accessible */}
            <div className="relative z-[110]">
               <ThemeToggle />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 hover:text-black dark:hover:text-white transition-all duration-300"
                >
                  {link.name}
                </Link>
              ))}
              
              <a
                href="/resume.pdf"
                target="_blank"
                className="
                  relative px-6 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-xl
                  transition-all duration-300 active:scale-95 active:translate-y-0.5
                  shadow-[0_5px_15px_-5px_rgba(0,0,0,0.4)]
                  before:absolute before:inset-0 before:rounded-xl before:border-t before:border-white/20 dark:before:border-black/10 before:pointer-events-none
                "
              >
                Resume
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative z-[110] p-2 text-black dark:text-white active:scale-90 transition-all duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-white dark:bg-neutral-950 flex flex-col pt-32 px-8 md:hidden transition-colors duration-500"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-bold text-black dark:text-white tracking-tighter hover:text-neutral-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-900"
              >
                <a
                  href="/resume.pdf"
                  className="
                    relative flex items-center justify-between w-full p-5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-2xl font-bold
                    shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] transition-all duration-300
                  "
                >
                  <span className="text-sm uppercase tracking-widest">Download Resume</span>
                  <ArrowUpRight size={20} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};