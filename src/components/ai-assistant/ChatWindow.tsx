"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Send, X, Bot, User } from "lucide-react";
import { processCommand } from "@/lib/assistantLogic";

interface ChatWindowProps {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (moduleId: string) => void;
}

export function ChatWindow({ isOpen, onClose, onNavigate }: ChatWindowProps) {
    const [messages, setMessages] = useState<{ role: "assistant" | "user", text: string }[]>([
        { role: "assistant", text: "KRASHITOS AI-OS online. How can I assist you with this profile?" }
    ]);
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        // Add user message
        const userMessage = input.trim();
        setMessages(prev => [...prev, { role: "user", text: userMessage }]);
        setInput("");

        // Simulate thinking delay
        setTimeout(() => {
            const response = processCommand(userMessage);
            setMessages(prev => [...prev, { role: "assistant", text: response.text }]);

            if (response.action === "NAVIGATE" && response.moduleId) {
                setTimeout(() => {
                    onNavigate(response.moduleId!);
                    if (window.innerWidth < 768) {
                        onClose(); // Auto close on mobile after navigation
                    }
                }, 1500); // Wait a moment so user can read response before navigating
            }
        }, 600);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-20 right-6 w-[350px] sm:w-[400px] h-[500px] max-h-[75vh] glass-panel z-50 flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.5)] border border-primary/20 overflow-hidden"
                >
                    {/* Header */}
                    <div className="h-14 bg-surface/80 border-b border-border flex items-center justify-between px-4">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow shadow-[0_0_8px_#00ffa3]" />
                            <span className="font-mono text-sm tracking-widest text-white/90">AI.ASSISTANT</span>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-white/50 hover:text-white transition-colors"
                        >
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar flex flex-col">
                        {messages.map((msg, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}
                            >
                                <div className={`w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center border ${msg.role === "user" ? "bg-white/10 border-white/20" : "bg-primary/20 border-primary/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                                    }`}>
                                    {msg.role === "user" ? <User size={14} className="text-white/70" /> : <Bot size={14} className="text-primary" />}
                                </div>

                                <div className={`p-3 rounded-2xl text-sm ${msg.role === "user"
                                    ? "bg-white/10 text-white rounded-tr-sm"
                                    : "bg-primary/10 text-white/90 border border-primary/20 rounded-tl-sm"
                                    }`}>
                                    {msg.text}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 border-t border-border bg-surface/50">
                        <form onSubmit={handleSubmit} className="relative flex items-center">
                            <Terminal size={16} className="absolute left-3 text-primary/50" />
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask systemic query..."
                                className="w-full bg-black/40 border border-white/10 rounded-full pl-10 pr-12 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-primary/50 transition-colors focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="absolute right-2 p-2 rounded-full text-white/50 hover:text-primary hover:bg-white/5 transition-colors disabled:opacity-50 disabled:hover:text-white/50 disabled:hover:bg-transparent"
                            >
                                <Send size={16} />
                            </button>
                        </form>
                        <div className="flex gap-2 mt-3 overflow-x-auto pb-1 custom-scrollbar hide-scrollbar">
                            {["tell me about krashitos", "show projects", "contact info"].map(suggestion => (
                                <button
                                    key={suggestion}
                                    onClick={() => setInput(suggestion)}
                                    className="whitespace-nowrap flex-shrink-0 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-mono text-white/50 hover:text-primary hover:border-primary/30 transition-colors"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
