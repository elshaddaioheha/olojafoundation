import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit for a modern, friendly feel
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Oloja Foundation - A Home for Everyone",
  description: "A charitable organization dedicated to providing a home for everyone and empowering communities.",
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
