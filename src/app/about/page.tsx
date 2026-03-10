import { KnowledgeBase } from "@/components/modules/KnowledgeBase";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6">
            <Navbar />

            <div className="max-w-7xl mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <Link
                        href="/"
                        className="p-2 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-primary/50 transition-all"
                    >
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-4xl font-display font-bold text-white tracking-tight">Knowledge Base</h1>
                        <p className="text-white/40 font-mono text-sm uppercase tracking-widest mt-1">Standalone Module Access</p>
                    </div>
                </div>

                <div className="glass-panel p-8 sm:p-12 border-primary/20">
                    <KnowledgeBase />
                </div>
            </div>

            {/* Background decorations */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
            </div>
        </main>
    );
}
