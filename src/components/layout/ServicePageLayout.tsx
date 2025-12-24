import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { ShoppingCart, CheckCircle2, ChevronRight } from "lucide-react";
import { Service } from "@/data/services";
import { icons } from "@/data/services";

interface ServicePageLayoutProps {
    children: React.ReactNode;
    service: Service;
}

export function ServicePageLayout({ children, service }: ServicePageLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col font-sans">
            {/* Header - Sticky Navigation */}
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
                            Shop
                        </Link>
                    </div>
                </div>
            </header>

            {/* Breadcrumb */}
            <div className="bg-muted/30 border-b">
                <div className="container mx-auto px-4 py-4">
                    <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Link href="/" className="hover:text-primary transition-colors">Startseite</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/services" className="hover:text-primary transition-colors">Leistungen</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-foreground font-medium">{service.title}</span>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-[#111827] text-white py-12 border-t border-gray-800 mt-20">
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
                        <h4 className="font-bold mb-4">Schnellzugriff</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-white">Über uns</Link></li>
                            <li><Link href="/services" className="hover:text-white">Leistungen</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Kontakt</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Ressourcen</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/store" className="hover:text-white">Shop</Link></li>
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
