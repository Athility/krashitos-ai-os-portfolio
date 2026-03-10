"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DashboardGridProps {
    children: ReactNode;
    className?: string;
}

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        }
    }
}

export function DashboardGrid({ children, className }: DashboardGridProps) {
    return (
        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
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
