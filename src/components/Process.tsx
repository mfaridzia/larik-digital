import React from "react";
import { siteConfig } from "@/config/site";

export function Process() {
  return (
    <section id="cara-kerja" className="py-20 sm:py-28 border-b border-border/70 scroll-mt-16">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider text-muted font-medium mb-3">
            Alur Kerjasama
          </div>
          <h2 className="text-[32px] sm:text-[44px] leading-tight font-semibold text-primary tracking-tight mb-4">
            {siteConfig.process.heading}
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[#555861] leading-relaxed">
            {siteConfig.process.description}
          </p>
        </div>

        {/* 4 Steps Horizontal on desktop, vertical on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.process.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl border border-border bg-surface hover:border-primary/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="font-mono text-xs font-semibold text-accent mb-6 flex items-center justify-between">
                  <span>TAHAP {step.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-primary tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#555861] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border/60 text-[11px] font-mono text-muted">
                {idx === 0 && "Diskusi awal tanpa biaya"}
                {idx === 1 && "Penawaran tertulis jelas"}
                {idx === 2 && "Akses review langsung"}
                {idx === 3 && "Pendampingan pasca go-live"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
