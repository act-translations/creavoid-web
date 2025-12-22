"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ServiceItem } from "@/components/ServiceItem";
import servicesData from "@/data/services";
import { ChevronLeft } from "lucide-react";

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h1 className="text-2xl font-bold mb-4">Service nicht gefunden</h1>
                <Link href="/services" className="text-primary hover:underline">Zurück zur Übersicht</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-12 transition-colors"
                    >
                        <ChevronLeft className="w-4 h-4" />
                        Alle Dienstleistungen
                    </Link>

                    <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-border shadow-sm">
                        <ServiceItem
                            iconName={service.iconName}
                            title={service.title}
                            description={service.description}
                            iconColor="text-primary"
                        />

                        <div className="mt-16 pt-16 border-t border-border">
                            <h2 className="text-3xl font-bold font-serif mb-8">Warum {service.title}?</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                                Wir begleiten Sie von der Strategie bis zur Umsetzung. Mit modernster Technologie und tiefem Marktverständnis sorgen wir dafür, dass Ihr Projekt ein voller Erfolg wird.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-colors h-14 px-10 bg-accent text-white hover:bg-accent/90 shadow-md"
                                >
                                    Kostenloses Erstgespräch
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center justify-center rounded-full text-base font-medium transition-colors h-14 px-10 border border-input bg-background hover:bg-secondary"
                                >
                                    Andere Services ansehen
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
