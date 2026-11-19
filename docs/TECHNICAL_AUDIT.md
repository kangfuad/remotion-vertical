# TECHNICAL AUDIT & GAP ANALYSIS REPORT
## Automated Cinematic Video Production Engine

**Document Type:** Technical Audit & Gap Analysis  
**Project:** Remotion Cinematic Video Automation (`remotion-vertical`)  
**Target Video Profile:** 1080 × 1920 (9:16 Vertical), 30 FPS, 30–60s duration, MP4 + SRT  
**Audit Date:** 2026-11-19  
**Auditor:** Senior Software Architect & Remotion Engineer  

---

## 1. Executive Summary

### Overall Project Condition
The project located at `/Users/auri/fuad/PROJECT/YT/remotion-vertical` is currently a **working functional prototype and foundation**. It possesses an operational Remotion 4.0 runtime capable of rendering 1080×1920 vertical video (`Aturan2Menit.mp4`, 29.1s) with programmatic animations, audio ducking, and segmented visual typography. Additionally, the `cinematic-skill` (`cinematic-film`) repository has been installed globally on the host machine with all Python and Skia dependencies validated.

### Key Strengths
1. **Proven Rendering Pipeline:** Remotion bundles and renders reliably using the local macOS Chrome engine (`/Applications/Google Chrome.app`) with zero external network downloads required during build.
2. **Deterministic Frame Timeline:** The baseline composition (`Aturan2Menit`) uses structured JSON (`public/content-script.json`) driving frame-accurate sequences and audio placement.
3. **Low-Latency Local Prototyping:** Frame-level inspection (`remotion still`) runs in under 800ms per still.

### Primary Technical Gaps
1. **No End-to-End Orchestrator (P0):** There is currently no unified script or CLI command that takes a single user prompt, calls an LLM, generates voiceover/assets, compiles a storyboard, and triggers Remotion automatically.
2. **Unintegrated External Skills (P1):** The `cinematic-film` skill (Python/Skia) is installed locally on the system but not bridged to the Remotion (React/TypeScript) workflow.
3. **Word-Level Subtitle & SRT Export Missing in Main Video (P0):** The template includes TikTok-style captions for pre-rendered video (`CaptionedVideo`), but the newly generated programmatic video (`ShortVideo`) uses sentence-level cards with static highlights rather than word-synchronized captions and does not export an `.srt` file.
4. **Cloud TTS & Asset Provider Abstraction Missing (P1):** Narration currently relies on local macOS `say -v Damayanti`. There is no modular provider abstraction for ElevenLabs, OpenAI TTS, or image/video generation APIs.
5. **Automated Quality Control (QA) Missing (P1):** No automated probe exists to detect black frames, audio clipping, or duration discrepancy post-render.

### Production Readiness
* **Current Status:** **Prototype / Foundation Ready** (~35% of Target Vision).
* **Effort to Full Automation:** Requires an Orchestration Layer, Storyboard Schema (Zod), Multi-Provider VO/Whisper pipeline, and Synchronized Caption/SRT Exporter.

---

## 2. Repository Overview

* **Root Directory:** `/Users/auri/fuad/PROJECT/YT/remotion-vertical`
* **Node Runtime:** Node.js v24.7.0 | npm 11.5.1
* **Language:** TypeScript 5.9.3
* **Framework:** React 19.3.1 | Remotion 4.0.545
* **Media Backend:** FFmpeg (`/opt/homebrew/bin/ffmpeg`) | Chrome (`/Applications/Google Chrome.app`)
* **Installed Packages:**
  * `@remotion/cli` (4.0.545)
  * `remotion` (4.0.545)
  * `@remotion/captions` (4.0.545)
  * `@remotion/install-whisper-cpp` (4.0.545)
  * `@remotion/animation-utils`, `@remotion/layout-utils`, `@remotion/media-utils` (4.0.545)
  * `zod` (4.6.7)
* **Installed Agent Skills:**
  * `cinematic-film` (`~/.gemini/config/skills/cinematic-film` & `~/.gemini/skills/cinematic-film`)

---

## 3. Feature Audit Matrix

