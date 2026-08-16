import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Facebook, Github, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#05080F] border-t border-white/5 pt-16 pb-8">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
                                <Image src="/logo.png" alt="Skillence Software Solution" fill className="object-cover" />
                            </div>
                            <span className="text-xl font-bold font-heading tracking-tight text-white">Skillence<span className="text-primary">.</span></span>
                        </div>
                        <p className="text-muted-foreground text-sm max-w-xs">
                            Building intelligent software for a connected world. Your trusted global technology partner with Nepali roots.
                        </p>
                        <div className="flex gap-4 pt-4">
                            {[Linkedin, Twitter, Facebook, Github].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                                    <Icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading">Company</h3>
                        <ul className="space-y-3">
                            {["About Us", "Our Story", "Careers", "News & Blog", "Privacy Policy"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading">Services</h3>
                        <ul className="space-y-3">
                            {["Custom Development", "Web & Mobile Apps", "Cloud & DevOps", "AI Solutions", "UI/UX Design"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-white font-bold mb-6 font-heading">Contact</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex gap-3 items-start">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Kathmandu, Nepal<br />(Global Head Office)</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:hello@skillence.com" className="hover:text-white">hello@skillence.com</a>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:+9779744412331" className="hover:text-white">+977 9744412331</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Skillence Software Solution. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
