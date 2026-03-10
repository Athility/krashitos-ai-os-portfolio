"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse-slow shadow-[0_0_10px_#00f0ff]" />
                    <span className="font-mono text-xl font-bold tracking-wider text-foreground">
                        KRASHITOS<span className="text-primary">_OS</span>
                    </span>
                </div>

                <div className="hidden md:flex items-center gap-8 mr-12">
                    <a href="/projects" className="text-xs font-mono text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Projects</a>
                    <a href="/skills" className="text-xs font-mono text-white/50 hover:text-primary transition-colors uppercase tracking-widest">Skills</a>
                    <a href="/about" className="text-xs font-mono text-white/50 hover:text-primary transition-colors uppercase tracking-widest">About</a>

                    <div className="flex items-center gap-2 text-sm font-mono text-white/50 ml-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span>SYS.ONLINE</span>
                    </div>
                </div>

                <button className="md:hidden text-white/70 hover:text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </motion.nav>
    );
}
