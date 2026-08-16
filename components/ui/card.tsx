import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className, hoverEffect = true }: CardProps) {
    return (
        <div className={cn(
            "rounded-xl border border-white/10 bg-card p-4 md:p-6 shadow-xl backdrop-blur-sm",
            hoverEffect && "transition-all duration-300 hover:border-primary/50 hover:shadow-primary/10 hover:-translate-y-1",
            className
        )}>
            {children}
        </div>
    );
}
