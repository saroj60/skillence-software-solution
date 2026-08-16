import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
    return (
        <Section className="py-12 md:py-24">
            <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-1">
                <div className="rounded-[22px] bg-[#0B0F19] p-6 sm:p-8 md:p-16 text-center overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
                    <div className="relative z-10 max-w-2xl mx-auto space-y-5 md:space-y-8">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-heading text-white">Ready to Build Something Extraordinary?</h2>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Whether you need a custom software solution, a mobile app, or IT consulting, we are here to help you achieve your goals.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                            <Button size="lg" variant="glow" className="text-base md:text-lg px-6 md:px-8" asChild>
                                <Link href="/contact">Get a Free Quote</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-base md:text-lg px-6 md:px-8" asChild>
                                <Link href="tel:+9779744412331">Schedule a Call</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
