# Prompt Utama — Handbook Digital Sales Mastery Bootcamp

> Salin seluruh isi berkas ini ke AI agent Anda, lalu lampirkan
> `02-DESIGN-SYSTEM.md`, `03-KONTEN.md`, `04-DATA.json`, folder `aset/`,
> dan `referensi/handbook-landing.html`.

---

## Peran

Anda adalah frontend engineer sekaligus desainer yang membangun sebuah
halaman web statis. Halaman ini adalah handbook digital untuk peserta
acara pelatihan internal. Bacalah seluruh berkas pendamping sebelum
menulis kode.

## Yang harus dibuat

Satu halaman web statis (satu berkas `index.html`, atau `index.html` +
`style.css` bila Anda lebih suka memisahkannya). Halaman ini berisi
seluruh isi handbook, dibaca dengan cara digulir dari atas ke bawah.

**Bukan** aplikasi multi-halaman. **Bukan** SPA dengan router. **Tanpa**
framework, tanpa proses build, tanpa dependensi npm. Cukup HTML, CSS,
dan (kalau benar-benar perlu) sedikit JavaScript.

## Konteks acara

- Nama: **Sales Mastery Bootcamp**
- Tagline: *Building Strategy, Discipline & Execution for Revenue Growth*
- Tanggal: **8 – 10 September 2026**
- Lokasi: **Kalyana Resort Kaliurang, Yogyakarta** (kawasan pegunungan
  dekat Gunung Merapi)
- Penyelenggara: **Werkudara Group**
- Peserta: sekitar 20 orang, tim penjualan internal
- Perangkat utama pembaca: **HP**, dipakai selama acara berlangsung

## Prinsip yang tidak boleh dilanggar

Ini bagian terpenting dari brief. Setiap keputusan desain harus tunduk
pada empat prinsip ini.

**1. Satu halaman, dibaca berurutan.**
Tidak ada tab, tidak ada menu navigasi antar-bab, tidak ada daftar isi
yang bisa diklik. Peserta harus menggulir melewati seluruh isi.

**2. Informasi Wi-Fi diletakkan paling akhir.**
Ini disengaja. Akses Wi-Fi adalah informasi yang paling dicari peserta,
dan menempatkannya di ujung halaman membuat mereka melewati bagian
keselamatan, agenda, dan tata tertib terlebih dahulu. Karena itulah
menu lompat antar-bab dilarang — menu semacam itu akan meniadakan
seluruh maksud penyusunan ini.

**3. Mobile-first.**
Rancang untuk layar 390 px lebih dahulu, baru kembangkan ke atas.
Halaman ini akan dibuka sambil berdiri di lobi, bukan di depan meja
kerja.

**4. Lebar kolom teks dijaga.**
Di layar lebar, jangan melebarkan teks mengikuti lebar layar. Kunci
kolom bacaan pada kisaran 620–700 px. Ruang sisa di desktop dipakai
untuk panel samping, bukan untuk memanjangkan baris teks.

## Struktur halaman

Urutan berikut sudah final. Jangan menyusun ulang, jangan menambah,
jangan mengurangi. Seluruh naskahnya ada di `03-KONTEN.md`.

1. Pita tipis berwarna biru di ujung atas halaman
2. Header lengket (sticky): nama acara di kiri, tanggal dan lokasi di kanan
3. Sampul: kicker, judul, tagline, pemisah, tanggal dan tempat
4. Kalimat pengantar
5. Bab 01 – Tentang Bootcamp Ini *(disertai foto resort)*
6. Bab 02 – Kontak Penting
7. Bab 03 – Perjalanan Menuju Kalyana
8. Bab 04 – Akomodasi & Tempat Duduk
9. Bab 05 – Agenda Tiga Hari
10. Bab 06 – Trainer & Fasilitator *(tiga kartu berfoto)*
11. Bab 07 – Waktu Santap
12. Bab 08 – Aktivitas Pagi *(slot foto, masih kosong)*
13. Bab 09 – Kegiatan Luar Ruang *(disertai foto area outdoor)*
14. Bab 10 – Denah Ruang Pelatihan *(diagram, bukan foto)*
15. Bab 11 – Mengenal Area Resort
16. Bab 12 – Menjelajah Sekitar
17. Bab 13 – Keselamatan & Keamanan *(slot foto ruang pelatihan)*
18. Bab 14 – Anjuran & Larangan
19. Bab 15 – Tata Tertib
20. Blok penutup Wi-Fi (biru pekat, berbingkai)
21. Kalimat penutup dan tautan "kembali ke bagian awal"
22. Pita biru di ujung bawah halaman

Setiap bab diberi nomor dua digit berwarna biru di sebelah kiri
judulnya, dan dipisahkan garis tipis di bagian atas.

## Hal khusus: denah kursi

