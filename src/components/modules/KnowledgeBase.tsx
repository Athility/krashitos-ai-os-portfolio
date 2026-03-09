"use client";

import { motion } from "framer-motion";
import { User, Code2, Cpu, LineChart } from "lucide-react";

export function KnowledgeBase() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Identity File</h3>
                    <p className="text-white/70 leading-relaxed">
                        I'm <span className="text-primary font-medium">Krashitos</span>, an 18-year-old AI-native builder.
                        I don't just write code; I orchestrate automated systems and intelligent web tools.
                        Currently pursuing my first year of B.Tech in AI & Data Science at Shah and Anchor Kutchhi Engineering College in Mumbai.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                        <Cpu className="text-primary mb-3" size={24} />
                        <h4 className="text-white font-medium mb-1">AI Native</h4>
                        <p className="text-sm text-white/50">Building with LLMs & intelligent APIs</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                        <Code2 className="text-secondary mb-3" size={24} />
                        <h4 className="text-white font-medium mb-1">Fast Prototyping</h4>
                        <p className="text-sm text-white/50">Rapid zero-to-one development</p>
                    </motion.div>
                </div>
            </div>

            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-2xl blur-xl" />
                <div className="relative glass-panel rounded-2xl p-8 border border-white/10 h-full flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(176,38,255,0.4)]">
                            <User size={40} className="text-black" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">SYSTEM.ARCHITECT</h3>
                        <div className="text-primary font-mono text-sm mb-6">&gt; Status: Compiling future</div>
                        <p className="text-white/60 text-sm max-w-xs mx-auto">
                            Driven by the intersection of artificial intelligence and flawless user experiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
