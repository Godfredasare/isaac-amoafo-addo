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
  metadataBase: new URL("https://isaacamoakoaddo.com"),

  title: {
    default: "Isaac Amoafo Addo | COCOBOD Manager & Agricultural Development Expert",
    template: "%s | Isaac Amoafo Addo",
  },

  description:
    "Isaac Amoafo Addo (also known as Isaac Amoako Addo) is a Manager at CHED Operations, Ghana COCOBOD, agricultural development expert, entrepreneur, and public service professional.",

  keywords: [
    "Isaac Amoafo Addo",
    "Isaac Amoako Addo",
    "Isaac Amoako",
    "COCOBOD Ghana",
    "CHED Operations",
    "Agricultural Development Ghana",
    "Abetifi Constituency",
    "Entrepreneur Ghana",
  ],

  authors: [{ name: "Isaac Amoafo Addo" }],
  creator: "Isaac Amoafo Addo",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Isaac Amoafo Addo | COCOBOD Manager",
    description:
      "Manager at CHED Operations Ghana COCOBOD, agricultural development expert and entrepreneur.",
    url: "https://isaacamoakoaddo.com",
    siteName: "Isaac Amoafo Addo",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Isaac Amoafo Addo",
    description:
      "COCOBOD Manager, Agricultural Development Expert, Entrepreneur",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}