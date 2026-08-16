import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore Skillence Software Solution services: custom websites, mobile apps, ERP software, cloud, UI/UX, cybersecurity, AI/ML, and IT consulting in Nepal.",
  alternates: { canonical: "https://skillence.com/services" },
  openGraph: {
    title: "Our Services | Skillence Software Solution",
    description: "From websites to ERP systems, Skillence delivers complete technology services for businesses in Nepal and worldwide.",
    url: "https://skillence.com/services",
  },
};

function ServicesSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skillence.com" },
          { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://skillence.com/services" }
        ]
      },
      {
        "@type": "ItemList",
        "name": "IT Services by Skillence Software Solution",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@type": "Service", "name": "Website Development", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "High-performance, responsive, SEO-friendly websites built with Next.js and React." } },
          { "@type": "ListItem", "position": 2, "item": { "@type": "Service", "name": "Mobile App Development", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "Cross-platform iOS and Android apps with React Native and Flutter." } },
          { "@type": "ListItem", "position": 3, "item": { "@type": "Service", "name": "ERP Software Development", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "Custom ERP and business management systems tailored to your workflows." } },
          { "@type": "ListItem", "position": 4, "item": { "@type": "Service", "name": "IT Consulting", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "Strategic IT consulting, cloud migration, and technology roadmap planning." } },
          { "@type": "ListItem", "position": 5, "item": { "@type": "Service", "name": "UI/UX Design", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "User-centred design with Figma, design systems, and interactive prototypes." } },
          { "@type": "ListItem", "position": 6, "item": { "@type": "Service", "name": "Cloud Solutions", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "AWS, GCP, and Azure cloud architecture, deployment, and DevOps pipelines." } },
          { "@type": "ListItem", "position": 7, "item": { "@type": "Service", "name": "Cybersecurity", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "Security audits, penetration testing, compliance, and data protection." } },
          { "@type": "ListItem", "position": 8, "item": { "@type": "Service", "name": "AI & Machine Learning", "provider": { "@type": "Organization", "name": "Skillence Software Solution" }, "areaServed": "Worldwide", "description": "Custom AI models, NLP, computer vision, and intelligent automation." } }
        ]
      }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head><ServicesSchema /></head>
      {children}
    </>
  );
}