import React from "react";
import { siteConfig } from "@/config/site";

export function WhyUs() {
  return (
    <section className="py-20 sm:py-28 border-b border-border/70 bg-[#F9F9F8]">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 max-w-[480px]">
            <div className="text-xs uppercase tracking-wider text-muted font-medium mb-3">
              Komitmen Kami
            </div>
            <h2 className="text-[32px] sm:text-[42px] leading-[1.18] font-semibold text-primary tracking-tight mb-4">
              {siteConfig.whyUs.heading}
            </h2>
            <p className="text-[16px] sm:text-[17px] text-[#555861] leading-relaxed">
              {siteConfig.whyUs.description}
            </p>
          </div>

          {/* Right Column: Clean Editorial List */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-10">
            {siteConfig.whyUs.points.map((point, idx) => (
              <div
                key={idx}
                className="pb-8 border-b border-border/70 last:border-b-0 last:pb-0"
              >
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-mono text-xs font-semibold text-accent">
                    {point.number}
                  </span>
                  <h3 className="text-[20px] sm:text-[22px] font-semibold text-primary tracking-tight">
                    {point.title}
                  </h3>
                </div>
                <p className="text-[15px] sm:text-[16px] text-[#555861] leading-relaxed pl-7">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
