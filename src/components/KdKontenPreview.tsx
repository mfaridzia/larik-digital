import React from "react";
import { Sparkles, Image as ImageIcon, Video, Copy, Download, Check, Layers } from "lucide-react";

export function KdKontenPreview() {
  return (
    <div className="w-full text-left font-sans select-none bg-surface">
      {/* Studio Header */}
      <div className="border-b border-border/70 px-4 sm:px-6 py-3 flex items-center justify-between bg-surface">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0F766E] text-white flex items-center justify-center font-bold text-xs">
            KK
          </div>
          <div>
            <div className="text-xs font-semibold text-primary">KD Konten Studio</div>
            <div className="text-[11px] text-muted">Promo Generator & Social Assets</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-surface-subtle p-0.5 rounded border border-border text-[11px]">
            <span className="px-2 py-0.5 bg-surface text-primary rounded shadow-xs font-medium">
              Feed 1:1
            </span>
            <span className="px-2 py-0.5 text-muted hover:text-primary">Story 9:16</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1 px-2.5 py-1 bg-primary text-white rounded text-[11px] font-medium"
          >
            <Download className="w-3 h-3" />
            <span className="hidden sm:inline">Export</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Split */}
      <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-border/60">
        {/* Left: Configuration Parameters */}
        <div className="md:col-span-5 p-4 sm:p-5 space-y-4 bg-[#FAFAF9]/60">
          <div>
            <label className="block text-[11px] font-medium text-muted uppercase tracking-wider mb-1.5">
              Target Campaign
            </label>
            <div className="px-3 py-2 bg-surface border border-border rounded text-xs font-medium text-primary">
              Promo Gajian & Akhir Pekan (Diskon 20%)
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-muted uppercase tracking-wider mb-1.5">
              Headline Otomatis
            </label>
            <div className="p-2.5 bg-surface border border-border rounded text-xs text-[#2A2B30] font-medium leading-relaxed">
              &ldquo;Ngopi Santai Tanpa Beban. Nikmati potongan 20% untuk semua menu botolan akhir
              pekan ini.&rdquo;
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-medium text-muted uppercase tracking-wider mb-1.5">
              Caption Siap Posting
            </label>
            <div className="p-2.5 bg-surface border border-border rounded text-[11px] text-muted leading-relaxed font-mono">
              Butuh asupan kafein buat nemenin deadline? Cek promo akhir pekan kita ya! Klik link di bio
              buat langsung order via WhatsApp...
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] text-muted pt-2 border-t border-border/50">
            <span>Ukuran: 1080 x 1080px (HD)</span>
            <span className="text-emerald-700 font-medium flex items-center gap-1">
              <Check className="w-3 h-3" /> Siap Download
            </span>
          </div>
        </div>

        {/* Right: Realistic Visual Canvas Render */}
        <div className="md:col-span-7 p-5 sm:p-6 bg-[#F3F3F0] flex items-center justify-center">
          <div className="w-full max-w-[280px] sm:max-w-[320px] aspect-square bg-[#1E2024] rounded-lg shadow-md border border-black/10 p-5 flex flex-col justify-between text-white relative overflow-hidden">
            {/* Minimalist poster layout */}
            <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
              <span className="text-[10px] tracking-widest uppercase font-semibold text-white/70">
                RUANG SEDUH COFFEE
              </span>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-400 text-black font-bold uppercase tracking-wider">
                PROMO
              </span>
            </div>

            <div className="my-auto py-3">
              <div className="text-[20px] sm:text-[22px] font-semibold tracking-tight leading-tight text-white mb-2">
                Diskon 20% Akhir Pekan
              </div>
              <p className="text-[11px] text-white/75 leading-relaxed">
                Stok cold brew & kopi susu favorit langsung dikirim ke pintu rumah Anda.
              </p>
            </div>

            <div className="pt-2.5 border-t border-white/15 flex items-center justify-between text-[10px]">
              <span className="text-white/60">Pesan via WA: 0812-xxxx-xxxx</span>
              <span className="font-semibold text-amber-300">kdjualan.id/ruangseduh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
