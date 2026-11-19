# Project Guidelines & Voice-Over Rules (IDN-F01)

## 1. Master Voice Profile: IDN-F01 (Wajib untuk Semua VO)

Setiap pembuatan naskah, Voice-Over (VO), dan audio di proyek ini WAJIB mematuhi aturan baku dari file `plan/REMOTION_VO_RULES_IDN-F01.md` dan konfigurasi terpusat `config/vo-profile.json`:

- **Profile ID:** `IDN-F01`
- **Voice ID:** `7KXl23pibFD4VWUWV1E8` (Personal Voice: SI-LITY)
- **Model ID:** `eleven_multilingual_v2`
- **Karakter:** Perempuan muda dewasa (25–32 tahun), Bahasa Indonesia dengan aksen Solo/Jawa Tengah yang tipis dan natural.
- **Tekstur & Artikulasi:** Warm, soft, slightly husky, pitch medium, melodi bicara santai dan jelas (tidak kaku/robotik).
- **Voice Settings Baku:**
  - `stability`: `0.45` – `0.55` (default: `0.50`)
  - `similarity_boost`: `0.80` – `0.85` (default: `0.82`)
  - `style`: `0.15` – `0.25` (default: `0.20`)
  - `use_speaker_boost`: `true`

## 2. Aturan Penulisan Naskah VO

1. **Written to be Spoken:** Tulis naskah untuk didengar, bukan artikel formal untuk dibaca.
2. **Kalimat Pendek & Alami:** Gunakan kalimat pendek hingga sedang dengan struktur percakapan wajar.
3. **Pertahankan Istilah Asli:** Tulis istilah teknis dalam bahasa aslinya (SQL, NoSQL, JSON, Git, SELECT, WHERE). JANGAN menggunakan ejaan fonetik palsu seperti "es-kuy-el".
4. **Pemisahan Instruksi:** JANGAN pernah mencampur instruksi produksi (catatan musik, visual, stage direction) ke dalam teks yang akan di-TTS. Kirimkan HANYA narasi murni.

## 3. Pacing & Jeda Antar Adegan

- **Koma / Jeda Frasa:** 150–300 ms
- **Akhir Kalimat:** 300–500 ms
- **Pergantian Gagasan / Antar Scene:** 500–800 ms
- **Serial Non-Overlapping:** Wajib mengukur durasi audio via `ffprobe` dan menambahkan jeda secara serial (`startFrame[i] = endFrame[i-1]`) agar tidak terjadi tabrakan audio.

## 4. Safe Area Subtitle Media Sosial

- Subtitle on-screen wajib berada di **`bottom: 460px`** agar tidak tertutup UI tombol, like, komentar, profil, dan sound tag pada platform TikTok, Instagram Reels, dan YouTube Shorts.
