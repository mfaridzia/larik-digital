import React from "react";
import { siteConfig } from "@/config/site";

export function IntroTrust() {
  return (
    <section className="py-20 sm:py-28 border-b border-border/70 bg-[#F9F9F8]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="max-w-content">
          <div className="text-xs uppercase tracking-wider text-muted font-medium mb-4">
            Pendekatan Kami
          </div>
          <h2 className="text-[28px] sm:text-[38px] leading-[1.2] font-semibold text-primary tracking-tight mb-8">
            {siteConfig.trust.heading}
          </h2>
          <div className="space-y-5 text-[17px] sm:text-[19px] leading-relaxed text-[#555861]">
            <p>{siteConfig.trust.body1}</p>
            <p className="text-primary font-medium">{siteConfig.trust.body2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
