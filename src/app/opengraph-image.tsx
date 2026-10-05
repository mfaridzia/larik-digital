import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export const alt = "Larik Digital — Website & Sistem Digital untuk Bisnis";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#141517",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "9999px",
              background: "#0F766E",
            }}
          />
          <span
            style={{
              fontSize: "32px",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            {siteConfig.name}
          </span>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: "54px",
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: "-0.03em",
              maxWidth: "960px",
              color: "#ffffff",
            }}
          >
            Website & Sistem Digital untuk Bisnis
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#9CA3AF",
              maxWidth: "840px",
              lineHeight: 1.45,
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #282A2E",
            paddingTop: "28px",
            fontSize: "20px",
            color: "#6B7280",
          }}
        >
          <span>larikdigital.com</span>
          <span>Konsultasi Langsung via WhatsApp</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