| Module | Feature | Status | Priority | Evidence / Existing Implementation | Technical Gap / Recommended Action |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Remotion** | Vertical 9:16 Composition | **IMPLEMENTED** | P0 | `src/Root.tsx`, `src/ShortVideo/index.tsx` (1080x1920 @ 30fps) | None. Working and verified. |
| **Remotion** | Data-driven Timeline | **IMPLEMENTED** | P0 | `src/Root.tsx`, `public/content-script.json` | Needs Zod schema validation on JSON input. |
| **Remotion** | Reusable Scene Components | **PARTIAL** | P1 | `src/ShortVideo/SegmentCard.tsx`, `Background.tsx` | Needs modular scene types (Stat counter, Split screen, Quote card, Visual hero). |
| **Remotion** | Camera & Motion Simulation | **PARTIAL** | P2 | Floating ambient layers via `interpolate` in `Background.tsx` | True camera pan/zoom/shake primitives not yet abstracted into reusable wrapper. |
| **VO Pipeline** | Script Generation | **PARTIAL** | P0 | Tested manually via Python script | Missing automated LLM Creative Director prompt generator. |
| **VO Pipeline** | Local TTS (Indonesian) | **IMPLEMENTED** | P1 | macOS `say -v Damayanti` generating `.mp3` segments | Works for offline/scratch; lacks natural conversational tone of neural models. |
| **VO Pipeline** | Cloud TTS (ElevenLabs/OpenAI) | **MISSING** | P1 | No provider code in repository | Implement unified `TtsProvider` interface with ElevenLabs / OpenAI fallback. |
| **VO Pipeline** | Word-Level Timestamps | **PARTIAL** | P0 | Supported in `sub.mjs` via Whisper.cpp, but configured for `medium.en` | Update Whisper to multi-language/Indonesian or use TTS word timestamp payloads. |
| **Subtitle** | Kinetic / Word-by-Word Subtitles | **PARTIAL** | P0 | Exists in `src/CaptionedVideo` via `@remotion/captions`, missing in `ShortVideo` | Integrate `@remotion/captions` directly into `ShortVideo` timeline. |
| **Subtitle** | SRT Export | **MISSING** | P0 | No SRT generation script in `remotion-vertical` | Add automatic `.srt` file generation during or post render. |
| **Audio** | Music Ducking | **IMPLEMENTED** | P1 | `Audio volume={(f) => ...}` in `src/ShortVideo/index.tsx` | Volume ducking curve works; add automatic ducking triggered by voiceover presence. |
| **Audio** | Sound Effects (SFX) | **MISSING** | P2 | No SFX triggers on card entrance or key highlights | Add whoosh/pop/hit audio cues synchronized to scene entry springs. |
| **AI Director** | Storyboard Generator | **MISSING** | P0 | No storyboard generator module | Build TypeScript LLM orchestrator producing validated Storyboard JSON. |
| **Asset Pipeline**| Visual Asset Generation | **MISSING** | P2 | Relies on CSS gradients and motion typography | Add provider abstraction for AI image generation (Flux/OpenAI) or stock footage fetch. |
| **Timeline** | Timeline Compiler | **PARTIAL** | P0 | Segment calculation script in `public/content-script.json` | Centralize into a deterministic TypeScript compiler: `compileTimeline(storyboard)`. |
| **Rendering** | Automated Render Engine | **IMPLEMENTED** | P0 | `npx remotion render Aturan2Menit out/Aturan2Menit.mp4` | Verified output (1080x1920, 30fps, 5.7 MB). |
| **Quality Control**| Automated Post-Render QA | **MISSING** | P1 | No verification script | Create `scripts/qa.ts` checking duration, black frames, audio peaks, and stream validity. |
| **Orchestration**| Single-Command Generation | **MISSING** | P0 | Steps are currently executed in disjointed scripts | Build `generate.ts` CLI tool (`npm run generate -- --prompt "..."`). |

---

## 4. Installed Skills Audit

### 1. `cinematic-film` (Moh4696/cinematic-skill)
* **Location:** `~/.gemini/config/skills/cinematic-film` & `~/.gemini/skills/cinematic-film`
* **Status:** **INSTALLED ONLY (Available but not integrated)**
* **Technology Stack:** Python 3.9, Skia (`skia-python`), FFmpeg, NumPy, Pillow.
* **Core Capabilities:**
  * Beat sheet generation and duration validation (`make_beats.py`).
  * Narrative structure rules (one hero per line, spoken hit timing, reading speed rules).
  * Synthesized SFX generation from cue lists (`build_sfx.py`).
  * Wikimedia Commons archival image scraping with license verification (`fetch_commons.py`).
  * Audio mixing with `loudnorm` and `sidechaincompress` (`mix_soundtrack.py`).
* **Overlap with Remotion:**
  * The Skia-based rendering engine (`scene.py`, `render.py`) competes directly with Remotion. Remotion is vastly superior for web-based UI, typography, React ecosystems, and CSS layouts.
* **Recommended Skill Role:**
  * **Keep Remotion as the sole final rendering engine.**
  * Extract and reuse `cinematic-film`'s audio mastering filters (FFmpeg loudness normalization), narrative linting rules, and public-domain asset scraper as pre-processing utilities.

---

## 5. Voice Over & Subtitle Audit

