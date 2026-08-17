(function () {
  const products = [
    {
      slug: "jurnalku",
      name: "JurnalKu",
      category: "Guru",
      subtitle: "Administrasi mengajar harian",
      description: "Administrasi mengajar harian dalam satu aplikasi: jadwal, jurnal, presensi, tugas, penilaian, rekap, dan ekspor dokumen.",
      summary: "JurnalKu adalah aplikasi web dan PWA yang membantu guru mengelola administrasi mengajar harian secara mandiri. Antarmukanya dirancang mobile-first agar nyaman digunakan dari HP saat mengajar, sekaligus tetap efisien di tablet dan desktop.",
      color: "#3D7BFF", accent: "#8CB6FF", icon: "document",
      platforms: ["Web", "PWA", "Android", "Mobile-first"],
      featureGroups: [
        { title: "Akun dan data pembelajaran", items: ["Pendaftaran akun, login, logout, serta pengelolaan profil guru.", "Unggah foto profil dengan pratinjau, crop persegi, dan optimasi WebP.", "Pengelolaan data kelas, siswa, dan mata pelajaran.", "Impor data siswa secara massal menggunakan CSV beserta template siap pakai."] },
        { title: "Aktivitas mengajar", items: ["Jadwal mengajar mingguan sebagai dasar agenda harian guru.", "Pencatatan jurnal berdasarkan jadwal atau melalui input manual.", "Jurnal Cepat untuk menyusun draft dari materi, kegiatan, kondisi kelas, tugas, dan kendala.", "Penyusunan tujuan pembelajaran otomatis dengan format konsisten yang diawali Peserta didik dapat....", "Presensi siswa dengan tampilan yang nyaman digunakan di HP maupun desktop."] },
        { title: "Tugas dan penilaian", items: ["Pengelolaan tugas kelas beserta status pengerjaan setiap siswa.", "Nilai tugas terhubung otomatis dengan menu Penilaian.", "Input nilai massal berdasarkan komponen seperti Ulangan Harian, Praktik, PTS, atau PAS.", "Draft penilaian lokal untuk mendukung proses koreksi dan pengisian nilai secara bertahap."] },
        { title: "Offline, sinkronisasi, dan pengingat", items: ["Penyimpanan otomatis draft jurnal dan penilaian di perangkat.", "Antrean sinkronisasi jurnal dan penilaian ketika perangkat offline atau koneksi gagal.", "Push notification untuk mengingatkan jurnal yang belum diisi setelah jadwal selesai."] },
        { title: "Rekap dan ekspor", items: ["Rekap jurnal, presensi, tugas, dan nilai dalam satu alur kerja.", "Ekspor PDF untuk jurnal, rekap jurnal, dan rekap presensi.", "Ekspor Excel nilai per mata pelajaran dalam bentuk matriks komponen dan nilai rata-rata.", "Ekspor Excel presensi dalam bentuk matriks per pertemuan."] },
        { title: "Dashboard dan administrasi platform", items: ["Dashboard agenda hari ini, ringkasan aktivitas, dan akses cepat.", "Pemisahan data berdasarkan akun agar informasi setiap guru tidak tercampur.", "Dashboard admin untuk melihat statistik dan ringkasan aktivitas platform.", "Pengelolaan akun guru, termasuk aktivasi dan penonaktifan akun.", "Log aktivitas untuk membantu admin memantau penggunaan aplikasi."] }
      ],
      links: [{ label: "Buka di Google Play", url: "https://play.google.com/store/apps/details?id=id.web.jurnalkuaja.twa" }],
      screenshots: [
        { src: "assets/screenshots/jurnalku/dashboard.webp", full: "assets/screenshots/jurnalku/dashboard.jpg", title: "Dashboard harian", tag: "Guru", alt: "Dashboard harian aplikasi JurnalKu", caption: "Agenda mengajar, ringkasan jurnal, tugas, dan akses cepat dalam satu layar." },
        { src: "assets/screenshots/jurnalku/jadwal-mengajar.webp", full: "assets/screenshots/jurnalku/jadwal-mengajar.jpg", title: "Jadwal mengajar", tag: "Guru", alt: "Jadwal mengajar mingguan di JurnalKu", caption: "Jadwal mingguan yang terhubung langsung dengan pencatatan jurnal." },
        { src: "assets/screenshots/jurnalku/isi-jurnal.webp", full: "assets/screenshots/jurnalku/isi-jurnal.jpg", title: "Jurnal Cepat", tag: "Guru", alt: "Form Jurnal Cepat di JurnalKu", caption: "Susun jurnal dari materi, kegiatan, kondisi kelas, tugas, dan kendala." },
        { src: "assets/screenshots/jurnalku/kelas-rombel.webp", full: "assets/screenshots/jurnalku/kelas-rombel.jpg", title: "Kelas dan rombel", tag: "Data", alt: "Daftar kelas dan rombongan belajar di JurnalKu", caption: "Kelola kelas dan jumlah siswa untuk setiap rombongan belajar." },
        { src: "assets/screenshots/jurnalku/penilaian.webp", full: "assets/screenshots/jurnalku/penilaian.jpg", title: "Penilaian siswa", tag: "Guru", alt: "Input penilaian siswa di JurnalKu", caption: "Input nilai massal berdasarkan mata pelajaran dan komponen penilaian." },
        { src: "assets/screenshots/jurnalku/rekap-pembelajaran.webp", full: "assets/screenshots/jurnalku/rekap-pembelajaran.jpg", title: "Rekap pembelajaran", tag: "Laporan", alt: "Rekap pembelajaran di JurnalKu", caption: "Tinjau kehadiran dan ekspor jurnal, presensi, serta nilai." }
      ]
    },
    {
      slug: "jurnal-pkl",
      name: "Jurnal PKL",
      category: "PKL / Sekolah",
      subtitle: "Pengelolaan kegiatan PKL sekolah",
      description: "Mengelola penempatan, kegiatan guru, presensi GPS, jurnal siswa, monitoring, penilaian rapor, dan layanan WhatsApp.",
      summary: "Jurnal PKL membantu sekolah mengelola seluruh rangkaian kegiatan PKL, mulai dari penempatan siswa dan penugasan guru hingga monitoring, penilaian rapor, pelaporan, dan penyampaian informasi kepada orang tua melalui Naya WhatsApp. Aplikasi ini digunakan oleh SMKN 1 Telagasari dan SMKN 2 Marabahan.",
      color: "#14C983", accent: "#8DFFD0", icon: "school",
      platforms: ["Web", "Android", "GPS", "WhatsApp"],
      featureGroups: [
        { title: "Pengguna dan penempatan", items: ["Akses sesuai peran untuk siswa, guru pembimbing, kaprodi, dan admin.", "Pengaturan tempat dan titik lokasi PKL dengan verifikasi admin.", "Pembuatan dan pengelolaan surat tugas guru pembimbing PKL."] },
        { title: "Kegiatan siswa dan guru", items: ["Pencatatan kegiatan guru saat pengantaran, monitoring, dan penjemputan siswa.", "Presensi masuk dan pulang siswa berbasis GPS dengan pembatasan geofencing.", "Jurnal harian siswa yang dilengkapi foto dokumentasi.", "Validasi jurnal melalui akun guru atau tautan cepat WhatsApp."] },
        { title: "Penilaian, monitoring, dan laporan", items: ["Penilaian hasil PKL dan penyusunan nilai rapor PKL siswa.", "Monitoring presensi dan jurnal siswa bimbingan oleh guru dan pengelola sekolah.", "Rekap kegiatan dan pembuatan laporan dalam format PDF.", "Pengaturan hari libur serta pemeriksaan otomatis siswa yang belum melakukan presensi."] },
        { title: "WhatsApp dan integrasi", items: ["Antrean notifikasi WhatsApp untuk mengirimkan ringkasan kepada guru.", "Naya WhatsApp sebagai asisten informasi PKL bagi orang tua.", "Dukungan provider WhatsApp Fonnte atau WAHA sesuai konfigurasi aplikasi."] }
      ],
      links: [{ label: "SMKN 1 Telagasari", url: "https://play.google.com/store/apps/details?id=id.sch.smkn1telagasari.jurnal_pkl.twa" }, { label: "SMKN 2 Marabahan", url: "https://play.google.com/store/apps/details?id=id.sch.smkn2marabahan.jurnal_pkl" }],
      screenshots: [
        { src: "assets/screenshots/jurnal-pkl/login.webp", full: "assets/screenshots/jurnal-pkl/login.jpg", title: "Login sekolah", tag: "Akses", alt: "Halaman login Jurnal PKL", caption: "Akses aman menggunakan akun sekolah sesuai peran pengguna." },
        { src: "assets/screenshots/jurnal-pkl/dashboard-siswa.webp", full: "assets/screenshots/jurnal-pkl/dashboard-siswa.jpg", title: "Dashboard siswa", tag: "Siswa", alt: "Dashboard siswa Jurnal PKL", caption: "Ringkasan presensi, jurnal, status PKL, dan agenda siswa." },
        { src: "assets/screenshots/jurnal-pkl/presensi-gps.webp", full: "assets/screenshots/jurnal-pkl/presensi-gps.jpg", title: "Presensi berbasis GPS", tag: "Siswa", alt: "Presensi GPS dan geofencing Jurnal PKL", caption: "Presensi masuk dan pulang dengan verifikasi lokasi serta geofencing." },
        { src: "assets/screenshots/jurnal-pkl/jurnal-siswa.webp", full: "assets/screenshots/jurnal-pkl/jurnal-siswa.jpg", title: "Jurnal harian", tag: "Siswa", alt: "Jurnal harian siswa pada Jurnal PKL", caption: "Catatan kegiatan harian, dokumentasi, dan status validasi pembimbing." },
        { src: "assets/screenshots/jurnal-pkl/dashboard-pembimbing.webp", full: "assets/screenshots/jurnal-pkl/dashboard-pembimbing.jpg", title: "Dashboard pembimbing", tag: "Pembimbing", alt: "Dashboard guru pembimbing Jurnal PKL", caption: "Pantau siswa bimbingan, presensi, jurnal, dan progres kegiatan PKL." },
        { src: "assets/screenshots/jurnal-pkl/notifikasi-pembimbing.webp", full: "assets/screenshots/jurnal-pkl/notifikasi-pembimbing.jpg", title: "Notifikasi pembimbing", tag: "Pembimbing", alt: "Notifikasi guru pembimbing Jurnal PKL", caption: "Daftar jurnal dan aktivitas siswa yang membutuhkan perhatian atau validasi." },
        { src: "assets/screenshots/jurnal-pkl/kegiatan-pembimbing.webp", full: "assets/screenshots/jurnal-pkl/kegiatan-pembimbing.jpg", title: "Kegiatan guru", tag: "Pembimbing", alt: "Kegiatan guru pembimbing pada Jurnal PKL", caption: "Dokumentasi pengantaran, monitoring, penjemputan, dan surat tugas guru." },
        { src: "assets/screenshots/jurnal-pkl/monitoring-presensi.webp", full: "assets/screenshots/jurnal-pkl/monitoring-presensi.jpg", title: "Monitoring presensi", tag: "Pembimbing", alt: "Peta monitoring presensi siswa Jurnal PKL", caption: "Peta lokasi presensi membantu pembimbing memantau kehadiran siswa." },
        { src: "assets/screenshots/jurnal-pkl/penilaian-pkl.webp", full: "assets/screenshots/jurnal-pkl/penilaian-pkl.jpg", title: "Penilaian PKL", tag: "Pembimbing", alt: "Penilaian rapor PKL oleh guru pembimbing", caption: "Kelola nilai pembimbing dan industri sebagai dasar nilai rapor PKL." }
      ]
    },
    {
      slug: "rpp-studio",
      name: "RPP Studio",
      category: "Guru / Perencanaan Pembelajaran",
      subtitle: "Perencanaan Pembelajaran Mendalam",
      description: "Penyusunan Perencanaan Pembelajaran Mendalam secara bertahap dengan pratinjau, editor manual, dan ekspor dokumen.",
      summary: "RPP Studio membantu guru menyusun Perencanaan Pembelajaran Mendalam melalui formulir bertahap yang mudah diikuti. Guru dapat menyimpan draft, meninjau hasil dalam format A4, melakukan penyuntingan manual, lalu mengekspor dokumen ke PDF atau Word.",
      color: "#7047FF", accent: "#B69CFF", icon: "spark",
      platforms: ["Web", "PDF", "Word", "Draft otomatis"],
      featureGroups: [
        { title: "Penyusunan dokumen", items: ["Formulir RPP bertahap agar proses pengisian lebih terarah dan mudah dipahami.", "Validasi pada setiap bagian sebelum guru melanjutkan ke tahap berikutnya.", "Penyimpanan otomatis draft formulir di browser.", "Penggunaan istilah murid secara konsisten di dalam dokumen.", "Tujuan pembelajaran dari guru dipertahankan tanpa ditulis ulang."] },
        { title: "Generator dan penyuntingan", items: ["Generator RPP berbantuan AI dengan mode cadangan yang tetap dapat digunakan tanpa AI.", "Editor manual untuk menyesuaikan isi dokumen sebelum diekspor."] },
        { title: "Pratinjau dan ekspor", items: ["Pratinjau dokumen dalam format halaman A4.", "Tata letak cetak mengikuti contoh Perencanaan Pembelajaran Mendalam.", "Ekspor dokumen ke format PDF dan Word."] }
      ],
      links: [{ label: "Buka RPP Studio", url: "https://rpm.smkn1telagasari.sch.id/" }],
      screenshots: []
    },
    {
      slug: "jurnal-guru-wali",
      name: "Jurnal Guru Wali",
      category: "Guru Wali / Sekolah",
      subtitle: "Pendampingan dan pemantauan siswa",
      description: "Pencatatan jurnal, perencanaan pendampingan, pemantauan siswa, monitoring sekolah, dan penyusunan laporan resmi.",
      summary: "Jurnal Guru Wali adalah aplikasi web berbasis CodeIgniter 4 yang membantu guru wali mencatat perkembangan siswa, merencanakan pendampingan, melakukan tindak lanjut, dan menyusun laporan resmi. Admin atau wakasek dapat memantau pelaksanaan pendampingan tanpa mencampurkan data antar akun guru.",
      color: "#FF4F9A", accent: "#FFB2D1", icon: "guardian",
      platforms: ["Web", "PWA", "PDF", "Excel"],
      featureGroups: [
        { title: "Akun dan dashboard", items: ["Login khusus untuk guru wali dan admin.", "Dashboard guru untuk melihat siswa yang perlu dibuatkan jurnal, tindak lanjut, dan catatan terbaru.", "Pemisahan data siswa, perencanaan, jurnal, pengaturan, dan laporan berdasarkan akun guru."] },
        { title: "Data dan perkembangan siswa", items: ["Pengelolaan data siswa lengkap, termasuk unggah foto dan avatar huruf awal ketika foto belum tersedia.", "Halaman detail siswa dengan ringkasan status dari jurnal terakhir dan timeline perkembangan.", "Input jurnal per kelas dengan isian yang tetap terpisah untuk setiap siswa.", "Tambah, ubah, dan hapus jurnal langsung dari halaman detail siswa.", "Penyimpanan otomatis draft jurnal di perangkat agar isian tidak hilang saat koneksi terputus."] },
        { title: "Pendampingan dan laporan", items: ["Penyusunan rencana pendampingan secara manual atau menggunakan template.", "Rekap berdasarkan rentang tanggal untuk laporan bulanan maupun semester.", "Ekspor PDF formal yang memuat cover, perencanaan, identitas, dan jurnal setiap siswa.", "Ekspor Excel formal dengan cover, perencanaan, identitas, sheet per siswa, dan pelaporan semester."] },
        { title: "Monitoring dan akses perangkat", items: ["Halaman admin atau wakasek untuk memantau guru, siswa prioritas, eskalasi, dan laporan lintas guru.", "PWA yang dapat dipasang di perangkat, dilengkapi service worker, ikon aplikasi, dan halaman offline."] }
      ],
      links: [{ label: "Buka Jurnal Guru Wali", url: "https://guruwali.jurnalkuaja.web.id/" }],
      screenshots: [
        { src: "assets/screenshots/jurnal-guru-wali/dashboard.webp", full: "assets/screenshots/jurnal-guru-wali/dashboard.jpg", title: "Dashboard pemantauan", tag: "Guru Wali", alt: "Dashboard pemantauan siswa pada Jurnal Guru Wali", caption: "Pantau kondisi kelas, siswa prioritas, tindak lanjut, dan jurnal terbaru dalam satu layar." },
        { src: "assets/screenshots/jurnal-guru-wali/input-jurnal-kelas.webp", full: "assets/screenshots/jurnal-guru-wali/input-jurnal-kelas.jpg", title: "Input jurnal per kelas", tag: "Jurnal", alt: "Input jurnal per kelas pada Jurnal Guru Wali", caption: "Isi catatan beberapa siswa secara efisien dengan isian yang tetap tersimpan terpisah." },
        { src: "assets/screenshots/jurnal-guru-wali/pendampingan-individual.webp", full: "assets/screenshots/jurnal-guru-wali/pendampingan-individual.jpg", title: "Pendampingan individual", tag: "Siswa", alt: "Form pendampingan individual siswa pada Jurnal Guru Wali", caption: "Catat aspek akademik, karakter, sosial emosional, kedisiplinan, kompetensi, dan tindak lanjut." },
        { src: "assets/screenshots/jurnal-guru-wali/laporan-pdf.webp", full: "assets/screenshots/jurnal-guru-wali/laporan-pdf.jpg", title: "Laporan resmi", tag: "Laporan", alt: "Pratinjau laporan PDF Jurnal Guru Wali", caption: "Hasilkan rekap per siswa, pelaporan semester, dan dokumentasi pendampingan dalam format formal." }
      ]
    }
  ];

  const icons = {
    document: '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#fff" stroke="#111" stroke-width="4" stroke-linejoin="round" d="M13 6h16l8 8v28H13z"/><path fill="#FFD928" stroke="#111" stroke-width="4" stroke-linejoin="round" d="M29 6v10h9"/><path stroke="#111" stroke-width="4" stroke-linecap="round" d="M19 24h12M19 32h8"/></svg>',
    school: '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFD928" stroke="#111" stroke-width="4" stroke-linejoin="round" d="M6 21 24 10l18 11-18 11z"/><path fill="#fff" stroke="#111" stroke-width="4" stroke-linejoin="round" d="M13 25v12c6 4 16 4 22 0V25"/><path stroke="#111" stroke-width="4" stroke-linecap="round" d="M42 21v13"/></svg>',
    spark: '<svg viewBox="0 0 48 48" aria-hidden="true"><path fill="#FFD928" stroke="#111" stroke-width="4" stroke-linejoin="round" d="m25 5 4 13 13 4-13 4-4 17-5-17-14-4 14-4z"/><path stroke="#111" stroke-width="4" stroke-linecap="round" d="M38 8v8M34 12h8"/></svg>',
    guardian: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="18" cy="17" r="8" fill="#FFD928" stroke="#111" stroke-width="4"/><circle cx="34" cy="20" r="6" fill="#FFB2D1" stroke="#111" stroke-width="4"/><path d="M5 41c1-9 6-14 13-14s12 5 13 14M27 31c7-2 13 2 15 10" fill="#fff" stroke="#111" stroke-width="4" stroke-linecap="round"/></svg>'
  };

  window.HimungCatalog = { products, icons };
})();
