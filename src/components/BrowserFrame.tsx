import React from "react";

interface BrowserFrameProps {
  url?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function BrowserFrame({
  url = "app.larikstudio.com",
  title,
  children,
  className = "",
}: BrowserFrameProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Browser Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#F4F4F2] border-b border-border text-xs text-muted select-none">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DF] border border-[#CFCFCB]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DF] border border-[#CFCFCB]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E2E2DF] border border-[#CFCFCB]" />
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 bg-surface border border-border/80 rounded text-[11px] font-mono text-[#555861] max-w-[260px] truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="truncate">{url}</span>
        </div>
        <div className="text-[11px] font-medium text-[#7D828D] hidden sm:block">
          {title || "Live Preview"}
        </div>
      </div>

      {/* Frame Content */}
      <div className="relative bg-surface">{children}</div>
    </div>
  );
}