### Voice Over Status
* **Current Implementation:** Local macOS speech synthesis (`say -v Damayanti -r 185`). Audio segments are converted to MP3 via FFmpeg and saved in `public/seg_*.mp3`.
* **Strengths:** 100% free, zero external API keys needed, works offline, rapid turnaround.
* **Weaknesses:** Voice delivery is relatively flat; lack of emotional inflection and whisper/emphasis control typical of modern short-form video.
* **Gap:** No abstraction layer allowing interchangeable TTS engines (e.g., ElevenLabs / OpenAI TTS / Azure Speech / Local).

### Subtitle Status
* **Existing Implementations:**
  1. `src/CaptionedVideo/`: Uses `@remotion/captions` with `createTikTokStyleCaptions`. Reads an external `.json` file generated by `sub.mjs` (Whisper.cpp).
  2. `src/ShortVideo/`: Uses card-based typography with custom highlight spans. It animates phrases on a per-segment basis, but does **not** highlight individual words dynamically as they are spoken.
* **Whisper Configuration:** `whisper-config.mjs` currently defaults to `medium.en` (English). For Indonesian content, it must be changed to multilingual `medium` or `small` with `WHISPER_LANG = "id"`.
* **SRT Export:** Currently absent. Remotion does not output an `.srt` file unless explicitly compiled from the caption dataset.

---

## 6. Architecture Assessment

```
CURRENT ARCHITECTURE (Disjointed):
[User Topic]
   ↓ (Manual / Ad-hoc script)
[macOS say TTS] → [FFmpeg MP3s] → [content-script.json]
                                         ↓
                                 [Remotion Root.tsx]
                                         ↓
                                [out/Aturan2Menit.mp4]
```

### Architectural Deficiencies
1. **Coupling between data and assets:** File paths in `public/` are hardcoded rather than managed through a temporary run-scoped working directory.
2. **Missing Storyboard Schema:** `content-script.json` is loosely typed without strict Zod schema validation.
3. **No Central Pipeline Controller:** Transitioning from idea to video requires running separate manual commands.

```
TARGET ARCHITECTURE (Automated & Modular):
[User Prompt / Topic]
         ↓
  [AI Creative Director]  ← (Narrative rules from cinematic-skill)
         ↓
  [Storyboard Schema (Zod)]
         ↓
  [Voice Over Engine]  → (ElevenLabs / OpenAI / Local fallback)
         ↓
  [Speech Aligner]     → (Whisper / Native word timestamps)
         ↓
  [Timeline Compiler]  → (Calculates frame boundaries, subtitles, SFX cues)
         ↓
  [Remotion Engine]    → (Modular scene compositions)
         ↓
  [Post-Render QA]     → (FFprobe validation & SRT export)
         ↓
  [Final MP4 + SRT]
```

---

## 7. Gap Analysis & Priorities

### P0 - Critical (Core Functional Pipeline)
1. **Storyboard Schema & Contract:** Define `Storyboard.ts` with Zod validation (scenes, voiceover, layout, transitions, audio).
2. **Timeline Compiler:** Centralize deterministic calculation of frame timestamps, scene lengths, and caption timings from audio durations.
3. **Word-by-Word Synchronized Subtitle Component:** Add real-time kinetic captioning inside `ShortVideo` using `@remotion/captions`.
4. **SRT File Generation:** Output an `.srt` file alongside the rendered MP4.
5. **CLI Runner (`generate.ts`):** Single entry point script executing VO generation, timeline compilation, and Remotion render.

### P1 - High (Production Reliability & Automation)
1. **TTS Provider Abstraction:** Support ElevenLabs and OpenAI TTS with fallback to local TTS (`say`).
2. **Automated Quality Control (`qa.ts`):** Validate container integrity, resolution, frame count, audio clipping, and black frames.
3. **Whisper Indonesian Configuration:** Configure Whisper.cpp for Indonesian language transcription fallback.
4. **Dynamic Scene Layouts:** Create 3–4 standard scene templates (Stat Counter, Hero Quote, Split Concept, Call-to-Action).

### P2 - Medium (Visual Quality & Polish)
1. **Sound Effects (SFX) Integration:** Synthesize or load audio cues (whooshes, pops) on card entry.
2. **Visual Asset Fallback Pipeline:** Fetch stock background images or generate AI stills with subtle Ken Burns camera pan/zoom.
3. **Audio Normalization:** Enforce -14 LUFS integrated loudness via FFmpeg `loudnorm`.

### P3 - Low (Enhancements)
1. **Vision AI Review:** Sample frames sent to multimodal LLM for aesthetic feedback.
2. **Multi-Platform Aspect Ratio Export:** Support 16:9 landscape export profile alongside 9:16 vertical.

---

## 8. Recommended Technology Stack Comparison

