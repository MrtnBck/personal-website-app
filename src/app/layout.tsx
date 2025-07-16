import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

import ScrollHideNavbar from "@/components/ScrollHideNavbar";
import LocationLiveStatus from "@/components/LocationLiveStatus";

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
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="mb-10">
          <ScrollHideNavbar />
          <div className="mt-13 flex justify-end px-4 ">
            <LocationLiveStatus />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
