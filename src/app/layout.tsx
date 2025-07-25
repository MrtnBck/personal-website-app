import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import ScrollHideNavbar from "@/components/ScrollHideNavbar";
import LocationLiveStatus from "@/components/LocationLiveStatus";

import Footer from "@/components/Footer";
import FloatingBackground from "@/components/FloatingBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Martin Bock - Personal Website",
  description: "Created by Martin Bock, this is a personal website showcasing my skills, education, and experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased overflow-x-hidden`}>
        <FloatingBackground />
        <main className="relative z-11 mb-10 overflow-hidden">
          <ScrollHideNavbar />
          <div id="transition-content">
            <div className="mt-13 flex justify-end px-4 ">
              <LocationLiveStatus />
            </div>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
