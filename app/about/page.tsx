"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Check, Globe2, Trophy, Users } from "lucide-react";
import Image from "next/image";

const stats = [
    { label: "Years Experience", value: "2+", icon: Trophy },
    { label: "Team Members", value: "25+", icon: Users },
    { label: "Global Clients", value: "50+", icon: Globe2 },
    { label: "Projects Completed", value: "150+", icon: Check },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Header />
            <main className="pt-24">
                {/* Intro Section */}
                <Section className="pb-8">
                    <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
                        <Badge className="mb-4">About Us</Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">Bridging Global Technology with Nepali Innovation</h1>
                        <p className="text-base md:text-xl text-muted-foreground">
                            Skillence Software Solution is a premier software development firm dedicated to delivering world-class digital solutions. We combine global standards with local expertise to build software that matters.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                        {stats.map((stat, i) => (
                            <Card key={i} className="text-center py-6 md:py-8">
                                <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
                            </Card>
                        ))}
                    </div>
                </Section>

                {/* Mission & Vision */}
                <Section background="alternate">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold font-heading mb-6 text-white">Our Mission</h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                To empower businesses worldwide with intelligent, scalable, and secure software solutions while fostering Nepal's growing tech ecosystem.
                            </p>
                            <h2 className="text-3xl font-bold font-heading mb-6 text-white">Our Vision</h2>
                            <p className="text-muted-foreground text-lg">
                                To be the most trusted global technology partner, recognized for our commitment to quality, innovation, and long-term client success.
                            </p>
                        </div>
                        <div className="relative h-[260px] md:h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Office Image */}
                            <Image 
                                src="/office-culture.jpg" 
                                alt="Skillence Software Solution Office Culture" 
                                fill 
                                className="object-cover hover:scale-105 transition-transform duration-700" 
                            />
                        </div>
                    </div>
                </Section>

                {/* The Story */}
                <Section>
                    <SectionHeader title="Our Story" subtitle="From Kathmandu to the World" />
                    <div className="max-w-3xl mx-auto text-lg text-muted-foreground space-y-6">
                        <p>
                            Founded in Nepal, Skillence Software Solution started with a simple belief: that talent is universal, but opportunity is not. We set out to change that by assembling a team of the brightest minds in the region and providing them with the platform to solve complex global problems.
                        </p>
                        <p>
                            Today, we are proud to serve clients across the globe, from startups in Silicon Valley to enterprises in Europe. Our unique "Global Standards, Nepali Roots" approach ensures that our clients get the best of both worlds: top-tier technical quality and unmatched dedication.
                        </p>
                        <p>
                            We don&apos;t just write code; we build relationships. Our team becomes an extension of yours, working tirelessly to turn your vision into reality.
                        </p>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
