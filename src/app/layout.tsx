import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL("https://larikdigital.web.id"),
  authors: [{ name: siteConfig.name }],
  keywords: [
    "jasa pembuatan website",
    "web agency umkm",
    "sistem penjualan",
    "katalog online",
    "digital menu",
    "aplikasi web custom",
    "Larik Digital",
    "KD Jualan",
    "KD NTB Group",
  ],
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "https://larikdigital.web.id",
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://larikdigital.web.id",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#F9F9F8",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen font-sans bg-background text-primary antialiased selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
