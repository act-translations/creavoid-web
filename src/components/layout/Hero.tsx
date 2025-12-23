"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden pt-20">
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />

            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side Content */}
                    <div className="flex flex-col items-start gap-4 space-y-4 text-left">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-lg bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                        >
                            <Sparkles className="h-4 w-4 text-primary" />
                            Creavoid 2025
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="font-serif text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1]"
                        >
                            Transform Your Business with{" "}
                            <span className="text-[#29A0B1] transition-all duration-300 hover:text-[#ff6b6b]">Intelligent</span>{" "}
                            Solutions.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed font-light"
                        >
                            We build custom web applications, deploy autonomous AI agents,
                            and manage high-performance paid advertising campaigns to scale your revenue.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto"
                        >
                            <Link
                                href="/contact"
                                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#29A0B1] to-[#29A0B1]/80 px-8 text-base font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-primary/25 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            >
                                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            <Link
                                href="/services"
                                className="inline-flex h-12 items-center justify-center rounded-full border border-input bg-background px-8 text-base font-medium shadow-sm transition-all hover:bg-accent hover:text-accent-foreground"
                            >
                                View Services
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Side Animated Graphic */}
                    <div className="relative hidden lg:block h-[500px] w-full">
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 2 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute inset-0 bg-gradient-to-br from-[#29A0B1]/10 to-[#ff6b6b]/10 rounded-[2.5rem] border border-border/50 backdrop-blur-sm overflow-hidden"
                        >
                            {/* Animated Grid Lines */}
                            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-20">
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <div key={i} className="border-r border-b border-gray-400/30"></div>
                                ))}
                            </div>

                            {/* Floating UI Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 left-1/4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/50 w-72"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 bg-primary/20 rounded w-3/4 animate-pulse"></div>
                                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
                                    <div className="flex gap-2 pt-2">
                                        <div className="h-6 w-16 bg-primary/10 rounded-full border border-primary/20"></div>
                                        <div className="h-6 w-16 bg-gray-100 dark:bg-gray-800 rounded-full"></div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                className="absolute bottom-1/4 right-1/4 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-white/30 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                    <Bot className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <div className="text-sm font-bold">AI Agent Active</div>
                                    <div className="text-xs text-muted-foreground">Optimizing workflows...</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ scale: [1, 1.05, 1], rotate: [0, -1, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-1/2 right-10 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20"
                            >
                                <Code2 className="h-5 w-5 text-gray-400 mb-2" />
                                <div className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-1"></div>
                                <div className="w-24 h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-1"></div>
                                <div className="w-28 h-1 bg-[#29A0B1]/40 rounded-full"></div>
                            </motion.div>
                        </motion.div>

                        {/* Decorative Blobs */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff6b6b]/20 rounded-full blur-[64px] -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#29A0B1]/20 rounded-full blur-[64px] -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
