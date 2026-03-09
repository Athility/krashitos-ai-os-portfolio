"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardGridProps {
    children: ReactNode;
    className?: string;
}

export function DashboardGrid({ children, className }: DashboardGridProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 xl:p-10",
                "w-full max-w-[1600px] mx-auto min-h-[80vh]",
                className
            )}
        >
            {children}
        </motion.div>
    );
}
