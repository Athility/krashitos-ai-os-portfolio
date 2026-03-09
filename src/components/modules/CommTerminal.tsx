"use client";

import { motion } from "framer-motion";
import { Mail, Briefcase, MapPin, Send } from "lucide-react";

export function CommTerminal() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto h-full items-center">

            {/* Terminal Contact Info */}
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Establish Connection</h2>
                    <p className="text-primary font-mono text-sm tracking-[0.2em] mb-8">&gt; SYSTEM WAITING FOR INPUT...</p>
                    <p className="text-white/60 leading-relaxed">
                        Ready to collaborate on intelligent web tools, AI automations, or premium frontend experiences.
                        Initiate a handshake via email or connect through secure channels.
                    </p>
                </div>

                <div className="space-y-6">
                    <motion.a
                        href="#"
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 group cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                            <Mail className="text-white/70 group-hover:text-primary transition-colors" size={20} />
                        </div>
                        <div>
                            <p className="text-white font-medium mb-1 group-hover:text-primary transition-colors">Transmissions via Email</p>
                            <p className="font-mono text-xs text-secondary tracking-widest uppercase opacity-80">krashitos@example.com</p>
                        </div>
                    </motion.a>

                    <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <MapPin className="text-white/70" size={20} />
                        </div>
                        <div>
                            <p className="text-white font-medium mb-1">Current Sector</p>
                            <p className="font-mono text-xs text-white/50 tracking-widest uppercase">Mumbai, India</p>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 group cursor-default"
                    >
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                            <Briefcase className="text-white/70" size={20} />
                        </div>
                        <div>
                            <p className="text-white font-medium mb-1">Status</p>
                            <p className="font-mono text-xs text-accent tracking-widest uppercase">Available for freelance / opportunities</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Connection Form Matrix */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl border border-white/10 relative overflow-hidden h-full flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

                <form className="relative z-10 space-y-6" onSubmit={e => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-primary tracking-widest uppercase">Entity Name</label>
                        <input
                            type="text"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
                            placeholder="YOUR_IDENTIFIER"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-mono text-primary tracking-widest uppercase">Secure Channel (Email)</label>
                        <input
                            type="email"
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors"
                            placeholder="CONTACT@DOMAIN.COM"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-mono text-primary tracking-widest uppercase">Payload</label>
                        <textarea
                            rows={4}
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-colors resize-none"
                            placeholder="Write your transmission here..."
                        />
                    </div>

                    <button className="glow-border relative w-full px-6 py-4 rounded-xl flex items-center justify-center gap-3 text-white bg-primary/20 border border-primary/50 hover:bg-primary/30 transition-colors group/btn">
                        <span className="font-mono tracking-widest uppercase text-sm font-bold relative z-10">Transmit Data</span>
                        <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                </form>
            </div>

        </div>
    );
}
