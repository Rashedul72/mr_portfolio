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

const PROFILE_IMAGE_URL = "/images/Junayed-v2.jpg";

export const metadata: Metadata = {
  title: "MD Rashedul Islam Junayed",
  description: "Professional portfolio showcasing software development projects, skills, and experience",
  icons: {
    icon: PROFILE_IMAGE_URL,
    apple: PROFILE_IMAGE_URL,
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
