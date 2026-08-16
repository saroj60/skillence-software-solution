"use client";

import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Building2, ShoppingBag, GraduationCap, HeartPulse, Zap, Plane } from "lucide-react";

const industries = [
    {
        icon: Building2,
        name: "FinTech & Banking",
        description: "Secure, compliant, and high-performance financial software. We build payment gateways, digital wallets, and banking portals.",
    },
    {
        icon: HeartPulse,
        name: "Healthcare",
        description: "HIPAA-compliant telemedicine platforms, EMR/EHR systems, and health tracking apps to improve patient care.",
    },
    {
        icon: ShoppingBag,
        name: "E-Commerce",
        description: "Scalable online stores, marketplace platforms, and inventory management systems helping brands sell globally.",
    },
    {
        icon: GraduationCap,
        name: "Education (EdTech)",
        description: "Interactive learning management systems (LMS), virtual classrooms, and student information systems.",
    },
    {
        icon: Zap,
        name: "Startups",
        description: "MVP development and rapid scaling for startups. We act as your technical co-founders to bring ideas to life.",
    },
    {
        icon: Plane,
        name: "Travel & Hospitality",
        description: "Booking engines, operational software, and travel apps for agencies, hotels, and airlines.",
    }
];

export default function IndustriesPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Header />
            <main className="pt-24">
                <Section>
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4">Industries We Serve</Badge>
                        <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">Domain Expertise Across Sectors</h1>
                        <p className="text-xl text-muted-foreground">
                            We understand the unique challenges of your industry and deliver tailored solutions that drive real results.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <Card key={index} className="p-8 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
                                <div className="bg-gradient-to-br from-primary to-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                                    <industry.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{industry.name}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {industry.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
