import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CursorGlow from "@/components/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PROFILE_IMAGE_URL = "/images/Junayed-without-bg.png";

/** Production site — WhatsApp/Open Graph need a public absolute URL */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "https://mr-portfolio-developer.netlify.app"
).replace(/\/$/, "");

const OG_IMAGE = `${SITE_URL}/og-portfolio.jpg?v=4`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Junayed | Engineering Reliable Systems",
    template: "%s · Junayed",
  },
  description:
    "Portfolio of MD Rashedul Islam Junayed — backend-focused software engineer building offline-first APIs, caching layers, and scalable products with NestJS, PostgreSQL, Redis, and Next.js.",
  icons: {
    icon: PROFILE_IMAGE_URL,
    apple: PROFILE_IMAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "MD Rashedul Islam Junayed",
    title: "Junayed | Engineering Reliable Systems",
    description:
      "Backend-focused software engineer — NestJS, PostgreSQL, Redis, Next.js. Offline-first APIs, queues, and products that scale.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "MD Rashedul Islam Junayed — Backend-Focused Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Junayed | Engineering Reliable Systems",
    description:
      "Backend-focused software engineer — NestJS, PostgreSQL, Redis, Next.js. Offline-first APIs, queues, and products that scale.",
    images: [OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased bg-[#0a0b0d] text-white`}
      >
        <LenisProvider />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
