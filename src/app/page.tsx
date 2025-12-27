"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Grid, Megaphone, CheckCircle2, ShoppingCart, Bot, Settings2, Code2, Palette, Search, Mail, Users, Link as LinkIcon, Brain, Terminal } from "lucide-react";
import React from "react";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { ServiceItem } from "@/components/ServiceItem";
import { ServiceTabs } from "@/components/ServiceTabs";
import { HeroAnimation } from "@/components/HeroAnimation";
import { motion } from "framer-motion";

// React Bits and Animations
import Aurora from "@/components/ui/animations/Aurora";
import DecryptedText from "@/components/ui/animations/DecryptedText";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30 selection:text-primary-foreground bg-background">
      {/* Fixed Header for true overlap/glass effect */}
      <header className="fixed top-0 z-[100] w-full h-20 border-b border-white/5 bg-slate-950/20 backdrop-blur-md transition-all duration-300">
        <nav className="w-full h-full">
          <div className="container mx-auto px-4 h-full flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <Image
                src="/logo.svg"
                alt="creavoid"
                width={200}
                height={60}
                priority
                className="h-9 w-auto transition-transform duration-300 group-hover:scale-105 brightness-0 invert"
              />
            </Link>

            <div className="hidden lg:flex items-center gap-8 text-white/90">
              <MegaMenu />
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm border-0"
              >
                Blog
              </Link>
              <Link
                href="/store"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors h-9 px-4 py-2 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Store
              </Link>
            </div>
          </div>
        </nav>
      </header>



      {/* Hero Section - Aurora Background */}
      <section className="relative flex-1 min-h-[100vh] flex flex-col justify-center py-20 md:py-32 overflow-hidden bg-slate-950 text-white">
        {/* Aurora Background Effect */}
        <div className="absolute inset-0 z-0 opacity-60">
          <Aurora
            colorStops={["#29a0b1", "#020617", "#4ecdc4"]}
            speed={0.5}
            amplitude={1.2}
          />
          {/* Subtle gradient overlay to ensure text contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/50 to-slate-950 z-[1]" />
        </div>

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10 pt-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary-foreground text-xs font-bold tracking-wider uppercase backdrop-blur-md border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Business Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-serif leading-[1.1]">
              Level up your business with{' '}
              <br className="hidden md:block" />
              <span className="text-primary italic inline-block min-w-[200px]">
                <DecryptedText
                  text="AI-driven"
                  animateOn="view"
                  revealDirection="start"
                  sequential={true}
                  speed={80}
                  maxIterations={15}
                  className="text-primary italic"
                  encryptedClassName="text-primary/30"
                />
              </span>{' '}
              technology.
            </h1>
            <p className="text-xl text-slate-300 max-w-xl leading-relaxed">
              We transform businesses through custom software, intelligent AI agents, and performance marketing at the highest level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full text-lg font-bold transition-all h-16 px-10 bg-accent text-white hover:bg-accent/90 hover:scale-105 shadow-xl shadow-accent/20"
              >
                Let's talk business
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full text-lg font-medium transition-all h-16 px-10 border-2 border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10"
              >
                Our Services
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> 100% Custom
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> AI-Native
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" /> Result-Driven
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      < section className="pt-24 pb-40 bg-white/80 relative z-20" >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 justify-items-center">

            {/* Card 1: Black - Web & SaaS */}
            <div
              className="bg-[#000000] rounded-[2.5rem] min-h-[520px] max-w-[380px] w-full overflow-hidden relative"
            >
              <div className="p-12 text-white flex flex-col min-h-[520px] group relative z-10">
                <div className="mb-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Terminal className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-6 text-4xl font-bold font-serif leading-tight">
                  Web & SaaS<br />Development
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg font-light">
                  Build scalable web applications and SaaS platforms that grow with your business. Our full-stack development team creates robust, user-friendly solutions that drive engagement.
                </p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 2: Gradient - AI Agents */}
            <div
              className="gradient-card-bg rounded-[2.5rem] min-h-[520px] max-w-[380px] w-full overflow-hidden relative"
            >
              <div className="p-12 text-white flex flex-col min-h-[520px] group relative z-10">
                <div className="mb-10 w-16 h-16 rounded-2xl bg-black/10 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-black" />
                </div>
                <h3 className="mb-6 text-4xl font-bold font-serif leading-tight">
                  AI Agents &<br />Automation
                </h3>
                <p className="text-black/80 leading-relaxed text-lg font-light">
                  Streamline your operations with intelligent AI agents that handle customer support, lead qualification, and routine tasks 24/7. Reduce costs by up to 60%.
                </p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-black font-bold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Card 3: White - Paid Advertising */}
            <div
              className="bg-white rounded-[2.5rem] min-h-[520px] max-w-[380px] w-full border border-gray-100 overflow-hidden relative"
            >
              <div className="p-12 text-black flex flex-col min-h-[520px] group relative z-10">
                <div className="mb-10 w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center">
                  <Megaphone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-6 text-4xl font-bold font-serif leading-tight">
                  Paid<br />Advertising
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg font-light">
                  Generate qualified leads and maximize ROI with data-driven advertising campaigns across Google, Facebook, and LinkedIn. Performance marketing experts.
                </p>
                <div className="mt-auto pt-8 flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Learn More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section >

      {/* Detailed Services Section */}
      < section className="py-24 bg-background relative overflow-hidden" >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold font-serif mb-6 tracking-tight">Our Expertise</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our comprehensive suite of digital services, from AI-driven automation to world-class software development.
            </p>
          </div>

          <ServiceTabs />
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-[#111827] text-white py-12 border-t border-gray-800" >
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Image src="/logo.svg" alt="creavoid" width={140} height={40} className="brightness-0 invert h-6 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              We empower businesses with cutting-edge technology and marketing strategies.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/store" className="hover:text-white">Store</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/imprint" className="hover:text-white">Imprint</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs" suppressHydrationWarning>
          © {new Date().getFullYear()} creavoid. All rights reserved.
        </div>
      </footer >
    </div >
  );
}
