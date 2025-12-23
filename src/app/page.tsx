"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Grid, Megaphone, CheckCircle2, ShoppingCart, Bot, Settings2, Code2, Palette, Search, Mail, Users, Link as LinkIcon, Brain, Terminal } from "lucide-react";
import React from "react";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { ServiceTabs } from "@/components/ServiceTabs";
import { HeroAnimation } from "@/components/HeroAnimation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/30 selection:text-primary-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="creavoid"
              width={200}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <MegaMenu />
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="hidden md:inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm"
            >
              Blog
            </Link>
            <Link
              href="/store"
              className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors h-9 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-sm"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Store
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col justify-center py-20 md:py-40 bg-background overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Next-Gen Business Solutions
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-serif leading-[1.1] text-foreground">
              Level up your business with <span className="text-primary italic">AI-driven</span> technology.
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Wir transformieren Unternehmen durch maßgeschneiderte Software, intelligente KI-Agenten und Performance-Marketing auf höchstem Niveau.
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
                className="inline-flex items-center justify-center rounded-full text-lg font-medium transition-all h-16 px-10 border-2 border-border bg-transparent hover:bg-secondary hover:border-secondary"
              >
                Our Services
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground/60 font-medium">
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

          <div className="relative">
            <HeroAnimation />
          </div>
        </div>
      </section>

      {/* Feature Cards with Realistic Shadows */}
      <section className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 justify-items-center">

            {/* Card 1: Black - Web & SaaS */}
            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] bg-[#000000] p-12 text-white flex flex-col min-h-[520px] max-w-[380px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-shadow duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.45)] group"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Terminal className="h-8 w-8 text-primary" />
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
            </motion.div>

            {/* Card 2: Gradient - AI Agents */}
            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] p-12 text-white flex flex-col min-h-[520px] max-w-[380px] shadow-[0_20px_50px_-12px_rgba(41,160,177,0.25)] transition-shadow duration-500 hover:shadow-[0_40px_80px_-15px_rgba(41,160,177,0.35)] group"
              style={{
                background: 'linear-gradient(300deg, #29A0B1 25%, #FF6B6B 100%)'
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="mb-10 w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                <Bot className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-6 text-4xl font-bold font-serif leading-tight text-white">
                AI Agents &<br />Automation
              </h3>
              <p className="text-white/90 leading-relaxed text-lg font-light">
                Streamline your operations with intelligent AI agents that handle customer support, lead qualification, and routine tasks 24/7. Reduce costs by up to 60% while improving response times and customer satisfaction.
              </p>
              <div className="mt-auto pt-8 flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-5 h-5" />
              </div>
            </motion.div>

            {/* Card 3: White - Paid Advertising */}
            <motion.div
              className="relative overflow-hidden rounded-[2.5rem] bg-white p-12 text-[#000000] flex flex-col min-h-[520px] max-w-[380px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-shadow duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.45)] group"
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
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
            </motion.div>

          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 bg-background relative overflow-hidden">
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
      </section>

      {/* Footer */}
      <footer className="bg-[#111827] text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <Image src="/logo.svg" alt="creavoid" width={140} height={40} className="brightness-0 invert h-6 w-auto" />
            </div>
            <p className="text-gray-400 text-sm">
              Wir befähigen Unternehmen mit modernster Technologie und Marketing-Strategien.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white">Über uns</Link></li>
              <li><Link href="/services" className="hover:text-white">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Ressourcen</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/store" className="hover:text-white">Store</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Datenschutz</Link></li>
              <li><Link href="/imprint" className="hover:text-white">Impressum</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs" suppressHydrationWarning>
          © {new Date().getFullYear()} creavoid. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
