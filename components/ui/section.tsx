import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    background?: "default" | "alternate" | "none";
}

export function Section({ children, className, id, background = "default" }: SectionProps) {
    const bgStyles = {
        default: "bg-background",
        alternate: "bg-muted/30",
        none: "",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-12 md:py-24 relative overflow-hidden",
                bgStyles[background],
                className
            )}
        >
            <div className="container px-4 md:px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}

export function SectionHeader({ title, subtitle, align = "center", className }: { title: string, subtitle?: string, align?: "left" | "center", className?: string }) {
    return (
        <div className={cn("mb-8 md:mb-12 space-y-3 md:space-y-4", align === "center" ? "text-center" : "text-left", className)}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                {title}
            </h2>
            {subtitle && (
                <p className={cn("text-muted-foreground text-base md:text-lg lg:text-xl max-w-[800px]", align === "center" && "mx-auto")}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
