# CINEMATIC ENGINE
## Technical Audit & Gap Analysis Specification

**Document Type:** Repository Audit Instructions  
**Target:** Local LLM / Coding Agent  
**Project:** Remotion Cinematic Video Automation  
**Target Video Duration:** 30–60 seconds  
**Target Resolution:** 1080 × 1920  
**Target FPS:** 30  
**Output:** MP4 + SRT  
**Automation Level:** Full Automation

---

# 1. ROLE & OBJECTIVE

Act as a Senior Software Architect, Remotion Engineer, AI Video Production Engineer, and Technical Auditor.

Your task is to perform a comprehensive technical audit of the existing project.

The project uses Remotion and the cinematic-skill repository:

https://github.com/Moh4696/cinematic-skill

The goal is to build a fully automated cinematic video production engine.

Before implementing anything, inspect the existing repository and identify:

1. What has already been implemented.
2. What is partially implemented.
3. What is missing.
4. What is installed but not integrated.
5. What is integrated but not used.
6. What needs improvement.
7. What should not be added because equivalent functionality already exists.

**IMPORTANT: This is an audit task, NOT an implementation task.**

Do not modify source code, install packages, create files, change configuration, or execute destructive commands.

Produce a technical audit report first.

# 2. TARGET SYSTEM

The intended system should accept a simple prompt, topic, or script and automatically produce a complete cinematic video.

Expected workflow:

Input
→ AI Creative Director
→ Script Generator
→ Storyboard Generator
→ Voice Generation
→ Visual Asset Generation
→ Music & Sound Effects
→ Speech Alignment
→ Subtitle Generation
→ Timeline Compiler
→ Remotion Composition
→ Rendering
→ Quality Control
→ Final MP4 + SRT

The system should support multiple cinematic styles and reusable scene components.

# 3. AUDIT SCOPE

## A. Repository & Architecture

Inspect:

- Project directory structure.
- Package manager and runtime.
- Node.js and TypeScript configuration.
- React and Remotion versions.
- Existing architectural patterns.
- Environment configuration.
- Existing scripts.
- Installed dependencies.
- Existing AI provider integrations.
- Existing storage and cache mechanisms.

Determine whether the architecture supports:

- Modular components.
- Reusable scene compositions.
- Data-driven rendering.
- Provider abstraction.
- Automated job orchestration.
- Retry and checkpoint mechanisms.
- Multiple output profiles.

Do not recommend restructuring the entire project if its existing architecture is sufficient.

## B. Remotion Engine

Inspect the existing Remotion implementation.

Check:

- Root.tsx.
- Composition registration.
- Dynamic composition props.
- Scene sequencing.
- Timeline calculations.
- Frame-based animation.
- Interpolation.
- Spring animation.
- Transitions.
- Audio integration.
- Video integration.
- Image integration.
- Rendering configuration.
- Preview functionality.
- Rendering performance.

Evaluate whether the system supports:

- Dynamic scene generation from JSON.
- Reusable cinematic components.
- Dynamic scene duration.
- Scene-level animation.
- Camera movement.
- Multiple visual layers.
- Dynamic typography.
- Audio synchronization.
- Subtitle synchronization.

Identify any rendering logic that duplicates functionality already provided by Remotion.

## C. Cinematic Skill Integration

Inspect the installed cinematic-skill.

Repository:
https://github.com/Moh4696/cinematic-skill

Determine:

- Whether the skill is installed.
- Its actual installation location.
- Available instructions and scripts.
- Available dependencies.
- Its actual capabilities.
- Whether it uses Python, Skia, FFmpeg, or other rendering technologies.
- Which functions are useful for the Remotion workflow.
- Which functions overlap with Remotion.
- Whether it is integrated or only available as reference material.

Do not assume that installing a skill means its capabilities are integrated into the application.

Classify each capability:

1. Available and integrated.
2. Available but not integrated.
3. Partially integrated.
4. Missing.
5. Redundant with existing functionality.

Remotion should remain the primary final rendering engine.

Cinematic-skill should provide cinematic production knowledge and useful preprocessing capabilities without creating a competing final rendering pipeline.

