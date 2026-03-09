# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision

Build **KRASHITOS AI-OS** — a premium developer portfolio designed as an interactive AI operating system dashboard. Instead of a traditional scrolling website, the portfolio presents system modules (Hero, About, Skills, Projects, Build Logs, Contact) as clickable dashboard panels that expand into full interface views. The experience begins with a cinematic AI boot sequence and features an integrated AI assistant that responds to natural language queries about the developer. The portfolio should feel like navigating a living intelligence system, not reading a resume.

## Goals

1. **AI-OS Dashboard Interface** — Build a modular dashboard where each section is a "system module" panel that expands on click
2. **Cinematic Boot Sequence** — Start with a terminal-style AI system initialization animation before revealing the dashboard
3. **AI Assistant Integration** — Floating chat widget that parses commands and navigates the portfolio contextually
4. **Premium Visual Design** — Dark futuristic theme with glass panels, neon accents, glowing borders, and fluid animations
5. **Project Showcase** — Feature 3 live AI projects (Cinematiq AI, Sports Moments AI, Spice Site) with interactive cards
6. **Responsive & Performant** — Lighthouse 90+, responsive across devices, optimized bundle

## Non-Goals (Out of Scope)

- Backend API or database integration
- User authentication or accounts
- Blog or CMS functionality
- Real AI model inference (assistant uses pre-mapped responses + command parsing)
- E-commerce or payment features
- Multi-language / i18n support

## Users

**Primary**: Recruiters, hiring managers, and tech professionals evaluating Krashitos as a developer candidate.
**Secondary**: Fellow developers and tech community members interested in AI projects.
**Tertiary**: Potential collaborators seeking to understand his work and skills.

## Developer Profile

- **Name**: Krashitos
- **Age**: 18
- **Education**: 1st year B.Tech AI & Data Science, Shah and Anchor Kutchhi Engineering College, Mumbai
- **Identity**: AI-native builder, automation-focused developer, creator of intelligent tools
- **Strengths**: Rapid prototyping, AI integration, automation workflows, modern frontend development

## Featured Projects

| Project | URL | Description |
|---------|-----|-------------|
| Cinematiq AI Shot List | [Vercel](https://vercel.com/krashos-projects-a330b819/cinematiq-ai-shot-list) | AI-powered cinematography shot list generator |
| Sports Moments AI | [Vercel](https://vercel.com/krashos-projects-a330b819/sports-moments-ai) | AI tool for sports highlight analysis |
| Spice Site | [Vercel](https://vercel.com/krashos-projects-a330b819/spice-site) | Modern web experience for spice products |

## Constraints

- **Framework**: Next.js 14+ with App Router (TypeScript)
- **Styling**: TailwindCSS with CSS variables for design tokens
- **Animations**: Framer Motion (primary), GSAP + ScrollTrigger (advanced), Lenis (smooth scroll)
- **3D**: Three.js / React Three Fiber (optional hero sphere)
- **Deployment**: Vercel
- **Performance**: Lighthouse score > 90
- **Timeline**: Single milestone delivery

## Success Criteria

- [ ] AI boot sequence plays on first load and transitions to dashboard
- [ ] All 6 modules render as dashboard panels in a grid layout
- [ ] Clicking a panel expands it to a full module view with back navigation
- [ ] Project cards display previews, descriptions, tech stack tags, and live demo links
- [ ] AI assistant responds to at least 5 commands with contextual navigation
- [ ] Animations are smooth (60fps) and performance-friendly
- [ ] Responsive design works on desktop, tablet, and mobile
- [ ] Lighthouse performance score ≥ 90
- [ ] Deployed successfully to Vercel
