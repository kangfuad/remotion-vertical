# Remotion VO Production Rules

## Master Voice Profile: IDN-F01

Dokumen ini menjadi aturan tetap untuk seluruh pembuatan voice-over (VO)
pada proyek Remotion. Terapkan aturan ini setiap kali membuat, merevisi,
atau menghasilkan ulang naskah dan audio VO.

------------------------------------------------------------------------

## 1. Tujuan

Menghasilkan VO berbahasa Indonesia yang terdengar natural, jelas, dan
konsisten dengan identitas suara perempuan Jawa Solo.

Hasil akhir harus terasa seperti perempuan Jawa yang sedang berbicara
secara alami. Hindari kesan AI yang membaca naskah, audiobook formal,
presenter iklan, atau pembacaan puisi di panggung.

## 2. Master Voice Identity

Gunakan identitas berikut sebagai acuan permanen:

-   **Profile ID:** `IDN-F01`
-   **Karakter:** Perempuan muda dewasa, sekitar 25--32 tahun
-   **Bahasa:** Bahasa Indonesia
-   **Aksen:** Solo / Jawa Tengah, medok tipis dan natural
-   **Tekstur suara:** Warm, soft, slightly husky
-   **Pitch:** Medium, feminin, tidak terlalu tinggi
-   **Intonasi:** Melodi bicara Jawa yang halus
-   **Artikulasi:** Jelas, santai, tidak kaku
-   **Kepribadian suara:** Tenang, matang, cerdas, sopan, dan
    approachable

Aksen Jawa harus muncul secara alami melalui pengucapan vokal, ritme
bicara, dan intonasi. Jangan memaksakan logat Jawa pada setiap kata.
Gunakan Bahasa Indonesia sepenuhnya kecuali proyek memang meminta bahasa
lain.

## 3. ElevenLabs Voice Design Description

Gunakan deskripsi berikut sebagai identitas suara pada ElevenLabs Voice
Design. Jangan memasukkan arahan emosi spesifik untuk satu video ke
dalam deskripsi identitas permanen.

> A natural young Indonesian female voice with an authentic subtle Solo
> Javanese accent. Warm, slightly husky, soft, feminine vocal texture
> with a balanced medium pitch. Gentle Javanese melodic intonation,
> natural vowel pronunciation, and relaxed sentence rhythm. Fluent
> Indonesian with subtle Javanese influence. Mature, calm, expressive,
> and approachable. Clear but relaxed articulation. Avoid exaggerated
> dialect, artificial sweetness, robotic speech, and overly formal
> narration.

## 4. Aturan Penulisan Naskah VO

LLM harus menulis naskah untuk didengar, bukan untuk dibaca.

### Wajib

1.  Gunakan Bahasa Indonesia yang natural dan mudah diucapkan.
2.  Utamakan kalimat pendek hingga sedang.
3.  Gunakan struktur percakapan yang wajar.
4.  Variasikan panjang kalimat agar ritme tidak monoton.
5.  Gunakan tanda baca untuk membantu jeda dan napas.
6.  Pertahankan istilah teknis yang memang lebih jelas dalam bahasa
    aslinya.
7.  Tulis angka, singkatan, dan simbol dalam bentuk yang mudah diucapkan
    jika diperlukan.
8.  Periksa setiap kalimat dengan membayangkan seseorang mengucapkannya
    secara spontan.
9.  Gunakan kata sehari-hari jika sesuai dengan konteks dan audiens.
10. Pertahankan makna dan akurasi informasi.

### Hindari

-   Kalimat panjang dengan banyak anak kalimat.
-   Bahasa laporan atau artikel formal.
-   Kata-kata puitis yang dipaksakan.
-   Pengulangan pola kalimat yang sama.
-   Transisi generik dan frasa pengisi yang tidak diperlukan.
-   Terlalu banyak koma atau elipsis.
-   Instruksi produksi yang tercampur ke dalam teks yang akan dibacakan.
-   Mengubah semua kata menjadi bahasa gaul. Gunakan ragam bahasa sesuai
    konten.

Gunakan kata seperti "nggak", "enggak", atau "tidak" berdasarkan
karakter konten. Jangan memaksakan bahasa informal pada tutorial teknis
atau materi profesional.

## 5. Master Delivery Direction

Semua generasi VO harus mengikuti prinsip ini:

-   Berbicara seperti manusia dalam percakapan alami.
-   Jangan terdengar seperti membaca naskah.
-   Gunakan ritme percakapan yang sedikit bervariasi.
-   Berikan perubahan intonasi secara halus.
-   Gunakan artikulasi santai tetapi tetap jelas.
-   Sisipkan napas natural jika model dan proses produksi mendukungnya.
-   Hindari volume, pitch, dan energi yang identik sepanjang narasi.
-   Jangan memaksakan emosi pada kata yang tidak membutuhkannya.
-   Akhiri kalimat secara natural, tidak selalu dengan intonasi turun
    yang sama.

