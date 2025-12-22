"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-12 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Zurück zur Startseite
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-8">Über Creavoid</h1>

                    <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                        <p className="text-xl text-foreground font-medium leading-relaxed">
                            Wir sind eine Agentur für digitales Wachstum, die Technologie und Marketing vereint, um messbare Ergebnisse für unsere Kunden zu erzielen.
                        </p>
                        <p>
                            Unsere Mission ist es, Unternehmen dabei zu unterstützen, die Komplexität der digitalen Transformation zu meistern. Wir glauben daran, dass intelligente Automatisierung und datengetriebenes Marketing die Schlüssel zu nachhaltigem Erfolg in der modernen Geschäftswelt sind.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 pt-12">
                            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold font-serif text-foreground mb-4">Innovation</h3>
                                <p className="text-sm">Wir setzen auf modernste KI-Technologien und innovative Web-Frameworks, um immer einen Schritt voraus zu sein.</p>
                            </div>
                            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
                                <h3 className="text-xl font-bold font-serif text-foreground mb-4">Ergebnisfokus</h3>
                                <p className="text-sm">Jede Zeile Code und jede Kampagne wird auf ihren Beitrag zu Ihrem geschäftlichen Erfolg optimiert.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
