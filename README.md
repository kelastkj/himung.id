# HIMUNG.ID

Website resmi HIMUNG.ID untuk memperkenalkan produk aplikasi pendidikan yang dapat digunakan oleh guru, siswa, dan sekolah. Situs ini memuat katalog produk, rincian fitur, tangkapan layar aplikasi, kanal akses resmi, serta informasi penerapan produk di sekolah.

Situs dibangun menggunakan HTML, CSS, dan JavaScript tanpa framework. Header dan footer dibagikan lewat partial dan disatukan oleh skrip build Node sederhana, sehingga tetap ringan dan dapat dipublikasikan sebagai situs statis.

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
- Identitas visual konsisten: mark smiley sebagai favicon dan ikon aplikasi (`site.webmanifest`).
- Halaman 404 kustom yang menampilkan mark HIMUNG.ID.
- Panduan identitas ringkas pada `BRAND.md`.

## Struktur Proyek

```text
/
|-- index.html
|-- 404.html
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
|-- partials/
|   |-- head.html
|   |-- header.html
|   `-- footer.html
|-- assets/
|   |-- icons/
|   |-- illustrations/
|   |-- images/
|   `-- screenshots/
|-- css/
|   |-- styles.css
|   |-- info-pages.css
|   `-- product-detail.css
|-- js/
|   |-- products.js
|   |-- site-shell.js
|   |-- main.js
|   |-- lab.js
|   |-- site-page.js
|   `-- product-detail.js
|-- scripts/
|   |-- build.js
|   |-- build-icons.js
|   |-- link-check.js
|   |-- optimize-images.js
|   `-- smoke-test.js
|-- .github/workflows/ci.yml
|-- BRAND.md
|-- package.json
|-- site.webmanifest
|-- robots.txt
`-- sitemap.xml
```

## Build dan Partial

Header dan footer seluruh halaman dihasilkan dari `partials/header.html` dan `partials/footer.html`. Untuk mengubah navigasi atau footer, sunting partial lalu jalankan:

```bash
npm run build
```

Skrip `scripts/build.js` menulis ulang blok `<header>` dan `<footer>` di setiap halaman, termasuk penanda kelas aktif (`class="active"` dan `aria-current="page"`). Blok ikon pada `<head>` (favicon, apple-touch-icon, dan manifest) juga berasal dari `partials/head.html`. Jangan menyunting blok tersebut langsung di file HTML karena akan ditimpa saat build. Skrip juga menambahkan parameter versi `?v=<hash>` pada referensi CSS, JS, dan SVG sebagai cache-busting agar perubahan aset tidak tertahan cache di GitHub Pages.

HTML hasil build disimpan di repositori sehingga GitHub Pages tetap menyajikan dari root tanpa konfigurasi tambahan. CI menjalankan `npm run build:check` untuk memastikan HTML tidak menyimpang dari partial.


## Menjalankan Secara Lokal

Jalankan server statis dari root repository:

```bash
python -m http.server 4173
```

Kemudian buka `http://localhost:4173`.

Penggunaan server lokal disarankan agar URL direktori, pemuatan aset, dan halaman detail bekerja seperti pada hosting produksi.

Sebagai alternatif, jika Node.js tersedia:

```bash
npm install
npm run serve
```

## Mengelola Konten Produk

Data seluruh produk berada di `js/products.js`. Beranda, katalog, dialog pratinjau, dan halaman detail menggunakan sumber data yang sama agar informasi tetap konsisten.

Untuk memperbarui produk:

1. Ubah informasi dasar, status ketersediaan, platform, fitur, dan tautan pada `js/products.js`.
2. Simpan tangkapan layar versi WebP dan sumber beresolusi tinggi di `assets/screenshots/<slug-produk>/`.
3. Daftarkan gambar melalui properti `screenshots` pada produk terkait.
4. Perbarui metadata halaman detail dan `sitemap.xml` jika menambahkan produk baru.

## Pemeriksaan dan Pengujian

Pemeriksaan statis dijalankan dengan Node.js:

```bash
npm install
npm run build:check   # HTML sinkron dengan partial
npm run check:links   # tautan dan aset internal valid
npm run check:html    # validasi HTML dengan html-validate
```

Pemeriksaan statis memerlukan Node.js 22 atau lebih baru (html-validate memakai API glob Node 22+).

Pemeriksaan tampilan menggunakan Playwright:

```bash
npx playwright install chromium
npm run serve
npm run smoke
```

Skrip membuka beranda pada tampilan mobile dan desktop, memeriksa status HTTP, jumlah kartu produk, gambar yang gagal dimuat, dan galat konsol, lalu menyimpan tangkapan layar ke `assets/images/smoke-*.png`. Alamat server dapat diubah melalui variabel lingkungan `SMOKE_BASE_URL`.

Optimasi gambar tangkapan layar (JPG ukuran penuh untuk lightbox dan WebP untuk galeri):

```bash
npm run optimize:images
```

Seluruh langkah di atas dijalankan otomatis melalui GitHub Actions pada `.github/workflows/ci.yml` untuk setiap push dan pull request.

## Publikasi

Repository dapat dipublikasikan melalui GitHub Pages atau layanan hosting statis lainnya. Domain produksi yang digunakan adalah [himung.id](https://himung.id/).

Untuk pertanyaan penggunaan atau penerapan produk, hubungi [wibowo@himung.id](mailto:wibowo@himung.id).
