import React from "react";
import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Background } from "./Background";
import { ProgressBar } from "./ProgressBar";
import { WordSubtitle } from "./WordSubtitle";

import { OpeningScene } from "./scenes/OpeningScene";
import { SqlIntroScene } from "./scenes/SqlIntroScene";
import { SqlQueryScene } from "./scenes/SqlQueryScene";
import { NoSqlIntroScene } from "./scenes/NoSqlIntroScene";
import { ComparisonScene } from "./scenes/ComparisonScene";
import { UseCasesScene } from "./scenes/UseCasesScene";
import { ClosingScene } from "./scenes/ClosingScene";

import storyboardData from "../../public/edu-sql/storyboard.json";
import transcriptData from "../../public/edu-sql/transcript.json";

export const SqlNoSqlVideo: React.FC = () => {
  const scenes = storyboardData.scenes;

  const sceneComponents: { [key: number]: React.ReactNode } = {
    1: <OpeningScene />,
    2: <SqlIntroScene />,
    3: <SqlQueryScene />,
    4: <NoSqlIntroScene />,
    5: <ComparisonScene />,
    6: <UseCasesScene />,
    7: <ClosingScene />,
  };

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* 1. Technical Architectural Background (No AI Slop) */}
      <Background />

      {/* 2. Minimal Progress Indicator */}
      <ProgressBar />

      {/* 3. Master Ambient BGM ducked smoothly to 0.08 */}
      <Audio
        src={staticFile("edu-sql/bgm_master.mp3")}
        volume={(f) => {
          if (f < 25) return (f / 25) * 0.08;
          if (f > storyboardData.totalFrames - 45) {
            return ((storyboardData.totalFrames - f) / 45) * 0.08;
          }
          return 0.08;
        }}
      />

      {/* 4. Strictly Serial Non-Overlapping Scenes & Voice Over Tracks */}
      {scenes.map((scene) => (
        <Sequence
          key={scene.id}
          from={scene.startFrame}
          durationInFrames={scene.durationFrames}
        >
          {/* Spoken Narration Track */}
          <Audio src={staticFile(`edu-sql/${scene.audioFile}`)} volume={1.0} />

          {/* Visual Scene Content */}
          {sceneComponents[scene.id]}
        </Sequence>
      ))}

      {/* 5. Synchronized Lower-Third Subtitles */}
      <WordSubtitle words={transcriptData.words} />
    </AbsoluteFill>
  );
};
