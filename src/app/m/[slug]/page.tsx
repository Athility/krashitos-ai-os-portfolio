"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { AICore } from "@/components/modules/AICore";
import { KnowledgeBase } from "@/components/modules/KnowledgeBase";
import { SkillMatrix } from "@/components/modules/SkillMatrix";
import { ProjectEngine } from "@/components/modules/ProjectEngine";
import { BuildLogs } from "@/components/modules/BuildLogs";
import { CommTerminal } from "@/components/modules/CommTerminal";

const moduleMap: Record<string, React.ReactNode> = {
    "ai-core": <AICore />,
    "knowledge-base": <KnowledgeBase />,
    "skill-matrix": <SkillMatrix />,
    "project-engine": <ProjectEngine />,
    "build-logs": <BuildLogs />,
    "communication-terminal": <CommTerminal />
};

export default function StandaloneModulePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const content = moduleMap[slug];

    if (!content) return notFound();

    return (
        <main className="min-h-screen pt-24 pb-16 relative bg-background/95">
            <Navbar />
            <div className="max-w-6xl mx-auto p-4 sm:p-6 relative z-10 w-full">
                <div className="glass-panel w-full p-6 sm:p-10 border-primary/20 mt-4 rounded-xl min-h-[70vh]">
                    {content}
                </div>
            </div>

            {/* Background decorations */}
            <div className="fixed inset-0 z-[-1] pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
            </div>
        </main>
    );
}
