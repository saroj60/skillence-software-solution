"use client";

import { Section } from "@/components/ui/section";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/sections/contact-form";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-background text-foreground font-body">
            <Header />
            <main className="pt-24">
                <Section>
                    <div className="text-center max-w-4xl mx-auto mb-10 md:mb-16">
                        <Badge className="mb-4">Get In Touch</Badge>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-4 md:mb-6">Let&apos;s Start a Conversation</h1>
                        <p className="text-base md:text-xl text-muted-foreground">
                            Have a project in mind or want to learn more about our services? We&apos;re here to help.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <MapPin className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Global Headquarters</h4>
                                            <p className="text-muted-foreground">Kathmandu, Nepal</p>
                                            <p className="text-sm text-muted-foreground mt-1">Operating Hours: Sun-Fri, 9AM - 6PM</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Email Us</h4>
                                            <p className="text-muted-foreground">hello@skillence.com</p>
                                            <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Call Us</h4>
                                            <p className="text-muted-foreground">+977 9744412331</p>
                                            <p className="text-sm text-muted-foreground mt-1">Support available 24/7</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Embed */}
                            <div className="h-[220px] md:h-[300px] rounded-2xl overflow-hidden border border-white/10 w-full relative">
                                <iframe 
                                    src="https://maps.google.com/maps?q=27.687823,85.336454&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                                    width="100%" 
                                    height="100%" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                                />
                            </div>
                        </div>

                        <div>
                            <ContactForm />
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    );
}
