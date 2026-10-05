import React from "react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";

export function Hero() {
  const primaryWaUrl = buildWhatsAppUrl(
    "Halo Larik Digital, saya ingin menceritakan kebutuhan bisnis saya dan berkonsultasi mengenai solusi yang tepat."
  );

  return (
    <section className="pt-14 sm:pt-24 pb-20 sm:pb-28 border-b border-border/70 overflow-hidden">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Left-aligned hero header content */}
        <div className="max-w-[820px] text-left">
          {/* Main Headline */}
          <h1 className="text-[38px] leading-[1.12] sm:text-[54px] lg:text-[64px] sm:leading-[1.1] font-semibold text-primary tracking-tight mb-6">
            {siteConfig.hero.headline}
          </h1>

          {/* Supporting Copy */}
          <p className="text-[17px] sm:text-[19px] leading-relaxed text-[#555861] max-w-[660px] mb-8">
            {siteConfig.hero.supporting}
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-4">
            <a
              href={primaryWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[15px] font-medium text-white bg-primary hover:bg-primary-hover rounded-md transition-colors shadow-xs"
            >
              <span>{siteConfig.hero.primaryCta}</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </a>

            <a
              href="#portofolio"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-[15px] font-medium text-primary hover:bg-[#EFEFEA] bg-secondary border border-border/60 rounded-md transition-colors"
            >
              <span>{siteConfig.hero.secondaryCta}</span>
              <ArrowDown className="w-4 h-4 text-muted" />
            </a>
          </div>

          {/* Footnote */}
          <p className="text-xs text-muted">
            {siteConfig.hero.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}