## D. AI Creative Director

Inspect whether the system has an AI planning module.

Expected responsibilities:

- Analyze the user's prompt.
- Determine the video concept.
- Select cinematic style.
- Generate storytelling structure.
- Create opening hooks.
- Define emotional progression.
- Generate visual directions.
- Select appropriate scene types.
- Define camera movements.
- Determine transition styles.
- Define audio direction.

Check whether the system separates creative planning from rendering implementation.

The LLM should generate structured data rather than unrestricted React code.

## E. Storyboard & JSON Schema

Inspect existing storyboard contracts and validation.

Expected storyboard fields:

- Project metadata.
- Video duration.
- Resolution.
- FPS.
- Cinematic style.
- Mood.
- Scene IDs.
- Scene durations.
- Visual descriptions.
- Asset references.
- Camera movements.
- Text overlays.
- Voice-over references.
- Subtitle references.
- Transition definitions.
- Audio events.
- Timeline information.

Check:

- Schema validation.
- Type safety.
- Duration consistency.
- Frame calculations.
- Scene overlap handling.
- Asset reference validation.
- Missing field handling.

Determine whether the storyboard can be generated dynamically by an LLM and consumed directly by Remotion.

## F. Voice Over Pipeline

This section is HIGH PRIORITY.

Inspect all existing VO functionality.

Expected architecture:

Script Generator
→ Voice Director
→ TTS Provider
→ Audio Processing
→ Speech Alignment
→ Transcript JSON

Check for:

### Script Generator

- Automatic narration generation.
- Indonesian language support.
- Script length control.
- Duration estimation.
- Storytelling quality.
- Sentence segmentation.
- Pronunciation handling.

### Voice Director

- Voice selection.
- Voice character.
- Gender preference.
- Language.
- Emotion.
- Speaking pace.
- Stability.
- Expressiveness.
- Delivery style.
- Pause management.

### TTS Provider

Check available providers:

- ElevenLabs.
- OpenAI TTS.
- Local TTS.
- Other existing providers.

Inspect:

- API integration.
- Provider abstraction.
- Voice configuration.
- Audio format.
- Error handling.
- Retry mechanism.
- API usage and cost tracking.
- Generated audio storage.

### Speech Alignment

Check whether the system supports:

- Word-level timestamps.
- Sentence-level timestamps.
- Accurate audio duration.
- Transcript generation.
- Pronunciation verification.
- Alignment fallback.

Evaluate:

- Native TTS timestamps.
- Whisper.
- WhisperX.

Do not add WhisperX if the existing provider already supplies sufficiently accurate alignment and no validation requirement justifies it.

### VO Output

Expected:

- voiceover.mp3
- transcript.json
- voice-metadata.json

Determine whether VO timing can drive the visual timeline.

## G. Subtitle Engine

This section is HIGH PRIORITY.

Inspect the existing subtitle implementation.

Expected subtitle capabilities:

### Subtitle Generation

- Transcript extraction.
- Word-level timing.
- Sentence segmentation.
- Punctuation.
- Line wrapping.
- Reading speed validation.
- Indonesian language support.
- Subtitle synchronization.

### Subtitle Styles

Check for:

1. Cinematic subtitle.
2. Documentary subtitle.
3. Kinetic subtitle.
4. Word-by-word subtitle.
5. Highlight subtitle.
6. Dramatic subtitle.
7. Minimal subtitle.

### Subtitle Animation

Inspect:

- Fade in/out.
- Word reveal.
- Character reveal.
- Highlight animation.
- Position animation.
- Scale animation.
- Timing synchronization.
- Dynamic text layout.

### Subtitle Rendering

Check whether subtitles are rendered through:

- Remotion components.
- Remotion Captions.
- FFmpeg.
- External subtitle files.

Avoid implementing multiple subtitle renderers without a clear purpose.

### Subtitle Export

Expected:

- Burned-in subtitles in final MP4.
- Optional external SRT.
- Correct timestamps.
- Proper UTF-8 encoding.
- Correct Indonesian punctuation.

The subtitle renderer must use the same transcript timing data as the VO system.

