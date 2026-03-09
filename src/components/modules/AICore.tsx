"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AICore() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full min-h-[400px] md:min-h-[500px] flex flex-col items-start justify-center overflow-hidden rounded-xl p-8 lg:p-12 glass-panel group"
        >
            {/* Background glow effects */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen pointer-events-none group-hover:bg-primary/30 transition-colors duration-700" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[100px] mix-blend-screen pointer-events-none group-hover:bg-secondary/30 transition-colors duration-700" />

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 w-full max-w-3xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="h-px w-10 bg-primary shadow-[0_0_10px_#00f0ff]" />
                    <span className="text-primary font-mono text-sm tracking-[0.2em] font-medium">SYS.CORE</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-white leading-[1.1]"
                >
                    <span className="block">KRASHITOS</span>
                    <span className="text-gradient block mt-2">AI-OS</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-white/70 max-w-xl mb-10 font-light leading-relaxed"
                >
                    AI-native builder. Automation architect. Creating intelligent tools mapping the future.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <button className="glow-border relative group/btn px-8 py-3 rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-transparent transition-all">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                        <span className="relative z-10 font-mono text-sm uppercase tracking-wider text-white gap-2 flex items-center">
                            Initialize Protocols <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </motion.div>
            </motion.div>

            {/* Decorative grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        </div>
    );
}
