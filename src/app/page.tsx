import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { IntroTrust } from "@/components/IntroTrust";
import { Services } from "@/components/Services";
import { SelectedWork } from "@/components/SelectedWork";
import { CustomDevelopment } from "@/components/CustomDevelopment";
import { Process } from "@/components/Process";
import { Pricing } from "@/components/Pricing";
import { WhyUs } from "@/components/WhyUs";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-primary selection:bg-primary selection:text-white">
      {/* 1. Header (Sticky navigation & direct WhatsApp CTA) */}
      <Header />

      <main className="flex-1">
        {/* 2. Hero Section (Proof of work, left aligned, editorial) */}
        <Hero />

        {/* 3. Short Philosophy / Trust Statement */}
        <IntroTrust />

        {/* 4. Core Services (01 Website Bisnis, 02 Toko & Katalog, 03 Sistem Penjualan, 04 Konten Digital) */}
        <Services />

        {/* 5. Selected Work (Real projects: KD Jualan & KD Konten) */}
        <SelectedWork />

        {/* 6. Custom Development (Bespoke systems, high-ticket positioning) */}
        <CustomDevelopment />

        {/* 7. Process (Cara kerja 4 langkah) */}
        <Process />

        {/* 8. Starting Price (Transparan & jelas) */}
        <Pricing />

        {/* 9. Why Work With Us (Editorial points) */}
        <WhyUs />

        {/* 10. FAQ (6 Pertanyaan krusial) */}
        <FAQ />

        {/* 11. Final CTA (WhatsApp conversion) */}
        {/* <FinalCTA /> */}
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
