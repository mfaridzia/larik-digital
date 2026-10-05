import React from "react";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";

export function CustomDevelopment() {
  const waUrl = buildWhatsAppUrl(siteConfig.customDev.whatsappMessage);

  return (
    <section className="py-20 sm:py-28 border-b border-border/70 bg-[#16171A] text-white">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading, Context, and CTA */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                {siteConfig.customDev.eyebrow}
              </span>
            </div>

            <h2 className="text-[30px] sm:text-[40px] leading-[1.15] font-semibold text-white tracking-tight">
              {siteConfig.customDev.heading}
            </h2>

            <p className="text-[16px] sm:text-[17px] text-neutral-300 leading-relaxed">
              {siteConfig.customDev.body}
            </p>

            <div className="pt-4">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-primary hover:bg-neutral-100 text-[14px] font-semibold transition-colors shadow-sm"
              >
                <span>{siteConfig.customDev.cta}</span>
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </a>
              <span className="block text-xs text-neutral-400 mt-3 font-mono">
                Scope & arsitektur didiskusikan bersama
              </span>
            </div>
          </div>

          {/* Right Column: Practical Examples Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.customDev.examples.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-neutral-800 bg-[#1F2126] hover:border-neutral-700 transition-colors"
                >
                  <div className="text-xs font-mono text-neutral-400 mb-2">
                    KASUS 0{idx + 1}
                  </div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] text-neutral-300 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
