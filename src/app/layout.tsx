import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL("https://larikdigital.com"),
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
    url: "https://larikdigital.com",
    siteName: siteConfig.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "https://larikdigital.com",
  },
  icons: {
    icon: "/favicon.ico",
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
