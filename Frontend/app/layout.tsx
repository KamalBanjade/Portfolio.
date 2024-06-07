import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React, { ReactNode } from "react";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamal Banjade", // Target keyword & descriptive value proposition
  description:
    "Create high-quality, informative content that engages your audience. Let Kamal Banjade help you craft compelling narratives.", // Target keyword & clear benefit
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description || ''} />

        {/* <title>{metadata.title || 'Default Title'}</title> */}

        <link rel="icon" href="/logo.png" sizes="any" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.example.com${process.env.NEXT_PUBLIC_BASE_URL}`} />
        {/* <meta property="og:title" content={metadata.title} /> */}
        {/* <meta name="description" content={someProp?.description ?? ''} /> */}

        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/path/to/image.jpg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        {/* <meta name="twitter:title" content={metadata.title} /> */}
        {/* <meta name="twitter:description" content={metadata.description} /> */}
        <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_BASE_URL}/path/to/image.jpg`} />

        {/* Canonical URL */}
        <link rel="canonical" href={`https://www.example.com${process.env.NEXT_PUBLIC_BASE_URL}`} />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index,follow" />

        {/* Structured Data Example - You might need to adjust this based on your content */}
        {/* This is just a placeholder example */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            "url": `https://www.example.com${process.env.NEXT_PUBLIC_BASE_URL}`,
            "name": metadata.title,
            "potentialAction": {
              "@type": "SearchAction",
              "target": `${process.env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`
            }
          })}
        </script>

        {/* Add other meta tags as needed */}
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}