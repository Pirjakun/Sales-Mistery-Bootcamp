# Prompt — Menambahkan Bab "Menjelajah Sekitar" Beserta Foto

> Berikan berkas ini kepada AI agent Anda bersama `destinasi.json`,
> `DESKRIPSI.md`, dan folder `foto/`.

---

## Tugas

Bangun ulang **Bab 12 — Menjelajah Sekitar** pada halaman handbook
`handbook-landing.html`, dari daftar teks menjadi daftar berkartu yang
disertai foto.

Seluruh isinya sudah tersedia. Jangan menambah destinasi lain, jangan
mengarang jam buka, dan jangan menulis ulang deskripsinya dengan gaya
bahasa Anda sendiri.

## Sumber data

| Berkas | Isi |
|---|---|
| `destinasi.json` | Sembilan destinasi terstruktur: nama, kategori, jarak, jam buka, deskripsi, dan nama berkas foto |
| `DESKRIPSI.md` | Naskah yang sama dalam bentuk siap baca |
| `foto/` | Sembilan berkas foto, satu per destinasi, dinamai sesuai `slug` |

Nama berkas foto selalu `foto/<slug>.jpg`. Contoh: destinasi dengan
slug `bukit-turgo` memakai `foto/bukit-turgo.jpg`.

## Susunan bab

Urutkan menurut kategori, dengan judul kategori sebagai pemisah:

1. **Alam & panorama** — Tankaman Natural Park, Agrowisata Bhumi Merapi,
   Taman Gardu Pandang Kaliurang, Tlogo Putri Kaliurang, Bukit Turgo
2. **Budaya & pengetahuan** — Museum Gunung Merapi, Museum Ullen Sentalu
3. **Kuliner setempat** — Jadah Tempe Mbah Carik, Sate Donal Pak Min

Di dalam tiap kategori, urutkan dari yang terdekat.

## Bentuk kartu

Setiap destinasi menjadi satu kartu berisi, berurutan dari atas:

- Foto dengan rasio 16:10, sudut membulat 10 px, lebar penuh kartu
- Nama destinasi (serif, 18 px)
- Baris jarak dan jam buka, dipisahkan titik tengah, warna `--ink-3`
- Deskripsi (13,5 px, `line-height` 1,7, warna `--ink-2`)
- Baris "Cocok untuk" dengan warna `--navy`, ditebalkan pada labelnya

Tata letak: satu kolom pada HP, dua kolom mulai lebar 680 px. Gunakan
`gap` 12 px dan pertahankan kartu dengan gaya `.card` yang sudah ada
(latar `--card`, garis `--line`, sudut 12 px).

## Ketentuan foto

- Rujuk lewat `<img src="foto/....jpg">`, **jangan** tanam sebagai base64
- Setiap `<img>` wajib memiliki `alt` berisi nama destinasi
- Tambahkan `loading="lazy"` pada seluruh foto di bab ini
- Foto dimampatkan ke lebar maksimum 1200 px dan di bawah 200 KB
- Bila sebuah berkas foto masih berisi gambar penampung bertuliskan
  "FOTO BELUM TERSEDIA", biarkan apa adanya. Jangan menggantinya dengan
  gambar dari internet.

## Catatan penutup bab

Pertahankan blok peringatan di akhir bab, dengan gaya `.tip-note` yang
sudah ada:

> Perhatikan jadwal Anda. Sesi berlangsung padat dari pagi hingga malam,
> sehingga penjelajahan hanya memungkinkan setelah sesi makan malam atau
> sebelum aktivitas pagi. Sebagian besar destinasi di atas tutup sebelum
> pukul 17.00. Mohon memberi tahu PIC apabila Anda meninggalkan area
> resort.

Peringatan ini penting dan tidak boleh dihapus. Rundown acara tidak
memuat blok waktu bebas, sementara hampir seluruh destinasi tutup
sebelum pukul 17.00. Tanpa catatan ini, peserta berpotensi berangkat
lalu mendapati tempatnya sudah tutup.

## Yang tidak boleh dilakukan

- Menambah destinasi di luar `destinasi.json`
- Mengubah atau membulatkan angka jarak
- Menuliskan jam buka yang tidak ada di data
- Mencantumkan penilaian bintang, jumlah ulasan, atau kutipan ulasan
  dari layanan peta mana pun
- Mengambil foto dari internet untuk mengisi berkas penampung
- Menambahkan tautan peta yang alamatnya Anda susun sendiri

## Pemeriksaan akhir

- [ ] Sembilan destinasi tampil, terkelompok dalam tiga kategori
- [ ] Setiap kartu memuat foto, jarak, jam buka, deskripsi, dan baris "cocok untuk"
- [ ] Seluruh foto dirujuk dari folder `foto/`, tidak ada base64
- [ ] Blok peringatan jadwal masih ada di akhir bab
- [ ] Dua kolom pada layar lebar, satu kolom pada HP
- [ ] Tidak ada angka atau jam yang tidak bersumber dari `destinasi.json`
