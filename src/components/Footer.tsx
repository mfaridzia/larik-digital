import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig, buildWhatsAppUrl } from "@/config/site";

export function Footer() {
  const waUrl = buildWhatsAppUrl();

  return (
    <footer className="py-16 sm:py-20 bg-[#F4F4F2] text-primary">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10 pb-12 border-b border-border/80">
          {/* Brand info */}
          <div className="max-w-[420px] space-y-3">
            <Link
              href="/"
              className="flex items-center gap-2 text-primary font-semibold tracking-tight text-lg"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
              <span>{siteConfig.name}</span>
            </Link>
            <p className="text-[14px] text-[#555861] leading-relaxed">
              {siteConfig.footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 text-[14px]">
            <div>
              <div className="text-xs uppercase font-mono text-muted mb-3 font-medium">Navigasi</div>
              <ul className="space-y-2">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#474B54] hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase font-mono text-muted mb-3 font-medium">Kontak</div>
              <ul className="space-y-2">
                <li>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#474B54] hover:text-primary transition-colors"
                  >
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                {siteConfig.email && (
                  <li>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="inline-flex items-center gap-1 text-[#474B54] hover:text-primary transition-colors"
                    >
                      <span>Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>{siteConfig.footer.copyright}</div>
          <div className="font-mono">Fokus Solusi Nyata • Berbasis di Indonesia</div>
        </div>
      </div>
    </footer>
  );
}
