"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface AssistantBubbleProps {
    onClick: () => void;
    isOpen: boolean;
}

export function AssistantBubble({ onClick, isOpen }: AssistantBubbleProps) {
    if (isOpen) return null;

    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
            className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary flex items-center justify-center cursor-pointer z-50 shadow-[0_0_30px_rgba(0,240,255,0.6)] glow-border overflow-hidden group"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-400 to-secondary opacity-80" />
            <Sparkles size={24} className="text-black relative z-10 animate-pulse" />

            {/* Ripple effect */}
            <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-75" />
        </motion.button>
    );
}
