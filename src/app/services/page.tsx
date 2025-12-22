"use client";

import Link from "next/link";
import { ServiceItem } from "@/components/ServiceItem";
import servicesData from "@/data/services";

export default function ServicesPage() {
    return (
        <main className="min-h-screen pt-24 pb-16 bg-background">
            <div className="container mx-auto px-4">
                <header className="mb-16 text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Unsere Dienstleistungen</h1>
                    <p className="text-lg text-muted-foreground">
                        Entdecken Sie unser umfassendes Angebot an KI‑Lösungen, digitalem Marketing und moderner Webentwicklung.
                    </p>
                </header>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block p-8 rounded-2xl border border-border bg-white shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                        >
                            <ServiceItem
                                iconName={service.iconName}
                                title={service.title}
                                description={service.description}
                                iconColor="text-primary"
                            />
                            <div className="mt-6 text-sm font-semibold text-primary flex items-center gap-2">
                                Mehr erfahren
                                <span className="text-xl">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
