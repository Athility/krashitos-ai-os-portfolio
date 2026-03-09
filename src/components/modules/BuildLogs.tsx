"use client";

import { motion } from "framer-motion";
import { Terminal, Database } from "lucide-react";

export function BuildLogs() {
    const logs = [
        {
            date: "2026.03.09",
            version: "v1.0.0",
            title: "AI-OS Portfolio Initialization",
            description: "Deployed the KRASHITOS AI-OS architecture using Next.js App Router and Framer Motion.",
            icon: <Terminal size={20} />
        },
        {
            date: "2025.11.12",
            version: "v0.9.4",
            title: "Cinematiq AI Shipped",
            description: "Launched the AI-driven cinematography shot list generator. Integrated advanced prompt engineering for camera movements.",
            icon: <Database size={20} />
        },
        {
            date: "2025.08.30",
            version: "v0.8.2",
            title: "Sports Moments AI Developed",
            description: "Built a video intelligence tool to analyze and chapter sports highlights automatically.",
            icon: <Database size={20} />
        },
        {
            date: "2025.05.15",
            version: "v0.7.0",
            title: "B.Tech AI & Data Science Commenced",
            description: "Started formal education in AI/Data Science at Shah and Anchor Kutchhi Engineering College, Mumbai.",
            icon: <Terminal size={20} />
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-8">
            <div className="relative border-l-2 border-primary/20 ml-6 md:ml-10 space-y-12">
                {logs.map((log, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        className="relative pl-10 md:pl-16 group"
                    >
                        {/* Timeline node */}
                        <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary group-hover:bg-primary group-hover:shadow-[0_0_15px_rgba(0,240,255,0.6)] transition-all duration-300 z-10" />

                        {/* Horizontal line */}
                        <div className="absolute left-[9px] top-4 w-10 md:w-16 h-px bg-primary/20 group-hover:bg-primary/50 transition-colors" />

                        <div className="glass-panel p-6 sm:p-8 rounded-xl border border-white/5 group-hover:border-primary/30 transition-colors">
                            <div className="flex flex-wrap items-center gap-4 mb-3">
                                <span className="text-secondary font-mono text-sm uppercase tracking-wider">{log.date}</span>
                                <span className="px-2 py-0.5 rounded bg-white/10 text-white/50 text-xs font-mono">{log.version}</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-primary">{log.icon}</div>
                                <h3 className="text-xl font-bold text-white tracking-wide">{log.title}</h3>
                            </div>

                            <p className="text-white/60 leading-relaxed font-light">
                                {log.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
