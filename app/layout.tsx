import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a modern, friendly feel
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Oloja Foundation - A Home for Everyone",
  description: "The Oloja Foundation is a non-governmental organization dedicated to empowering communities, providing education, and supporting the less privileged nationally.",
  keywords: ["NGO", "Charity", "Oloja Foundation", "Donation", "Community Support", "Education", "Poverty Alleviation", "Nigeria"],
  openGraph: {
    title: "The Oloja Foundation - A Home for Everyone",
    description: "Empowering communities and providing a home for everyone through education, resources, and support.",
    url: "https://theolojafoundation.org",
    siteName: "The Oloja Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oloja Foundation",
    description: "Building specific support systems for the less privileged.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
