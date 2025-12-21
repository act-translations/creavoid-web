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
                    <NavigationMenuTrigger className="bg-transparent">AI & Automation</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                            <li className="col-span-2 pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Bot className="w-5 h-5 text-primary" />
                                <span className="font-bold text-lg font-serif">AI Solutions</span>
                            </li>
                            <ListItem title="AI Consulting" href="/services/ai-consulting">
                                Strategy, Readiness Assessment, Use Cases.
                            </ListItem>
                            <ListItem title="AI Implementation" href="/services/ai-implementation">
                                Integration, Custom Solutions, Model Training.
                            </ListItem>
                            <ListItem title="AI Process Automation" href="/services/process-automation">
                                Workflows, RPA, Business Intelligence.
                            </ListItem>
                            <ListItem title="AI Agents" href="/services/ai-agents">
                                Chatbots, Virtual Assistants, Sales Agents.
                            </ListItem>
                            <ListItem title="Marketing Automation" href="/services/marketing-automation">
                                CRM, Lead Nurturing, Customer Journey.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 2. Digital Marketing */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Digital Marketing</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-xl shadow-xl">
                            <li className="col-span-2 pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Megaphone className="w-5 h-5 text-accent" />
                                <span className="font-bold text-lg font-serif">Growth Marketing</span>
                            </li>
                            <ListItem title="SEO" href="/services/seo">
                                Technical, OnPage, High-Ranking Strategies.
                            </ListItem>
                            <ListItem title="SEA (Ads)" href="/services/sea">
                                Google Ads, Microsoft Ads, Shopping.
                            </ListItem>
                            <ListItem title="Content Marketing" href="/services/content-marketing">
                                Strategy, Blogs, Video, Whitepapers.
                            </ListItem>
                            <ListItem title="Email Marketing" href="/services/email-marketing">
                                Campaigns, Automation, Personalization.
                            </ListItem>
                            <ListItem title="Social Media (SMM)" href="/services/smm">
                                Management, Content, Paid Social.
                            </ListItem>
                            <ListItem title="Affiliate Marketing" href="/services/affiliate">
                                Strategy, Network Management, Tracking.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 3. Development */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Development</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] bg-white rounded-xl shadow-xl">
                            <li className="pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Code2 className="w-5 h-5 text-black" />
                                <span className="font-bold text-lg font-serif">Engineering</span>
                            </li>
                            <ListItem title="Web Development" href="/services/web-development">
                                Full-Stack, Frontend, Backend, E-Commerce.
                            </ListItem>
                            <ListItem title="Web Design" href="/services/web-design">
                                UI/UX, Landing Pages, Mobile-First.
                            </ListItem>
                            <ListItem title="XaaS Development" href="/services/xaas">
                                SaaS, AIaaS, API Development, Cloud Solutions.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 4. Consultation */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Consulting</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] bg-white rounded-xl shadow-xl">
                            <li className="pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <Lightbulb className="w-5 h-5 text-yellow-500" />
                                <span className="font-bold text-lg font-serif">Strategy</span>
                            </li>
                            <ListItem title="Digital Strategy" href="/services/digital-strategy">
                                Business Analysis, Transformation Maps.
                            </ListItem>
                            <ListItem title="Business & Technology" href="/services/business-consulting">
                                AI Strategy, Tech Stack, Process Opt.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* 5. Analytics */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Analytics</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[400px] bg-white rounded-xl shadow-xl">
                            <li className="pb-2 mb-2 border-b border-gray-100 flex items-center gap-2">
                                <BarChart className="w-5 h-5 text-green-600" />
                                <span className="font-bold text-lg font-serif">Data & Insights</span>
                            </li>
                            <ListItem title="Web Analytics" href="/services/web-analytics">
                                GA4, Dashboards, Conversion Tracking.
                            </ListItem>
                            <ListItem title="Marketing Analytics" href="/services/marketing-analytics">
                                Attribution, ROI, Performance.
                            </ListItem>
                            <ListItem title="Technical Monitoring" href="/services/technical-monitoring">
                                Search Console, Performance, SEO.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground group",
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
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
