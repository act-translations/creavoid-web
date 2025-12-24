"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Bot,
    Megaphone,
    Code2,
    Lightbulb,
    BarChart,
    ChevronRight
} from "lucide-react";

export function MegaMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>

                {/* 1. AI & Automation Services */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">KI & Automatisierung</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                            <div className="col-span-2 pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Bot className="w-5 h-5 text-primary" />
                                <span className="font-bold text-lg font-serif">KI-Lösungen</span>
                            </div>
                            <ListItem title="KI-Beratung" href="/services/ai-consulting">
                                Strategie, Readiness-Check, Use-Cases.
                            </ListItem>
                            <ListItem title="KI-Implementierung" href="/services/ai-implementation">
                                Integration, maßgeschneiderte Lösungen, Modell-Training.
                            </ListItem>
                            <ListItem title="KI-Prozessautomatisierung" href="/services/process-automation">
                                Workflows, RPA, Business Intelligence.
                            </ListItem>
                            <ListItem title="KI-Agenten" href="/services/ai-agents">
                                Chatbots, virtuelle Assistenten, Sales-Agents.
                            </ListItem>
                            <ListItem title="Marketing-Automatisierung" href="/services/marketing-automation">
                                CRM, Lead-Nurturing, Customer-Journey.
                            </ListItem>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 2. Digital Marketing */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Digitales Marketing</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                            <div className="col-span-2 pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Megaphone className="w-5 h-5 text-primary" />
                                <span className="font-bold text-lg font-serif">Growth Marketing</span>
                            </div>
                            <ListItem title="SEO" href="/services/seo">
                                Technisches SEO, OnPage, Top-Rankings.
                            </ListItem>
                            <ListItem title="SEA (Google Ads)" href="/services/sea">
                                Google Ads, Microsoft Ads, Shopping.
                            </ListItem>
                            <ListItem title="Content-Marketing" href="/services/content-marketing">
                                Strategie, Blogs, Video, Whitepapers.
                            </ListItem>
                            <ListItem title="E-Mail-Marketing" href="/services/email-marketing">
                                Kampagnen, Automatisierung, Personalisierung.
                            </ListItem>
                            <ListItem title="Social Media (SMM)" href="/services/smm">
                                Management, Content, Paid Social.
                            </ListItem>
                            <ListItem title="Affiliate-Marketing" href="/services/affiliate">
                                Strategie, Netzwerk-Management, Tracking.
                            </ListItem>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 3. Development */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Entwicklung</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] bg-white rounded-xl shadow-xl">
                            <div className="pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-primary" />
                                <span className="font-bold text-lg font-serif">Engineering</span>
                            </div>
                            <ListItem title="Web-Entwicklung" href="/services/web-development">
                                Full-Stack, Frontend, Backend, E-Commerce.
                            </ListItem>
                            <ListItem title="Web-Design" href="/services/web-design">
                                UI/UX, Landing-Pages, Mobile-First.
                            </ListItem>
                            <ListItem title="XaaS-Entwicklung" href="/services/xaas">
                                SaaS, AIaaS, API-Entwicklung, Cloud-Lösungen.
                            </ListItem>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 4. Consultation */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Beratung</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] bg-white rounded-xl shadow-xl">
                            <div className="pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-primary" />
                                <span className="font-bold text-lg font-serif">Strategie</span>
                            </div>
                            <ListItem title="Digitale Strategie" href="/services/digital-strategy">
                                Business-Analyse, Transformations-Roadmaps.
                            </ListItem>
                            <ListItem title="Business & Technology" href="/services/business-consulting">
                                KI-Strategie, Tech-Stack, Prozessopt.
                            </ListItem>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 5. Analytics */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Analyse</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] bg-white rounded-xl shadow-xl">
                            <div className="pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <BarChart className="w-5 h-5 text-primary" />
                                <span className="font-bold text-lg font-serif">Daten & Insights</span>
                            </div>
                            <ListItem title="Web-Analyse" href="/services/web-analytics">
                                GA4, Dashboards, Conversion-Tracking.
                            </ListItem>
                            <ListItem title="Marketing-Analyse" href="/services/marketing-analytics">
                                Attributionsmodelle, ROI, Performance.
                            </ListItem>
                            <ListItem title="Technisches Monitoring" href="/services/technical-monitoring">
                                Search Console, Performance, technisches SEO.
                            </ListItem>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<typeof Link>,
    React.ComponentPropsWithoutRef<typeof Link> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    href={href}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary group",
                        className
                    )}
                    {...props}
                >
                    <div className="flex items-center gap-1 text-sm font-bold leading-none mb-1 text-gray-900 group-hover:text-primary transition-colors">
                        {title}
                        <ChevronRight className="w-3 h-3 opacity-0 -ml-2 group-hover:ml-0 group-hover:opacity-100 transition-all text-primary" />
                    </div>
                    <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
