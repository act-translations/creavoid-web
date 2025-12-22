"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import servicesData from "@/data/services";
import { ServicePageLayout } from "@/components/layout/ServicePageLayout";
import { icons } from "@/data/services";
import { CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";

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

    const hasDetailedContent = service.longDescription || service.benefits || service.features;
    const Icon = icons[service.iconName];

    // Fallback if service doesn't have detailed content yet
    if (!hasDetailedContent) {
        return (
            <ServicePageLayout service={service}>
                <div className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-[2.5rem] p-8 md:p-16 border border-border shadow-sm">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                                            <Icon className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-4xl font-bold font-serif mb-4">{service.title}</h1>
                                        <p className="text-lg text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

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
                </div>
            </ServicePageLayout>
        );
    }

    return (
        <ServicePageLayout service={service}>
            {/* Hero Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-primary/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                    <Icon className="w-4 h-4" />
                                    <span>Premium Service</span>
                                </div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-serif mb-6 leading-tight">
                                    {service.title}
                                </h1>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                    {service.longDescription || service.description}
                                </p>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 justify-center rounded-full text-base font-semibold transition-colors h-14 px-10 bg-accent text-white hover:bg-accent/90 shadow-lg"
                                >
                                    Kostenloses Erstgespräch
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                            <div className="relative hidden md:block">
                                {/* Hero Illustration Placeholder */}
                                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/20 flex items-center justify-center">
                                    <Icon className="w-32 h-32 text-primary/30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            {service.benefits && service.benefits.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                    Ihre Vorteile
                                </h2>
                                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                    Warum Sie sich für {service.title} von creavoid entscheiden sollten
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                {service.benefits.map((benefit, index) => {
                                    const BenefitIcon = icons[benefit.icon];
                                    return (
                                        <div
                                            key={index}
                                            className="p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all bg-background"
                                        >
                                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                                <BenefitIcon className="w-7 h-7 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-bold font-serif mb-3">{benefit.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Features Section */}
            {service.features && service.features.length > 0 && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                    Was wir bieten
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Umfassende Leistungen für Ihren Erfolg
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-4">
                                {service.features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 p-4 rounded-xl bg-white border border-border/50 hover:border-primary/50 transition-colors"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Process Section */}
            {service.process && service.process.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                    So funktioniert's
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Unser bewährter Prozess in 4 Schritten
                                </p>
                            </div>
                            <div className="space-y-8">
                                {service.process.map((step, index) => (
                                    <div
                                        key={index}
                                        className="flex gap-6 items-start group"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-primary text-white flex items-center justify-center text-2xl font-bold font-serif group-hover:scale-110 transition-transform">
                                                {step.step}
                                            </div>
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h3 className="text-2xl font-bold font-serif mb-3">{step.title}</h3>
                                            <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Use Cases Section */}
            {service.useCases && service.useCases.length > 0 && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                    Praxisbeispiele
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    So setzen unsere Kunden {service.title} erfolgreich ein
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {service.useCases.map((useCase, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
                                    >
                                        {/* Placeholder for use case image */}
                                        <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                            <Icon className="w-16 h-16 text-primary/40" />
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold font-serif mb-3">{useCase.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Tools & Technologies */}
            {service.tools && service.tools.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                Technologien & Tools
                            </h2>
                            <p className="text-lg text-muted-foreground mb-12">
                                Wir arbeiten mit führenden Plattformen und Frameworks
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {service.tools.map((tool, index) => (
                                    <div
                                        key={index}
                                        className="px-6 py-3 rounded-full bg-muted border border-border text-sm font-medium hover:border-primary hover:bg-primary/5 transition-colors"
                                    >
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ Section */}
            {service.faq && service.faq.length > 0 && (
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                                    Häufig gestellte Fragen
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    Alles, was Sie über {service.title} wissen müssen
                                </p>
                            </div>
                            <div className="space-y-6">
                                {service.faq.map((item, index) => (
                                    <details
                                        key={index}
                                        className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
                                    >
                                        <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                            <h3 className="text-lg font-bold font-serif pr-8">{item.question}</h3>
                                            <ChevronRight className="w-5 h-5 text-primary group-open:rotate-90 transition-transform flex-shrink-0" />
                                        </summary>
                                        <div className="px-6 pb-6">
                                            <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-bold font-serif mb-6">
                            Bereit für {service.title}?
                        </h2>
                        <p className="text-xl text-white/90 mb-10 leading-relaxed">
                            Lassen Sie uns gemeinsam Ihre Ziele erreichen. Vereinbaren Sie jetzt ein kostenloses Erstgespräch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 rounded-full text-base font-semibold transition-all h-14 px-10 bg-accent text-white hover:bg-accent/90 hover:scale-105 shadow-xl"
                            >
                                Jetzt Kontakt aufnehmen
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex items-center justify-center rounded-full text-base font-medium transition-all h-14 px-10 bg-white text-primary hover:bg-white/90"
                            >
                                Alle Services ansehen
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </ServicePageLayout>
    );
}
