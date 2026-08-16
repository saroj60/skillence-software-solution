"use client";

import { Section, SectionHeader } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Skillence Software Solution transformed our outdated system into a modern, high-speed platform. Their attention to detail is unmatched.",
        author: "Alex Johnson",
        role: "CTO, FinEdge Global",
        location: "USA"
    },
    {
        quote: "Reliable, professional, and incredibly skilled. They felt like a true partner rather than just ample vendor.",
        author: "Sarah Williams",
        role: "Founder, GreenEarth Startups",
        location: "Australia"
    },
    {
        quote: "The UI/UX design they delivered was world-class. Our user engagement increased by 40% within the first month.",
        author: "Rajesh K.C.",
        role: "Director, Nepal Tech Innovations",
        location: "Nepal"
    }
];

export function Testimonials() {
    return (
        <Section>
            <SectionHeader
                title="Trusted by Global Clients"
                subtitle="Here's what our partners have to say about working with us."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                    <Card key={i} className="bg-white/5 border-white/5">
                        <Quote className="w-8 h-8 text-primary/50 mb-4" />
                        <p className="text-lg text-white mb-6 italic">&quot;{t.quote}&quot;</p>
                        <div>
                            <p className="font-bold text-white">{t.author}</p>
                            <p className="text-sm text-primary">{t.role}</p>
                            <p className="text-xs text-muted-foreground">{t.location}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
