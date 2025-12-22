import {
    Bot,
    Settings2,
    Grid,
    Code2,
    Palette,
    Search,
    Megaphone,
    Users,
    Link as LinkIcon,
    BarChart3,
    Brain,
    Cpu,
    Briefcase,
    Lightbulb,
    FileText,
    Mail,
    MessagesSquare,
    Cloud,
    TrendingUp,
    Activity,
} from "lucide-react";

export const icons = {
    Bot,
    Settings2,
    Grid,
    Code2,
    Palette,
    Search,
    Megaphone,
    Users,
    LinkIcon,
    BarChart3,
    Brain,
    Cpu,
    Briefcase,
    Lightbulb,
    FileText,
    Mail,
    MessagesSquare,
    Cloud,
    TrendingUp,
    Activity,
};

export interface Service {
    slug: string;
    title: string;
    description: string;
    iconName: keyof typeof icons;
}

const services: Service[] = [
    // 1. AI & Automation Services
    {
        slug: "ai-consulting",
        title: "AI Consulting",
        description: "Strategische Beratung, Analyse der KI-Bereitschaft und Identifizierung von Anwendungsfällen.",
        iconName: "Brain",
    },
    {
        slug: "ai-implementation",
        title: "AI Implementation",
        description: "Integration maßgeschneiderter KI-Lösungen und Training spezifischer Modelle.",
        iconName: "Cpu",
    },
    {
        slug: "process-automation",
        title: "Process Automation",
        description: "Automatisierung von Workflows, RPA und BI zur Minimierung repetitiver Aufgaben.",
        iconName: "Settings2",
    },
    {
        slug: "ai-agents",
        title: "AI Agents",
        description: "Intelligente Chatbots, virtuelle Assistenten und Verkaufsagenten rund um die Uhr.",
        iconName: "Bot",
    },
    {
        slug: "marketing-automation",
        title: "Marketing Automation",
        description: "CRM-Integration, Lead-Nurturing und automatisierte Customer Journeys.",
        iconName: "MessagesSquare",
    },

    // 2. Digital Marketing
    {
        slug: "seo",
        title: "SEO",
        description: "Technische und inhaltliche Optimierung für Top-Rankings und organischen Traffic.",
        iconName: "Search",
    },
    {
        slug: "sea",
        title: "SEA (Google Ads)",
        description: "Performance-Kampagnen auf Google, Microsoft und Shopping-Kanälen.",
        iconName: "Megaphone",
    },
    {
        slug: "content-marketing",
        title: "Content Marketing",
        description: "Strategische Erstellung von Blogs, Videos und Whitepapern.",
        iconName: "FileText",
    },
    {
        slug: "email-marketing",
        title: "Email Marketing",
        description: "Automatisierte Kampagnen und Personalisierung zur Kundenbindung.",
        iconName: "Mail",
    },
    {
        slug: "smm",
        title: "Social Media Marketing",
        description: "Management, Content-Erstellung und Paid Social für Ihre Marke.",
        iconName: "Users",
    },
    {
        slug: "affiliate",
        title: "Affiliate Marketing",
        description: "Strategie und Partnermanagement zur Reichweitensteigerung.",
        iconName: "LinkIcon",
    },

    // 3. Development
    {
        slug: "web-development",
        title: "Web Development",
        description: "Full-Stack-Lösungen, Frontend, Backend und E-Commerce Plattformen.",
        iconName: "Code2",
    },
    {
        slug: "web-design",
        title: "Web Design",
        description: "UI/UX, Landing-Pages und Mobile-First-Designs mit Fokus auf Konversion.",
        iconName: "Palette",
    },
    {
        slug: "xaas",
        title: "XaaS Development",
        description: "SaaS, AIaaS und skalierbare Cloud-Lösungen via API.",
        iconName: "Cloud",
    },

    // 4. Consulting
    {
        slug: "digital-strategy",
        title: "Digital Strategy",
        description: "Umfassende Business-Analyse und digitale Transformations-Fahrpläne.",
        iconName: "Lightbulb",
    },
    {
        slug: "business-consulting",
        title: "Business Consulting",
        description: "Beratung zu Tech-Stack, Prozessoptimierung und KI-Strategie.",
        iconName: "Briefcase",
    },

    // 5. Analytics
    {
        slug: "web-analytics",
        title: "Web Analytics",
        description: "GA4-Setup, Dashboards und präzises Conversion-Tracking.",
        iconName: "BarChart3",
    },
    {
        slug: "marketing-analytics",
        title: "Marketing Analytics",
        description: "Attributionsmodelle, ROI-Analysen und Performance-Insights.",
        iconName: "TrendingUp",
    },
    {
        slug: "technical-monitoring",
        title: "Technical Monitoring",
        description: "Search Console Monitoring, Performance und technisches SEO.",
        iconName: "Activity",
    },
];

export default services;
