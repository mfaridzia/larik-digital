"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { siteConfig, FaqItem } from "@/config/site";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 border-b border-border/70 scroll-mt-16 bg-surface">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 max-w-[460px]">
            <div className="text-xs uppercase tracking-wider text-muted font-medium mb-3">
              Pertanyaan Umum
            </div>
            <h2 className="text-[32px] sm:text-[42px] leading-[1.18] font-semibold text-primary tracking-tight mb-4">
              Hal yang sering ditanyakan
            </h2>
            <p className="text-[16px] text-[#555861] leading-relaxed mb-6">
              Masih ada hal lain yang ingin Anda pastikan? Kami selalu terbuka untuk berdiskusi
              sebelum Anda mengambil keputusan.
            </p>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-7 divide-y divide-border/80 border-y border-border/80">
            {siteConfig.faq.map((item: FaqItem, idx: number) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleItem(idx)}
                    className="w-full flex items-center justify-between text-left gap-4 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] sm:text-[18px] font-medium text-primary group-hover:text-accent transition-colors">
                      {item.question}
                    </span>
                    <span className="p-1 rounded bg-secondary text-primary shrink-0 transition-transform">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3.5 pr-8">
                      <p className="text-[15px] sm:text-[16px] text-[#555861] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
