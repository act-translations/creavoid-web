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
    longDescription?: string;
    benefits?: Array<{ title: string; description: string; icon: keyof typeof icons }>;
    process?: Array<{ step: number; title: string; description: string }>;
    features?: string[];
    faq?: Array<{ question: string; answer: string }>;
    tools?: string[];
    useCases?: Array<{ title: string; description: string }>;
}

const services: Service[] = [
    // 1. AI & Automation Services
    {
        slug: "ai-consulting",
        title: "AI Consulting",
        description: "Strategische Beratung, Analyse der KI-Bereitschaft und Identifizierung von Anwendungsfällen.",
        iconName: "Brain",
        longDescription: "Künstliche Intelligenz bietet enorme Chancen für Unternehmen jeder Größe. Doch der Weg zur erfolgreichen KI-Integration ist komplex. Unsere AI Consulting Services begleiten Sie von der ersten Idee bis zur vollständigen Implementierung – mit einer klaren Strategie, die auf Ihre Geschäftsziele zugeschnitten ist.",
        benefits: [
            {
                title: "Messbare Ergebnisse",
                description: "Wir fokussieren uns auf KI-Lösungen, die echten Business Value liefern und Ihre KPIs nachweisbar verbessern.",
                icon: "TrendingUp"
            },
            {
                title: "Branchenexpertise",
                description: "Über 50 erfolgreich umgesetzte KI-Projekte in verschiedenen Industrien – von E-Commerce bis SaaS.",
                icon: "Briefcase"
            },
            {
                title: "End-to-End Begleitung",
                description: "Von der Readiness-Analyse bis zum produktiven Betrieb – wir lassen Sie nicht allein.",
                icon: "Users"
            }
        ],
        process: [
            {
                step: 1,
                title: "AI Readiness Assessment",
                description: "Wir analysieren Ihre aktuelle Infrastruktur, Datenlandschaft und Prozesse, um Potenziale zu identifizieren."
            },
            {
                step: 2,
                title: "Use Case Priorisierung",
                description: "Gemeinsam definieren wir die vielversprechendsten KI-Anwendungsfälle nach ROI, Machbarkeit und strategischer Relevanz."
            },
            {
                step: 3,
                title: "Roadmap Entwicklung",
                description: "Wir erstellen einen detaillierten Fahrplan mit Milestones, Ressourcenplanung und Budget."
            },
            {
                step: 4,
                title: "Implementation Support",
                description: "Begleitung während der Umsetzung, Testing und Optimierung für maximale Performance."
            }
        ],
        features: [
            "Umfassende AI Readiness Assessments",
            "Use Case Workshops mit Ihrem Team",
            "ROI-Kalkulation und Business Case Erstellung",
            "Technologie-Evaluierung und Vendor-Auswahl",
            "Daten-Strategie und Governance-Beratung",
            "Change Management und Team-Training",
            "Prototype Development (MVP)",
            "Kontinuierliche Optimierung und Monitoring"
        ],
        faq: [
            {
                question: "Wie lange dauert ein typisches AI Consulting Projekt?",
                answer: "Ein initiales AI Readiness Assessment dauert in der Regel 2-4 Wochen. Für die vollständige Strategieentwicklung und Roadmap sollten Sie 6-12 Wochen einplanen. Die Implementierung hängt vom Scope ab."
            },
            {
                question: "Benötigen wir bereits KI-Know-how im Team?",
                answer: "Nein, das ist nicht erforderlich. Wir schulen Ihr Team und bauen gemeinsam die notwendigen Kompetenzen auf. Wir holen Sie dort ab, wo Sie stehen."
            },
            {
                question: "Welche Branchen bedienen Sie?",
                answer: "Wir haben Erfahrung in E-Commerce, SaaS, Gesundheitswesen, Finanzdienstleistungen, Manufacturing und Professional Services. Jede Branche profitiert unterschiedlich von KI."
            },
            {
                question: "Was kostet AI Consulting?",
                answer: "Die Kosten hängen vom Umfang ab. Ein initiales Assessment startet bei €5.000. Für umfassende Strategieprojekte sollten Sie €15.000-50.000 einplanen. Wir erstellen individuelle Angebote."
            },
            {
                question: "Können Sie auch die Implementierung übernehmen?",
                answer: "Ja, absolut! Wir bieten sowohl strategische Beratung als auch hands-on Implementierung an. Viele Kunden starten mit Consulting und gehen dann nahtlos in die Umsetzung über."
            }
        ],
        tools: [
            "OpenAI GPT-4 & Custom Models",
            "TensorFlow & PyTorch",
            "Azure AI & Google Cloud AI",
            "LangChain & Vector Databases",
            "Hugging Face Transformers",
            "MLflow & Weights & Biases"
        ],
        useCases: [
            {
                title: "Customer Service Automation",
                description: "Implementierung eines KI-gestützten Support-Systems, das 70% der Kundenanfragen automatisch beantwortet und die Kundenzufriedenheit um 35% steigert."
            },
            {
                title: "Predictive Analytics für E-Commerce",
                description: "Entwicklung eines Forecasting-Systems, das Nachfrage präzise vorhersagt, Lagerkosten um 25% senkt und Out-of-Stock-Situationen minimiert."
            },
            {
                title: "Lead Scoring & Qualifizierung",
                description: "KI-Modell zur automatischen Bewertung und Priorisierung von Leads, das die Conversion Rate um 40% erhöht und Sales-Teams entlastet."
            }
        ]
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

