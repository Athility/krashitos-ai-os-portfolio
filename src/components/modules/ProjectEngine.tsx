"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";

const projects = [
    {
        title: "Cinematiq AI Shot List",
        description: "An AI-powered cinematography shot list generator. Uses intelligent models to suggest camera angles, lighting, and movement for directors.",
        tech: ["Next.js", "AI Integration", "TailwindCSS"],
        link: "https://vercel.com/krashos-projects-a330b819/cinematiq-ai-shot-list",
        type: "AI Dashboard"
    },
    {
        title: "Sports Moments AI",
        description: "AI tool designed for sports highlight analysis. Automatically chapters and analyzes key moments in sporting events.",
        tech: ["React", "Video AI", "TypeScript"],
        link: "https://vercel.com/krashos-projects-a330b819/sports-moments-ai",
        type: "Video Intelligence"
    },
    {
        title: "Spice Site",
        description: "A premium modern web experience built for spice products, showcasing fluid animations and creative UI direction.",
        tech: ["Next.js", "Framer Motion", "E-commerce UI"],
        link: "https://vercel.com/krashos-projects-a330b819/spice-site",
        type: "Premium UI"
    }
];

export function ProjectEngine() {
    return (
        <div className="space-y-8">
            {projects.map((project, i) => (
                <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="group relative overflow-hidden rounded-2xl glass-panel p-6 sm:p-8 hover:border-primary/30 transition-colors duration-500"
                >
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1fr_250px] gap-8 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <Code2 className="text-secondary" size={18} />
                                <span className="text-xs font-mono tracking-widest uppercase text-secondary/80">{project.type}</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-white/60 mb-6 max-w-2xl leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(tech => (
                                    <span key={tech} className="px-3 py-1 rounded bg-black/40 border border-white/5 text-white/50 text-xs font-mono">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 justify-center">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="glow-border relative px-6 py-4 rounded-xl flex items-center justify-between text-white bg-white/5 border border-white/10 hover:border-primary/50 group/btn transition-colors"
                            >
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover/btn:opacity-100 transition-opacity rounded-xl" />
                                <span className="font-medium relative z-10">Initialize App</span>
                                <ExternalLink size={18} className="relative z-10 group-hover/btn:rotate-45 transition-transform text-primary" />
                            </a>

                            <button disabled className="px-6 py-4 rounded-xl flex items-center justify-between text-white/30 bg-white/5 border border-white/5 cursor-not-allowed">
                                <span className="font-medium">Source Locked</span>
                                <Github size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
