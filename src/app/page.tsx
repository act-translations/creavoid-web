import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Grid, Megaphone, Terminal, BarChart3, Globe, Share2, ShoppingCart } from "lucide-react";
import React from "react";
import { MegaMenu } from "@/components/layout/MegaMenu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="creavoid"
              width={140}
              height={40}
              priority
              className="h-8 w-auto"
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
              Transform Your Business with <span className="text-primary">Intelligent</span> Solutions.
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We build custom web applications, deploy autonomous AI agents, and manage high-performance paid advertising campaigns to scale your revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-colors h-12 px-8 bg-accent text-white hover:bg-accent/90 shadow-md"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors h-12 px-8 border border-input bg-background hover:bg-secondary hover:text-accent-foreground"
              >
                View Services
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

      {/* Feature Cards - Vertical Portrait Layout (Design V2) */}
      <section className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1: Black - Web & SaaS */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-black p-10 text-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[520px]">
              <div className="mb-8">
                <Star className="h-12 w-12 text-white fill-white" />
              </div>
              <h3 className="mb-6 text-4xl font-bold font-serif leading-tight">
                Web & SaaS<br />Development
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                Build scalable web applications and SaaS platforms that grow with your business. Our full-stack development team creates robust, user-friendly solutions that drive engagement and convert visitors into customers.
              </p>
            </div>

            {/* Card 2: Gradient - AI Agents */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#ff6b6b] via-[#e57d8c] to-[#29a0b1] p-10 text-white shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col min-h-[520px]">
              <div className="mb-8">
                <Grid className="h-12 w-12 text-black" />
              </div>
              <h3 className="mb-6 text-4xl font-bold font-serif leading-tight text-black">
                AI Agents &<br />Automation
              </h3>
              <p className="text-black/80 leading-relaxed text-lg font-light">
                Streamline your operations with intelligent AI agents that handle customer support, lead qualification, and routine tasks 24/7. Reduce costs by up to 60% while improving response times and customer satisfaction.
              </p>
            </div>

            {/* Card 3: White - Paid Advertising */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-white border border-gray-100 p-10 text-black shadow-lg transition-all hover:shadow-xl hover:-translate-y-2 flex flex-col min-h-[520px]">
              <div className="mb-8">
                <Megaphone className="h-12 w-12 text-black" />
              </div>
              <h3 className="mb-6 text-4xl font-bold font-serif leading-tight">
                Paid<br />Advertising
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg font-light">
                Generate qualified leads and maximize ROI with data-driven advertising campaigns across Google, Facebook, and LinkedIn. Our performance marketing experts deliver measurable results with transparent reporting.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-serif mb-4">Comprehensive Solutions.</h2>
            <p className="text-muted-foreground text-lg">Everything you need to grow your digital presence.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            <ServiceItem
              icon={<Terminal />}
              title="Process Automation"
              description="Streamline repetitive tasks with custom scripts and n8n workflows."
            />
            <ServiceItem
              icon={<Megaphone />}
              title="Paid Advertising"
              description="Targeted campaigns that convert clicks into loyal customers."
            />
            <ServiceItem
              icon={<Globe />}
              title="SaaS Development"
              description="End-to-end product development from MVP to IPO."
            />
            <ServiceItem
              icon={<Share2 />}
              title="Social Media Marketing"
              description="Organic growth strategies to build a community around your brand."
            />
            <ServiceItem
              icon={<BarChart3 />}
              title="Analytics & Tracking"
              description="Deep insights into user behavior to optimize conversion rates."
            />
            <ServiceItem
              icon={<Star />}
              title="Web Design"
              description="Award-winning aesthetics that build trust and authority."
            />
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
              Empowering businesses with next-gen technology and marketing strategies.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
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
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} creavoid. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function ServiceItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4 items-start group">
      <div className="shrink-0 p-3 bg-white border border-gray-200 rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" })}
      </div>
      <div>
        <h3 className="text-xl font-bold font-serif mb-1">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
