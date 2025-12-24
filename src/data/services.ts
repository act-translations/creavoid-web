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
        description: "Strategic advisory, AI readiness analysis, and use case identification.",
        iconName: "Brain",
        longDescription: "Artificial Intelligence offers enormous opportunities for companies of all sizes. However, the path to successful AI integration is complex. Our AI Consulting Services guide you from the initial idea to full implementation – with a clear strategy tailored to your business goals.",
        benefits: [
            {
                title: "Measurable Results",
                description: "We focus on AI solutions that deliver real business value and demonstrably improve your KPIs.",
                icon: "TrendingUp"
            },
            {
                title: "Industry Expertise",
                description: "Over 50 successfully implemented AI projects across various industries – from E-Commerce to SaaS.",
                icon: "Briefcase"
            },
            {
                title: "End-to-End Support",
                description: "From readiness analysis to productive operation – we are with you every step of the way.",
                icon: "Users"
            }
        ],
        process: [
            {
                step: 1,
                title: "AI Readiness Assessment",
                description: "We analyze your current infrastructure, data landscape, and processes to identify potential."
            },
            {
                step: 2,
                title: "Use Case Prioritization",
                description: "Together, we define the most promising AI use cases based on ROI, feasibility, and strategic relevance."
            },
            {
                step: 3,
                title: "Roadmap Development",
                description: "We create a detailed roadmap with milestones, resource planning, and budgeting."
            },
            {
                step: 4,
                title: "Implementation Support",
                description: "Guidance during implementation, testing, and optimization for maximum performance."
            }
        ],
        features: [
            "Comprehensive AI Readiness Assessments",
            "Use Case Workshops with your team",
            "ROI Calculation and Business Case creation",
            "Technology Evaluation and Vendor Selection",
            "Data Strategy and Governance Consulting",
            "Change Management and Team Training",
            "Prototype Development (MVP)",
            "Continuous Optimization and Monitoring"
        ],
        faq: [
            {
                question: "How long does a typical AI Consulting project last?",
                answer: "An initial AI Readiness Assessment usually takes 2-4 weeks. For full strategy development and roadmap, plan for 6-12 weeks. Implementation depends on the scope."
            },
            {
                question: "Do we need existing AI know-how in the team?",
                answer: "No, that is not required. We train your team and build the necessary competencies together. We pick you up right where you are."
            },
            {
                question: "Which industries do you serve?",
                answer: "We have experience in E-Commerce, SaaS, Healthcare, Financial Services, Manufacturing, and Professional Services. Every industry benefits differently from AI."
            },
            {
                question: "How much does AI Consulting cost?",
                answer: "Costs depend on the scope. An initial assessment starts at €5,000. For comprehensive strategy projects, plan for €15,000-50,000. We create individual quotes."
            },
            {
                question: "Can you also handle the implementation?",
                answer: "Yes, absolutely! We offer both strategic consulting and hands-on implementation. Many clients start with consulting and seamlessly transition into execution."
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
                description: "Implementation of an AI-supported support system that automatically answers 70% of customer inquiries and increases customer satisfaction by 35%."
            },
            {
                title: "Predictive Analytics for E-Commerce",
                description: "Development of a forecasting system that precisely predicts demand, reduces storage costs by 25%, and minimizes out-of-stock situations."
            },
            {
                title: "Lead Scoring & Qualification",
                description: "AI model for automatic evaluation and prioritization of leads, increasing conversion rates by 40% and relieving sales teams."
            }
        ]
    },
    {
        slug: "ai-implementation",
        title: "AI Implementation",
        description: "Integration of custom AI solutions and training of specific models.",
        iconName: "Cpu",
    },
    {
        slug: "process-automation",
        title: "Process Automation",
        description: "Workflow automation, RPA, and BI to minimize repetitive tasks.",
        iconName: "Settings2",
    },
    {
        slug: "ai-agents",
        title: "AI Agents",
        description: "Intelligent chatbots, virtual assistants, and 24/7 sales agents.",
        iconName: "Bot",
    },
    {
        slug: "marketing-automation",
        title: "Marketing Automation",
        description: "CRM integration, lead nurturing, and automated customer journeys.",
        iconName: "MessagesSquare",
    },

    // 2. Digital Marketing
    {
        slug: "seo",
        title: "SEO",
        description: "Technical and content optimization for top rankings and organic traffic.",
        iconName: "Search",
    },
    {
        slug: "sea",
        title: "SEA (Google Ads)",
        description: "Performance campaigns on Google, Microsoft, and shopping channels.",
        iconName: "Megaphone",
    },
    {
        slug: "content-marketing",
        title: "Content Marketing",
        description: "Strategic creation of blogs, videos, and whitepapers.",
        iconName: "FileText",
    },
    {
        slug: "email-marketing",
        title: "Email Marketing",
        description: "Automated campaigns and personalization for customer retention.",
        iconName: "Mail",
    },
    {
        slug: "smm",
        title: "Social Media Marketing",
        description: "Management, content creation, and paid social for your brand.",
        iconName: "Users",
    },
    {
        slug: "affiliate",
        title: "Affiliate Marketing",
        description: "Strategy and partner management to increase reach.",
        iconName: "LinkIcon",
    },

    // 3. Development
    {
        slug: "web-development",
        title: "Web Development",
        description: "Full-stack solutions, frontend, backend, and e-commerce platforms.",
        iconName: "Code2",
    },
    {
        slug: "web-design",
        title: "Web Design",
        description: "UI/UX, landing pages, and mobile-first designs focused on conversion.",
        iconName: "Palette",
    },
    {
        slug: "xaas",
        title: "XaaS Development",
        description: "SaaS, AIaaS, and scalable cloud solutions via API.",
        iconName: "Cloud",
    },

    // 4. Consulting
    {
        slug: "digital-strategy",
        title: "Digital Strategy",
        description: "Comprehensive business analysis and digital transformation roadmaps.",
        iconName: "Lightbulb",
    },
    {
        slug: "business-consulting",
        title: "Business Consulting",
        description: "Advisory on tech stack, process optimization, and AI strategy.",
        iconName: "Briefcase",
    },

    // 5. Analytics
    {
        slug: "web-analytics",
        title: "Web Analytics",
        description: "GA4 setup, dashboards, and precise conversion tracking.",
        iconName: "BarChart3",
    },
    {
        slug: "marketing-analytics",
        title: "Marketing Analytics",
        description: "Attribution models, ROI analyses, and performance insights.",
        iconName: "TrendingUp",
    },
    {
        slug: "technical-monitoring",
        title: "Technical Monitoring",
        description: "Search Console monitoring, performance, and technical SEO.",
        iconName: "Activity",
    },
];

export default services;

