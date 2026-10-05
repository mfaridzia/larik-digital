import React from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";

export function FinalCTA() {
  const waUrl = buildWhatsAppUrl(siteConfig.finalCta.whatsappMessage);

  return (
    <section className="py-24 sm:py-32 border-b border-border/70 bg-[#F9F9F8]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="max-w-[740px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-secondary border border-border text-xs font-mono text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Terbuka untuk konsultasi project baru</span>
          </div>

          <h2 className="text-[34px] sm:text-[46px] leading-[1.15] font-semibold text-primary tracking-tight mb-5">
            {siteConfig.finalCta.heading}
          </h2>

          <p className="text-[17px] sm:text-[19px] text-[#555861] leading-relaxed mb-8 max-w-[620px] mx-auto">
            {siteConfig.finalCta.body}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[15px] font-semibold text-white bg-primary hover:bg-primary-hover rounded-md transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>{siteConfig.finalCta.buttonText}</span>
              <ArrowUpRight className="w-4 h-4 text-white/80" />
            </a>
          </div>

          <p className="text-xs text-muted font-medium">
            {siteConfig.finalCta.footnote}
          </p>
        </div>
      </div>
    </section>
  );
}
