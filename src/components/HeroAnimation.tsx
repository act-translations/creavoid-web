"use client";

import { motion } from "framer-motion";
import { BarChart3, CheckCircle2, ShoppingCart } from "lucide-react";

export function HeroAnimation() {
    return (
        <div className="relative w-full h-[400px] flex items-center justify-center overflow-visible">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl" />

            {/* Desktop Screen (Center-Left) */}
            <motion.div
                className="absolute left-[10%] top-[15%] w-[280px] h-[180px] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden z-20"
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={{
                    opacity: 1,
                    y: [0, -10, 0],
                    rotateY: [-5, 0, -5],
                }}
                transition={{
                    opacity: { duration: 0.6 },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Browser Chrome */}
                <div className="h-8 bg-slate-100 border-b border-border flex items-center px-3 gap-2">
                    <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                    <div className="ml-2 flex-1 h-5 bg-white rounded-md border border-border" />
                </div>

                {/* Content */}
                <div className="p-4 space-y-3">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <BarChart3 className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 space-y-2">
                            <div className="h-2 bg-slate-200 rounded w-3/4" />
                            <div className="h-2 bg-slate-100 rounded w-1/2" />
                        </div>
                    </div>
                    <motion.div
                        className="h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-primary/20"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="flex gap-2">
                        <div className="h-1.5 bg-slate-200 rounded flex-1" />
                        <div className="h-1.5 bg-slate-100 rounded flex-1" />
                    </div>
                </div>
            </motion.div>

            {/* Tablet Screen (Center-Right, Behind Desktop) */}
            <motion.div
                className="absolute right-[15%] top-[25%] w-[200px] h-[150px] bg-white rounded-xl shadow-xl border border-border overflow-hidden z-10"
                initial={{ opacity: 0, y: 30, rotateY: 15 }}
                animate={{
                    opacity: 1,
                    y: [0, -8, 0],
                    rotateY: [5, 0, 5],
                }}
                transition={{
                    opacity: { duration: 0.8, delay: 0.2 },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                    rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
                }}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Header */}
                <div className="h-6 bg-slate-50 border-b border-border flex items-center px-2 gap-1.5">
                    <div className="w-12 h-3 bg-slate-200 rounded" />
                    <div className="flex-1" />
                    <ShoppingCart className="w-3 h-3 text-slate-400" />
                </div>

                {/* Grid Content */}
                <div className="p-3 grid grid-cols-2 gap-2">
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20" />
                    <div className="aspect-square bg-slate-100 rounded-lg" />
                    <div className="aspect-square bg-slate-50 rounded-lg border border-border" />
                    <motion.div
                        className="aspect-square bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    />
                </div>
            </motion.div>

            {/* Mobile Screen (Front-Right) */}
            <motion.div
                className="absolute right-[8%] bottom-[12%] w-[110px] h-[200px] bg-[#000000] rounded-[20px] shadow-2xl overflow-hidden z-30 p-[6px]"
                initial={{ opacity: 0, y: 40, rotateZ: -5 }}
                animate={{
                    opacity: 1,
                    y: [0, -12, 0],
                    rotateZ: [-3, 0, -3],
                }}
                transition={{
                    opacity: { duration: 1, delay: 0.4 },
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 },
                    rotateZ: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }
                }}
            >
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[16px] overflow-hidden">
                    {/* Status Bar */}
                    <div className="h-5 bg-slate-50 flex items-center justify-between px-2">
                        <div className="text-[6px] font-bold">9:41</div>
                        <div className="flex gap-1">
                            <div className="w-3 h-1.5 bg-primary/30 rounded-sm" />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-2 space-y-2">
                        <div className="h-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <div className="space-y-1.5">
                            <div className="h-1 bg-slate-200 rounded w-full" />
                            <div className="h-1 bg-slate-100 rounded w-3/4" />
                            <div className="h-1 bg-slate-100 rounded w-1/2" />
                        </div>
                        <motion.div
                            className="h-12 bg-accent/10 rounded-lg border border-accent/20"
                            animate={{ opacity: [0.6, 1, 0.6] }}
                            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                        />
                        <div className="grid grid-cols-2 gap-1.5">
                            <div className="h-6 bg-slate-50 rounded border border-border" />
                            <div className="h-6 bg-primary/5 rounded border border-primary/20" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 400 400">
                <motion.path
                    d="M 100 120 Q 200 180 280 140"
                    stroke="currentColor"
                    className="text-primary"
                    fill="transparent"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                    d="M 280 200 Q 250 280 350 320"
                    stroke="currentColor"
                    className="text-accent"
                    fill="transparent"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />
            </svg>
        </div>
    );
}
