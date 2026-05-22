import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteData } from "@/data/siteData";

export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  keywords: siteData.seo.keywords,
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    type: siteData.seo.ogType as any,
    images: [siteData.seo.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [siteData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: siteData.personal.name }],
  creator: siteData.personal.name,
  publisher: siteData.personal.name,
  metadataBase: new URL("https://amira-abouzaid.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="antialiased min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
