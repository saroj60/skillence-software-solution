"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe } from "lucide-react";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[#0B0F19]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-20" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 rounded-full blur-[100px] opacity-20" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm backdrop-blur-md bg-white/5 border-white/10 text-primary-foreground">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Now Accepting New Projects
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight mb-6 max-w-4xl"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent Software</span> for a Connected World
                </motion.h1>

                <motion.p
                    className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Skillence Software Solution is your global partner for premium software development, reliable IT services, and future-ready digital solutions.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full justify-center px-2 sm:px-0"
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <Button size="lg" variant="glow" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14 w-full sm:w-auto" asChild>
                        <Link href="/contact">
                            Start Your Project <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8 h-12 md:h-14 w-full sm:w-auto bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10" asChild>
                        <Link href="/portfolio">
                            View Our Work
                        </Link>
                    </Button>
                </motion.div>

                {/* Tech Stack Floating Icons (Decorative) */}
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 left-10 opacity-20">
                    <Code2 className="w-24 h-24 text-primary" />
                </div>
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 right-10 opacity-20">
                    <Globe className="w-24 h-24 text-secondary" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
