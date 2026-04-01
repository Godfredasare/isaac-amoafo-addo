import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Isaac Amoafo Addo | Portfolio",
  description: "Portfolio of Isaac Amoafo Addo - Manager at CHED Operations Ghana COCOBOD, NDC Parliamentary Candidate for Abetifi Constituency, and Entrepreneur in Agriculture and General Merchandise.",
  keywords: ["Isaac Amoafo Addo", "Ghana COCOBOD", "NDC", "Abetifi", "Agriculture", "Entrepreneur", "Parliamentary Candidate", "Ghana"],
  authors: [{ name: "Isaac Amoafo Addo" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Isaac Amoafo Addo | Portfolio",
    description: "Manager at CHED Operations Ghana COCOBOD, NDC Parliamentary Candidate, and Entrepreneur",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isaac Amoafo Addo | Portfolio",
    description: "Manager at CHED Operations Ghana COCOBOD, NDC Parliamentary Candidate, and Entrepreneur",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