## H. Audio & Sound Design

Inspect:

- Background music.
- Sound effects.
- Voice-over mixing.
- Audio ducking.
- Audio synchronization.
- Fade in/out.
- Volume control.
- Audio normalization.
- Peak limiting.
- Loudness measurement.
- Audio export.

Expected audio architecture:

Voice Over
+ Background Music
+ Ambient Sound
+ Sound Effects
→ Audio Mixer
→ Master Audio

Check whether music and sound effects are selected according to scene mood and timeline events.

Evaluate FFmpeg and Remotion audio capabilities before recommending additional audio libraries.

Target loudness should be configurable. Use approximately -14 LUFS integrated and -1 dBTP as an initial social video mastering profile.

## I. Visual Asset Pipeline

Inspect:

- Image generation.
- Video generation.
- Stock footage integration.
- Asset sourcing.
- Prompt generation.
- Asset metadata.
- Image validation.
- Video validation.
- Aspect ratio conversion.
- Resolution validation.
- Asset caching.
- Duplicate detection.
- Asset licensing metadata.

Check provider abstraction for:

- Image generation.
- Video generation.
- Stock footage.
- Local asset libraries.

Expected asset metadata:

- Asset ID.
- Asset type.
- Provider.
- Original prompt.
- Source.
- File location.
- Resolution.
- Duration.
- Aspect ratio.
- Generation status.
- License information.

Evaluate fallback behavior when video generation fails.

For example, an image with Remotion camera animation may be used as a fallback.

## J. Cinematic Visual Engine

Inspect whether the project provides reusable cinematic presets.

### Camera Movement

- Slow push in.
- Slow pull out.
- Pan left/right.
- Tilt.
- Dolly simulation.
- Parallax.
- Handheld simulation.
- Focus pull simulation.

### Visual Effects

- Film grain.
- Vignette.
- Bloom.
- Glow.
- Light leaks.
- Motion blur.
- Chromatic aberration.
- Lens distortion.
- Depth of field simulation.

### Transitions

- Film dissolve.
- Crossfade.
- Whip pan.
- Flash frame.
- Luma fade.
- Match cut.
- Motion-based transitions.

### Color Grading

- Cinematic presets.
- Warm film.
- Cool film.
- Documentary.
- Moody.
- Natural.
- Consistent scene grading.

Check whether effects are reusable and configurable.

Do not recommend effects that unnecessarily reduce rendering performance.

## K. Timeline Compiler

Inspect whether the system has a centralized timeline compiler.

Expected responsibilities:

- Convert storyboard into frame-based timeline.
- Calculate scene boundaries.
- Synchronize VO and visual scenes.
- Synchronize subtitles.
- Position music and SFX.
- Calculate transitions.
- Resolve scene overlaps.
- Validate total video duration.
- Generate Remotion composition props.

All timing should be deterministic.

Use integer frames as the primary rendering timeline representation.

## L. Rendering & Export

Inspect:

- Remotion renderer configuration.
- Chromium rendering.
- FFmpeg integration.
- Codec configuration.
- Render concurrency.
- Memory usage.
- Temporary file cleanup.
- Render progress.
- Render retry.
- Partial rendering.
- Output validation.

Target output:

- Resolution: 1080 × 1920.
- FPS: 30.
- Duration: 30–60 seconds.
- Video codec: H.264.
- Audio codec: AAC.
- Pixel format: yuv420p.
- Container: MP4.

Support optional export profiles for:

- TikTok.
- Instagram Reels.
- YouTube Shorts.
- YouTube landscape.

## M. Quality Control

Inspect whether automated quality control exists.

Expected checks:

### Technical QA

- Video file exists.
- Valid video container.
- Correct resolution.
- Correct FPS.
- Correct duration.
- Correct audio stream.
- No missing assets.
- No corrupted frames.
- No unexpected black frames.
- No audio clipping.

### Visual QA

- Text overflow.
- Text readability.
- Subtitle positioning.
- Subtitle synchronization.
- Scene continuity.
- Visual consistency.
- Transition quality.
- Unexpected blank scenes.

### Audio QA

