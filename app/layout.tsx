import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppButton, OrganizationSchema } from "@/components/ui";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const BASE_URL = "https://skillence.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Skillence Software Solution | Software & IT Services in Nepal",
    template: "%s | Skillence Software Solution",
  },
  description:
    "Skillence Software Solution is a leading software development company in Kathmandu, Nepal. We build custom websites, mobile apps, ERP systems, and offer IT consulting for businesses worldwide.",
  keywords: [
    "software company Nepal",
    "software development Kathmandu",
    "website development Nepal",
    "mobile app development Nepal",
    "ERP software Nepal",
    "IT consulting Nepal",
    "Skillence Software Solution",
    "custom software Nepal",
    "web development company Nepal",
    "IT services Kathmandu",
  ],
  authors: [{ name: "Skillence Software Solution", url: BASE_URL }],
  creator: "Skillence Software Solution",
  publisher: "Skillence Software Solution",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Skillence Software Solution",
    title: "Skillence Software Solution | Software & IT Services in Nepal",
    description:
      "Custom websites, mobile apps, ERP systems and IT consulting from Nepal's leading tech firm. Serving clients globally.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Skillence Software Solution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Skillence Software Solution | Software & IT Services in Nepal",
    description:
      "Custom websites, mobile apps, ERP systems and IT consulting from Nepal's leading tech firm.",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <OrganizationSchema />
      </head>
      <body className={cn(inter.variable, outfit.variable, "bg-background text-foreground font-body antialiased selection:bg-primary/30 selection:text-primary-foreground")}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
