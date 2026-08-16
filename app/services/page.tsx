"use client";

import * as React from "react";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Database, Headphones, Globe, Briefcase, Brain, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const allServices = [
    {
        icon: Globe,
        title: "Website Development",
        description: "We design and build fast, responsive, and SEO-optimized websites. From landing pages to complex corporate portals, we focus on user engagement, modern design, and clean code to bring your digital presence to life.",
        features: ["Responsive Design", "SEO Optimization", "Headless CMS", "Performance Tuning"],
        technologies: ["Next.js", "React.js", "Tailwind CSS", "Strapi", "WordPress", "Vercel"],
        offers: ["Corporate Websites", "E-Commerce Stores", "Landing Pages", "Custom Web Portals"]
    },
    {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "Create engaging mobile experiences for iOS and Android. We specialize in both native and cross-platform development using Flutter and React Native to ensure broad reach and high performance.",
        features: ["iOS & Android", "React Native / Flutter", "UI/UX Design", "App Store Optimization"],
        technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "App Store Connect"],
        offers: ["Native iOS/Android Apps", "Cross-Platform Apps", "Hybrid Apps", "App Maintenance"]
    },
    {
        icon: Briefcase,
        title: "ERP Software Development",
        description: "Streamline your business operations with our custom ERP systems. We develop integrated software modules for inventory management, HR, finance, procurement, and CRM tailored to your enterprise workflows.",
        features: ["Process Automation", "Unified Database", "Real-time Reporting", "Module Integration"],
        technologies: ["Node.js", "Python / Django", "PostgreSQL", "React.js", "Docker", "AWS"],
        offers: ["Inventory Systems", "Financial Management", "HR & Payroll", "CRM Integrations"]
    },
    {
        icon: Code,
        title: "Custom Software Development",
        description: "We build tailored software solutions that address your unique business challenges. From specialized system utility integrations to tailored business solutions, we deliver robust, scalable, and secure architectures.",
        features: ["Scalable Architecture", "Microservices", "Legacy Modernization", "API Integration"],
        technologies: ["Java / Spring Boot", ".NET Core", "Node.js", "Go", "Docker", "Kubernetes"],
        offers: ["SaaS Platforms", "Custom APIs", "Legacy Migration", "Enterprise Integrations"]
    },
    {
        icon: Database,
        title: "Cloud Solutions & DevOps",
        description: "Accelerate your delivery pipeline and ensure high availability with our Cloud and DevOps services. We manage infrastructure on AWS, Azure, and Google Cloud so you can focus on your business.",
        features: ["CI/CD Pipelines", "Cloud Migration", "Infrastructure as Code", "Kubernetes"],
        technologies: ["AWS", "Azure", "GCP", "Terraform", "GitHub Actions", "Docker"],
        offers: ["Cloud Architecture", "DevOps Automation", "Server Maintenance", "Cost Optimization"]
    },
    {
        icon: Brain,
        title: "AI & Data Solutions",
        description: "Transform your data into actionable insights. We implement machine learning models and data visualization tools to help you make informed strategic decisions.",
        features: ["Predictive Analytics", "Machine Learning", "Big Data", "Business Intelligence"],
        technologies: ["Python", "TensorFlow", "PyTorch", "Tableau", "PowerBI", "Pandas"],
        offers: ["Data Pipelines", "Recommendation Engines", "Predictive Models", "Interactive Dashboards"]
    },
    {
        icon: Shield,
        title: "Cybersecurity Solutions",
        description: "Protect your digital assets with our comprehensive cybersecurity services. We conduct vulnerability assessments and implement robust security protocols to safeguard against threats.",
        features: ["Penetration Testing", "Security Audits", "Compliance", "Data Encryption"],
        technologies: ["Kali Linux", "Wireshark", "Metasploit", "OWASP ZAP", "SIEM", "Cloudflare Security"],
        offers: ["Vulnerability Assessments", "Penetration Testing", "Security Auditing", "Incident Response"]
    },
    {
        icon: Headphones,
        title: "IT Consulting & Support",
        description: "Get expert advice on your technology strategy. We provide ongoing support and maintenance to ensure your systems run smoothly and efficiently around the clock.",
        features: ["Tech Strategy", "24/7 Support", "System Maintenance", "Digital Transformation"],
        technologies: ["Jira", "Zendesk", "Slack Enterprise", "Google Workspace", "ITIL Framework"],
        offers: ["Tech Audits", "Digital Strategy", "24/7 System Monitoring", "On-demand Support"]
    }
];

export default function ServicesPage() {
    const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const params = new URLSearchParams(window.location.search);
            const serviceParam = params.get("service");
            if (serviceParam) {
                const index = allServices.findIndex(
                    (s) => s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === serviceParam
                );
                if (index !== -1) {
                    setExpandedIndex(index);
                    setTimeout(() => {
                        const element = document.getElementById(
                            `service-${serviceParam}`
                        );
                        if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "center" });
                        }
                    }, 100);
                }
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Header />
            <main className="pt-24">
                <Section>
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <Badge className="mb-4">Our Services</Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">Comprehensive IT Solutions</h1>
                        <p className="text-xl text-muted-foreground">
                            We offer a full spectrum of technology services designed to help you innovate and grow. Click on any service to view key technologies and deliverables.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {allServices.map((service, index) => {
                            const isExpanded = expandedIndex === index;
                            const slug = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                            return (
                                <Card 
                                    key={index} 
                                    id={`service-${slug}`}
                                    className={cn(
                                        "p-5 sm:p-8 group hover:border-primary/50 transition-all duration-300 flex flex-col justify-between cursor-pointer scroll-mt-28",
                                        isExpanded ? "border-primary/40 bg-white/[0.02]" : ""
                                    )}
                                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <service.icon className="w-7 h-7 text-primary" />
                                            </div>
                                            <button 
                                                className="text-muted-foreground hover:text-white flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setExpandedIndex(isExpanded ? null : index);
                                                }}
                                            >
                                                {isExpanded ? "Hide Details" : "View Details"}
                                                <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isExpanded ? "rotate-180" : "")} />
                                            </button>
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                                        <p className="text-muted-foreground mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {service.features.map((feature, idx) => (
                                                <Badge key={idx} variant="secondary" className="bg-secondary/20 text-secondary-foreground hover:bg-secondary/30">
                                                    {feature}
                                                </Badge>
                                            ))}
                                        </div>

                                        <AnimatePresence>
                                            {isExpanded && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="mt-6 pt-6 border-t border-white/5 space-y-6 overflow-hidden"
                                                >
                                                    <div>
                                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">Key Technologies</h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {service.technologies.map((tech) => (
                                                                <span key={tech} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">What We Offer</h4>
                                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                                                            {service.offers.map((offer) => (
                                                                <li key={offer} className="flex items-center gap-2">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                                    {offer}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
