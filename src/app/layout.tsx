import type { Metadata } from "next";
import { Fraunces, Outfit } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const siteUrl = "https://nusantarapasifiknasional.com";
const siteName = siteConfig.name;
const title = `${siteName} - De Husked & Semi Husked Coconut Exporter`;
const description = `${siteName} is a de husked & semi husked coconut exporter from North Sumatra, Indonesia, available in 3 weight grades, ready to ship in 40-ft/20-ft containers with CIF & FOB terms to international markets.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "coconut exporter",
    "de husked coconut export",
    "semi husked coconut export",
    "coconut exporter Indonesia",
    "coconut exporter North Sumatra",
    "coconut supplier CIF FOB",
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [{ url: "/images/split-coconut-1.jpg", width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/split-coconut-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
