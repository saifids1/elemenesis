import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundCrazy from "./components/BackgroundBlobs";
import BackgroundBento from "./components/BackgroundBlobs";
import BackgroundGeometric from "./components/BackgroundBlobs";
import BackgroundMinimalist from "./components/BackgroundBlobs";
import BackgroundKinetic from "./components/BackgroundBlobs";
import BackgroundHighVoltage from "./components/BackgroundBlobs";
import BackgroundAura from "./components/BackgroundBlobs";
import BackgroundCircuit from "./components/BackgroundBlobs";
import BackgroundPrism from "./components/BackgroundBlobs";
import BackgroundSpotlight from "./components/BackgroundBlobs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elemensis",
 description:
    "Elemensis is a UAE-based global B2B & B2C trading, import, and premium product distribution company delivering high-quality, sustainable, and trusted solutions for businesses and consumers worldwide.",
  icons: {
    icon: "/Images/logo/elem.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        {/* 1. Background layer (Global) */}
        <BackgroundSpotlight />
        
        {/* 2. Page Content */}
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
