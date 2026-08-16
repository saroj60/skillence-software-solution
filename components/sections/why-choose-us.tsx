import { Section, SectionHeader } from "@/components/ui/section";
import { CheckCircle2 } from "lucide-react";

const features = [
    {
        title: "Global Standards, Local Expertise",
        description: "We bring world-class development standards combined with the dedication of Nepal's top tech talent."
    },
    {
        title: "Client-Centric Approach",
        description: "Your business goals are our priority. We work as an extension of your team, ensuring total alignment."
    },
    {
        title: "Agile & Transparent",
        description: "We follow agile methodologies with clear communication, keeping you in the loop at every stage."
    },
    {
        title: "Future-Ready Tech Stack",
        description: "We use the latest technologies to ensure your solution is scalable, secure, and built for the long term."
    }
];

export function WhyChooseUs() {
    return (
        <Section background="alternate" className="border-y border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                    <SectionHeader
                        title="Why Partner with Skillence Software Solution?"
                        subtitle="We don't just write code; we build digital assets that drive real business value."
                        align="left"
                    />
                    <div className="space-y-5 md:space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex gap-3 md:gap-4">
                                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0 mt-1" />
                                <div>
                                    <h4 className="text-lg md:text-xl font-bold text-white mb-1">{feature.title}</h4>
                                    <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative hidden lg:block">
                    {/* Abstract Visual - desktop only */}
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay hover:scale-105 transition-transform duration-700" />
                        <div className="relative z-10 p-8 text-center">
                            <p className="text-6xl font-bold text-white mb-2">150+</p>
                            <p className="text-primary font-medium">Projects Delivered</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
