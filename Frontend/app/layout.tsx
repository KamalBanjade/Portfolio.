import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Kamal Banjade",
    template: "%s | Kamal Banjade",
  },
  description:
    "Create high-quality, informative content that engages your audience. Let Kamal Banjade help you craft compelling narratives.",
  openGraph: {
    type: "website",
    url: "https://www.example.com",
    title: "Kamal Banjade",
    description:
      "Create high-quality, informative content that engages your audience. Let Kamal Banjade help you craft compelling narratives.",
    images: [
      {
        url: "https://www.example.com/path/to/image.jpg",
        width: 800,
        height: 600,
        alt: "Kamal Banjade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle",
    title: "Kamal Banjade",
    description:
      "Create high-quality, informative content that engages your audience. Let Kamal Banjade help you craft compelling narratives.",
    images: [
      {
        url: "https://www.example.com/path/to/image.jpg",
        alt: "Kamal Banjade",
      },
    ],
  },
  icons: {
    icon: "/logo.png",
  },
  alternates: {
    canonical: "https://www.example.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
