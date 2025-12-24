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
        title: "KI-Beratung",
        description: "Strategische Beratung, KI-Readiness-Analyse und Identifikation von Anwendungsfällen.",
        iconName: "Brain",
        longDescription: "Künstliche Intelligenz bietet enorme Chancen für Unternehmen jeder Größe. Doch der Weg zur erfolgreichen KI-Integration ist komplex. Unsere KI-Beratung begleitet Sie von der ersten Idee bis zur vollen Implementierung – mit einer klaren Strategie, die auf Ihre Geschäftsziele zugeschnitten ist.",
        benefits: [
            {
                title: "Messbare Ergebnisse",
                description: "Wir konzentrieren uns auf KI-Lösungen, die echten geschäftlichen Mehrwert bieten und Ihre KPIs nachweislich verbessern.",
                icon: "TrendingUp"
            },
            {
                title: "Branchenexpertise",
                description: "Über 50 erfolgreich umgesetzte KI-Projekte in verschiedenen Branchen – von E-Commerce bis SaaS.",
                icon: "Briefcase"
            },
            {
                title: "End-to-End Support",
                description: "Von der Readiness-Analyse bis zum produktiven Betrieb – wir begleiten Sie bei jedem Schritt.",
                icon: "Users"
            }
        ],
        process: [
            {
                step: 1,
                title: "KI-Readiness-Check",
                description: "Wir analysieren Ihre aktuelle Infrastruktur, Datenlandschaft und Prozesse, um Potenziale zu identifizieren."
            },
            {
                step: 2,
                title: "Use Case Priorisierung",
                description: "Gemeinsam definieren wir die vielversprechendsten KI-Anwendungsfälle basierend auf ROI und Machbarkeit."
            },
            {
                step: 3,
                title: "Roadmap-Erstellung",
                description: "Wir erstellen einen detaillierten Plan mit Meilensteinen, Ressourcenplanung und Budgetierung."
            },
            {
                step: 4,
                title: "Begleitung der Umsetzung",
                description: "Unterstützung während der Implementierung, beim Testen und der Optimierung für maximale Performance."
            }
        ],
        features: [
            "Umfassende KI-Readiness-Assessments",
            "Use Case Workshops mit Ihrem Team",
            "ROI-Kalkulation und Business Case Erstellung",
            "Technologie-Evaluierung und Tool-Auswahl",
            "Datenstrategie und Governance-Beratung",
            "Change Management und Team-Schulungen",
            "Prototyp-Entwicklung (MVP)",
            "Kontinuierliche Optimierung und Monitoring"
        ],
        faq: [
            {
                question: "Wie lange dauert ein typisches KI-Beratungsprojekt?",
                answer: "Ein initialer KI-Readiness-Check dauert in der Regel 2-4 Wochen. Für eine vollständige Strategieentwicklung sollten Sie 6-12 Wochen einplanen."
            },
            {
                question: "Benötigen wir bereits KI-Know-how im Team?",
                answer: "Nein, das ist nicht erforderlich. Wir schulen Ihr Team und bauen die notwendigen Kompetenzen gemeinsam auf."
            },
            {
                question: "Welche Branchen unterstützen Sie?",
                answer: "Wir haben Erfahrung in E-Commerce, SaaS, Healthcare, Finanzdienstleistungen und Industrie. Jede Branche profitiert individuell von KI."
            },
            {
                question: "Was kostet eine KI-Beratung?",
                answer: "Die Kosten hängen vom Umfang ab. Ein initialer Check startet bei 5.000 €. Für umfassende Strategieprojekte erstellen wir individuelle Angebote."
            },
            {
                question: "Übernehmen Sie auch die Umsetzung?",
                answer: "Ja, absolut! Wir bieten sowohl die strategische Beratung als auch die praktische technische Umsetzung aus einer Hand an."
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
                title: "Kundenservice-Automatisierung",
                description: "Implementierung eines KI-gestützten Support-Systems, das 70% der Anfragen automatisiert beantwortet."
            },
            {
                title: "Predictive Analytics für E-Commerce",
                description: "Prognose-System zur präzisen Vorhersage der Nachfrage und Optimierung der Lagerhaltung."
            },
            {
                title: "KI-Lead-Scoring",
                description: "Automatisierte Bewertung und Priorisierung von Leads zur Steigerung der Conversion-Rate um 40%."
            }
        ]
    },
    {
        slug: "ai-implementation",
        title: "KI-Implementierung",
        description: "Integration maßgeschneiderter KI-Lösungen und Training spezifischer Modelle.",
        iconName: "Cpu",
        longDescription: "Wir bringen KI in die Praxis. Von der Integration bestehender Sprachmodelle (LLMs) bis hin zum Training eigener Modelle auf Ihren Daten – wir entwickeln Lösungen, die funktionieren.",
        benefits: [
            { title: "Nahtlose Integration", description: "Wir integrieren KI direkt in Ihre bestehenden Systeme und Workflows.", icon: "Settings2" },
            { title: "Eigene Datenhoheit", description: "Wir stellen sicher, dass Ihre Daten sicher sind und Sie die volle Kontrolle behalten.", icon: "Briefcase" }
        ],
        process: [
            { step: 1, title: "Datenvorbereitung", description: "Säuberung und Strukturierung Ihrer Daten für das KI-Training." },
            { step: 2, title: "Modellauswahl", description: "Wahl des passenden Modells (OpenAI, Anthropic, Open Source)." },
            { step: 3, title: "Feinabstimmung", description: "Anpassung des Modells an Ihre spezifischen Anforderungen." }
        ]
    },
    {
        slug: "process-automation",
        title: "Prozessautomatisierung",
        description: "Workflow-Automatisierung, RPA und BI zur Minimierung repetitiver Aufgaben.",
        iconName: "Settings2",
        longDescription: "Befreien Sie Ihr Team von manuellen Aufgaben. Wir automatisieren komplexe Geschäftsprozesse durch intelligenten Einsatz von Software und Robotik.",
    },
    {
        slug: "ai-agents",
        title: "KI-Agenten",
        description: "Intelligente Chatbots, virtuelle Assistenten und 24/7 Sales-Agents.",
        iconName: "Bot",
        longDescription: "KI-Agenten, die nicht nur chatten, sondern handeln. Unsere Agenten übernehmen Aufgaben wie Terminbuchungen, Support und Lead-Qualifizierung.",
    },
    {
        slug: "marketing-automation",
        title: "Marketing-Automatisierung",
        description: "CRM-Integration, Lead-Nurturing und automatisierte Customer Journeys.",
        iconName: "MessagesSquare",
    },

    // 2. Digital Marketing
    {
        slug: "seo",
        title: "SEO",
        description: "Technische und inhaltliche Optimierung für Top-Rankings und organischen Traffic.",
        iconName: "Search",
        longDescription: "Sichtbarkeit ist alles. Wir optimieren Ihre Website technisch und inhaltlich, damit Sie bei Google ganz oben stehen.",
    },
    {
        slug: "sea",
        title: "SEA (Google Ads)",
        description: "Performance-Kampagnen auf Google, Microsoft und in Shopping-Kanälen.",
        iconName: "Megaphone",
    },
    {
        slug: "content-marketing",
        title: "Content-Marketing",
        description: "Strategische Erstellung von Blogs, Videos und Whitepapers.",
        iconName: "FileText",
    },
    {
        slug: "email-marketing",
        title: "E-Mail-Marketing",
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
        title: "Affiliate-Marketing",
        description: "Strategie und Partner-Management zur Steigerung der Reichweite.",
        iconName: "LinkIcon",
    },

    // 3. Development
    {
        slug: "web-development",
        title: "Web-Entwicklung",
        description: "Full-Stack-Lösungen, Frontend, Backend und E-Commerce-Plattformen.",
        iconName: "Code2",
        longDescription: "Wir bauen die Technologie von morgen. Mit Next.js, React und modernen Cloud-Infrastrukturen entwickeln wir performante Web-Anwendungen.",
    },
    {
        slug: "web-design",
        title: "Web-Design",
        description: "UI/UX, Landing-Pages und Mobile-First-Designs mit Fokus auf Conversion.",
        iconName: "Palette",
    },
    {
        slug: "xaas",
        title: "XaaS-Entwicklung",
        description: "SaaS, AIaaS und skalierbare Cloud-Lösungen via API.",
        iconName: "Cloud",
    },

    // 4. Consulting
    {
        slug: "digital-strategy",
        title: "Digitale Strategie",
        description: "Umfassende Business-Analyse und digitale Transformations-Roadmaps.",
        iconName: "Lightbulb",
    },
    {
        slug: "business-consulting",
        title: "Business-Beratung",
        description: "Beratung zu Tech-Stack, Prozessoptimierung und KI-Strategie.",
        iconName: "Briefcase",
    },

    // 5. Analytics
    {
        slug: "web-analytics",
        title: "Web-Analyse",
        description: "GA4-Setup, Dashboards und präzises Conversion-Tracking.",
        iconName: "BarChart3",
    },
    {
        slug: "marketing-analytics",
        title: "Marketing-Analyse",
        description: "Attributionsmodelle, ROI-Analysen und Performance-Insights.",
        iconName: "TrendingUp",
    },
    {
        slug: "technical-monitoring",
        title: "Technisches Monitoring",
        description: "Search Console Überwachung, Performance und technisches SEO.",
        iconName: "Activity",
    },
];

export default services;