Bab 10 memuat denah ruang berbentuk huruf U, dibuat dengan CSS Grid
(bukan gambar). Sepuluh meja: empat di sisi kiri, empat di sisi kanan,
dua di sisi tengah bawah. Setiap meja memuat dua kursi berlabel A dan B.
Di atas denah terdapat blok biru bertuliskan "LAYAR & PEMBICARA".

Pada meja sisi kiri dan kanan, kedua kursi disusun atas-bawah. Pada dua
meja tengah, kedua kursi disusun bersebelahan kiri-kanan, dan mejanya
melebar dua kolom. Koordinat gridnya ada di `04-DATA.json`.

Kursi dibiarkan kosong tanpa nama, karena halaman ini sama untuk semua
peserta.

## Perilaku responsif

| Lebar layar | Perilaku |
|---|---|
| ≤ 360 px | Sampul dan denah kursi mengecil agar teks tidak terpotong |
| 361 – 679 px | Satu kolom, lebar penuh dengan padding 20 px |
| 680 – 999 px | Kolom melebar ke 660 px, ukuran huruf naik, kartu Wi-Fi jadi dua kolom |
| ≥ 1000 px | Dua kolom: panel kiri lengket berisi sampul dan pengantar (330 px), kolom kanan berisi seluruh bab |
| ≥ 1360 px | Jarak antar kolom melebar; **lebar teks tidak berubah** |

## Batasan teknis

- Tanpa framework, tanpa build step, tanpa dependensi npm
- JavaScript seminimal mungkin; halaman harus tetap utuh tanpanya
- Huruf dimuat dari Google Fonts: **Marcellus** dan **Source Sans 3**
- Foto disimpan di folder `aset/` dan dirujuk lewat `<img src>`; jangan
  menanamkannya sebagai base64 karena ukuran halaman akan membengkak
- Anggaran ukuran halaman: **di bawah 1 MB** termasuk seluruh foto
- Foto dimampatkan ke lebar maksimum 1200 px, JPG, di bawah 200 KB per berkas
- Setiap `<img>` wajib memiliki `alt` yang deskriptif
- Sertakan `loading="lazy"` pada foto selain foto pertama
- Hormati `prefers-reduced-motion`

## Yang tidak boleh dilakukan

- Menambahkan menu navigasi, daftar isi berpaut, atau tombol lompat ke bagian Wi-Fi
- Menambahkan animasi saat menggulir, efek parallax, atau elemen yang bergerak sendiri
- Menggunakan gradien warna-warni, bayangan tebal, atau sudut yang terlalu membulat
- Memindahkan blok Wi-Fi ke bagian atas halaman
- Mengarang data yang belum tersedia. Bila sebuah keterangan belum ada
  (nama PIC, nomor telepon, menu makan), tulis apa adanya sebagai
  "menyusul". **Jangan pernah membuat nomor telepon contoh** — handbook
  ini memuat informasi keadaan darurat.
- Mengambil foto dari internet. Gunakan hanya berkas di folder `aset/`.

## Berkas pendamping

| Berkas | Isi |
|---|---|
| `02-DESIGN-SYSTEM.md` | Warna, huruf, jarak, gaya komponen |
| `03-KONTEN.md` | Seluruh naskah, bab per bab, siap salin |
| `04-DATA.json` | Rundown, data trainer, denah kursi dalam bentuk terstruktur |
| `aset/` | Lima foto siap pakai |
| `referensi/handbook-landing.html` | Versi jadi sebagai acuan visual |

## Cara memakai berkas referensi

`referensi/handbook-landing.html` adalah versi yang sudah berfungsi.
Bukalah lebih dahulu untuk memahami hasil akhir yang diharapkan.

Anda boleh menjadikannya titik awal, atau membangun ulang dari nol
selama hasilnya memenuhi seluruh ketentuan di atas. Bila Anda
membangun ulang, satu-satunya perbedaan yang diperbolehkan adalah foto
dirujuk dari folder `aset/`, bukan ditanam sebagai base64.

## Cara memeriksa hasil Anda

Sebelum menyatakan pekerjaan selesai, pastikan seluruh butir berikut
terpenuhi:

- [ ] Dibuka di lebar 390 px: tidak ada teks terpotong, tidak ada
      gulir menyamping
- [ ] Dibuka di lebar 1440 px: baris teks tidak melebihi sekitar 700 px
- [ ] Informasi Wi-Fi hanya dapat dicapai dengan menggulir sampai akhir
- [ ] Tidak ada satu pun tautan yang melompati bagian tengah halaman
- [ ] Seluruh foto tampil dan memiliki teks alternatif
- [ ] Total ukuran halaman beserta aset di bawah 1 MB
- [ ] Tidak ada nomor telepon atau nama karangan di dalam halaman
- [ ] Halaman tetap terbaca ketika JavaScript dimatikan
