import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground">
            <h2 className="text-4xl font-bold mb-4 font-heading">404 - Page Not Found</h2>
            <p className="text-muted-foreground mb-8">Could not find requested resource</p>
            <Button asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}
