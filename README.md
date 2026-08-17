# HIMUNG.ID

Website resmi HIMUNG.ID untuk memperkenalkan produk aplikasi pendidikan yang dapat digunakan oleh guru, siswa, dan sekolah. Situs ini memuat katalog produk, rincian fitur, tangkapan layar aplikasi, kanal akses resmi, serta informasi penerapan produk di sekolah.

Situs dibangun menggunakan HTML, CSS, dan JavaScript tanpa framework sehingga ringan dan dapat dipublikasikan sebagai situs statis.

## Produk

| Produk | Kegunaan | Akses |
| --- | --- | --- |
| JurnalKu | Administrasi mengajar harian, jurnal, presensi, tugas, penilaian, rekap, dan ekspor dokumen | [Google Play](https://play.google.com/store/apps/details?id=id.web.jurnalkuaja.twa) |
| Jurnal PKL | Pengelolaan PKL, presensi GPS, jurnal siswa, kegiatan guru, monitoring, penilaian rapor, dan layanan WhatsApp | [SMKN 1 Telagasari](https://play.google.com/store/apps/details?id=id.sch.smkn1telagasari.jurnal_pkl.twa) / [SMKN 2 Marabahan](https://play.google.com/store/apps/details?id=id.sch.smkn2marabahan.jurnal_pkl) |
| RPP Studio | Penyusunan Perencanaan Pembelajaran Mendalam, pratinjau A4, dan ekspor PDF atau Word | [Buka aplikasi](https://rpm.smkn1telagasari.sch.id/) |
| Jurnal Guru Wali | Jurnal pendampingan, pemantauan siswa, tindak lanjut, rekap, serta laporan PDF dan Excel | [Buka aplikasi](https://guruwali.jurnalkuaja.web.id/) |

## Halaman

- `/` - beranda dan ringkasan seluruh produk
- `/aplikasi/` - katalog produk HIMUNG.ID
- `/aplikasi/jurnalku/` - detail JurnalKu
- `/aplikasi/jurnal-pkl/` - detail Jurnal PKL
- `/aplikasi/rpp-studio/` - detail RPP Studio
- `/aplikasi/jurnal-guru-wali/` - detail Jurnal Guru Wali
- `/lab/` - eksperimen aplikasi, AI, sistem offline, home server, dan self-hosting
- `/tentang/` - cerita, prinsip, dan cara kerja HIMUNG.ID
- `/kontak/` - kontak penggunaan produk, penerapan sekolah, dan ide Lab

## Fitur Website

- Desain responsif untuk perangkat mobile, tablet, dan desktop.
- Katalog produk dengan status ketersediaan dan akses resmi.
- Halaman detail berisi manfaat, kelompok fitur, platform, dan galeri tangkapan layar.
- Dialog pratinjau produk pada beranda dan halaman katalog.
- Navigasi mobile, animasi masuk, dan dukungan preferensi reduced motion.
- Metadata SEO, Open Graph, data terstruktur JSON-LD, `robots.txt`, dan `sitemap.xml`.
- URL katalog `/aplikasi/` yang dapat diakses langsung tanpa bergantung pada fragmen beranda.

## Struktur Proyek

```text
/
|-- index.html
|-- aplikasi/
|   |-- index.html
|   |-- jurnalku/
|   |-- jurnal-pkl/
|   |-- rpp-studio/
|   `-- jurnal-guru-wali/
|-- lab/
|   `-- index.html
|-- tentang/
|   `-- index.html
|-- kontak/
|   `-- index.html
|-- assets/
|   |-- icons/
|   |-- illustrations/
|   `-- screenshots/
|-- css/
|   |-- styles.css
|   |-- info-pages.css
|   `-- product-detail.css
|-- js/
|   |-- products.js
|   |-- main.js
|   |-- lab.js
|   |-- site-page.js
|   `-- product-detail.js
|-- robots.txt
`-- sitemap.xml
```

## Menjalankan Secara Lokal

Jalankan server statis dari root repository:

```bash
python -m http.server 4173
```

Kemudian buka `http://localhost:4173`.

Penggunaan server lokal disarankan agar URL direktori, pemuatan aset, dan halaman detail bekerja seperti pada hosting produksi.

## Mengelola Konten Produk

Data seluruh produk berada di `js/products.js`. Beranda, katalog, dialog pratinjau, dan halaman detail menggunakan sumber data yang sama agar informasi tetap konsisten.

Untuk memperbarui produk:

1. Ubah informasi dasar, status ketersediaan, platform, fitur, dan tautan pada `js/products.js`.
2. Simpan tangkapan layar versi WebP dan sumber beresolusi tinggi di `assets/screenshots/<slug-produk>/`.
3. Daftarkan gambar melalui properti `screenshots` pada produk terkait.
4. Perbarui metadata halaman detail dan `sitemap.xml` jika menambahkan produk baru.

## Publikasi

Repository dapat dipublikasikan melalui GitHub Pages atau layanan hosting statis lainnya. Domain produksi yang digunakan adalah [himung.id](https://himung.id/).

Untuk pertanyaan penggunaan atau penerapan produk, hubungi [wajibhimung@gmail.com](mailto:wajibhimung@gmail.com).
