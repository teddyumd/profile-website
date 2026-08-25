import type { Metadata } from "next";
import { Manrope, Source_Serif_4 } from "next/font/google";
import "@/styles/globals.css";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { site } from "@/content/site";
import { absoluteUrl, getSiteOrigin } from "@/lib/siteUrl";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  alternates: {
    canonical: absoluteUrl("/"),
  },
  title: {
    default: site.metadata.title,
    template: "%s | Tewodros Hailegeberel",
  },
  description: site.metadata.description,
  openGraph: {
    title: site.metadata.ogTitle,
    description: site.metadata.ogDescription,
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.metadata.ogTitle,
    description: site.metadata.ogDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icons/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Addis Ababa",
      addressCountry: "Ethiopia",
    },
    url: absoluteUrl("/"),
    sameAs: [site.github, site.linkedIn],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${sourceSerif.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
