"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Smartphone, Cloud, Brain, Shield, ArrowRight, Globe, Briefcase, Headphones } from "lucide-react";
import Link from "next/link";

const services = [
    {
        icon: Globe,
        title: "Website Development",
        description: "High-performance, responsive, and SEO-friendly websites designed to capture your brand and engage users."
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Engaging and high-performance native and cross-platform mobile apps for iOS and Android devices."
    },
    {
        icon: Briefcase,
        title: "ERP Software Development",
        description: "Custom Enterprise Resource Planning systems to streamline your operations, manage workflows, and integrate business processes."
    },
    {
        icon: Monitor,
        title: "Custom Software Development",
        description: "Tailored software solutions designed to meet your specific business needs and scale with your growth."
    },
    {
        icon: Cloud,
        title: "Cloud Solutions & DevOps",
        description: "Secure and scalable cloud infrastructure setup, migration, and management for seamless operations."
    },
    {
        icon: Brain,
        title: "AI & Data Solutions",
        description: "Leverage the power of Artificial Intelligence and Data Analytics to drive intelligent business decisions."
    },
    {
        icon: Shield,
        title: "Cybersecurity Solutions",
        description: "Comprehensive security assessments and implementation to protect your digital assets and data."
    },
    {
        icon: Headphones,
        title: "IT Consulting & Support",
        description: "Expert advice on technology strategy and ongoing support to ensure your systems run smoothly and efficiently."
    }
];

export function ServicesOverview() {
    return (
        <Section id="services">
            <SectionHeader
                title="Our Core Services"
                subtitle="We create comprehensive digital solutions that drive business growth and innovation."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <Card key={index} className="flex flex-col h-full group">
                        <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <service.icon className="w-6 h-6 text-primary group-hover:text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                        <Link href={`/services?service=${service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`} className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto">
                            Learn more <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                    </Card>
                ))}

                {/* CTA Card */}
                <Card className="flex flex-col h-full items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/20">
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">Need something else?</h3>
                    <p className="text-muted-foreground mb-6 text-center">We offer IT Consulting and support for unique challenges.</p>
                    <Button variant="outline" asChild>
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </Card>
            </div>
        </Section>
    );
}
