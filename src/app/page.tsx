"use client";

import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { DashboardGrid } from "@/components/DashboardGrid";
import { ModulePanel } from "@/components/ModulePanel";
import { BootSequence } from "@/components/BootSequence";
import { AssistantBubble } from "@/components/ai-assistant/AssistantBubble";
import { ChatWindow } from "@/components/ai-assistant/ChatWindow";
import { HeroSphere } from "@/components/HeroSphere";

import { Cpu, Terminal, Briefcase, UserCircle, Rocket, Database } from "lucide-react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

  // Refs for GSAP
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereSectionRef = useRef<HTMLDivElement>(null);
  const sphereContainerRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const dashboardContainerRef = useRef<HTMLDivElement>(null);

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

  // GSAP Scroll Animations
  useEffect(() => {
    if (!isBooted) return;

    // 1. Sphere Scaling Timeline
    const sphereTl = gsap.timeline({
      scrollTrigger: {
        trigger: sphereSectionRef.current,
        start: "top top",
        end: "bottom center",
        scrub: 1,
        pin: true,
      }
    });

    sphereTl.to(sphereContainerRef.current, {
      scale: 2.5,
      y: -50,
      opacity: 0.3,
      filter: "blur(10px)",
      duration: 1
    });

    // 2. Intro Text Reveal
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: sphereSectionRef.current,
        start: "center center",
        end: "bottom top",
        scrub: 1,
      }
    });

    introTl.fromTo(introTextRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).to(introTextRef.current, { opacity: 0, y: -50, delay: 0.5 });

    // 3. Dashboard Entrance
    const dashboardTl = gsap.timeline({
      scrollTrigger: {
        trigger: dashboardContainerRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none reverse",
      }
    });

    dashboardTl.from(".module-panel-card", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [isBooted]);

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
    <main ref={containerRef} className="min-h-screen relative overflow-x-hidden">
      <Navbar />

      {/* Hero Animation Stage */}
      <section ref={sphereSectionRef} className="h-screen flex items-center justify-center relative overflow-hidden">
        <div ref={sphereContainerRef}>
          <HeroSphere />
        </div>

        <div
          ref={introTextRef}
          className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none"
        >
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient mb-6">ATHARVA SHINDE</h1>
            <p className="text-xl md:text-2xl text-white/60 font-mono tracking-wider">AI-native builder creating intelligent tools.</p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-[10px] font-mono tracking-widest uppercase">Initiate Core</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent" />
        </div>
      </section>

      {/* Main OS Interface */}
      <section
        ref={dashboardContainerRef}
        className="min-h-screen pt-24 pb-32 relative z-10"
      >
        <DashboardGrid className="transition-all duration-500">
          {modules.map((m) => (
            <div key={m.id} className="module-panel-card h-full">
              <ModulePanel
                id={m.id}
                title={m.id}
                icon={m.icon}
                isExpanded={expandedModuleId === m.id}
                onExpand={() => setExpandedModuleId(m.id)}
                onCollapse={() => setExpandedModuleId(null)}
                className={m.className}
              >
                <div className="w-full h-full min-h-full">
                  {m.component}
                </div>
              </ModulePanel>
            </div>
          ))}
        </DashboardGrid>
      </section>

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
