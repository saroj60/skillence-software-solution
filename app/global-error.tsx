"use client";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body className="bg-background text-foreground">
                <div className="flex h-screen flex-col items-center justify-center">
                    <h2 className="text-4xl font-bold mb-4">Something went wrong!</h2>
                    <button
                        onClick={() => reset()}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
                    >
                        Try again
                    </button>
                </div>
            </body>
        </html>
    );
}
