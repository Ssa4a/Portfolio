# Portofolio Sasa

Website portofolio statis (HTML, CSS, JavaScript biasa). Tidak perlu install apa-apa.

## Struktur folder

```
portfolio/
├── index.html        kerangka halaman (jarang diubah)
├── css/style.css     tampilan & warna (warna ada di :root paling atas)
├── js/
│   ├── data.js       SEMUA ISI: nama, foto, projek, sertifikat, spotify, dll  <-- edit di sini
│   └── main.js       animasi (lanyard, mengetik, tab)
└── images/
    ├── profile/      foto.png
    ├── projects/     gambar projek
    ├── certificates/ gambar sertifikat
    ├── achievements/ gambar penghargaan
    └── logos/        logo kampus/sekolah, logo tech stack
```

## Cara menambah gambar
1. Taruh file di folder yang sesuai di `images/`.
2. Buka `js/data.js`, cari komentar `TAMBAH GAMBAR ... DI SINI`.
3. Isi `image: ""` dengan path-nya, contoh `image: "images/certificates/sertif1.png"`.

## Spotify
Di `js/data.js` isi `spotify.playlistId` dengan ID dari link playlist.

## Menjalankan
Klik dua kali `index.html`, atau di VS Code pakai ekstensi Live Server. Untuk online: upload ke GitHub Pages atau Vercel.

## Efek lanyard
Kartu ID di hero bisa ditarik dan akan berayun saat dilepas. Atur panjang tali dan gravitasi di bagian LANYARD pada `js/main.js` (`L`, `GRAV`, `DAMP`).
