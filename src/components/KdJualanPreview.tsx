import React from "react";
import { ShoppingBag, TrendingUp, Package, MessageCircle, Check, Search } from "lucide-react";

export function KdJualanPreview({ mode = "full" }: { mode?: "hero" | "full" }) {
  return (
    <div className="w-full text-left font-sans select-none bg-surface">
      {/* Top Store Header */}
      <div className="border-b border-border/70 px-4 sm:px-6 py-3.5 flex items-center justify-between bg-surface">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-xs">
            KJ
          </div>
          <div>
            <div className="text-xs font-semibold text-primary">Ruang Seduh & Roastery</div>
            <div className="text-[11px] text-muted">Katalog & Order WhatsApp Aktif</div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-surface-subtle border border-border rounded text-[11px] text-muted">
            <Search className="w-3 h-3" />
            <span>Cari produk...</span>
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 bg-[#F0FDF4] border border-[#BBF7D0] text-[#166534] rounded text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>Online</span>
          </div>
        </div>
      </div>

      {/* Mini KPI / Ops Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-border/60 bg-[#FAFAF9] text-xs divide-x divide-border/60">
        <div className="p-3">
          <span className="text-[11px] text-muted block">Pesanan Hari Ini</span>
          <span className="font-semibold text-primary text-sm">18 Pesanan</span>
        </div>
        <div className="p-3">
          <span className="text-[11px] text-muted block">Total Transaksi</span>
          <span className="font-semibold text-primary text-sm">Rp2.420.000</span>
        </div>
        <div className="p-3">
          <span className="text-[11px] text-muted block">Produk Terjual</span>
          <span className="font-semibold text-primary text-sm">34 Item</span>
        </div>
        <div className="p-3">
          <span className="text-[11px] text-muted block">Integrasi Order</span>
          <span className="font-semibold text-accent flex items-center gap-1 text-xs">
            <MessageCircle className="w-3 h-3" /> WhatsApp Auto
          </span>
        </div>
      </div>

      {/* Product Catalog Grid */}
      <div className="p-4 sm:p-6 bg-surface">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              Katalog Siap Pesan
            </span>
            <span className="text-[11px] px-2 py-0.5 bg-secondary text-primary font-medium rounded">
              3 Kategori
            </span>
          </div>
          <span className="text-[11px] text-muted">Diperbarui 10 menit lalu</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Card 1 */}
          <div className="border border-border rounded-lg p-3.5 bg-surface hover:border-primary/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-primary leading-snug">
                  Kopi Susu Aren 1 Liter
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 shrink-0 font-medium">
                  Favorit
                </span>
              </div>
              <p className="text-[11px] text-muted mb-3 line-clamp-2">
                Espresso blend 100% arabika dengan gula aren murni dan susu segar.
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between pt-2 border-t border-border/50 mb-2">
                <span className="text-xs font-bold text-primary">Rp75.000</span>
                <span className="text-[10px] text-muted">Sisa 14 btl</span>
              </div>
              <button
                type="button"
                className="w-full py-1.5 px-2 bg-primary text-white rounded text-[11px] font-medium flex items-center justify-center gap-1.5 hover:bg-primary-hover transition-colors"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Pesan via WA</span>
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="border border-border rounded-lg p-3.5 bg-surface hover:border-primary/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-primary leading-snug">
                  Flores Bajawa Beans 200g
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0 font-medium">
                  Stok Siap
                </span>
              </div>
              <p className="text-[11px] text-muted mb-3 line-clamp-2">
                Medium roast, notes: milk chocolate, orange zest, caramel.
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between pt-2 border-t border-border/50 mb-2">
                <span className="text-xs font-bold text-primary">Rp85.000</span>
                <span className="text-[10px] text-muted">Sisa 9 pack</span>
              </div>
              <button
                type="button"
                className="w-full py-1.5 px-2 bg-secondary text-primary rounded text-[11px] font-medium flex items-center justify-center gap-1.5 hover:bg-[#E5E5E0] transition-colors"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Pesan via WA</span>
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="border border-border rounded-lg p-3.5 bg-surface hover:border-primary/40 transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-semibold text-primary leading-snug">
                  Matcha Uji Artisan 500ml
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 shrink-0 font-medium">
                  Baru
                </span>
              </div>
              <p className="text-[11px] text-muted mb-3 line-clamp-2">
                Matcha murni dari Kyoto dengan fresh milk pasteurisasi.
              </p>
            </div>
            <div>
              <div className="flex items-baseline justify-between pt-2 border-t border-border/50 mb-2">
                <span className="text-xs font-bold text-primary">Rp60.000</span>
                <span className="text-[10px] text-muted">Sisa 6 btl</span>
              </div>
              <button
                type="button"
                className="w-full py-1.5 px-2 bg-secondary text-primary rounded text-[11px] font-medium flex items-center justify-center gap-1.5 hover:bg-[#E5E5E0] transition-colors"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Pesan via WA</span>
              </button>
            </div>
          </div>
        </div>

        {/* Live Order simulation snippet */}
        {mode === "full" && (
          <div className="mt-4 pt-3.5 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-muted">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>
                Order terbaru: <strong>#KD-1049</strong> (Kopi Susu Aren 1L x 2) dari Dian P.
              </span>
            </div>
            <span className="font-mono text-primary">Format WA otomatis terisi rapi</span>
          </div>
        )}
      </div>
    </div>
  );
}
