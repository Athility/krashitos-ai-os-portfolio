export type AssistantAction = "NONE" | "NAVIGATE";

export interface ProcessedCommand {
    text: string;
    action: AssistantAction;
    moduleId?: string;
}

const COMMAND_MAP = [
    {
        patterns: [/(tell me )?about krashitos/i, /who is krashitos/i, /who are you/i, /identity/i, /background/i],
        response: "Krashitos is an 18-year-old AI-native builder orchestrating automated systems and intelligent web tools. Currently pursuing B.Tech in AI & Data Science in Mumbai.",
        action: "NAVIGATE",
        moduleId: "Knowledge Base"
    },
    {
        patterns: [/(show )?projects/i, /what have you built/i, /portfolio/i, /work/i],
        response: "Accessing Project Engine. Krashitos has shipped tools like Cinematiq AI Shot List and Sports Moments AI.",
        action: "NAVIGATE",
        moduleId: "Project Engine"
    },
    {
        patterns: [/(what )?tech/i, /skills/i, /stack/i, /tools/i, /technologies/i],
        response: "Initializing Skill Matrix. Core proficiencies include React, Next.js, AI/ML integrations, Python, and UI/UX design.",
        action: "NAVIGATE",
        moduleId: "Skill Matrix"
    },
    {
        patterns: [/(contact|connect|email|hire|reach)/i, /how to reach/i],
        response: "Opening Communication Terminal to establish a secure handshake.",
        action: "NAVIGATE",
        moduleId: "Communication Terminal"
    },
    {
        patterns: [/(journey|history|logs|timeline|experience|learn)/i],
        response: "Accessing Build Logs. Pulling timeline of development milestones and system updates.",
        action: "NAVIGATE",
        moduleId: "Build Logs"
    },
    {
        patterns: [/(hello|hi|hey|greetings)/i, /initialize/i],
        response: "Greetings. I am the KRASHITOS AI-OS Assistant. You can ask me to open specific modules or tell you about Krashitos.",
        action: "NONE"
    }
];

export function processCommand(input: string): ProcessedCommand {
    const normalizedInput = input.trim();

    // Find matching command
    for (const cmd of COMMAND_MAP) {
        if (cmd.patterns.some(pattern => pattern.test(normalizedInput))) {
            return {
                text: cmd.response,
                action: cmd.action as AssistantAction,
                moduleId: cmd.moduleId
            };
        }
    }

    // Fallback
    return {
        text: "Command not recognized in standard protocols. Try 'show projects', 'tell me about krashitos', or 'contact info'.",
        action: "NONE"
    };
}
