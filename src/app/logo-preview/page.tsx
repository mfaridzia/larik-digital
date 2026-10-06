"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Copy } from "lucide-react";
import { Logo, LogoMark } from "@/components/Logo";

type Concept = "isometric-l" | "spatial-fold" | "parallel-lines";

export default function LogoPreviewPage() {
  const [activeConcept, setActiveConcept] = useState<Concept>("isometric-l");
  const [copied, setCopied] = useState(false);

  const concepts: {
    id: Concept;
    title: string;
    tag: string;
    desc: string;
  }[] = [
    {
      id: "isometric-l",
      title: "Opsi 1: Architectural Isometric L",
      tag: "Rekomendasi Utama",
      desc: "Volume isometrik 3D murni dari huruf L dengan bidang arsitektural yang terbagi jelas oleh garis punggung vertikal. Simetris, kokoh, dan mencerminkan kata 'Larik' (garis terstruktur & presisi).",
    },
    {
      id: "spatial-fold",
      title: "Opsi 2: Spatial Fold & Threshold",
      tag: "Paling Dekat ArchDaily",
      desc: "Mengadopsi void/ambang pintu interior seperti logo ArchDaily. Bentuk L memiliki lorong/bukaan negatif di tengahnya yang merepresentasikan ruang arsitektural.",
    },
    {
      id: "parallel-lines",
      title: "Opsi 3: Larik Parallel Lines",
      tag: "Filosofis 'Larik'",
      desc: "Tiga barisan garis arsitektural paralel yang membentuk sudut L isometrik, mengambil makna literal kata 'Larik' yaitu deretan barisan garis.",
    },
  ];

  const handleCopySvg = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F8] text-[#121316] py-12 px-6 sm:px-10">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation back */}
        <div className="flex items-center justify-between border-b border-border pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#64748B] hover:text-[#121316] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Website Utama</span>
          </Link>
          <span className="text-xs font-mono uppercase bg-[#EAEAE8] text-[#474B54] px-3 py-1 rounded-full">
            Brand Identity Exploration
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121316]">
            Eksplorasi Logo Larik Digital
          </h1>
          <p className="text-base sm:text-lg text-[#555861] leading-relaxed max-w-2xl">
            Terinspirasi dari pendekatan editorial arsitektur <strong>ArchDaily</strong>: mengombinasikan 
            <strong> monoline wireframe isometrik</strong> dengan tipografi 2 baris lowercase (<em>larik</em> / <em>digital</em>).
          </p>
        </div>

        {/* Concept Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concepts.map((c) => {
            const isSelected = activeConcept === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setActiveConcept(c.id)}
                className={`text-left p-6 rounded-2xl border transition-all duration-200 flex flex-col justify-between gap-6 ${
                  isSelected
                    ? "bg-white border-[#121316] shadow-md ring-1 ring-[#121316]"
                    : "bg-white/70 border-border hover:border-[#121316]/40 hover:bg-white shadow-xs"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase font-semibold text-[#64748B]">
                      {c.tag}
                    </span>
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#121316]" />
                    )}
                  </div>

                  {/* Logo Display */}
                  <div className="py-6 flex items-center justify-center bg-[#F9F9F8] rounded-xl border border-border/60">
                    <Logo concept={c.id} size="lg" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-base text-[#121316] mb-1">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[#555861] leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-medium text-[#121316] underline underline-offset-4">
                  {isSelected ? "Sedang Dipilih" : "Pilih Opsi Ini"}
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Simulation Section */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-[#121316]">
                Simulasi Penggunaan Logo
              </h2>
              <p className="text-sm text-[#555861]">
                Melihat logo terpilih (<strong>{concepts.find(c => c.id === activeConcept)?.title}</strong>) di berbagai konteks.
              </p>
            </div>
          </div>

          {/* Context 1: Header Simulator */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-xs space-y-3">
            <span className="text-xs font-mono uppercase text-[#64748B]">
              1. Tampilan Pada Header Website (Light Background)
            </span>
            <div className="p-4 sm:p-6 bg-[#F9F9F8] rounded-xl border border-border flex items-center justify-between">
              <Logo concept={activeConcept} size="md" />
              <div className="hidden sm:flex items-center gap-6 text-sm text-[#555861] font-medium">
                <span>Layanan</span>
                <span>Portofolio</span>
                <span>Proses</span>
                <span>Paket</span>
              </div>
              <button className="px-4 py-2 bg-[#121316] text-white text-xs font-medium rounded-lg">
                Konsultasi WhatsApp
              </button>
            </div>
          </div>

          {/* Context 2: Dark Background / Contrast */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-xs space-y-3">
            <span className="text-xs font-mono uppercase text-[#64748B]">
              2. Tampilan Pada Dark Card / Footer / Inverted Theme
            </span>
            <div className="p-6 bg-[#121316] text-[#F9F9F8] rounded-xl flex items-center justify-between">
              <div className="text-white">
                <Logo concept={activeConcept} size="md" className="text-white" />
              </div>
              <span className="text-xs font-mono text-[#888B94]">
                Monoline tetap tajam & kontras tinggi
              </span>
            </div>
          </div>

          {/* Context 3: Icon / Favicon scale */}
          <div className="bg-white rounded-2xl border border-border p-6 shadow-xs space-y-3">
            <span className="text-xs font-mono uppercase text-[#64748B]">
              3. Skala Kecil (App Icon / Favicon 32px & 16px)
            </span>
            <div className="flex items-center gap-8 p-6 bg-[#F9F9F8] rounded-xl border border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-border shadow-xs flex items-center justify-center">
                  <LogoMark concept={activeConcept} className="w-6 h-6 text-[#121316]" />
                </div>
                <span className="text-xs text-[#555861]">32x32 px</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#121316] flex items-center justify-center">
                  <LogoMark concept={activeConcept} className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs text-[#555861]">16x16 px (Inverted)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reference Breakdown */}
        <div className="bg-white rounded-2xl border border-border p-8 shadow-xs space-y-4">
          <h3 className="font-semibold text-base text-[#121316]">
            Mengapa Desain Ini Cocok Untuk Larik Digital:
          </h3>
          <ul className="space-y-3 text-sm text-[#555861] leading-relaxed list-disc list-inside">
            <li>
              <strong>Bermakna & Arsitektural:</strong> Kata <em>"Larik"</em> berarti baris, deretan beraturan, atau garis puisi. Garis monoline 3D isometrik memberi kesan presisi engineering dan arsitektur digital yang matang.
            </li>
            <li>
              <strong>Rhythm ArchDaily:</strong> Tipografi dua baris lowercase (<em>larik</em> di atas, <em>digital</em> di bawah) sejajar dengan tinggi icon, memberikan siluet yang tenang, elegan, dan jauh dari kesan "AI slop" atau logo template startup biasa.
            </li>
            <li>
              <strong>Fleksibel & Scalable:</strong> Berfungsi sempurna dalam monokrom (hitam di background terang, putih di background gelap), serta tetap terbaca jelas saat diperkecil menjadi icon browser/tab.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