- Voice audibility.
- Music ducking.
- Audio clipping.
- Silence detection.
- Loudness.
- VO synchronization.

### AI-assisted Review

Evaluate whether sampled rendered frames can be sent to a vision-capable model for visual review.

Do not rely exclusively on AI review for technical validation.

## N. Automation & Orchestration

Inspect the current job execution system.

Expected features:

- Project initialization.
- Job state management.
- Workflow orchestration.
- Task dependencies.
- Retry policies.
- Checkpointing.
- Asset caching.
- Concurrent generation limits.
- Provider fallback.
- Error logging.
- Cost tracking.
- Render status tracking.

Check whether each production stage can resume independently after failure.

Avoid rerunning the entire pipeline when only one asset or scene fails.

# 4. REQUIRED TECHNICAL STACK EVALUATION

Evaluate the existing project against this preferred stack.

| Layer | Preferred Technology |
|---|---|
| Runtime | Node.js 22 LTS |
| Language | TypeScript |
| Video Engine | Remotion |
| UI | React |
| Validation | Zod |
| Database | SQLite |
| Media Processing | FFmpeg |
| Metadata | FFprobe / Mediabunny |
| VO | ElevenLabs / OpenAI TTS |
| Alignment | Native TTS timestamps / WhisperX |
| Subtitle | Remotion Captions |
| AI Orchestration | LLM API |
| Image Generation | Provider abstraction |
| Video Generation | Provider abstraction |
| Music | Provider abstraction |
| Sound Effects | Provider abstraction |

This is the preferred architecture, not a requirement to install everything.

If an existing dependency already fulfills a requirement, retain it unless there is a concrete technical reason to replace it.

# 5. REQUIRED AUDIT METHODOLOGY

Follow this order:

1. Inspect repository structure.
2. Read package.json and lockfiles.
3. Inspect Remotion entry points.
4. Inspect existing components.
5. Inspect scripts and services.
6. Inspect installed agent skills.
7. Read cinematic-skill instructions.
8. Inspect existing provider integrations.
9. Inspect VO and subtitle implementation.
10. Inspect audio and visual asset workflows.
11. Inspect rendering and QA.
12. Identify missing functionality.
13. Evaluate architecture and technical debt.
14. Produce the final report.

Use existing source code as the primary evidence.

Do not assume functionality exists because a package is installed.

Do not assume functionality is missing because you cannot find it in the first directory.

Search the repository thoroughly before declaring something missing.

If external API credentials are unavailable, report integration readiness without claiming the external provider has been successfully tested.

# 6. AUDIT STATUS CLASSIFICATION

Use these status labels:

- IMPLEMENTED: Functionality exists and is operational.
- PARTIAL: Some functionality exists but important capabilities are missing.
- MISSING: Functionality does not exist.
- INSTALLED ONLY: Dependency or skill exists but is not integrated.
- INTEGRATED BUT UNUSED: Integration exists but no production workflow uses it.
- NEEDS IMPROVEMENT: Functionality exists but has architectural or operational weaknesses.
- NOT VERIFIED: Insufficient evidence to determine status.
- NOT APPLICABLE: Functionality is not necessary for this project.

Each finding must include:

- Feature name.
- Current status.
- Evidence.
- Existing implementation location.
- Technical gap.
- Recommended action.
- Priority.

Use repository paths and source references whenever possible.

# 7. PRIORITY CLASSIFICATION

Assign each missing or incomplete feature a priority.

P0 - CRITICAL

Required for the basic production pipeline.

P1 - HIGH

Required for production reliability and complete automation.

P2 - MEDIUM

Important for visual quality and scalability.

P3 - LOW

Optional enhancement.

# 8. REQUIRED OUTPUT REPORT

Generate the audit report in Markdown.

Recommended filename:

docs/TECHNICAL_AUDIT.md

The report must contain:

## 1. Executive Summary

- Overall project condition.
- Existing capabilities.
- Main technical gaps.
- Architecture assessment.
- Production readiness.

## 2. Repository Overview

- Project structure.
- Runtime and framework versions.
- Installed dependencies.
- Installed skills.
- Existing providers.

