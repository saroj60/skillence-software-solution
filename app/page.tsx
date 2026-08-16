import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Clients } from "@/components/sections/clients";
import { ServicesOverview } from "@/components/sections/services-overview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";

function HomeSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://skillence.com/#webpage",
                "url": "https://skillence.com",
                "name": "Skillence Software Solution | Software & IT Services in Nepal",
                "description": "Skillence Software Solution is a leading software development company in Kathmandu, Nepal. Custom websites, mobile apps, ERP systems, and IT consulting.",
                "isPartOf": { "@id": "https://skillence.com/#website" },
                "about": { "@id": "https://skillence.com/#organization" },
                "breadcrumb": {
                    "@type": "BreadcrumbList",
                    "itemListElement": [
                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skillence.com" }
                    ]
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What services does Skillence Software Solution offer?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Skillence offers website development, mobile app development, ERP software, cloud solutions, UI/UX design, cybersecurity, AI & Machine Learning, and IT consulting services."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Where is Skillence Software Solution located?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Skillence Software Solution is headquartered in Kathmandu, Nepal and serves clients globally."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How can I contact Skillence Software Solution?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "You can reach us at hello@skillence.com, call +977-9744412331, or message us on WhatsApp. We operate Sunday–Friday, 9AM–6PM NPT."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Skillence build websites for businesses in Nepal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, Skillence Software Solution builds high-performance, SEO-friendly websites for businesses of all sizes across Nepal and internationally."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What technologies does Skillence use for website development?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We use Next.js, React.js, Tailwind CSS, Strapi, WordPress, and Vercel for modern, responsive website development."
                        }
                    }
                ]
            }
        ]
    };
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function Home() {
    return (
        <>
            <HomeSchema />
            <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 font-body">
                <Header />
                <main id="main-content">
                    <Hero />
                    <Clients />
                    <ServicesOverview />
                    <WhyChooseUs />
                    <Testimonials />
                    <CtaSection />
                </main>
                <Footer />
            </div>
        </>
    );
}
