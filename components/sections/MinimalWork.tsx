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
    <section id="work" className="relative w-full py-20 md:py-32 bg-white text-neutral-900 border-t border-neutral-100">
      
      <div className="max-w-7xl mx-auto px-5 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-4 md:gap-8 border-b border-neutral-200 pb-6 md:pb-8">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-black">
                Selected Work
            </h2>
            <div className="text-neutral-500 font-bold text-xs uppercase tracking-widest hidden md:block">
                [ 0{designProjects.length + codeProjects.length} Projects ]
            </div>
        </div>

        {/* Design Projects List */}
        <div className="flex flex-col gap-20 md:gap-40 mb-24 md:mb-40">
            {designProjects.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="group"
                >
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                        {/* Responsive Layout: Column on Mobile, Grid on Desktop */}
                        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 items-center">
                            
                            {/* Image Container */}
                            <div className="w-full md:col-span-7 relative aspect-[4/3] md:aspect-[16/10] bg-neutral-50 overflow-hidden rounded-2xl md:rounded-[32px] border border-neutral-100 shadow-sm md:shadow-none">
                                <Image 
                                    src={project.image} 
                                    alt={project.name}
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Text Container */}
                            <div className="w-full md:col-span-5 flex flex-col justify-center">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-2 py-1 md:px-3 md:py-1 bg-white border border-neutral-200 rounded-full text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title - Scaled for Mobile */}
                                <h3 className="text-3xl md:text-5xl font-bold mb-3 md:mb-6 text-black tracking-tight group-hover:text-neutral-600 transition-colors">
                                    {project.name}
                                </h3>
                                
                                <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-6 md:mb-8 font-medium">
                                    {project.description}
                                </p>
                                
                                <div className="flex items-center gap-3 text-black font-bold text-xs md:text-sm uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                                    View <ArrowUpRight size={16} />
                                </div>
                            </div>
                        </div>
                    </a>
                </motion.div>
            ))}
        </div>

        {/* Engineering Section */}
        <div className="border-t border-neutral-200 pt-16 md:pt-24">
            <div className="mb-8 md:mb-12 flex items-center gap-4">
                <Layers size={20} className="text-black" />
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest text-neutral-900">Engineering & Tools</h4>
            </div>

            {codeProjects.map((project, index) => (
                <div key={index} className="bg-neutral-50 border border-neutral-200 p-6 md:p-12 rounded-2xl md:rounded-[32px] hover:border-neutral-300 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                        <div>
                            <div className="flex items-center gap-3 md:gap-4 mb-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-black">{project.name}</h3>
                                <span className="bg-black text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">v1.0 Plugin</span>
                            </div>
                            <p className="text-neutral-600 max-w-xl text-base md:text-lg font-medium">
                                {project.description}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                            <a href={project.figmaLink} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-black text-white font-bold text-xs md:text-sm rounded-xl md:rounded-2xl hover:bg-neutral-800 transition-colors">
                                <Figma size={18} /> Try in Figma
                            </a>
                            <a href={project.githubLink} target="_blank" className="flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 bg-white border border-neutral-200 text-black font-bold text-xs md:text-sm rounded-xl md:rounded-2xl hover:bg-neutral-100 transition-colors">
                                <Github size={18} /> View Code
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