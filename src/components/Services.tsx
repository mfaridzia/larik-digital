import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig, buildWhatsAppUrl, ServiceItem } from "@/config/site";

export function Services() {
  return (
    <section id="layanan" className="py-20 sm:py-28 border-b border-border/70 scroll-mt-16">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-[720px] mb-12 sm:mb-16">
          <div className="text-xs uppercase tracking-wider text-muted font-medium mb-3">
            Layanan
          </div>
          <h2 className="text-[32px] sm:text-[44px] leading-tight font-semibold text-primary tracking-tight mb-4">
            Yang bisa kami bantu
          </h2>
          <p className="text-[17px] sm:text-[18px] text-[#555861] leading-relaxed">
            Mulai dari membangun presence online sampai membantu operasional bisnis sehari-hari.
          </p>
        </div>

        {/* 2 x 2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.services.map((service: ServiceItem) => {
            const waMessage = `Halo Larik Digital, saya ingin bertanya tentang layanan ${service.title} untuk bisnis saya.`;
            const waUrl = buildWhatsAppUrl(waMessage);

            return (
              <div
                key={service.id}
                className="group p-6 sm:p-8 rounded-xl border border-border bg-surface hover:border-primary/40 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Number & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs sm:text-sm font-semibold text-muted">
                      {service.number}
                    </span>
                    <span className="text-[11px] text-muted font-mono">Layanan Inti</span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-[22px] sm:text-[24px] font-semibold text-primary tracking-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-muted uppercase tracking-wider mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[15px] sm:text-[16px] text-[#474B54] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Supporting Context */}
                  <p className="text-xs text-muted leading-relaxed pb-6 mb-6 border-b border-border/60">
                    {service.supporting}
                  </p>

                  {/* Capabilities / Deliverables */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
                      Cakupan Pengerjaan:
                    </span>
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[14px] text-[#3D4048]">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-4 border-t border-border/50">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary group-hover:text-accent transition-colors"
                  >
                    <span>Konsultasikan layanan ini</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
