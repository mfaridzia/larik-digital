import React from "react";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Layers,
  MessageSquare,
} from "lucide-react";
import { siteConfig, buildWhatsAppUrl, PricingPlan } from "@/config/site";

export function Pricing() {
  const contentWaUrl = buildWhatsAppUrl(
    siteConfig.pricing.contentAddon.whatsappMessage,
  );

  return (
    <section
      id="paket"
      className="py-20 sm:py-28 border-b border-border/70 scroll-mt-16"
    >
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-[760px] mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider text-muted font-medium mb-3">
            Pilihan Paket Solusi
          </div>
          <h2 className="text-[32px] sm:text-[44px] leading-tight font-semibold text-primary tracking-tight mb-4">
            {siteConfig.pricing.heading}
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[#555861] leading-relaxed">
            {siteConfig.pricing.subheading}
          </p>
        </div>

        {/* 4 Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 mb-10">
          {siteConfig.pricing.plans.map((plan: PricingPlan) => {
            const waUrl = buildWhatsAppUrl(plan.whatsappMessage);

            return (
              <div
                key={plan.id}
                className={`rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 border ${
                  plan.featured
                    ? "border-primary bg-surface shadow-md ring-1 ring-primary/20 relative"
                    : "border-border bg-surface hover:border-primary/40 shadow-xs"
                }`}
              >
                <div>
                  {/* Scope Tag & Featured Badge */}
                  <div className="flex flex-col gap-2 mb-4">
                    {plan.featured && (
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 bg-primary text-white rounded w-fit">
                        Paling Banyak Dibutuhkan
                      </span>
                    )}
                    <span className="text-xs font-mono text-accent font-semibold">
                      {plan.scopeTag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] sm:text-[21px] font-semibold text-primary tracking-tight mb-3">
                    {plan.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] text-[#555861] leading-relaxed pb-5 mb-5 border-b border-border/70">
                    {plan.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                      Cakupan Solusi:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-[13px] text-[#3D4048]"
                      >
                        <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-md text-xs sm:text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors ${
                      plan.featured
                        ? "bg-primary text-white hover:bg-primary-hover shadow-xs"
                        : "bg-secondary text-primary hover:bg-[#EAEAE5] border border-border/80"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance Bar for UMKM */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 p-4 sm:p-5 rounded-xl border border-border/80 bg-surface text-xs text-[#4A4E58]">
          <div className="flex items-start gap-3">
            <Layers className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-primary block mb-0.5">
                Transparan & Bertahap
              </span>
              <span className="text-[#6B7280]">
                Biaya ditentukan berdasarkan scope fitur yang benar-benar Anda
                butuhkan.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-border/70 pt-3 md:pt-0 md:pl-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-primary block mb-0.5">
                Biaya Pembuatan 1 Kali
              </span>
              <span className="text-[#6B7280]">
                Tanpa potongan omzet atau biaya langganan sistem bulanan tak
                terduga.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 border-t md:border-t-0 md:border-l border-border/70 pt-3 md:pt-0 md:pl-4">
            <MessageSquare className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
            <div>
              <span className="font-semibold text-primary block mb-0.5">
                Konsultasi Awal Bebas Biaya
              </span>
              <span className="text-[#6B7280]">
                Diskusi santai via WhatsApp untuk menemukan solusi yang pas
                tanpa komitmen.
              </span>
            </div>
          </div>
        </div>

        {/* Content Addon Callout Banner */}
        {/* <div className="rounded-xl border border-border bg-[#F5F5F2] p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
          <div className="max-w-[700px]">
            <span className="text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-1 block">
              {siteConfig.pricing.contentAddon.badge}
            </span>
            <h4 className="text-[18px] sm:text-[20px] font-semibold text-primary mb-1">
              {siteConfig.pricing.contentAddon.title}
            </h4>
            <p className="text-[14px] text-[#555861]">
              {siteConfig.pricing.contentAddon.description}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={contentWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-primary text-white hover:bg-primary-hover rounded-md text-xs sm:text-[13px] font-medium transition-colors"
            >
              <span>{siteConfig.pricing.contentAddon.cta}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div> */}

        {/* Footnote */}
        <div className="text-xs text-muted text-center max-w-[740px] mx-auto leading-relaxed">
          {siteConfig.pricing.footnote}
        </div>
      </div>
    </section>
  );
}
