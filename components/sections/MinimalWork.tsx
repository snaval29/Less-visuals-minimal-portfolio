"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Github, Figma, Layers } from "lucide-react"; 

const designProjects = [
    {
        name: "Khan Academy",
        tags: ["App Redesign", "Mobile"],
        description: "Redesigned the progress tracker to leverage micro-rewards and improve learner retention.",
        image: "/images/work/khanacademy.png",
        link: "https://www.behance.net/gallery/241257291/Khan-Academy-Reboot-Modern-UI-for-Smarter-Learning",
    },
    {
        name: "SwayZest",
        tags: ["Brand Identity", "UI Design"], 
        description: "Built a high-contrast interface with large touch targets for glare-heavy physical environments.",
        image: "/images/work/SwayZest.png", 
        link: "https://www.behance.net/gallery/227257103/SwayZest-A-vending-machine-solution", 
    },
    {
        name: "DormSpot",
        tags: ["UX Research", "Case Study"],
        description: "Solved the 'trust deficit' in student housing by prioritizing verification over aesthetics.",
        image: "/images/work/dromspot.png",
        link: "https://www.behance.net/gallery/207552759/DromSpot-UIUX-Case-Study",
    },
];

const codeProjects = [
    {
        name: "Nav Architect Pro",
        type: "Figma Plugin",
        description: "Automating UI setup to let designers focus on creativity.",
        figmaLink: "https://www.figma.com/community/plugin/1586611732146203206",
        githubLink: "https://github.com/snaval29/Nav-Bar-Plugin.git", 
    }
];

export const MinimalWork = () => {
  return (
    /* FIXED: Changed py-24 to pt-12 pb-24 for mobile. md:py-32 remains unchanged for web */
    <section id="work" className="relative w-full pt-4 pb-20 md:pt-32 md:pb-32 bg-white text-neutral-900 border-t border-neutral-100 font-sans overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-28 gap-4 border-b border-neutral-100 pb-8">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-black">
                Selected Work
            </h2>
            <div className="text-neutral-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">
                [ 0{designProjects.length + codeProjects.length} Projects ]
            </div>
        </div>

        {/* --- DESIGN PROJECTS LIST --- */}
        <div className="flex flex-col gap-24 md:gap-48 mb-24 md:mb-40">
            {designProjects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="group"
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block transform-gpu">
                        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-20 items-center">
                            
                            {/* Image Container */}
                            <div className="w-full lg:col-span-7 relative aspect-[4/3] md:aspect-[16/10] bg-neutral-50 overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-neutral-100 will-change-transform">
                                <Image 
                                    src={project.image} 
                                    alt={project.name}
                                    fill 
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-1000 ease-out lg:group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>

                            {/* Text Container */}
                            <div className="w-full lg:col-span-5 flex flex-col">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-neutral-50 border border-neutral-100 rounded-full text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-black tracking-tighter transition-colors group-hover:text-neutral-500">
                                    {project.name}
                                </h3>
                                
                                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-8 font-medium tracking-tight">
                                    {project.description}
                                </p>
                                
                                <div className="flex items-center gap-3 text-black font-bold text-xs uppercase tracking-widest active:translate-x-1 transition-transform">
                                    View Project <ArrowUpRight size={16} className="text-neutral-400" />
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>
            ))}
        </div>

        {/* --- ENGINEERING SECTION --- */}
        <div className="border-t border-neutral-100 pt-20 md:pt-32">
            <div className="mb-10 flex items-center gap-4">
                <Layers size={18} className="text-neutral-400" />
                <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-neutral-400">Engineering & Tools</h4>
            </div>

            {codeProjects.map((project, index) => (
                <div key={index} className="bg-neutral-50/50 border border-neutral-100 p-8 md:p-14 rounded-[2rem] md:rounded-[3rem] hover:bg-white hover:shadow-xl hover:shadow-neutral-200/50 transition-all duration-500 transform-gpu">
                    <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tighter">{project.name}</h3>
                                <span className="bg-black text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Figma Plugin</span>
                            </div>
                            <p className="text-neutral-500 text-lg font-medium leading-relaxed tracking-tight">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href={project.figmaLink} target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold text-xs rounded-2xl hover:bg-neutral-800 active:scale-95 transition-all tracking-widest uppercase">
                                <Figma size={18} /> Try Plugin
                            </a>
                            <a href={project.githubLink} target="_blank" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-neutral-200 text-black font-bold text-xs rounded-2xl hover:border-black active:scale-95 transition-all tracking-widest uppercase">
                                <Github size={18} /> Source Code
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};