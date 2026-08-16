import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Skillence Software Solution, a premier software development firm in Kathmandu, Nepal. Bridging global technology with Nepali innovation.",
  alternates: { canonical: "https://skillence.com/about" },
  openGraph: {
    title: "About Us | Skillence Software Solution",
    description: "Our mission: empower businesses worldwide with intelligent, scalable software. Based in Kathmandu, Nepal.",
    url: "https://skillence.com/about",
  },
};

function AboutSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skillence.com" },
      { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://skillence.com/about" }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head><AboutSchema /></head>
      {children}
    </>
  );
}