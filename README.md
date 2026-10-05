# Larik Digital — Digital Service & Web Agency Landing Page

Landing page resmi **Larik Digital** yang dibangun mengikuti seluruh spesifikasi dalam [`PRD.md`](file:///Users/muhfaridzia/Documents/personal/my-service/PRD.md).

## 🚀 Fitur Utama & Struktur Halaman

1. **Header Sticky & Mobile Drawer**: Navigasi responsif dengan tombol langsung ke WhatsApp.
2. **Hero Section (Editorial & Left-Aligned)**: Headline kuat, copywriting berorientasi hasil bisnis, dan browser mockup nyata dari KD Jualan sebagai *proof of work*.
3. **Trust & Philosophy**: Pendekatan studio digital yang fokus pada kebutuhan esensial bisnis tanpa *over-engineering*.
4. **4 Layanan Inti**:
   - 01 Website Bisnis
   - 02 Toko Online & Katalog
   - 03 Sistem Penjualan (*Powered by KD Jualan*)
   - 04 Konten Digital (*Dukungan KD Konten*)
5. **Selected Work**: Showroom antarmuka realistis untuk KD Jualan & KD Konten.
6. **Custom Development**: Solusi aplikasi web & sistem operasional khusus (*higher-ticket positioning*).
7. **Cara Kerja (4 Langkah)**: Ceritakan → Scope → Pengerjaan → Launch.
8. **Harga Awal Transparan**: Mulai Rp500rb, Rp1jt, Rp1,5jt, dan Custom by Scope, plus callout paket Konten Digital.
9. **Why Work With Us**: 4 prinsip kepraktisan dan kesiapan jangka panjang.
10. **FAQ**: 6 pertanyaan krusial dari calon klien UMKM.
11. **Final CTA & Footer**: Call-to-action WhatsApp dengan pesan kontekstual otomatis.

## 🛠️ Konfigurasi & Nomor WhatsApp

Semua data teks, kontak, dan nomor WhatsApp tersentralisasi di satu file:
👉 [`src/config/site.ts`](file:///Users/muhfaridzia/Documents/personal/my-service/src/config/site.ts)

Ubah nilai berikut dengan nomor WhatsApp Anda:
```ts
export const siteConfig = {
  whatsappNumber: "628xxxxxxxxxx", // Nomor WhatsApp aktif (format tanpa + atau 0)
  whatsappDisplayNumber: "+62 8xx-xxxx-xxxx",
  // ...
};
```

## 💻 Cara Menjalankan

### Mode Pengembangan (Dev)
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### Build Produksi
```bash
npm run build
npm start
```
