"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "DESIGN INTERN",
    at: "WYVATE",
    focus: "UI/UX // Graphic DESIGN",
    detail:
      "Directing visual language and UI/UX systems. I craft digital assets that synchronize brand identity with marketing goals across digital and offline channels.",
  },
  {
    role: "HACKWITHUP",
    at: "STATE HACKATHON",
    focus: "PRODUCT // OPEN SOURCE ",
    detail:
      "Co-architected an open-source academic ecosystem in a team of 4. We simplified peer-to-peer note sharing flows for university students across specific institutes.",
  },
];

export const MinimalExperience = () => {
  return (
    <section
      id="experience"
      className="w-full py-20 sm:py-24 md:py-40 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white font-sans transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16">

        {/* SECTION HEADER */}
        <div className="relative mb-16 sm:mb-24 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-[1.1]"
          >
            Experiences
          </motion.h2>
        </div>

        {/* EXPERIENCE LIST */}
        <div className="flex flex-col relative">

          {/* vertical divider — desktop only */}
          <div className="hidden md:block absolute left-[33.3%] top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-0 py-10 sm:py-12 md:py-20 border-t border-neutral-100 dark:border-neutral-900 first:border-none"
            >
              {/* LEFT: META */}
              <div className="md:col-span-4 md:pr-16 flex flex-col gap-1 text-left md:text-right">
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase">
                  {exp.at}
                </p>
                <p className="text-[11px] sm:text-xs font-bold tracking-widest uppercase text-neutral-400 dark:text-neutral-600">
                  {exp.focus}
                </p>
              </div>

              {/* RIGHT: CONTENT */}
              <div className="md:col-span-8 md:pl-16">
                <h3 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight uppercase mb-4">
                  {exp.role}
                </h3>

                <p className="text-base sm:text-lg md:text-2xl leading-relaxed tracking-tight text-neutral-700 dark:text-neutral-400 font-medium max-w-2xl">
                  {exp.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
