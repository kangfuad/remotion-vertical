import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const PROJECT_DIR = "/Users/auri/fuad/PROJECT/YT/remotion-vertical";
const STORAGE_DIR = path.join(PROJECT_DIR, "storage/projects/EDU-SQL-NOSQL-001");
const PUBLIC_DIR = path.join(PROJECT_DIR, "public/edu-sql");
const OUTPUT_DIR = path.join(PROJECT_DIR, "output");

const envContent = fs.readFileSync(path.join(PROJECT_DIR, ".env"), "utf8");
const apiKey = envContent.match(/ELEVENLABS_API_KEY=(.*)/)[1].trim();

// Master Voice Profile: IDN-F01 (Loaded from centralized config)
const voProfile = JSON.parse(fs.readFileSync(path.join(PROJECT_DIR, "config/vo-profile.json"), "utf8"));
const voiceId = voProfile.voiceId;
const modelId = voProfile.modelId;

// Clean proper text with authentic Indonesian phrasing and standard technical terminology
const sceneDefinitions = [
  {
    id: 1,
    name: "Opening Hook",
    pauseSec: 0.4,
    text: "Pernah kepikiran nggak, gimana jutaan data aplikasi yang kita pakai tiap hari disimpan? Ada dua kubu besar: SQL dan NoSQL."
  },
  {
    id: 2,
    name: "What is SQL?",
    pauseSec: 0.4,
    text: "SQL itu ibarat lemari arsip super rapi. Semua data disimpan dalam tabel, baris, dan kolom dengan skema yang teratur."
  },
  {
    id: 3,
    name: "SQL Query",
    pauseSec: 0.5,
    text: "Mau ambil data? Tinggal tulis query seperti SELECT, WHERE, dan JOIN. Hasilnya pasti presisi dan konsisten."
  },
  {
    id: 4,
    name: "What is NoSQL?",
    pauseSec: 0.4,
    text: "Beda cerita dengan NoSQL. Dia jauh lebih fleksibel. Formatnya mirip dokumen JSON, jadi strukturnya bebas berkembang kapan saja."
  },
  {
    id: 5,
    name: "Key Differences",
    pauseSec: 0.5,
    text: "Kuncinya: SQL unggul di relasi tabel dan konsistensi. Sedangkan NoSQL unggul di fleksibilitas dan mudah di-scale ke banyak server."
  },
  {
    id: 6,
    name: "When to Use Each?",
    pauseSec: 0.4,
    text: "Gunakan SQL untuk transaksi penting seperti perbankan. Tapi untuk aplikasi cepat seperti medsos atau e-commerce, NoSQL jagonya."
  },
  {
    id: 7,
    name: "Closing",
    pauseSec: 1.5,
    text: "Jadi, nggak ada yang paling hebat. Pilih database yang paling pas buat kebutuhan sistem kamu."
  }
];

function formatSrtTimestamp(seconds) {
  const date = new Date(0);
  date.setMilliseconds(seconds * 1000);
  const iso = date.toISOString();
  return iso.substring(11, 23).replace(".", ",");
}