## 3. Feature Audit Matrix

| Module | Feature | Status | Priority | Evidence |
|---|---|---|---|---|
| Remotion | Dynamic composition | ... | ... | ... |
| VO | TTS integration | ... | ... | ... |
| VO | Word timestamps | ... | ... | ... |
| Subtitle | Kinetic subtitle | ... | ... | ... |
| Audio | Music ducking | ... | ... | ... |
| AI | Storyboard generator | ... | ... | ... |
| Assets | Video generation | ... | ... | ... |
| Timeline | Timeline compiler | ... | ... | ... |
| Rendering | Automated rendering | ... | ... | ... |
| QA | Automated inspection | ... | ... | ... |

Expand this table to cover every audit category.

## 4. Installed Skills Audit

List:

- Installed skills.
- Their actual capabilities.
- Their intended purpose.
- Whether they are integrated.
- Overlapping functionality.
- Missing skills.
- Recommended skills to add.

## 5. Voice Over & Subtitle Audit

Provide a detailed independent assessment.

Identify:

- Existing TTS provider.
- Existing voice direction system.
- Existing speech alignment.
- Transcript format.
- Existing subtitle renderer.
- Existing subtitle styles.
- Audio mixing capabilities.
- Synchronization problems.

This section is mandatory.

## 6. Architecture Assessment

Explain:

- Current architecture.
- Existing module boundaries.
- Coupling problems.
- Duplicate responsibilities.
- Missing abstractions.
- Recommended changes.

Do not recommend a full rewrite unless evidence justifies it.

## 7. Gap Analysis

List missing capabilities grouped by P0, P1, P2, and P3.

## 8. Recommended Technology Stack

Compare existing technology with preferred technology.

Explain whether each proposed addition is necessary.

## 9. Implementation Roadmap

Provide a phased development plan:

Phase 1: Foundation.

Phase 2: AI Production.

Phase 3: Full Automation.

Phase 4: Quality and Performance Optimization.

For each phase include:

- Objective.
- Missing features to implement.
- Dependencies.
- Expected output.
- Acceptance criteria.

## 10. Definition of Done

Define measurable conditions for the system to be considered production-ready.

At minimum:

- One prompt can generate a complete video.
- Storyboard JSON passes validation.
- VO can be generated automatically.
- Word-level transcript timing is available.
- Subtitle rendering is synchronized.
- Music and SFX are integrated.
- Visual assets are available.
- Remotion renders a valid MP4.
- Automated QA passes.
- Failed stages can retry independently.
- Final output matches the configured profile.

## 11. Final Recommendations

Provide:

1. What should be retained.
2. What should be improved.
3. What should be added.
4. What should not be added.
5. The recommended first implementation task.

# 9. IMPORTANT ENGINEERING RULES

Follow these rules during the audit:

1. Do not modify existing source code.
2. Do not install new dependencies.
3. Do not modify package.json.
4. Do not create a new architecture before understanding the current architecture.
5. Avoid overengineering.
6. Avoid duplicate libraries and providers.
7. Prefer existing implementations.
8. Keep Remotion as the primary rendering engine.
9. Use TypeScript for the main production pipeline.
10. Use Python only where it provides a clear advantage.
11. Use structured JSON between AI planning and rendering.
12. Keep VO, subtitle, and timeline data synchronized.
13. Prefer reusable components.
14. Keep AI provider integrations modular.
15. Never expose API keys or secrets in the audit report.
16. Distinguish verified functionality from assumptions.
17. Do not claim that a feature works without evidence.

# 10. FINAL INSTRUCTION

Perform a complete audit of the current project.

Do not start implementing missing features.

Do not install anything.

Do not make assumptions about the current implementation.

Your primary objective is to discover the actual state of the project.

The final report must clearly answer:

- What do we already have?
- What is working?
- What is partially implemented?
- What is installed but unused?
- What is missing?
- What needs improvement?
- What should we build first?

The report should be technical, evidence-based, and actionable.

Avoid generic recommendations.

Prefer minimal changes that maximize production capability.

**Audit first. Architecture decisions second. Implementation only after explicit approval.**
