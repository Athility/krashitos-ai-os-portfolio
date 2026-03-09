"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { DashboardGrid } from "@/components/DashboardGrid";
import { ModulePanel } from "@/components/ModulePanel";
import { BootSequence } from "@/components/BootSequence";
import { AssistantBubble } from "@/components/ai-assistant/AssistantBubble";
import { ChatWindow } from "@/components/ai-assistant/ChatWindow";

import { Cpu, Terminal, Briefcase, UserCircle, Rocket, Database } from "lucide-react";
import Lenis from "lenis";

// Lazy load actual module content for performance
const AICore = dynamic(() => import("@/components/modules/AICore").then(mod => mod.AICore));
const KnowledgeBase = dynamic(() => import("@/components/modules/KnowledgeBase").then(mod => mod.KnowledgeBase));
const SkillMatrix = dynamic(() => import("@/components/modules/SkillMatrix").then(mod => mod.SkillMatrix));
const ProjectEngine = dynamic(() => import("@/components/modules/ProjectEngine").then(mod => mod.ProjectEngine));
const BuildLogs = dynamic(() => import("@/components/modules/BuildLogs").then(mod => mod.BuildLogs));
const CommTerminal = dynamic(() => import("@/components/modules/CommTerminal").then(mod => mod.CommTerminal));

export default function Home() {
  const [isBooted, setIsBooted] = useState(false);
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // Keyboard shortcut to close modules
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExpandedModuleId(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isBooted) {
    return <BootSequence onComplete={() => setIsBooted(true)} />;
  }

  const modules = [
    { id: "AI Core", component: <AICore />, className: "md:col-span-2 lg:col-span-2 row-span-1", icon: <Cpu /> },
    { id: "Knowledge Base", component: <KnowledgeBase />, className: "row-span-1", icon: <UserCircle /> },
    { id: "Skill Matrix", component: <SkillMatrix />, className: "md:col-span-1 lg:col-span-1", icon: <Database /> },
    { id: "Project Engine", component: <ProjectEngine />, className: "md:col-span-2 xl:col-span-2", icon: <Rocket /> },
    { id: "Build Logs", component: <BuildLogs />, className: "md:col-span-2 xl:col-span-2", icon: <Terminal /> },
    { id: "Communication Terminal", component: <CommTerminal />, className: "md:col-span-1 xl:col-span-1", icon: <Briefcase /> }
  ];

  return (
    <main className="min-h-screen pt-24 pb-16 relative">
      <Navbar />

      <DashboardGrid className={expandedModuleId ? "pointer-events-none blur-sm opacity-50 transition-all duration-500" : "transition-all duration-500"}>
        {modules.map((m) => (
          <ModulePanel
            key={m.id}
            id={m.id}
            title={m.id}
            icon={m.icon}
            isExpanded={expandedModuleId === m.id}
            onExpand={() => setExpandedModuleId(m.id)}
            onCollapse={() => setExpandedModuleId(null)}
            className={m.className}
          >
            {/* Standardize padding around dynamically loaded modules depending on which is active */}
            <div className="w-full h-full min-h-full">
              {m.component}
            </div>
          </ModulePanel>
        ))}
      </DashboardGrid>

      {/* Background decorations */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      </div>

      {/* AI Assistant */}
      <AssistantBubble
        isOpen={isChatOpen}
        onClick={() => setIsChatOpen(true)}
      />
      <ChatWindow
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onNavigate={(id) => setExpandedModuleId(id)}
      />
    </main>
  );
}
