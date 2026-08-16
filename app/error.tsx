"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground">
            <h2 className="text-4xl font-bold mb-4 font-heading">Something went wrong!</h2>
            <p className="text-muted-foreground mb-8 text-center max-w-md">
                We apologize for the inconvenience. Please try again later.
            </p>
            <Button onClick={() => reset()} variant="glow">
                Try again
            </Button>
        </div>
    );
}
