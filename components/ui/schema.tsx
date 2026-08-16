export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "SoftwareApplication"],
        "@id": "https://skillence.com/#organization",
        "name": "Skillence Software Solution",
        "alternateName": "Skillence",
        "url": "https://skillence.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://skillence.com/logo.png",
          "width": 512,
          "height": 512
        },
        "image": "https://skillence.com/logo.png",
        "description": "Skillence Software Solution is a leading software development company in Kathmandu, Nepal offering custom websites, mobile apps, ERP systems, and IT consulting.",
        "foundingDate": "2022",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Kathmandu",
          "addressLocality": "Kathmandu",
          "addressRegion": "Bagmati",
          "addressCountry": "NP"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 27.687823,
          "longitude": 85.336454
        },
        "telephone": "+977-9744412331",
        "email": "hello@skillence.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$",
        "currenciesAccepted": "NPR, USD",
        "paymentAccepted": "Cash, Bank Transfer",
        "areaServed": [
          { "@type": "Country", "name": "Nepal" },
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Australia" }
        ],
        "serviceType": [
          "Website Development",
          "Mobile App Development",
          "ERP Software Development",
          "Cloud Solutions",
          "IT Consulting",
          "UI/UX Design",
          "Cybersecurity",
          "AI & Machine Learning"
        ],
        "sameAs": [
          "https://skillence.com"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://skillence.com/#website",
        "url": "https://skillence.com",
        "name": "Skillence Software Solution",
        "description": "Custom software development, websites, mobile apps, ERP systems and IT consulting from Kathmandu, Nepal.",
        "publisher": { "@id": "https://skillence.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://skillence.com/services?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
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