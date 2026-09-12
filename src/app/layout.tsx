import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const PROFILE_IMAGE_URL = "/images/Junayed-without-bg.png";
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "MD Rashedul Islam Junayed | Full Stack Software Developer",
  description:
    "Professional portfolio of MD Rashedul Islam Junayed — Full Stack Software Developer specializing in Next.js, React, Node.js, and modern web applications.",
  icons: {
    icon: PROFILE_IMAGE_URL,
    apple: PROFILE_IMAGE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "MD Rashedul Islam Junayed",
    title: "MD Rashedul Islam Junayed | Full Stack Software Developer",
    description:
      "Professional portfolio showcasing software development projects, skills, and experience.",
    images: [
      {
        url: "/og-portfolio.png",
        width: 1200,
        height: 675,
        alt: "MD Rashedul Islam Junayed — Full Stack Software Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Rashedul Islam Junayed | Full Stack Software Developer",
    description:
      "Professional portfolio showcasing software development projects, skills, and experience.",
    images: ["/og-portfolio.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#082c47] text-white`}
      >
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
