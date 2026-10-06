export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  supporting: string;
  deliverables: string[];
}

export interface WorkItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  type: "commerce" | "content" | "storefront";
  status: string;
  imageSrc: string;
  previewUrl: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  scopeTag: string;
  description: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const siteConfig = {
  name: "Larik Digital",
  title: "Larik Digital — Website & Sistem Digital untuk Bisnis",
  description:
    "Pembuatan website, katalog online, sistem penjualan, dan kebutuhan digital untuk membantu bisnis bekerja lebih rapi dan mudah dijangkau pelanggan.",
  whatsappNumber: "6285338534407",
  whatsappDisplayNumber: "+62 853-3853-4407",
  email: "muhfaridzia@gmail.com",
  instagram: "",
  defaultWhatsAppMessage:
    "Halo Larik Digital, saya melihat website Anda dan ingin konsultasi mengenai kebutuhan digital untuk bisnis saya.",

  navLinks: [
    { label: "Layanan", href: "#layanan" },
    { label: "Portofolio", href: "#portofolio" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Paket", href: "#paket" },
    { label: "FAQ", href: "#faq" },
  ],

  hero: {
    eyebrow: "Web & Digital Service",
    headline:
      "Bantu bisnis berkembang lewat solusi digital yang praktis dan terarah.",
    supporting:
      "Kami membantu bisnis membangun website, katalog online, sistem penjualan, dan konten digital yang sederhana, rapi, dan sesuai kebutuhan.",
    primaryCta: "Ceritakan kebutuhan Anda",
    secondaryCta: "Lihat portofolio",
    footnote: "Konsultasi awal tanpa biaya.",
  },

  trust: {
    heading: "Tidak semua bisnis membutuhkan sistem yang rumit.",
    body1:
      "Kami mulai dari masalah yang ingin diselesaikan, lalu membuat solusi yang paling sederhana untuk menjalankannya dengan baik.",
    body2:
      "Website sederhana kalau memang itu yang dibutuhkan. Sistem khusus ketika proses bisnis memang membutuhkannya.",
  },

  services: [
    {
      id: "website-bisnis",
      number: "01",
      title: "Website Bisnis",
      tagline: "Identitas online profesional & mudah dijangkau",
      description:
        "Website yang rapi, cepat, dan mudah digunakan untuk memperkenalkan bisnis, layanan, lokasi, serta informasi penting kepada pelanggan.",
      supporting:
        "Cocok untuk bisnis yang selama ini hanya mengandalkan Instagram, marketplace, atau WhatsApp.",
      deliverables: [
        "Company profile & landing page",
        "Informasi bisnis, galeri, & Google Maps",
        "Integrasi tombol WhatsApp langsung",
        "Tampilan rapi di smartphone & desktop",
        "Setup custom domain & basic SEO",
      ],
    },
    {
      id: "toko-katalog",
      number: "02",
      title: "Toko Online & Katalog",
      tagline: "Pajang produk & pesan langsung tanpa ribet",
      description:
        "Tampilkan produk dengan lebih rapi dan biarkan pelanggan melihat katalog, memilih produk, lalu melakukan pemesanan tanpa proses yang rumit.",
      supporting:
        "Bisa digunakan sebagai katalog sederhana, digital menu kuliner/cafe, atau toko online terhubung WhatsApp.",
      deliverables: [
        "Katalog produk dengan kategori teratur",
        "Halaman detail produk & foto jelas",
        "Pemesanan langsung via WhatsApp",
        "Digital menu untuk cafe / restoran",
        "Area promo & banner penawaran khusus",
      ],
    },
    {
      id: "sistem-penjualan",
      number: "03",
      title: "Sistem Penjualan",
      tagline: "Order, stok, dan transaksi dalam satu kendali",
      description:
        "Kelola produk, stok, order, pelanggan, dan transaksi dalam satu sistem supaya operasional bisnis lebih mudah dipantau.",
      supporting:
        "Cocok untuk bisnis yang mulai kewalahan menggunakan chat, spreadsheet, dan pencatatan manual.",
      deliverables: [
        "Dashboard ringkasan penjualan & omzet",
        "Pencatatan order & status pengiriman",
        "Manajemen stok & inventaris produk",
        "Database pelanggan & histori order",
        "Hak akses staf & laporan harian",
      ],
    },
    {
      id: "konten-digital",
      number: "04",
      title: "Konten Digital",
      tagline: "Materi promosi rutin tanpa repot buat sendiri",
      description:
        "Konten promosi untuk membantu bisnis tetap aktif di media sosial tanpa harus membuat semuanya sendiri.",
      supporting:
        "Mulai dari visual produk, materi promo, sampai video pendek untuk Instagram, TikTok, dan WhatsApp.",
      deliverables: [
        "Desain visual produk siap posting",
        "Materi promosi media sosial & banner",
        "Video pendek vertikal (Reels/TikTok)",
        "Copywriting & caption promosi terarah",
        "Aset kampanye promosi berkala",
      ],
    },
  ] as ServiceItem[],

  selectedWork: [
    {
      id: "kd-jualan",
      number: "01",
      title: "KD Jualan",
      category: "Sistem Penjualan & Operasional",
      description:
        "Sistem sederhana dan dashboard terpusat untuk membantu bisnis mengelola toko online, pesanan multi-channel, stok, pelanggan, piutang, dan ringkasan transaksi.",
      highlights: [
        "Action center follow-up customer & peringatan stok menipis",
        "Pencatatan order multi-channel (WhatsApp, Web, Walk-in, Sosmed)",
        "Ringkasan penjualan harian, laba kotor, & estimasi laba bersih",
        "Daftar transaksi real-time dengan status proses & pelunasan",
      ],
      type: "commerce",
      status: "Live Operasional",
      imageSrc: "/images/portfolio/kd-jualan.png",
      previewUrl: "sales.kd-ntb-group.com",
    },
    {
      id: "kd-ntb-group",
      number: "02",
      title: "KD NTB Group",
      category: "Toko Online & Katalog Produk",
      description:
        "Website toko online dan pusat pemesanan kurma & oleh-oleh haji khas NTB, dilengkapi katalog produk interaktif, opsi gratis ongkir & COD, serta pemesanan langsung via WhatsApp.",
      highlights: [
        "Storefront elegan dan cepat dibuka langsung dari smartphone",
        "Katalog produk terpopuler dengan harga & status stok jelas",
        "Pemesanan langsung terhubung ke WhatsApp tanpa akun rumit",
        "Navigasi katalog, edukasi, dan halaman profil bisnis lengkap",
      ],
      type: "storefront",
      status: "Live Operasional",
      imageSrc: "/images/portfolio/kd-ntb-group-main.png",
      previewUrl: "kd-ntb-group.com",
    },
  ] as WorkItem[],

  customDev: {
    eyebrow: "Layanan Spesifik",
    heading: "Punya kebutuhan yang lebih spesifik?",
    body: "Tidak semua bisnis mempunyai kebutuhan yang sama. Jika workflow bisnis Anda membutuhkan sistem khusus, kami juga dapat membangun aplikasi web sesuai proses yang sudah berjalan.",
    examples: [
      {
        title: "Dashboard Internal",
        desc: "Panel monitoring aktivitas operasional, performa tim, atau statistik bisnis harian.",
      },
      {
        title: "Sistem Booking & Jadwal",
        desc: "Pemesanan slot layanan untuk klinik, rental, villa/homestay, atau barbershop.",
      },
      {
        title: "Inventory & Gudang Khusus",
        desc: "Pencatatan keluar-masuk barang dengan multi-gudang dan supplier tracking.",
      },
      {
        title: "Portal Pelanggan & Membership",
        desc: "Area login pelanggan untuk cek status order, riwayat servis, atau poin loyalitas.",
      },
      {
        title: "Admin Portal & Hak Akses",
        desc: "Pembatasan wewenang staf kasir, admin gudang, supervisor, dan pemilik bisnis.",
      },
      {
        title: "Otomasi Workflow",
        desc: "Sinkronisasi notifikasi order otomatis, invoice PDF, hingga rekap laporan berkala.",
      },
    ],
    cta: "Diskusikan sistem Anda",
    whatsappMessage:
      "Halo Larik Digital, saya ingin mendiskusikan pembuatan sistem/aplikasi web khusus untuk proses operasional bisnis saya.",
  },

  process: {
    heading: "Cara kerja",
    description:
      "Proses transparan dan terarah dari awal percakapan hingga sistem berjalan.",
    steps: [
      {
        number: "01",
        title: "Ceritakan kebutuhan",
        description:
          "Ceritakan bisnis, masalah, atau ide yang ingin dibuat lewat percakapan santai di WhatsApp.",
      },
      {
        number: "02",
        title: "Scope & estimasi",
        description:
          "Kami menentukan fitur yang benar-benar dibutuhkan, estimasi biaya, dan waktu pengerjaan yang masuk akal.",
      },
      {
        number: "03",
        title: "Pengerjaan",
        description:
          "Project dikerjakan secara bertahap dan progress dapat Anda review langsung selama proses berjalan.",
      },
      {
        number: "04",
        title: "Launch & support",
        description:
          "Setelah selesai, website atau sistem dipublikasikan dan kami tetap membantu kebutuhan setelah launch.",
      },
    ],
  },

  pricing: {
    heading: "Pilihan paket solusi sesuai kebutuhan bisnis Anda",
    subheading:
      "Mulai dari profil online sederhana hingga sistem operasional terintegrasi. Kami bantu tentukan fitur yang paling relevan dengan alur kerja dan kesiapan usaha Anda.",
    footnote:
      "Estimasi biaya ditentukan secara transparan berdasarkan jumlah fitur, halaman, dan tingkat kompleksitas yang benar-benar Anda butuhkan. Konsultasi awal bebas biaya tanpa ikatan.",
    plans: [
      {
        id: "landing-page",
        title: "Website / Landing Page",
        scopeTag: "Profil Usaha & Identitas Online",
        description:
          "Cocok untuk bisnis yang membutuhkan halaman profil resmi, informasi layanan, dan kontak yang rapi agar mudah ditemukan calon pelanggan.",
        features: [
          "1 halaman responsif cepat diakses HP",
          "Informasi profil bisnis, layanan, & kontak",
          "Tombol direct chat ke WhatsApp",
          "Bantuan setup domain & hosting",
          "Tampilan profesional tanpa komplikasi",
        ],
        ctaText: "Tanya Estimasi Biaya",
        whatsappMessage:
          "Halo Larik Digital, saya ingin menanyakan estimasi biaya pembuatan Website / Landing Page untuk bisnis saya.",
        featured: false,
      },
      {
        id: "bisnis-katalog",
        title: "Website Bisnis & Katalog",
        scopeTag: "Katalog Produk & Menu Digital",
        description:
          "Cocok untuk bisnis dengan banyak produk atau menu yang ingin pelanggan bisa melihat katalog dan pesan langsung tanpa ribet.",
        features: [
          "Struktur katalog produk / digital menu rapi",
          "Halaman detail produk & foto jelas",
          "Integrasi form / direct order WhatsApp",
          "Galeri foto, lokasi Google Maps, kontak",
          "Setup basic SEO agar mudah dicari di Google",
        ],
        ctaText: "Tanya Estimasi Biaya",
        whatsappMessage:
          "Halo Larik Digital, saya ingin menanyakan estimasi biaya pembuatan Website Bisnis & Katalog untuk bisnis saya.",
        featured: true,
      },
      {
        id: "sistem-bisnis",
        title: "Sistem Bisnis & Operasional",
        scopeTag: "Order, Stok, & Transaksi",
        description:
          "Cocok untuk bisnis yang mulai kewalahan mengelola chat pesanan, rekap stok manual, dan pencatatan transaksi harian.",
        features: [
          "Dashboard ringkasan penjualan harian",
          "Pencatatan order & status transaksi",
          "Manajemen stok & inventaris barang",
          "Database pelanggan & histori pesanan",
          "Akses multi-staf & laporan transaksi",
        ],
        ctaText: "Tanya Estimasi Biaya",
        whatsappMessage:
          "Halo Larik Digital, saya ingin menanyakan estimasi biaya pembuatan Sistem Bisnis & Operasional untuk usaha saya.",
        featured: false,
      },
      {
        id: "custom-app",
        title: "Custom Application",
        scopeTag: "Workflow & Alur Kerja Khusus",
        description:
          "Cocok untuk bisnis yang membutuhkan sistem unik seperti booking jadwal, portal pelanggan, atau panel manajemen internal.",
        features: [
          "Arsitektur dirancang sesuai alur kerja Anda",
          "Dashboard internal, booking, atau portal mitra",
          "Pembagian hak akses & wewenang staf",
          "Otomasi proses kerja & notifikasi",
          "Pendampingan & penyesuaian lanjutan",
        ],
        ctaText: "Konsultasikan Scope",
        whatsappMessage:
          "Halo Larik Digital, saya ingin mendiskusikan kebutuhan sistem Custom Application untuk alur kerja bisnis saya.",
        featured: false,
      },
    ] as PricingPlan[],
    contentAddon: {
      badge: "Kebutuhan Promosi Rutin",
      title: "Butuh konten media sosial secara berkala?",
      description:
        "Tersedia juga dukungan konten promosi visual dan video pendek siap posting untuk membantu bisnis Anda tetap aktif di media sosial.",
      cta: "Tanya Paket Konten →",
      whatsappMessage:
        "Halo Larik Digital, saya ingin menanyakan paket Konten Digital untuk promosi media sosial bisnis saya.",
    },
  },

  whyUs: {
    heading: "Dibuat sesuai kebutuhan, bukan sekadar template.",
    description:
      "Kami fokus pada apa yang benar-benar membantu bisnis Anda berjalan lebih baik, tanpa komplikasi teknis yang tidak perlu.",
    points: [
      {
        number: "01",
        title: "Mulai dari masalah bisnis",
        description:
          "Kami tidak menambahkan fitur hanya karena terlihat menarik. Yang dibuat harus mempunyai fungsi yang jelas dan berdampak langsung pada operasional atau penjualan.",
      },
      {
        number: "02",
        title: "Mudah digunakan",
        description:
          "Website dan sistem harus dapat digunakan oleh pemilik bisnis, staf, maupun pelanggan tanpa perlu belajar hal teknis yang rumit.",
      },
      {
        number: "03",
        title: "Siap dikembangkan",
        description:
          "Project dibangun dengan struktur rapi yang tetap memungkinkan penambahan fitur ketika bisnis Anda semakin membesar.",
      },
      {
        number: "04",
        title: "Setelah launch tetap bisa dibantu",
        description:
          "Perubahan kecil, perawatan berkala, atau pengembangan tahap berikutnya tetap dapat didiskusikan dengan santai setelah project selesai.",
      },
    ],
  },

  faq: [
    {
      question: "Apakah harus sudah mempunyai domain?",
      answer:
        "Tidak. Kami dapat membantu proses pemilihan nama domain, pembelian, hingga konfigurasi teknis website dari awal sampai siap digunakan.",
    },
    {
      question: "Berapa lama pengerjaannya?",
      answer:
        "Project sederhana seperti landing page biasanya selesai dalam beberapa hari kerja, sementara sistem atau katalog dengan fitur khusus membutuhkan waktu sesuai scope yang disepakati bersama.",
    },
    {
      question: "Apakah saya bisa update isi website sendiri?",
      answer:
        "Bisa. Jika dibutuhkan, website dapat dilengkapi dashboard sederhana untuk mengelola daftar produk, foto menu, harga, atau konten promosi.",
    },
    {
      question: "Bisa dibuat sesuai desain bisnis saya?",
      answer:
        "Bisa. Tampilan visual akan disesuaikan dengan identitas, warna, dan karakter bisnis Anda, bukan sekadar mengganti teks pada template generik yang sama untuk semua orang.",
    },
    {
      question: "Setelah website selesai apakah ada biaya bulanan?",
      answer:
        "Tergantung kebutuhan domain tahunan, server hosting, dan jenis pemeliharaan yang digunakan. Seluruh rincian biaya akan diinformasikan secara transparan sebelum pengerjaan dimulai.",
    },
    {
      question: "Apakah menerima aplikasi custom?",
      answer:
        "Ya. Untuk sistem dengan kebutuhan khusus seperti dashboard operasional atau sistem booking, scope dan estimasi akan ditentukan setelah kami memahami alur kerja bisnis Anda.",
    },
  ] as FaqItem[],

  finalCta: {
    heading: "Ada yang ingin dibuat? Ceritakan dulu kebutuhannya.",
    body: "Tidak harus sudah mempunyai brief yang lengkap. Ceritakan bisnis dan masalah yang ingin diselesaikan, lalu kami bantu menentukan langkah berikutnya.",
    buttonText: "Chat via WhatsApp",
    footnote: "Konsultasi awal tanpa biaya.",
    whatsappMessage:
      "Halo Larik Digital, saya ingin menceritakan kebutuhan bisnis saya dan berkonsultasi mengenai solusi yang tepat.",
  },

  footer: {
    brand: "Larik Digital",
    tagline:
      "Website, sistem bisnis, dan kebutuhan digital untuk membantu bisnis bekerja lebih rapi.",
    copyright: `© ${new Date().getFullYear()} Larik Digital. All rights reserved.`,
    location: "Indonesia",
  },
};

export function buildWhatsAppUrl(customMessage?: string): string {
  const phone = siteConfig.whatsappNumber;
  const message = customMessage || siteConfig.defaultWhatsAppMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
