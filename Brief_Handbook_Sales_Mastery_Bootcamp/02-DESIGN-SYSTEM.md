# Sistem Desain

Diturunkan dari key visual resmi Sales Mastery Bootcamp: latar krem
hangat, judul serif hitam, biru Werkudara sebagai satu-satunya aksen.

## Warna

```css
:root{
  /* latar */
  --paper:#EFE9DD;      /* krem dasar */
  --paper-2:#F7F4ED;    /* krem terang, dipakai di tengah gradasi */
  --card:#FCFAF6;       /* permukaan kartu */

  /* teks */
  --ink:#141414;        /* judul dan teks utama */
  --ink-2:#4C4A45;      /* paragraf */
  --ink-3:#8A857A;      /* keterangan, label */

  /* garis */
  --line:#DCD4C4;       /* batas kartu */
  --line-2:#EAE3D6;     /* pemisah di dalam kartu */

  /* aksen */
  --navy:#12357F;       /* biru Werkudara */
  --navy-d:#0E2A66;
  --sky:#A9D9F2;        /* biru muda, hanya di atas latar biru */

  /* status */
  --ok:#2F6B4F;         /* daftar anjuran */
  --no:#B4402F;         /* daftar larangan */
}
```

Latar halaman memakai gradasi vertikal lembut, dikunci agar tidak ikut
bergulir:

```css
background:linear-gradient(180deg,var(--paper) 0%,var(--paper-2) 34%,var(--paper) 100%);
background-attachment:fixed;
```

**Aturan pemakaian warna.** Biru hanya untuk aksen: nomor bab, jam pada
agenda, label hari, garis pemisah sampul, pita atas dan bawah, serta
blok Wi-Fi. Jangan memakai biru sebagai latar bidang besar selain blok
Wi-Fi — blok itu satu-satunya area gelap di halaman, dan justru itu
yang menjadikannya penanda akhir dokumen.

## Huruf

```css
--serif:'Marcellus',Georgia,'Times New Roman',serif;
--sans:'Source Sans 3',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
```

| Elemen | Huruf | Ukuran | Keterangan |
|---|---|---|---|
| Judul sampul | serif | 31 px (40 px di tablet, 30 px di panel desktop) | huruf besar semua |
| Judul bab | serif | 23 px (25 px di tablet) | kapitalisasi judul |
| Nama trainer | serif | 20 px | |
| Nomor bab | serif | 13 px | warna biru |
| Jam pada agenda | serif | 13,5 px | biru, `tabular-nums` |
| Paragraf | sans | 15 px, `line-height` 1,72 | warna `--ink-2` |
| Baris agenda | sans | 15 px tebal + 13 px keterangan | |
| Kicker & label | sans | 10,5–11,5 px, tebal, `letter-spacing` .12em | huruf besar semua |
| Isi kartu | sans | 14,5 px | |

Serif hanya dipakai untuk judul, nama, dan angka jam. Seluruh teks
bacaan memakai sans.

## Komponen

**Kartu** — latar `--card`, garis 1 px `--line`, sudut 12 px, padding 16 px.

**Baris kunci-nilai (`.kv`)** — label di kiri warna `--ink-3`, nilai di
kanan tebal, dipisahkan garis `--line-2`. Baris pertama tanpa padding
atas, baris terakhir tanpa garis bawah.

**Baris agenda (`.row`)** — jam selebar 46 px di kiri (serif, biru),
lalu judul kegiatan tebal dan keterangan di bawahnya.

**Kartu trainer** — foto bulat 88 px (104 px di tablet, 76 px di HP
kecil dan berubah menjadi susunan menumpuk), lalu label hari berbentuk
pil biru muda, nama, jabatan, dan uraian singkat.

**Bab** — `padding-top` 30 px, `margin-top` 28 px, garis atas 1 px
`--line`. Bab pertama di kolom kanan desktop tanpa garis atas.

**Sampul dan blok Wi-Fi** — memakai bingkai ganda: kotak luar dengan
garis, lalu kotak dalam bergaris dengan `margin` 6 px. Sudutnya hampir
siku (2 px), bukan membulat.

**Foto** — lebar penuh, sudut 12 px, garis 1 px `--line`, disertai
keterangan di bawahnya berukuran 12,5 px warna `--ink-3`.

## Jarak

Kelipatan 4 px. Jarak antar bab 28 px, antar kartu 10 px, antar paragraf
dan elemen di bawahnya 14–16 px.

## Nada visual

Tenang, formal, lapang. Tidak ada bayangan tebal, tidak ada gradien
selain latar halaman, tidak ada ikon dekoratif. Emoji hanya dipakai
pada dua tempat: daftar perlengkapan Outdoor Care dan daftar titik
lokasi resort — dan bahkan itu boleh dihilangkan bila dirasa kurang
formal.
