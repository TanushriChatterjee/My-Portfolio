import type React from "react";
import type { Metadata } from "next";
import { Orbitron, Inter, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _orbitron = Orbitron({ subsets: ["latin"], variable: "--font-display" });
const _inter = Inter({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tanushri Chatterjee | Software Developer",
  description:
    "Interactive portfolio of Tanushri Chatterjee - Full-stack web and mobile developer specializing in React, React Native, and Node.js",
  icons: {
    icon: "/icon.png", // or /icon.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