## 6. Delivery Preset Berdasarkan Jenis Konten

Identitas suara tidak berubah. Hanya delivery yang menyesuaikan jenis
konten.

  Jenis konten   Karakter delivery                   Kecepatan awal
  -------------- --------------------------------- ----------------
  Education      Jelas, informatif, approachable        0.95--1.00x
  Tutorial       Sistematis, tegas, natural             0.95--1.00x
  Documentary    Tenang, matang, berwibawa              0.93--0.98x
  Cinematic      Intimate, ekspresif, terkontrol        0.90--0.95x
  Storytelling   Personal, hangat, reflektif            0.88--0.95x
  General        Natural, ramah, conversational         0.95--1.00x

Kecepatan merupakan titik awal pengujian, bukan nilai mutlak. Sesuaikan
dengan kepadatan kata, durasi, dan hasil audio.

### Arahan emosi

-   **Education:** Percaya diri dan jelas. Hindari gaya menggurui.
-   **Tutorial:** Instruktif dan sabar. Beri penekanan pada langkah
    penting.
-   **Documentary:** Tenang dan informatif. Jangan dibuat terlalu
    dramatis.
-   **Cinematic:** Bangun emosi secara bertahap. Gunakan jeda secara
    selektif.
-   **Storytelling:** Seperti berbagi cerita kepada orang dekat. Jujur,
    personal, dan tidak teatrikal.
-   **General:** Profesional tetapi tetap terasa seperti percakapan.

## 7. Jeda, Napas, dan Intonasi

Gunakan jeda sesuai makna kalimat, bukan sekadar mengikuti tanda baca.

Panduan awal:

  Konteks                                     Jeda
  -------------------------------- ---------------
  Koma atau jeda frasa                 150--300 ms
  Akhir kalimat                        300--500 ms
  Pergantian gagasan                   500--800 ms
  Momen reflektif atau emosional     800--1.200 ms

Aturan:

1.  Jangan memberi jeda panjang pada setiap koma.
2.  Berikan jeda lebih panjang hanya pada gagasan penting.
3.  Sisipkan napas kecil secara wajar, jangan di setiap kalimat.
4.  Variasikan naik-turun intonasi mengikuti makna.
5.  Untuk penutup reflektif, turunkan energi secara perlahan jika sesuai
    konteks.
6.  Hindari pola jeda dan intonasi yang terdengar mekanis.

Jika menggunakan ElevenLabs, pilih mekanisme pause yang didukung model
atau API yang digunakan. Jangan menganggap semua model mendukung SSML
atau format jeda yang sama.

## 8. ElevenLabs Settings

Gunakan nilai awal berikut untuk pengujian:

  Parameter                                            Nilai awal
  -------------------- ------------------------------------------
  Stability                                            0.45--0.55
  Similarity Boost                                     0.80--0.85
  Style Exaggeration                                   0.15--0.25
  Speed                                 Mengikuti delivery preset
  Speaker Boost          ON jika tersedia dan hasilnya lebih baik

Ketentuan:

-   Kunci satu `voice_id` untuk seluruh proyek.
-   Gunakan satu model TTS yang sama selama memungkinkan.
-   Simpan konfigurasi dalam satu file terpusat.
-   Jangan mengubah parameter secara acak pada setiap scene.
-   Uji perubahan menggunakan naskah benchmark yang sama.
-   Periksa dukungan parameter pada model ElevenLabs yang dipakai.
    Abaikan parameter yang tidak didukung.
-   Jangan menganggap nilai setting dapat menggantikan kualitas voice
    hasil Voice Design.

## 9. Pemisahan Naskah dan Instruksi Audio

Jangan mencampur arahan produksi dengan teks yang dibacakan.

Pisahkan minimal menjadi:

1.  `narration`: teks yang benar-benar dibacakan.
2.  `delivery_direction`: arahan tempo, emosi, dan intonasi.
3.  `pronunciation_notes`: istilah yang membutuhkan perhatian khusus.
4.  `audio_direction`: musik, ambience, dan sound effect.
5.  `timing_notes`: target durasi dan jeda penting.

Contoh struktur data:

``` json
{
  "content_type": "storytelling",
  "voice_profile": "IDN-F01",
  "delivery_preset": "cinematic",
  "voice_settings": {
    "stability": 0.5,
    "similarity_boost": 0.85,
    "style": 0.2,
    "speed": 0.9
  },
  "delivery_direction": "Intimate, reflective, natural, slightly melancholic.",
  "narration": [
    {
      "text": "Aku nggak tahu sejak kapan semuanya mulai berubah.",
      "pause_after_ms": 500
    },
    {
      "text": "Mungkin, kita memang tumbuh tanpa benar-benar menyadarinya.",
      "pause_after_ms": 800
    }
  ],
  "pronunciation_notes": [],
  "audio_direction": {
    "music": "Minimalist piano ambient",
    "music_level": "Below narration",
    "reverb": "Very subtle"
  }
}
```

