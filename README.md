# HIMUNG.ID

Website portfolio dan pusat navigasi produk Himung. Situs menggunakan HTML, CSS, dan JavaScript statis sehingga dapat dipublikasikan langsung melalui GitHub Pages.

## Halaman Produk

- `/aplikasi/jurnalku/`
- `/aplikasi/jurnal-pkl/`
- `/aplikasi/rpp-studio/`
- `/aplikasi/jurnal-guru-wali/`

Data produk berada di `js/products.js` dan digunakan bersama oleh beranda, dialog pratinjau, serta seluruh halaman detail. Screenshot produk dapat ditambahkan melalui properti `screenshots` tanpa mengubah template halaman.

Website portfolio dan digital playground untuk aplikasi, tools, eksperimen, dan karya digital Himung.

## Struktur

```text
/
├── index.html
├── assets/
│   ├── images/
│   ├── icons/
│   └── illustrations/
├── css/
├── js/
└── README.md
```

## Menjalankan Lokal

Website ini static. Bisa dibuka langsung dari `index.html`, atau dijalankan dengan server static:

```bash
python -m http.server 4173
```

Lalu buka `http://localhost:4173`.

## Deploy GitHub Pages

Publikasikan isi root repository ini melalui GitHub Pages. Pastikan custom domain `himung.id` diarahkan dari pengaturan repository jika domain sudah siap.

## Konten Produk

Data produk berada di `js/main.js` pada array `products`. Produk baru dapat ditambahkan dari struktur data tersebut.
