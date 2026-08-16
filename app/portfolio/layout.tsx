import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Case studies from Skillence Software Solution: Seven Seas Education, Bhagat Group Construction, Urban Edge, Zenex Travel, Kantipur Montessori, and more.",
  alternates: { canonical: "https://skillence.com/portfolio" },
  openGraph: {
    title: "Portfolio | Skillence Software Solution",
    description: "Real results for real businesses. Explore our portfolio of websites, portals, and apps built for clients in Nepal and globally.",
    url: "https://skillence.com/portfolio",
  },
};

function PortfolioSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://skillence.com" },
      { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://skillence.com/portfolio" }
    ]
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head><PortfolioSchema /></head>
      {children}
    </>
  );
}