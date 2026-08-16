import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Skillence Software Solution in Kathmandu, Nepal. Request a free quote for your website, app, or ERP project today.",
  alternates: { canonical: "https://skillence.com/contact" },
  openGraph: {
    title: "Contact Us | Skillence Software Solution",
    description: "Reach out to Skillence Software Solution in Kathmandu. Open Sun-Fri 9AM-6PM. Chat on WhatsApp or send a message.",
    url: "https://skillence.com/contact",
  },
};

function ContactSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skillence.com" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://skillence.com/contact" }
        ]
      },
      {
        "@type": "ContactPage",
        "name": "Contact Skillence Software Solution",
        "url": "https://skillence.com/contact",
        "description": "Reach out to Skillence Software Solution for custom software, websites, mobile apps, and IT consulting.",
        "mainEntity": {
          "@type": "Organization",
          "name": "Skillence Software Solution",
          "telephone": "+977-9744412331",
          "email": "hello@skillence.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kathmandu",
            "addressCountry": "NP"
          }
        }
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head><ContactSchema /></head>
      {children}
    </>
  );
}