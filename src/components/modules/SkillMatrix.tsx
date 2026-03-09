"use client";

import { motion } from "framer-motion";

const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"] },
    { category: "AI / ML", items: ["OpenAI API", "Cursor / AI IDES", "Prompt Engineering", "Data Science Core"] },
    { category: "Backend & Systems", items: ["Node.js", "Python", "Automation Scripts", "API Architecture"] },
    { category: "Design & Tools", items: ["Figma", "Git", "Vercel", "GSAP"] }
];

export function SkillMatrix() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, i) => (
                <motion.div
                    key={skillGroup.category}
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="p-6 rounded-xl bg-white/5 border border-white/10 relative overflow-hidden group"
                >
                    {/* Subtle glow on hover */}
                    <div className="absolute top-0 right-0 p-8 bg-primary/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    <div className="flex items-center gap-3 mb-6 relative z-10">
                        <span className="text-primary font-mono text-sm tracking-widest uppercase">0{i + 1}</span>
                        <div className="h-px flex-1 bg-white/10" />
                        <h3 className="text-white font-medium">{skillGroup.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2 relative z-10">
                        {skillGroup.items.map(skill => (
                            <motion.span
                                key={skill}
                                variants={item}
                                className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-white/70 text-sm hover:text-primary hover:border-primary/50 transition-colors cursor-default"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
