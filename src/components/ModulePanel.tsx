"use client";

import { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ModulePanelProps {
    id: string;
    title: string;
    icon?: ReactNode;
    isExpanded: boolean;
    onExpand: () => void;
    onCollapse: () => void;
    className?: string;
    children: ReactNode;
}

export function ModulePanel({
    title,
    icon,
    isExpanded,
    onExpand,
    onCollapse,
    className,
    children
}: ModulePanelProps) {
    return (
        <AnimatePresence>
            {isExpanded ? (
                // Expanded Full Screen View
                <motion.div
                    layoutId={`panel-${title}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/95 backdrop-blur-xl"
                >
                    <div className="absolute inset-0" onClick={onCollapse} />

                    <motion.div
                        className="glass-panel w-full max-w-6xl h-[90vh] sm:h-[85vh] flex flex-col relative z-10 overflow-hidden border-primary/20 shadow-[0_0_50px_rgba(0,240,255,0.05)]"
                    >
                        {/* Header */}
                        <div className="h-16 border-b border-border flex items-center justify-between px-6 bg-surface/80 backdrop-blur-md sticky top-0 z-20">
                            <div className="flex items-center gap-3">
                                <span className="text-primary">{icon}</span>
                                <h2 className="text-lg font-mono font-bold tracking-wide text-white">{title}</h2>
                            </div>

                            <button
                                onClick={onCollapse}
                                className="p-2 rounded-md hover:bg-white/10 text-white/50 hover:text-white transition-colors"
                                aria-label="Close module"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-6 sm:p-10 custom-scrollbar">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                            >
                                {children}
                            </motion.div>
                        </div>

                        {/* Top/Bottom Glow Effects inside Modal */}
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                    </motion.div>
                </motion.div>
            ) : (
                // Grid View / Collapsed Card
                <motion.div
                    layoutId={`panel-${title}`}
                    onClick={onExpand}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={cn(
                        "glass-panel glass-panel-hover overflow-hidden cursor-pointer group relative transition-colors",
                        className
                    )}
                >
                    {/* Default view content for collapsed state */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                        <div className="flex justify-between items-start">
                            <div className="p-3 rounded-lg bg-white/5 text-white/80 group-hover:bg-primary/10 group-hover:text-primary transition-colors border border-transparent group-hover:border-primary/20">
                                {icon}
                            </div>
                            <ExternalLink size={16} className="text-white/20 group-hover:text-primary/70 transition-colors" />
                        </div>

                        <div>
                            <p className="text-xs font-mono text-primary/50 mb-2 uppercase tracking-widest group-hover:text-primary/80 transition-colors">Module</p>
                            <h3 className="text-xl font-medium text-white/90 group-hover:text-white transition-colors">{title}</h3>
                        </div>
                    </div>

                    {/* Animated Background Gradients on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500 z-0" />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
