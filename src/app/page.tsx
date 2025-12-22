import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Grid, Megaphone, Terminal, BarChart3, Globe, Share2, ShoppingCart, Bot, Settings2, Code2, Palette, Search, Mail, Users, Link as LinkIcon, Brain } from "lucide-react";
import React from "react";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { ServiceItem } from "@/components/ServiceItem";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
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
      <section className="flex-1 flex flex-col justify-center py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight font-serif leading-tight">
              Transformieren Sie Ihr Business mit <span className="text-primary">intelligenten</span> Lösungen.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Wir entwickeln maßgeschneiderte Webanwendungen, setzen autonome KI-Agenten ein und verwalten hochperformante Werbekampagnen, um Ihren Umsatz zu skalieren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-colors h-12 px-8 bg-accent text-white hover:bg-accent/90 shadow-md"
              >
                Kontaktieren Sie uns
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors h-12 px-8 border border-input bg-background hover:bg-secondary hover:text-accent-foreground"
              >
                Services ansehen
              </Link>
            </div>
          </div>

          {/* Abstract Hero Visual/Grid */}
          <div className="relative hidden md:block h-[400px] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden border border-border/50 shadow-inner">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border-r border-b border-gray-400"></div>
              ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="space-y-2 w-64">
                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                <div className="h-2 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 justify-items-center">

            {/* Card 1: Black - Web & SaaS */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-black p-10 text-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[500px] max-w-[340px]">
              <div className="mb-8">
                <Star className="h-12 w-12 text-white fill-white" />
              </div>
              <h3 className="mb-6 text-3xl font-bold font-serif leading-tight">
                Web & SaaS<br />Entwicklung
              </h3>
              <p className="text-gray-300 leading-relaxed text-base font-light">
                Bauen Sie skalierbare Webanwendungen und SaaS-Plattformen, die mit Ihrem Unternehmen wachsen. Unser Full-Stack-Team entwickelt robuste Lösungen, die Ihre Kunden begeistern.
              </p>
            </div>

            {/* Card 2: Gradient - AI Agents */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff6b6b] via-[#e57d8c] to-[#29a0b1] p-10 text-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[500px] max-w-[340px]">
              <div className="mb-8">
                <Grid className="h-12 w-12 text-black" />
              </div>
              <h3 className="mb-6 text-3xl font-bold font-serif leading-tight text-black">
                KI Agenten &<br />Automatisierung
              </h3>
              <p className="text-black/80 leading-relaxed text-base font-light">
                Optimieren Sie Ihre Abläufe mit intelligenten KI-Agenten, die Kundensupport, Lead-Qualifizierung und Routineaufgaben rund um die Uhr übernehmen. Sparen Sie Zeit und Kosten.
              </p>
            </div>

            {/* Card 3: White - Paid Advertising */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-10 text-black shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col min-h-[500px] max-w-[340px]">
              <div className="mb-8">
                <Megaphone className="h-12 w-12 text-black" />
              </div>
              <h3 className="mb-6 text-3xl font-bold font-serif leading-tight">
                Paid<br />Advertising
              </h3>
              <p className="text-gray-600 leading-relaxed text-base font-light">
                Generieren Sie qualifizierte Leads und maximieren Sie Ihren ROI mit datengesteuerten Werbekampagnen auf Google, Facebook und LinkedIn. Messbare Ergebnisse durch Expertenhand.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Online Marketing & KI Agentur</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Column 1: AI & Dev Services */}
            <div>
              <h3 className="text-2xl font-bold font-serif mb-8 border-b pb-4">KI & Development Services</h3>
              <div className="space-y-12">
                <ServiceItem
                  iconName="Bot"
                  title="KI Agenten"
                  description="Nutzen Sie intelligente Assistenten für Kundensupport und Lead-Generierung — rund um die Uhr verfügbar."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="Settings2"
                  title="Prozess-Automatisierung"
                  description="Automatisieren Sie Workflows und sparen Sie wertvolle Ressourcen durch effiziente digitale Prozesse."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="Cloud"
                  title="SaaS & Cloud Lösungen"
                  description="Wir begleiten Sie vom MVP bis zur skalierbaren Cloud-Plattform mit Fokus auf Performance."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="Code2"
                  title="Web Entwicklung"
                  description="Maßgeschneiderte Webanwendungen mit modernen Technologien wie Next.js und Headless CMS."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="Palette"
                  title="UI/UX Design"
                  description="Nutzerzentriertes Design, das Ästhetik mit Funktionalität verbindet und Konversionen steigert."
                  iconColor="text-primary"
                />
              </div>
            </div>

            {/* Column 2: Digital Marketing Services */}
            <div>
              <h3 className="text-2xl font-bold font-serif mb-8 border-b pb-4">Digital Marketing Services</h3>
              <div className="space-y-12">
                <ServiceItem
                  iconName="Search"
                  title="SEO"
                  description="Sichtbarkeit bei Google erhöhen durch technisches SEO und hochwertiges Content-Marketing."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="Megaphone"
                  title="Google & Meta Ads"
                  description="Performance-Marketing, das messbare Resultate liefert und Ihren Umsatz nachhaltig steigert."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="Users"
                  title="Social Media Marketing"
                  description="Markenaufbau und Interaktion auf den Kanälen, die für Ihre Zielgruppe wirklich zählen."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="LinkIcon"
                  title="Affiliate Marketing"
                  description="Erschließen Sie neue Absatzwege durch strategisches Partnermanagement und Affiliate-Netzwerke."
                  iconColor="text-primary"
                />
                <ServiceItem
                  iconName="BarChart3"
                  title="Analytics & Tracking"
                  description="Datenbasierte Entscheidungen durch präzises Tracking und übersichtliche Dashboards."
                  iconColor="text-primary"
                />
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:gap-4 transition-all"
            >
              Alle 19 Services entdecken <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
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
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} creavoid. Alle Rechte vorbehalten.
        </div>
      </footer>
    </div>
  );
}
