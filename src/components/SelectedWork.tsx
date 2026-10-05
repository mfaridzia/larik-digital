"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, WorkItem } from "@/config/site";
import { BrowserFrame } from "@/components/BrowserFrame";

export function SelectedWork() {
  const [activeTab, setActiveTab] = useState<string>("kd-jualan");

  const activeWork =
    siteConfig.selectedWork.find((w) => w.id === activeTab) ||
    siteConfig.selectedWork[0];

  const waUrl = buildWhatsAppUrl(
    `Halo Larik Digital, saya melihat portfolio ${activeWork.title} di website Anda dan ingin menanyakan kemungkinan implementasi serupa untuk bisnis saya.`,
  );

  return (
    <section
      id="portofolio"
      className="py-20 sm:py-28 border-b border-border/70 scroll-mt-16"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[760px] mb-10 sm:mb-12">
          <div className="text-xs uppercase tracking-wider text-muted font-medium mb-3">
            Portofolio
          </div>
          <h2 className="text-[32px] sm:text-[44px] leading-tight font-semibold text-primary tracking-tight mb-4">
            Beberapa yang sudah kami bangun
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[#555861] leading-relaxed">
            Produk dan sistem nyata yang kami bangun dan gunakan untuk mendukung
            operasional bisnis sehari-hari.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-border pb-3 overflow-x-auto">
          {siteConfig.selectedWork.map((project: WorkItem) => {
            const isSelected = project.id === activeTab;
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActiveTab(project.id)}
                className={`px-4 py-2.5 rounded-md text-sm font-medium transition-all text-left flex items-center gap-2.5 shrink-0 ${
                  isSelected
                    ? "bg-primary text-white shadow-xs"
                    : "bg-surface text-[#555861] hover:text-primary hover:bg-[#EFEFEA] border border-border"
                }`}
              >
                <span className="font-mono text-xs opacity-75">
                  {project.number}
                </span>
                <span>{project.title}</span>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded ${
                    isSelected
                      ? "bg-white/20 text-white"
                      : "bg-secondary text-muted"
                  }`}
                >
                  {project.category}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Showcase Area */}
        <div className="bg-[#FAF9F7] border border-border rounded-xl p-6 sm:p-10 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Left Column: Project Description */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted mb-2">
                  <span>PROYEK {activeWork.number}</span>
                  <span>•</span>
                  <span>{activeWork.status}</span>
                </div>
                <h3 className="text-[26px] sm:text-[30px] font-semibold text-primary tracking-tight mb-2">
                  {activeWork.title}
                </h3>
                <p className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-4">
                  {activeWork.category}
                </p>
                <p className="text-[15px] sm:text-[16px] text-[#4A4E58] leading-relaxed">
                  {activeWork.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-3 pt-4 border-t border-border/70">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider block">
                  Fitur & Kemampuan:
                </span>
                {activeWork.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-[14px] text-[#3D4048]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-white hover:bg-primary-hover rounded-md text-[14px] font-medium transition-colors"
                >
                  <span>Diskusikan sistem seperti ini</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Clean Browser Frame Visual with Real Screenshot */}
            <div className="lg:col-span-7">
              <BrowserFrame
                url={activeWork.previewUrl}
                title={`${activeWork.title}`}
              >
                <div className="relative w-full bg-[#18191C] overflow-hidden max-h-[480px] sm:max-h-[540px] overflow-y-auto">
                  <img
                    src={activeWork.imageSrc}
                    alt={activeWork.title}
                    className="w-full h-auto object-contain block transition-transform duration-300 hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>

        {/* Note below portfolio */}
        <div className="text-center text-xs text-muted max-w-[600px] mx-auto">
          Setiap solusi dapat disesuaikan dengan alur kerja, nama brand, dan
          kebutuhan spesifik usaha Anda.
        </div>
      </div>
    </section>
  );
}
