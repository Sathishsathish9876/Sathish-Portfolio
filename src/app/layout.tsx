import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sathish M | Full-Stack Developer | React Native | Node.js | NestJS",
  description: "Portfolio of Sathish M, a Full-Stack Developer with 2+ years of experience in React, React Native, Node.js, NestJS, AI integrations, real-time systems and production application development.",
  keywords: ["Full Stack Developer", "React Developer", "React Native Developer", "Node.js Developer", "NestJS Developer", "Backend Developer", "Software Engineer", "SDE", "MERN Stack Developer", "Tamil Nadu Developer", "Coimbatore Developer"],
  authors: [{ name: "Sathish M" }],
  creator: "Sathish M",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.sathishm.dev", // Update with actual URL later
    title: "Sathish M | Full-Stack Developer",
    description: "Portfolio of Sathish M, a Full-Stack Developer with 2+ years of experience.",
    siteName: "Sathish M Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish M | Full-Stack Developer",
    description: "Portfolio of Sathish M, a Full-Stack Developer with 2+ years of experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased bg-black text-[#f5f5f5]`}>
      <body className="min-h-screen flex flex-col font-sans selection:bg-primary/30">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
