(function () {
  const products = [
    {
      slug: "jurnalku",
      name: "JurnalKu",
      category: "Guru",
      availability: "Tersedia di Google Play",
      subtitle: "Administrasi mengajar harian",
      description: "Catat jadwal, jurnal, presensi, tugas, dan nilai di satu tempat. Rekap dan ekspor dokumennya ikut beres.",
      summary: "JurnalKu membantu guru mengurus administrasi mengajar sendiri, tanpa menunggu aplikasi dari sekolah. Tampilannya dibuat untuk HP lebih dulu, jadi nyaman dipakai saat mengajar, dan tetap lega di tablet atau laptop.",
      color: "#3D7BFF", accent: "#8CB6FF", icon: "document",
      platforms: ["Web", "PWA", "Android", "Mobile-first"],
      featureGroups: [
        { title: "Akun dan data pembelajaran", items: ["Daftar akun, masuk, keluar, dan atur profil guru.", "Unggah foto profil dengan pratinjau, potong persegi, dan kompresi WebP.", "Atur data kelas, siswa, dan mata pelajaran.", "Impor siswa sekaligus lewat CSV, dengan template yang sudah disiapkan."] },
        { title: "Aktivitas mengajar", items: ["Jadwal mingguan jadi dasar agenda harian.", "Isi jurnal dari jadwal, atau catat manual kalau keadaannya mendadak.", "Jurnal Cepat menyusun draf dari materi, kegiatan, kondisi kelas, tugas, dan kendala.", "Tujuan pembelajaran dibuat otomatis dengan format tetap, diawali “Peserta didik dapat...”.", "Presensi siswa nyaman dipakai dari HP maupun desktop."] },
        { title: "Tugas dan penilaian", items: ["Kelola tugas kelas dan lihat siapa yang sudah mengerjakan.", "Nilai tugas langsung masuk ke menu Penilaian.", "Isi nilai sekaligus per komponen: Ulangan Harian, Praktik, PTS, atau PAS.", "Draf penilaian disimpan di perangkat, jadi mengoreksi bisa dicicil."] },
        { title: "Offline, sinkronisasi, dan pengingat", items: ["Draf jurnal dan penilaian tersimpan otomatis di perangkat.", "Kalau koneksi putus, isian masuk antrean dan terkirim saat jaringan kembali.", "Notifikasi mengingatkan jurnal yang belum diisi setelah jam mengajar selesai."] },
        { title: "Rekap dan ekspor", items: ["Rekap jurnal, presensi, tugas, dan nilai dalam satu alur.", "Ekspor PDF untuk jurnal, rekap jurnal, dan rekap presensi.", "Ekspor Excel nilai per mata pelajaran, lengkap dengan rata-rata.", "Ekspor Excel presensi per pertemuan."] },
        { title: "Dashboard dan administrasi", items: ["Dashboard menampilkan agenda hari ini dan akses cepat.", "Data tiap guru dipisah, jadi tidak tercampur.", "Dashboard admin untuk memantau statistik dan aktivitas platform.", "Kelola akun guru, termasuk aktivasi dan penonaktifan.", "Log aktivitas membantu admin melihat penggunaan aplikasi."] }
      ],
      links: [{ label: "Buka di Google Play", url: "https://play.google.com/store/apps/details?id=id.web.jurnalkuaja.twa" }],
      screenshots: [
        { src: "assets/screenshots/jurnalku/dashboard.webp", full: "assets/screenshots/jurnalku/dashboard.jpg", title: "Dashboard harian", tag: "Guru", alt: "Dashboard harian JurnalKu", caption: "Agenda mengajar, ringkasan jurnal, dan tugas dalam satu layar." },
        { src: "assets/screenshots/jurnalku/jadwal-mengajar.webp", full: "assets/screenshots/jurnalku/jadwal-mengajar.jpg", title: "Jadwal mengajar", tag: "Guru", alt: "Jadwal mengajar mingguan JurnalKu", caption: "Jadwal mingguan yang tersambung ke pencatatan jurnal." },
        { src: "assets/screenshots/jurnalku/isi-jurnal.webp", full: "assets/screenshots/jurnalku/isi-jurnal.jpg", title: "Jurnal Cepat", tag: "Guru", alt: "Form Jurnal Cepat JurnalKu", caption: "Susun jurnal dari materi, kegiatan, kondisi kelas, tugas, dan kendala." },
        { src: "assets/screenshots/jurnalku/kelas-rombel.webp", full: "assets/screenshots/jurnalku/kelas-rombel.jpg", title: "Kelas dan rombel", tag: "Data", alt: "Daftar kelas dan rombongan belajar JurnalKu", caption: "Atur kelas dan jumlah siswa untuk tiap rombongan belajar." },
        { src: "assets/screenshots/jurnalku/penilaian.webp", full: "assets/screenshots/jurnalku/penilaian.jpg", title: "Penilaian siswa", tag: "Guru", alt: "Input penilaian siswa JurnalKu", caption: "Isi nilai per mata pelajaran dan komponen penilaian sekaligus." },
        { src: "assets/screenshots/jurnalku/rekap-pembelajaran.webp", full: "assets/screenshots/jurnalku/rekap-pembelajaran.jpg", title: "Rekap pembelajaran", tag: "Laporan", alt: "Rekap pembelajaran JurnalKu", caption: "Lihat kehadiran, lalu ekspor jurnal, presensi, dan nilai." }
      ]
    },
    {
      slug: "jurnal-pkl",
      name: "Jurnal PKL",
      category: "PKL / Sekolah",
      availability: "Telah diterapkan di sekolah",
      subtitle: "Pengelolaan kegiatan PKL sekolah",
      description: "Urus penempatan siswa, presensi GPS, jurnal harian, dan nilai rapor PKL. Orang tua bisa menanyakan kabar lewat WhatsApp.",
      summary: "Jurnal PKL menangani kegiatan PKL dari awal sampai akhir: penempatan siswa, tugas guru pembimbing, presensi, jurnal, nilai rapor, sampai laporan. Kabar untuk orang tua disampaikan lewat Naya, asisten WhatsApp. Dipakai di SMKN 1 Telagasari dan SMKN 2 Marabahan.",
      color: "#14C983", accent: "#8DFFD0", icon: "school",
      platforms: ["Web", "Android", "GPS", "WhatsApp"],
      featureGroups: [
        { title: "Pengguna dan penempatan", items: ["Akses dibagi per peran: siswa, guru pembimbing, kaprodi, dan admin.", "Atur tempat dan titik lokasi PKL, diverifikasi admin.", "Buat dan kelola surat tugas guru pembimbing."] },
        { title: "Kegiatan siswa dan guru", items: ["Catat kegiatan guru saat mengantar, memantau, dan menjemput siswa.", "Presensi masuk dan pulang memakai GPS, dibatasi geofencing.", "Jurnal harian siswa dilengkapi foto dokumentasi.", "Validasi jurnal dari akun guru atau lewat tautan cepat WhatsApp."] },
        { title: "Penilaian, monitoring, dan laporan", items: ["Beri nilai hasil PKL dan susun nilai rapor siswa.", "Pantau presensi dan jurnal siswa bimbingan dari satu halaman.", "Rekap kegiatan dan cetak laporan PDF.", "Atur hari libur, dan sistem memeriksa sendiri siswa yang belum presensi."] },
        { title: "WhatsApp dan integrasi", items: ["Ringkasan untuk guru dikirim lewat antrean notifikasi WhatsApp.", "Naya menjawab pertanyaan orang tua soal PKL.", "Mendukung provider WhatsApp Fonnte atau WAHA sesuai konfigurasi."] }
      ],
      links: [{ label: "Google Play - SMKN 1 Telagasari", url: "https://play.google.com/store/apps/details?id=id.sch.smkn1telagasari.jurnal_pkl.twa" }, { label: "Google Play - SMKN 2 Marabahan", url: "https://play.google.com/store/apps/details?id=id.sch.smkn2marabahan.jurnal_pkl" }],
      screenshots: [
        { src: "assets/screenshots/jurnal-pkl/login.webp", full: "assets/screenshots/jurnal-pkl/login.jpg", title: "Login sekolah", tag: "Akses", alt: "Halaman login Jurnal PKL", caption: "Masuk memakai akun sekolah, sesuai peran pengguna." },
        { src: "assets/screenshots/jurnal-pkl/dashboard-siswa.webp", full: "assets/screenshots/jurnal-pkl/dashboard-siswa.jpg", title: "Dashboard siswa", tag: "Siswa", alt: "Dashboard siswa Jurnal PKL", caption: "Ringkasan presensi, jurnal, status PKL, dan agenda siswa." },
        { src: "assets/screenshots/jurnal-pkl/presensi-gps.webp", full: "assets/screenshots/jurnal-pkl/presensi-gps.jpg", title: "Presensi berbasis GPS", tag: "Siswa", alt: "Presensi GPS dan geofencing Jurnal PKL", caption: "Presensi masuk dan pulang dengan verifikasi lokasi dan geofencing." },
        { src: "assets/screenshots/jurnal-pkl/jurnal-siswa.webp", full: "assets/screenshots/jurnal-pkl/jurnal-siswa.jpg", title: "Jurnal harian", tag: "Siswa", alt: "Jurnal harian siswa pada Jurnal PKL", caption: "Catatan kegiatan harian, dokumentasi, dan status validasi pembimbing." },
        { src: "assets/screenshots/jurnal-pkl/dashboard-pembimbing.webp", full: "assets/screenshots/jurnal-pkl/dashboard-pembimbing.jpg", title: "Dashboard pembimbing", tag: "Pembimbing", alt: "Dashboard guru pembimbing Jurnal PKL", caption: "Pantau siswa bimbingan, presensi, jurnal, dan progres PKL." },
        { src: "assets/screenshots/jurnal-pkl/notifikasi-pembimbing.webp", full: "assets/screenshots/jurnal-pkl/notifikasi-pembimbing.jpg", title: "Notifikasi pembimbing", tag: "Pembimbing", alt: "Notifikasi guru pembimbing Jurnal PKL", caption: "Jurnal dan aktivitas siswa yang perlu perhatian atau validasi." },
        { src: "assets/screenshots/jurnal-pkl/kegiatan-pembimbing.webp", full: "assets/screenshots/jurnal-pkl/kegiatan-pembimbing.jpg", title: "Kegiatan guru", tag: "Pembimbing", alt: "Kegiatan guru pembimbing pada Jurnal PKL", caption: "Dokumentasi pengantaran, monitoring, penjemputan, dan surat tugas guru." },
        { src: "assets/screenshots/jurnal-pkl/monitoring-presensi.webp", full: "assets/screenshots/jurnal-pkl/monitoring-presensi.jpg", title: "Monitoring presensi", tag: "Pembimbing", alt: "Peta monitoring presensi siswa Jurnal PKL", caption: "Peta lokasi presensi membantu pembimbing memantau kehadiran siswa." },
        { src: "assets/screenshots/jurnal-pkl/penilaian-pkl.webp", full: "assets/screenshots/jurnal-pkl/penilaian-pkl.jpg", title: "Penilaian PKL", tag: "Pembimbing", alt: "Penilaian rapor PKL oleh guru pembimbing", caption: "Nilai dari pembimbing dan industri jadi dasar nilai rapor PKL." }
      ]
    },
    {
      slug: "rpp-studio",
      name: "RPP Studio",
      category: "Guru / Perencanaan Pembelajaran",
      availability: "Dapat diakses melalui web",
      subtitle: "Perencanaan Pembelajaran Mendalam",
      description: "Susun Perencanaan Pembelajaran Mendalam langkah demi langkah. Ada pratinjau A4, editor manual, dan ekspor ke PDF atau Word.",
      summary: "RPP Studio menuntun guru menyusun Perencanaan Pembelajaran Mendalam lewat formulir bertahap, jadi tidak bingung harus mulai dari mana. Draf tersimpan sendiri, hasilnya bisa ditinjau dalam format A4 dan disunting manual sebelum diekspor ke PDF atau Word.",
      color: "#7047FF", accent: "#B69CFF", icon: "spark",
      platforms: ["Web", "PDF", "Word", "Draft otomatis"],
      featureGroups: [
        { title: "Penyusunan dokumen", items: ["Formulir bertahap, jadi pengisian lebih terarah.", "Tiap bagian divalidasi sebelum lanjut ke tahap berikutnya.", "Draf formulir tersimpan otomatis di browser.", "Istilah “murid” dipakai konsisten di seluruh dokumen.", "Tujuan pembelajaran dari guru dibiarkan apa adanya, tidak ditulis ulang."] },
        { title: "Generator dan penyuntingan", items: ["Generator RPP berbantuan AI, dengan mode cadangan yang tetap jalan tanpa AI.", "Editor manual untuk merapikan isi sebelum diekspor."] },
        { title: "Pratinjau dan ekspor", items: ["Pratinjau dokumen dalam halaman A4.", "Tata letak cetak mengikuti contoh Perencanaan Pembelajaran Mendalam.", "Ekspor ke PDF dan Word."] }
      ],
      links: [{ label: "Buka RPP Studio", url: "https://rpm.smkn1telagasari.sch.id/" }],
      screenshots: []
    },
    {
      slug: "jurnal-guru-wali",
      name: "Jurnal Guru Wali",
      category: "Guru Wali / Sekolah",
      availability: "Dapat diakses melalui web",
      subtitle: "Pendampingan dan pemantauan siswa",
      description: "Catat perkembangan siswa, susun rencana pendampingan, dan siapkan laporan resmi. Data tiap guru wali dipisah.",
      summary: "Jurnal Guru Wali membantu wali kelas mengikuti perkembangan siswa: mencatat jurnal, menyusun rencana pendampingan, lalu menindaklanjutinya. Dibangun dengan CodeIgniter 4. Admin atau wakasek bisa memantau pelaksanaannya tanpa mencampur data antar akun guru.",
      color: "#FF4F9A", accent: "#FFB2D1", icon: "guardian",
      platforms: ["Web", "PWA", "PDF", "Excel"],
      featureGroups: [
        { title: "Akun dan dashboard", items: ["Masuk khusus untuk guru wali dan admin.", "Dashboard guru menampilkan siswa yang perlu dibuatkan jurnal, tindak lanjut, dan catatan terbaru.", "Data siswa, perencanaan, jurnal, pengaturan, dan laporan dipisah per akun guru."] },
        { title: "Data dan perkembangan siswa", items: ["Kelola data siswa lengkap, termasuk unggah foto. Kalau belum ada foto, dipakai avatar huruf awal.", "Halaman detail siswa merangkum status dari jurnal terakhir dan timeline perkembangan.", "Isi jurnal per kelas, dengan isian yang tetap terpisah untuk tiap siswa.", "Tambah, ubah, dan hapus jurnal langsung dari halaman detail siswa.", "Draf jurnal tersimpan otomatis di perangkat, jadi isian tidak hilang saat koneksi putus."] },
        { title: "Pendampingan dan laporan", items: ["Susun rencana pendampingan manual, atau pakai template.", "Rekap per rentang tanggal untuk laporan bulanan maupun semester.", "Ekspor PDF formal berisi cover, perencanaan, identitas, dan jurnal tiap siswa.", "Ekspor Excel formal dengan cover, perencanaan, identitas, sheet per siswa, dan pelaporan semester."] },
        { title: "Monitoring dan akses perangkat", items: ["Halaman admin atau wakasek memantau guru, siswa prioritas, eskalasi, dan laporan lintas guru.", "Bisa dipasang sebagai PWA, lengkap dengan service worker, ikon, dan halaman offline."] }
      ],
      links: [{ label: "Buka Jurnal Guru Wali", url: "https://guruwali.jurnalkuaja.web.id/" }],
      screenshots: [
        { src: "assets/screenshots/jurnal-guru-wali/dashboard.webp", full: "assets/screenshots/jurnal-guru-wali/dashboard.jpg", title: "Dashboard pemantauan", tag: "Guru Wali", alt: "Dashboard pemantauan siswa pada Jurnal Guru Wali", caption: "Pantau kondisi kelas, siswa prioritas, tindak lanjut, dan jurnal terbaru dalam satu layar." },
        { src: "assets/screenshots/jurnal-guru-wali/input-jurnal-kelas.webp", full: "assets/screenshots/jurnal-guru-wali/input-jurnal-kelas.jpg", title: "Input jurnal per kelas", tag: "Jurnal", alt: "Input jurnal per kelas pada Jurnal Guru Wali", caption: "Isi catatan beberapa siswa sekaligus, tetap tersimpan terpisah." },
        { src: "assets/screenshots/jurnal-guru-wali/pendampingan-individual.webp", full: "assets/screenshots/jurnal-guru-wali/pendampingan-individual.jpg", title: "Pendampingan individual", tag: "Siswa", alt: "Form pendampingan individual siswa pada Jurnal Guru Wali", caption: "Catat aspek akademik, karakter, sosial emosional, kedisiplinan, kompetensi, dan tindak lanjut." },
        { src: "assets/screenshots/jurnal-guru-wali/laporan-pdf.webp", full: "assets/screenshots/jurnal-guru-wali/laporan-pdf.jpg", title: "Laporan resmi", tag: "Laporan", alt: "Pratinjau laporan PDF Jurnal Guru Wali", caption: "Hasilkan rekap per siswa, laporan semester, dan dokumentasi pendampingan dalam format formal." }
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
