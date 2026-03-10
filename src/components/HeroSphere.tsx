"use client";

import { motion } from "framer-motion";

export function HeroSphere({ scale = 1, opacity = 1 }: { scale?: number; opacity?: number }) {
    return (
        <motion.div
            style={{ scale, opacity }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center pointer-events-none"
        >
            {/* Core Sphere */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-blue-600 to-secondary blur-[2px] shadow-[0_0_60px_rgba(0,240,255,0.4)] overflow-hidden">
                {/* Internal moving highlights */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_30%,white,transparent)]" />
                <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
            </div>

            {/* Orbital Rings */}
            <div className="absolute inset-[-20%] border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-[-40%] border border-secondary/10 rounded-full animate-[spin_15s_linear_reverse_infinite]" />
            <div className="absolute inset-[-10%] border-t-2 border-primary/40 rounded-full animate-[spin_20s_ease-in-out_infinite]" />

            {/* Outer Glow */}
            <div className="absolute inset-[-30px] rounded-full bg-primary/20 blur-[40px] animate-pulse" />
        </motion.div>
    );
}
