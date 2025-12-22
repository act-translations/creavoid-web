"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Settings2, Code2, Search, Megaphone, BarChart3, Cloud, Palette, Users, Link as LinkIcon, ArrowRight } from "lucide-react";
import Link from "next/link";
import { icons } from "@/data/services";

const categories = [
    {
        id: "ai",
        label: "AI & Automation",
        icon: Bot,
        services: [
            { slug: "ai-agents", title: "AI Agents", description: "Intelligente Chatbots & Assistenten.", icon: Bot },
            { slug: "process-automation", title: "Process Automation", description: "Effiziente Workflows & RPA.", icon: Settings2 },
            { slug: "ai-consulting", title: "AI Consulting", description: "Strategische KI-Beratung.", icon: icons.Brain },
        ]
    },
    {
        id: "marketing",
        label: "Digital Marketing",
        icon: Megaphone,
        services: [
            { slug: "seo", title: "SEO", description: "Top-Rankings bei Google.", icon: Search },
            { slug: "sea", title: "SEA", description: "Performance Ad Kampagnen.", icon: Megaphone },
            { slug: "smm", title: "Social Media", description: "Markenaufbau & Interaktion.", icon: Users },
        ]
    },
    {
        id: "dev",
        label: "Development",
        icon: Code2,
        services: [
            { slug: "web-development", title: "Web Dev", description: "Moderne Webanwendungen.", icon: Code2 },
            { slug: "xaas", title: "XaaS", description: "Skalierbare Cloud-Lösungen.", icon: Cloud },
            { slug: "web-design", title: "Web Design", description: "UI/UX & Mobile First.", icon: Palette },
        ]
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: BarChart3,
        services: [
            { slug: "web-analytics", title: "Web Analytics", description: "GA4 Expert Setups.", icon: BarChart3 },
            { slug: "marketing-analytics", title: "Marketing Insights", description: "Datenbasierte Entscheidungen.", icon: icons.TrendingUp },
        ]
    }
];

export function ServiceTabs() {
    const [activeTab, setActiveTab] = useState(categories[0].id);

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* Tabs Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 p-1 bg-muted/30 rounded-[2rem] border border-border/50 max-w-fit mx-auto">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveTab(cat.id)}
                        className={`
              relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all
              ${activeTab === cat.id ? "text-white" : "text-muted-foreground hover:text-foreground"}
            `}
                    >
                        {activeTab === cat.id && (
                            <motion.div
                                layoutId="active-tab"
                                className="absolute inset-0 bg-primary rounded-full"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <cat.icon className="relative z-10 w-4 h-4" />
                        <span className="relative z-10">{cat.label}</span>
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="relative min-h-[400px]">
                <AnimatePresence mode="wait">
                    {categories.map((cat) => cat.id === activeTab && (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid md:grid-cols-3 gap-6"
                        >
                            {cat.services.map((service, idx) => (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group relative p-8 rounded-[2.5rem] bg-white border border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/5 flex flex-col items-start gap-4 overflow-hidden"
                                >
                                    {/* Hover Accent */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/[0.03] rounded-bl-full translate-x-8 -translate-y-8 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform" />

                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-xl font-bold font-serif group-hover:text-primary transition-colors flex items-center gap-2">
                                            {service.title}
                                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}

                            {/* "View All" Card */}
                            <Link
                                href="/services"
                                className="group p-8 rounded-[2.5rem] bg-black text-white flex flex-col items-start justify-center gap-4 hover:bg-primary transition-colors shadow-xl"
                            >
                                <h3 className="text-2xl font-bold font-serif leading-tight">
                                    Discover All<br />{cat.label} Solutions
                                </h3>
                                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                                    Learn More <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-20 text-center">
                <Link
                    href="/services"
                    className="inline-flex items-center gap-4 text-xl font-bold font-serif hover:gap-6 transition-all group"
                >
                    View our full list of 19 services
                    <span className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-6 h-6" />
                    </span>
                </Link>
            </div>
        </div>
    );
}
