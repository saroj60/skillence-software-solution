"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export function ContactForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.target as HTMLFormElement);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const subject = formData.get("subject") as string;
        const message = formData.get("message") as string;

        const whatsappMessage = `*New Contact Request*\n\n*Name:* ${name}\n*Email:* ${email}\n*Subject:* ${subject}\n*Message:* ${message}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=9779744412331&text=${encodeURIComponent(whatsappMessage)}`;

        window.location.href = whatsappUrl;
        setStatus("success");
    };

    if (status === "success") {
        return (
            <Card className="p-6 sm:p-8 text-center bg-green-500/10 border-green-500/20">
                <h3 className="text-2xl font-bold text-green-500 mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours.</p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>Send Another Message</Button>
            </Card>
        );
    }

    return (
        <Card className="p-5 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                        <input
                            id="name"
                            required
                            name="name"
                            className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                    <select
                        id="subject"
                        name="subject"
                        className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                        <option>General Inquiry</option>
                        <option>Request a Quote</option>
                        <option>Careers</option>
                        <option>Partnership</option>
                    </select>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full rounded-md border border-input bg-background/50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                        placeholder="Tell us about your project..."
                    />
                </div>

                <Button type="submit" size="lg" className="w-full" variant="glow" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Send Message"}
                </Button>
            </form>
        </Card>
    );
}
