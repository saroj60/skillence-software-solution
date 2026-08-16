"use client";

import { Section } from "@/components/ui/section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
    {
        title: "Seven Seas Education",
        category: "EduTech & Consulting",
        image: "/portfolio-sevenseas.jpg",
        url: "https://www.sevenseasedu.com.np/",
        problem: "A leading education consultancy needed a modern portal to guide thousands of Nepalese students aiming to study in Japan, replacing manual form applications and streamlining course lookups.",
        solution: "Developed a high-performance React-based website with interactive course search grids, visa processing documentation repositories, and a secure online student inquiry portal.",
        results: "Reduced student query response times by 60% and increased digital program inquiries by 45% in the first quarter."
    },
    {
        title: "Faisal Nepal Recruitment",
        category: "Manpower & HR Tech",
        image: "/portfolio-faisal.jpg",
        url: "https://faisalnepal.com.np/",
        problem: "An international recruitment firm needed a secure, searchable web application to display foreign employment opportunities and automate the resume submittal process for Nepali workers.",
        solution: "Built a robust agency database portal with integrated job boards, CV submission trackers, and direct communication widgets for applicants.",
        results: "Successfully managed and parsed 5,000+ candidate applications and reduced resume processing times by 35%."
    },
    {
        title: "Bhagat Group Construction",
        category: "Infrastructure & Civil Engineering",
        image: "/portfolio-bhagat.jpg",
        url: "https://bhagatgroupconstruction.com.np/",
        problem: "A premier engineering firm needed a high-end corporate digital presence to showcase large-scale civil, road, and hydro-infrastructure projects for government and commercial tenders.",
        solution: "Created an immersive corporate portal highlighting safety compliance, heavy machinery assets, project timelines, and an interactive showcase of completed works.",
        results: "Established a professional bidding profile, contributing to a 30% increase in qualified corporate tender inquiries."
    },
    {
        title: "Urban Edge Design Studio",
        category: "Architecture & Interior",
        image: "/portfolio-urbanedge.jpg",
        url: "https://www.urbanedge.com.np/",
        problem: "An elite architectural design and custom interior house needed a visually immersive, minimalist website to attract high-end residential and corporate real estate clients.",
        solution: "Designed a portfolio website emphasizing grid systems, image-rich project galleries, dark-mode styling, and interactive blueprints.",
        results: "Boosted client acquisition conversion rates by 50% through high-fidelity visual storytelling."
    },
    {
        title: "Zenex Travel & Travels",
        category: "Tours & Travel Portal",
        image: "/portfolio-zenex.jpg",
        url: "https://zenextravel.com.np/",
        additionalUrl: "https://www.zenextravels.com/",
        problem: "Zenex Travel needed to digitalize their tour bookings, vacation packages, and flight ticketing services across multiple TLD domains to attract domestic and international travelers.",
        solution: "Developed a multi-domain travel booking search engine and tour planner, fully optimized for global SEO and local payment integrations.",
        results: "Doubled online package booking inquiries and generated an 80% increase in organic holiday package search traffic."
    },
    {
        title: "Kantipur Montessori",
        category: "Education & Preschool",
        image: "/portfolio-kantipur.jpg",
        url: "https://www.kantipurmontessori.edu.np/",
        problem: "A preschool and teacher training institute required a vibrant, informative portal to attract aspiring educators and keep parents engaged with classroom activities.",
        solution: "Built a responsive, child-friendly educational portal detailing curriculum modules, teacher training programs, and school calendar events.",
        results: "Increased Montessori teacher training enrollment by 40% within the first 6 months of launching."
    },
    {
        title: "Skillence International",
        category: "Corporate Training & Consulting",
        image: "/portfolio-skillence.jpg",
        url: "https://skillence-int.com/",
        problem: "A global skill development company needed an LMS (Learning Management System) and corporate training board to manage large client training databases and class schedules.",
        solution: "Built a professional training management dashboard with booking flows, schedule planners, and enterprise skill evaluation trackers.",
        results: "Streamlined administration for 2,000+ monthly trainees and grew corporate training contracts by 45%."
    }
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Header />
            <main className="pt-24">
                <Section>
                    <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
                        <Badge className="mb-4">Our Work</Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">Case Studies & Success Stories</h1>
                        <p className="text-base md:text-xl text-muted-foreground">
                            See how we have helped local and international businesses transform and succeed through custom-tailored technology.
                        </p>
                    </div>

                    <div className="space-y-16 md:space-y-24">
                        {projects.map((project, index) => (
                            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 md:gap-12 items-center`}>
                                {/* Logo Card Side */}
                                <div className="w-full lg:w-1/2 relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="aspect-video bg-gradient-to-br from-[#0d1117] via-[#0f1923] to-[#111827] relative flex flex-col items-center justify-center gap-5 overflow-hidden block"
                                        style={{ display: 'flex' }}
                                    >
                                        {/* Glow blob */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-64 h-64 rounded-full bg-primary/10 blur-[80px] opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                                        </div>

                                        {/* Grid texture */}
                                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                                        {/* Favicon / Logo */}
                                        <div className="relative z-10 w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={`https://www.google.com/s2/favicons?domain=${new URL(project.url).hostname}&sz=128`}
                                                alt={`${project.title} logo`}
                                                width={80}
                                                height={80}
                                                className="w-16 h-16 object-contain"
                                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                                            />
                                        </div>

                                        {/* Site name + URL */}
                                        <div className="relative z-10 text-center px-6">
                                            <p className="text-white font-bold text-xl font-heading tracking-tight group-hover:text-primary transition-colors duration-300">{project.title}</p>
                                            <p className="text-muted-foreground text-xs mt-1 opacity-70">{new URL(project.url).hostname}</p>
                                        </div>

                                        {/* Visit overlay on hover */}
                                        <div className="absolute bottom-0 left-0 right-0 py-3 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center gap-2 z-10">
                                            <span className="text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase">↗ Visit Live Site</span>
                                        </div>
                                    </a>
                                </div>

                                {/* Content Side */}
                                <div className="w-full lg:w-1/2 space-y-6">
                                    <div className="flex flex-wrap gap-2 items-center">
                                        <Badge variant="outline" className="border-primary/55 text-primary bg-primary/5">{project.category}</Badge>
                                        <a 
                                            href={project.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-xs text-muted-foreground hover:text-primary underline transition-colors"
                                        >
                                            Visit Live Site
                                        </a>
                                        {project.additionalUrl && (
                                            <a 
                                                href={project.additionalUrl} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-xs text-muted-foreground hover:text-primary underline transition-colors"
                                            >
                                                / International Portal
                                            </a>
                                        )}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white">{project.title}</h2>

                                    <div className="space-y-4 pt-4 border-t border-white/5">
                                        <div>
                                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-1">The Problem</h4>
                                            <p className="text-muted-foreground">{project.problem}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-1">Our Solution</h4>
                                            <p className="text-muted-foreground">{project.solution}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-primary font-bold uppercase text-xs tracking-wider mb-1">Results</h4>
                                            <p className="text-white font-medium">{project.results}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center">
                        <h3 className="text-2xl font-bold text-white mb-6">Ready to write your success story?</h3>
                        <Button size="lg" variant="glow" asChild>
                            <Link href="/contact">Start a Project</Link>
                        </Button>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
