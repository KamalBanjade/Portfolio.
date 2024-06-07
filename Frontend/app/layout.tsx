import { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kamal Banjade", // Target keyword & descriptive value proposition
  description:
    "Create high-quality, informative content that engages your audience. Let Kamal Banjade help you craft compelling narratives.", // Target keyword & clear benefit
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = "https://www.example.com";
  const imageUrl = `${baseUrl}/path/to/image.jpg`;

  // Ensure values are defined and not null
  const safeContent = (content: string | null | undefined): string | undefined => {
    return content !== null && content !== undefined ? content : undefined;
  };

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={safeContent(metadata.description)} />

        {/* <title>{safeContent(metadata.title)}</title> */}

        <link rel="icon" href="/logo.png" sizes="any" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        {/* <meta property="og:title" content={safeContent(metadata.title)} /> */}
        <meta property="og:description" content={safeContent(metadata.description)} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourTwitterHandle" />
        {/* <meta name="twitter:title" content={safeContent(metadata.title)} /> */}
        <meta name="twitter:description" content={safeContent(metadata.description)} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Canonical URL */}
        <link rel="canonical" href={baseUrl} />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index,follow" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              url: baseUrl,
              // name: safeContent(metadata.title),
              potentialAction: {
                "@type": "SearchAction",
                target: `${baseUrl}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
