import { Section } from "@/components/ui/section";

const clients = [
    "TechGlobal", "InnovateX", "FutureSoft", "DataFlow", "CloudNine"
];

export function Clients() {
    return (
        <Section className="py-10 border-y border-white/5 bg-white/[0.02]">
            <p className="text-center text-sm font-medium text-muted-foreground mb-6 uppercase tracking-widest">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {clients.map((client) => (
                    <div key={client} className="text-xl md:text-2xl font-bold font-heading text-white">
                        {client}
                    </div>
                ))}
            </div>
        </Section>
    );
}
