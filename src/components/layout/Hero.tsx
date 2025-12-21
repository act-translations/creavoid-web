"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-start gap-4 space-y-4 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                    >
                        Creavoid 2025
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="font-serif text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                    >
                        Digital Excellence.
                        <br />
                        <span className="text-[#29A0B1]">Redefined.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    >
                        We are a Tech & Lifestyle Brand. We build high-performance websites,
                        powerful apps, and data-driven marketing campaigns.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col gap-2 min-[400px]:flex-row"
                    >
                        <a
                            href="#"
                            className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-[#FF9A8B] to-[#FF6A88] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="/blog"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        >
                            Read Blog
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
