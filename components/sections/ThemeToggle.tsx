"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const dark = storedTheme === "dark";
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="h-8 w-14" />;

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-8 w-14 items-center rounded-full bg-neutral-200 dark:bg-neutral-800 p-1 transition-colors"
    >
      <motion.div
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-white dark:bg-neutral-950 shadow-sm"
      >
        {isDark ? (
          <Moon size={12} className="text-purple-400" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
};
