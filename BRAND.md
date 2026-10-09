# Identitas HIMUNG.ID

Panduan ringkas agar tampilan dan nada HIMUNG.ID tetap konsisten.

## Mark

- Simbol: kotak kuning membulat dengan dua mata dan mulut lengkung (smiley) — ramah dan dekat dengan dunia pendidikan.
- Berkas: `assets/icons/mark.svg` (mark utama), `assets/icons/mark-maskable.svg` (latar penuh untuk ikon aplikasi), `assets/icons/favicon.svg` (favicon), dan `assets/icons/*.png` (ikon aplikasi).
- Mark di header/footer digambar lewat CSS `.brand-mark`. Jangan menggantinya dengan berkas lain agar proporsi tetap sama.
- Jangan memutar mark, mengubah warna garisnya, atau menambahkan gradasi.

## Warna

Token berada di `css/styles.css` pada `:root`.

- Kuning `#ffdc19` — warna brand utama.
- Ink `#101010` — garis, teks, dan bayangan.
- Cream `#fffdf7` — latar.
- Ungu `#6d3cff` — warna interaksi (nav aktif dan hover).
- Aksen: pink `#ff3e8b`, biru `#2d75f5`, hijau `#16c779`, oranye `#ff7b19`, navy `#19004b` (khusus halaman Lab).

Aturan: kuning sebagai brand, ungu sebagai interaksi; aksen lain dipakai hemat sebagai penanda, bukan warna dasar.

## Tipografi

- Heading: Fredoka (500/600/700) — membulat dan ramah.
- Body: Plus Jakarta Sans (400/500/700/800) — jelas dan modern.
- Hindari menambah jenis huruf lain.

## Gaya visual

Neo-brutalis: border tebal 2px warna ink, hard shadow dengan offset, sudut membulat, latar cream. Ikon dan ilustrasi bergaya garis tebal.

## Nada suara

- Bahasa Indonesia, hangat, sederhana, dan jujur.
- Falsafah tetap: "Ilmu dan teknologi hanyalah alat, yang membuatnya bermanfaat adalah akhlak."
- Tagline tetap: "Teknologi sederhana untuk pendidikan yang lebih mudah."
- Hindari klaim berlebihan, statistik tanpa dasar, atau testimoni palsu.

## Berkas terkait

- `partials/header.html`, `partials/footer.html`, `partials/head.html` — sumber blok bersama.
- `scripts/build-icons.js` — menghasilkan ikon PNG dari mark SVG (`npm run build:icons`).
- `site.webmanifest` — metadata ikon dan warna aplikasi.