async function run() {
  console.log("=== Generating Clean Conversational Voice Over & Subtitles ===");
  const FPS = 30;
  let currentFrame = 0;
  const scenesOut = [];
  const allWords = [];

  for (const def of sceneDefinitions) {
    console.log(`\nGenerating Scene ${def.id}: ${def.name}...`);
    const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`, {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: def.text, // Clean proper text (SQL, NoSQL, JSON, SELECT, WHERE, JOIN)
        model_id: modelId,
        voice_settings: voProfile.voiceSettings
      })
    });

    if (!res.ok) {
      console.error(`Error on Scene ${def.id}:`, res.status, await res.text());
      process.exit(1);
    }

    const data = await res.json();
    const audioBuf = Buffer.from(data.audio_base64, "base64");
    const audioName = `scene_${def.id}.mp3`;
    const storagePath = path.join(STORAGE_DIR, "audio", audioName);
    const publicPath = path.join(PUBLIC_DIR, audioName);

    fs.writeFileSync(storagePath, audioBuf);
    fs.writeFileSync(publicPath, audioBuf);

    // Measure actual duration
    const durStr = execSync(
      `ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "${publicPath}"`
    ).toString().trim();
    const audioDuration = parseFloat(durStr);

    const audioFrames = Math.ceil(audioDuration * FPS);
    const pauseFrames = Math.ceil(def.pauseSec * FPS);
    const sceneDurationFrames = audioFrames + pauseFrames;

    const startFrame = currentFrame;
    const endFrame = startFrame + sceneDurationFrames;
    const startSec = startFrame / FPS;
    const endSec = endFrame / FPS;

    // Character alignment to words
    const chars = data.alignment.characters;
    const charStarts = data.alignment.character_start_times_seconds;
    const charEnds = data.alignment.character_end_times_seconds;

    const words = [];
    let curWord = "";
    let wStart = null;
    let wEnd = null;

    for (let c = 0; c < chars.length; c++) {
      const ch = chars[c];
      if (/\s/.test(ch)) {
        if (curWord.length > 0) {
          words.push({
            word: curWord,
            startSec: startSec + wStart,
            endSec: startSec + wEnd,
            startMs: Math.round((startSec + wStart) * 1000),
            endMs: Math.round((startSec + wEnd) * 1000)
          });
          curWord = "";
          wStart = null;
          wEnd = null;
        }
      } else {
        if (wStart === null) wStart = charStarts[c];
        wEnd = charEnds[c];
        curWord += ch;
      }
    }
    if (curWord.length > 0) {
      words.push({
        word: curWord,
        startSec: startSec + wStart,
        endSec: startSec + wEnd,
        startMs: Math.round((startSec + wStart) * 1000),
        endMs: Math.round((startSec + wEnd) * 1000)
      });
    }

    allWords.push(...words);

    scenesOut.push({
      id: def.id,
      name: def.name,
      text: def.text,
      audioDuration,
      pauseSec: def.pauseSec,
      startFrame,
      durationFrames: sceneDurationFrames,
      endFrame,
      startSec,
      endSec,
      audioFile: audioName
    });

    console.log(`  Audio: ${audioDuration.toFixed(2)}s | Pause: ${def.pauseSec}s | Frames: ${startFrame} -> ${endFrame}`);
    currentFrame = endFrame;
  }

  const totalFrames = currentFrame;
  const totalDurationSec = totalFrames / FPS;

  console.log(`\nTotal Duration: ${totalDurationSec.toFixed(2)}s (${totalFrames} frames @ ${FPS} FPS)`);

  // Storyboard
  const storyboard = {
    projectId: "EDU-SQL-NOSQL-001",
    title: "SQL vs NoSQL Database: What's the Difference?",
    fps: FPS,
    totalFrames,
    totalDurationSec,
    scenes: scenesOut
  };
  fs.writeFileSync(path.join(PUBLIC_DIR, "storyboard.json"), JSON.stringify(storyboard, null, 2));
  fs.writeFileSync(path.join(STORAGE_DIR, "storyboard.json"), JSON.stringify(storyboard, null, 2));

  // Transcript
  const transcript = {
    projectId: "EDU-SQL-NOSQL-001",
    totalWords: allWords.length,
    words: allWords,
    scenes: scenesOut
  };
  fs.writeFileSync(path.join(PUBLIC_DIR, "transcript.json"), JSON.stringify(transcript, null, 2));
  fs.writeFileSync(path.join(STORAGE_DIR, "transcript.json"), JSON.stringify(transcript, null, 2));

  // SRT file
  let srt = "";
  let idx = 1;
  const CHUNK_SIZE = 4;
  for (let i = 0; i < allWords.length; i += CHUNK_SIZE) {
    const chunk = allWords.slice(i, i + CHUNK_SIZE);
    const start = chunk[0].startSec;
    const end = chunk[chunk.length - 1].endSec;
    const phrase = chunk.map(w => w.word).join(" ");
    srt += `${idx}\n${formatSrtTimestamp(start)} --> ${formatSrtTimestamp(end)}\n${phrase}\n\n`;
    idx++;
  }
  fs.writeFileSync(path.join(OUTPUT_DIR, "sql-vs-nosql.srt"), srt);
  console.log(`Updated clean SRT written to ${path.join(OUTPUT_DIR, "sql-vs-nosql.srt")}`);

  // Re-master BGM with smooth loop and fade out
  const rawBgm = path.join(STORAGE_DIR, "audio", "bgm_sample.mp3");
  const finalBgmStorage = path.join(STORAGE_DIR, "audio", "bgm_master.mp3");
  const finalBgmPublic = path.join(PUBLIC_DIR, "bgm_master.mp3");
  const fadeStart = Math.max(0, totalDurationSec - 2.5);
  execSync(
    `ffmpeg -y -stream_loop 6 -i "${rawBgm}" -t ${Math.ceil(totalDurationSec)} -af "afade=t=in:ss=0:d=0.8,afade=t=out:st=${fadeStart}:d=2.5" "${finalBgmStorage}"`,
    { stdio: "inherit" }
  );
  fs.copyFileSync(finalBgmStorage, finalBgmPublic);
  console.log(`BGM mastered to ${Math.ceil(totalDurationSec)}s`);
}

run().catch(err => {
  console.error("Pipeline error:", err);
  process.exit(1);
});