Contoh ini adalah struktur internal proyek. Sesuaikan payload akhir
dengan API dan format input ElevenLabs yang benar-benar digunakan.

## 10. Audio Post-Processing

Lakukan pemrosesan setelah TTS, bukan dengan memaksakan seluruh karakter
audio melalui prompt.

Prioritas:

1.  Potong silence yang tidak diperlukan tanpa memotong napas natural.
2.  Periksa clipping dan noise.
3.  Samakan loudness antarsegmen.
4.  Gunakan EQ secara ringan untuk menjaga kejernihan vokal.
5.  Gunakan compression secukupnya agar level suara stabil.
6.  Gunakan reverb sangat tipis jika sesuai kebutuhan.
7.  Atur musik agar tidak menutupi artikulasi.
8.  Sisakan ruang setelah kalimat terakhir jika musik membutuhkan tail.

Jangan menerapkan efek yang membuat suara kehilangan tekstur natural.

## 11. Quality Control Sebelum Render

Setiap hasil VO harus melewati pemeriksaan berikut:

-   [ ] Identitas suara tetap sesuai IDN-F01.
-   [ ] Aksen Solo terdengar tipis dan natural.
-   [ ] Bahasa Indonesia jelas dan lancar.
-   [ ] Tidak terdengar seperti membaca teks secara kaku.
-   [ ] Tidak ada pengucapan istilah yang keliru.
-   [ ] Tempo sesuai jenis konten.
-   [ ] Intonasi tidak monoton.
-   [ ] Jeda tidak berlebihan.
-   [ ] Napas tidak terpotong secara tidak natural.
-   [ ] Tidak ada clipping atau perubahan volume mendadak.
-   [ ] Musik tidak menutupi suara.
-   [ ] Durasi sesuai kebutuhan video.

Jika hasil gagal pada aspek pengucapan atau naturalness, revisi teks
atau delivery direction terlebih dahulu. Jangan langsung mengubah
identitas voice.

## 12. Benchmark Voice

Buat satu naskah benchmark berdurasi 30--45 detik yang mencakup:

-   Kalimat percakapan informal.
-   Kalimat informatif.
-   Istilah teknis atau kata serapan.
-   Kalimat reflektif.
-   Kalimat dengan tanda tanya.
-   Kalimat penutup.

Simpan audio benchmark sebagai referensi utama. Bandingkan setiap
perubahan voice, model, atau setting dengan audio tersebut.

## 13. Instruksi Wajib untuk LLM Lokal

Salin instruksi berikut ke system prompt atau global rules agen pembuat
VO:

> You are the Voice-over Script Director for the Remotion project.
>
> Always use master voice profile IDN-F01: a natural Indonesian female
> voice with a subtle Solo Javanese accent, warm, soft, slightly husky,
> and medium-pitched.
>
> Write scripts for natural spoken delivery, never as formal written
> articles. Preserve fluent Indonesian and subtle Javanese vocal
> characteristics without exaggerating the dialect.
>
> Adapt delivery direction to the content type while keeping the same
> voice identity. Control pacing, emotional intensity, pauses,
> breathing, and intonation according to the meaning of each sentence.
>
> Keep narration separate from production instructions. Never place
> music, sound effects, stage directions, or technical notes inside
> spoken text.
>
> Prioritize natural human conversation, clear pronunciation, and
> authentic vocal rhythm over poetic wording or excessive dramatization.
>
> Before returning a script, check pronunciation, sentence flow, pacing,
> emotional consistency, and suitability for ElevenLabs TTS.
>
> Never create or select a different voice identity unless explicitly
> requested.

## 14. Aturan Integrasi Remotion

-   Simpan Master Voice Profile pada konfigurasi terpusat.
-   Jangan menulis `voice_id` berulang di banyak komponen.
-   Pisahkan script generation, TTS generation, audio processing,
    subtitle generation, dan Remotion composition.
-   Simpan metadata TTS untuk setiap hasil audio, termasuk voice ID,
    model ID, setting, preset, dan versi naskah.
-   Gunakan cache berdasarkan teks, voice ID, model, setting, dan
    parameter generasi agar audio tidak dibuat ulang tanpa kebutuhan.
-   Pastikan subtitle mengikuti hasil audio final, bukan sekadar
    perkiraan durasi teks.
-   Jangan mengubah suara atau audio yang sudah lolos QC tanpa alasan
    yang jelas.

------------------------------------------------------------------------

## Prinsip Utama

**One Voice Identity, Multiple Delivery Styles.**

Karakter suara IDN-F01 harus tetap konsisten di seluruh proyek. Yang
boleh berubah adalah cara penyampaiannya, sesuai tujuan dan emosi setiap
video.

Naturalness, kejelasan pengucapan, dan konsistensi identitas suara
adalah prioritas utama.
