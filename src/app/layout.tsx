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
const title = `${siteName} - Eksportir De Husked & Semi Husked Coconut`;
const description = `${siteName} adalah eksportir de husked & semi husked coconut dari Sumatera Utara, Indonesia, tersedia dalam 3 grade berat, siap kirim dalam container 40-ft/20-ft dengan term CIF & FOB ke pasar internasional.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "eksportir kelapa",
    "ekspor de husked coconut",
    "ekspor semi husked coconut",
    "coconut exporter Indonesia",
    "coconut exporter Sumatera Utara",
    "coconut supplier CIF FOB",
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
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
      lang="id"
      className={`${fraunces.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
