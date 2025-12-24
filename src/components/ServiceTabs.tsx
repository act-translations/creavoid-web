"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import services, { icons } from "@/data/services";
import { ArrowRight } from "lucide-react";

// Categorize services based on their slugs or predefined groups
const groupedServices = [
    {
        id: "ai",
        label: "KI & Automatisierung",
        description: "Zukunftssichere Automatisierung",
        items: services.filter(s => ["ai-consulting", "ai-implementation", "process-automation", "ai-agents", "marketing-automation"].includes(s.slug))
    },
    {
        id: "marketing",
        label: "Digitales Marketing",
        description: "Reichweite & Performance",
        items: services.filter(s => ["seo", "sea", "content-marketing", "email-marketing", "smm", "affiliate"].includes(s.slug))
    },
    {
        id: "dev",
        label: "Entwicklung",
        description: "Software & Plattformen",
        items: services.filter(s => ["web-development", "web-design", "xaas"].includes(s.slug))
    },
    {
        id: "consulting",
        label: "Beratung",
        description: "Strategie & Transformation",
        items: services.filter(s => ["digital-strategy", "business-consulting"].includes(s.slug))
    },
    {
        id: "analytics",
        label: "Analyse",
        description: "Daten & Insights",
        items: services.filter(s => ["web-analytics", "marketing-analytics", "technical-monitoring"].includes(s.slug))
    }
];

export function ServiceTabs() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-24">
            {groupedServices.map((category, catIndex) => (
                <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                    className="relative"
                >
                    {/* Category Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-border/40 pb-6">
                        <div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block opacity-80">0{catIndex + 1}</span>
                            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">{category.label}</h3>
                        </div>
                        <p className="text-muted-foreground/80 text-lg md:text-xl font-light max-w-xs md:text-right">
                            {category.description}
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.items.map((service, idx) => {
                            const Icon = icons[service.iconName] || icons.Bot;

                            return (
                                <Link
                                    key={service.slug}
                                    href={`/services/${service.slug}`}
                                    className="group relative flex flex-col p-8 rounded-[2rem] bg-white border border-border/40 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-500 flex items-center justify-center">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                        </div>
                                    </div>

                                    <h4 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h4>

                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 group-hover:text-muted-foreground/80">
                                        {service.description}
                                    </p>

                                    {/* Hover Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                </Link>
                            );
                        })}
                    </div>
                </motion.div>
            ))}

            <div className="mt-24 text-center">
                <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full text-lg font-bold transition-all h-16 px-12 bg-foreground text-background hover:bg-primary hover:text-white hover:scale-105 shadow-xl"
                >
                    Gemeinsam ein Projekt starten
                </Link>
            </div>
        </div>
    );
}