| Role | Preferred Technology | Current Repo State | Action Required |
| :--- | :--- | :--- | :--- |
| **Runtime** | Node.js 22+ LTS | Node.js v24.7.0 | Keep. Already satisfied. |
| **Engine** | Remotion 4.0 | Remotion 4.0.545 | Keep. Working optimally. |
| **Language** | TypeScript | TypeScript 5.9.3 | Keep. |
| **Validation** | Zod | Zod 4.6.7 | Keep. Implement Storyboard schema. |
| **Captions** | `@remotion/captions` | Installed (v4.0.545) | Integrate into `ShortVideo`. |
| **Alignment** | Native TTS / Whisper.cpp | Whisper.cpp installed | Configure for Indonesian (`id`). |
| **TTS Engine** | Multi-provider (ElevenLabs/Local) | Local `say` only | Add provider abstraction. |
| **Audio Processing**| FFmpeg | FFmpeg installed (`/opt/homebrew/bin/ffmpeg`) | Keep. Native and fast. |

---

## 9. Phased Implementation Roadmap

### Phase 1: Foundation & Subtitle Synchronization (P0)
* **Goal:** Upgrade `ShortVideo` to support true word-by-word synchronized subtitles and automated SRT export.
* **Deliverables:**
  * `src/schema/storyboard.ts` (Zod validation).
  * `src/components/KineticSubtitle.tsx` (Word-level animated captions).
  * `scripts/export-srt.ts` (Generates `.srt` from transcript).
* **Acceptance Criteria:** Video renders with karaoke-style highlighted captions matching spoken words, plus a verified `.srt` file.

### Phase 2: AI Orchestrator & Multi-Provider VO (P1)
* **Goal:** Enable prompt-to-video generation from a single command.
* **Deliverables:**
  * `src/services/tts/` (Provider abstraction: ElevenLabs, OpenAI, Local).
  * `src/services/llm/` (Creative Director prompt generating Storyboard JSON).
  * `scripts/generate.ts` (Orchestrates LLM → VO → Timeline → Render).
* **Acceptance Criteria:** Running `npm run generate -- --topic "Tips Fokus Kerja"` produces a finished MP4 and SRT without manual intervention.

### Phase 3: Visual Diversity & Sound Design (P2)
* **Goal:** Enhance aesthetic quality with dynamic scene templates, background footage, and SFX.
* **Deliverables:**
  * Scene templates: `StatHighlight`, `SplitComparison`, `KineticText`.
  * Audio mixer with SFX cues (whoosh on transition, click on keyword).
  * FFmpeg loudness normalization (-14 LUFS).
* **Acceptance Criteria:** Diverse visual templates render seamlessly across multiple scenes with ducked audio and SFX.

### Phase 4: Automated Quality Control & Robustness (P1/P3)
* **Goal:** Zero manual inspection required for production batches.
* **Deliverables:**
  * `scripts/qa.ts` (Post-render automated testing).
  * Checkpoint and retry mechanics for failed stages.
* **Acceptance Criteria:** Pipeline flags corrupted frames or audio clipping and re-renders problematic segments automatically.

---

## 10. Definition of Done (Production Ready)

The system is considered production-ready when:
1. **Single-Command Execution:** Executing `npm run generate -- --prompt "<topic>"` runs from start to finish without manual intervention.
2. **Strict Schema Validation:** Storyboard JSON passes Zod validation before rendering.
3. **High-Fidelity Audio:** Voiceover is cleanly generated and mixed with background music (-14 LUFS target).
4. **Word-Level Subtitles:** On-screen captions synchronize with speech with <100ms drift.
5. **Dual Artifact Output:** Both `.mp4` (1080×1920 @ 30fps) and matching `.srt` are generated in `out/`.
6. **Automated QA Passed:** Post-render script confirms valid container, no black frames, and audio stream integrity.
7. **Graceful Degradation:** If cloud TTS/AI fails, system falls back to local TTS/templates rather than crashing.

---

## 11. Final Recommendations

1. **What to retain:** Retain the current Remotion setup, Rspack configuration, local Chrome headless launcher, and React 19 architecture.
2. **What to improve:** Centralize timeline math into a reusable compiler and replace sentence cards with word-level synchronized captions.
3. **What to add:** A unified Storyboard Zod schema, a single-command CLI orchestrator, and an automated QA script.
4. **What NOT to add:** Do not port the Skia rendering engine from `cinematic-skill` into Remotion. Do not introduce redundant audio editing libraries when Remotion and FFmpeg already handle audio ducking and mixing natively.
5. **Recommended First Implementation Task:** Implement `src/schema/storyboard.ts` and integrate `@remotion/captions` into `ShortVideo` to achieve word-synchronized subtitle rendering and SRT export.
