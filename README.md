# FUOMO — Dokumentasi Proyek

## Ringkasan
- Aplikasi Next.js berbasis App Router untuk landing page, autentikasi, dan data kreator.
- Memiliki API lokal untuk pengembangan sehingga tidak bergantung pada backend eksternal.
- Menggunakan alias path untuk import yang rapi dan konsisten.

## Prasyarat
- Node.js 18+
- npm 9+

## Menjalankan Secara Lokal
- Jalankan server pengembangan: `npm run dev`
- Buka: `http://localhost:3001/` (otomatis pindah jika `3000` terpakai)
- Typecheck: `npm run typecheck`
- Linting: `npm run lint`

## Struktur Folder
- `app/`
  - `page.tsx` — halaman utama menggunakan `HomePageAdapter`
  - `signin/page.tsx` — halaman masuk
  - `signup/page.tsx` — halaman daftar
  - `api/` — API lokal (Next.js route handlers)
- `components/`
  - `common/` — komponen umum (`Header`, `Footer`)
  - `home/` — komponen halaman utama (`HomePage`)
  - `HomePageAdapter.tsx` — adaptor klien untuk navigasi dan data
- `lib/`
  - `api/` — klien API (`endpoints.ts`, `http.ts`, `index.ts`, `types.ts`)
- `styles/` — stylesheet berbasis CSS Modules
- `README.md` — dokumentasi proyek

## Alias Path
- Ditetapkan di `tsconfig.json`:
  - `@components/*` → `components/*`
  - `@styles/*` → `styles/*`
  - `@lib/*` → `lib/*`

## API Lokal
- Base: relatif terhadap asal (`/`), tidak butuh `NEXT_PUBLIC_API_BASE_URL`.
- Endpoint:
  - `POST /auth/signin` → mengembalikan `{ token, userId }` (`app/api/auth/signin/route.ts:1`)
  - `POST /auth/signup` → mengembalikan `{ userId }` (`app/api/auth/signup/route.ts:1`)
  - `GET /creators` → daftar kreator mock (`app/api/creators/route.ts:1`)

## Klien API
- `lib/api/http.ts:1-18` — utilitas `request` dengan header JSON dan deteksi `content-type`.
- `lib/api/index.ts:1-15` — fungsi `signIn`, `signUp`, `listCreators`.
- `lib/api/endpoints.ts:1-4` — konstanta path API.
- `lib/api/types.ts:1-12` — tipe permintaan dan respons.

## Alur Autentikasi
- Masuk (`components/auth/SignIn.tsx:22-38`):
  - Panggil `signIn`, simpan `auth_token` ke `localStorage`, redirect ke `/`.
- Status login di beranda (`components/HomePageAdapter.tsx:12-27`):
  - Cek `localStorage` untuk token, set `isAuthenticated`.
  - Tampilkan tombol `Logout` jika login (`components/common/Header.tsx:33-39`).
- Logout (`components/HomePageAdapter.tsx:25-28`):
  - Hapus token, redirect ke `/signin`.

## Halaman dan Komponen
- Beranda:
  - `app/page.tsx:3-5` → render `HomePageAdapter`.
  - `components/home/HomePage.tsx:35-149` → layout hero, daftar kreator, gallery, FAQ, dan `Footer`.
- Header:
  - `components/common/Header.tsx:1-45` → logo, navigasi, Shop, auth button.
- Footer:
  - `components/common/Footer.tsx:1-58` → logo, deskripsi, sosial, links Terms/Privacy/Cookies.

## Styling
- CSS Modules dengan kelas deskriptif.
- Contoh:
  - Header — `styles/Header.module.css:1-12` (warna, nav, logo, action button)
  - Home — `styles/HomePage.module.css:1-34` (hero, section, cards, footer)
  - Auth — `styles/Auth.module.css:1-36` (form, input, tombol, sosial, link)
- Konvensi: warna brand utama `#e31e45`, tipografi bold untuk elemen aksi dan link penting.

## Variabel Lingkungan
- `NEXT_PUBLIC_API_BASE_URL` (opsional):
  - Jika di-set, klien API akan mengarah ke host tersebut (`lib/api/http.ts:3-5`).
  - Jika tidak di-set, menggunakan path relatif (API lokal).

## Kualitas Kode
- Strict TypeScript di `tsconfig.json` (`"strict": true`).
- Jalankan `npm run typecheck` dan `npm run lint` sebelum commit.

## Deploy
- Build produksi: `npm run build`
- Start produksi: `npm run start`
- Pastikan variabel lingkungan disesuaikan jika memakai backend eksternal.

## Catatan
- API lokal bersifat mock untuk pengembangan; gantikan dengan endpoint backend asli saat produksi.
- Struktur komponen dipecah menjadi `common` dan `home` untuk modularitas dan skala.