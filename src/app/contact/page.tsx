"use client";

import Link from "next/link";
import { ChevronLeft, Send } from "lucide-react";

export default function ContactPage() {
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

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Kontaktieren Sie uns</h1>
                        <p className="text-lg text-muted-foreground">
                            Lassen Sie uns darüber sprechen, wie wir Ihr Business mit intelligenten Lösungen voranbringen können.
                        </p>
                    </header>

                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-border shadow-sm">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold ml-1">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-secondary/50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="Ihr Name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold ml-1">E-Mail</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-secondary/50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                        placeholder="beispiel@domain.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-semibold ml-1">Betreff</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-secondary/50 border border-border rounded-xl h-12 px-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="Worum geht es?"
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold ml-1">Nachricht</label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    className="w-full bg-secondary/50 border border-border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 rounded-full text-base font-semibold transition-colors h-14 bg-primary text-white hover:bg-primary/90 shadow-md"
                            >
                                <Send className="w-4 h-4" />
                                Nachricht senden
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
