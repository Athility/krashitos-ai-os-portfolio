"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BootSequenceProps {
    onComplete: () => void;
}

const BOOT_LOG = [
    "INITIALIZING KRASHITOS AI SYSTEM v1.0.0",
    "Establishing secure connection...",
    "[OK] Connection established.",
    "Loading core modules...",
    "[OK] AI Core Online",
    "[OK] Knowledge Base Online",
    "[OK] Skill Matrix Online",
    "[OK] Project Engine Online",
    "[WARN] Overriding standard protocols...",
    "System ready. Welcome."
];

export function BootSequence({ onComplete }: BootSequenceProps) {
    const [lines, setLines] = useState<string[]>([]);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        // Blinking cursor
        const cursorInterval = setInterval(() => {
            setShowCursor(v => !v);
        }, 500);

        // Sequence timing
        let lineIndex = 0;

        // Add lines progressively
        const sequenceInterval = setInterval(() => {
            if (lineIndex < BOOT_LOG.length) {
                // Ensure we capture the exact string and default to empty string if undefined (fallback)
                const nextLine = BOOT_LOG[lineIndex] || "";
                setLines(prev => [...prev, nextLine]);
                lineIndex++;
            } else {
                clearInterval(sequenceInterval);

                // Wait a bit after finishing, then call onComplete
                setTimeout(() => {
                    onComplete();
                }, 1500);
            }
        }, 350); // Speed of generating lines

        return () => {
            clearInterval(cursorInterval);
            clearInterval(sequenceInterval);
        };
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-primary font-mono p-6 sm:p-12 overflow-hidden"
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="w-full max-w-3xl flex flex-col items-start justify-center min-h-[50vh]">
                <AnimatePresence>
                    {lines.map((line, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`text-sm sm:text-base md:text-lg mb-2 ${line?.includes("[WARN]") ? "text-[#ffaa00]" :
                                line?.includes("[OK]") ? "text-accent" :
                                    "text-primary"
                                }`}
                        >
                            {`> ${line}`}
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Active line with cursor */}
                {lines.length < BOOT_LOG.length && (
                    <div className="flex text-sm sm:text-base md:text-lg text-primary">
                        <span>{`> `}</span>
                        <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>_</span>
                    </div>
                )}
            </div>

            {/* Decorative scanning line */}
            <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-primary/30"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>
    );
}
