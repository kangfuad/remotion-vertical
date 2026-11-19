import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
} from "remotion";
import { Background } from "./Background";
import { ProgressBar } from "./ProgressBar";
import { SegmentCard, SegmentData } from "./SegmentCard";

export interface ScriptData {
  totalFrames: number;
  fps: number;
  segments: (SegmentData & {
    startFrame: number;
    durationFrames: number;
    audioFile: string;
  })[];
}

export const ShortVideo: React.FC<{ script: ScriptData }> = ({ script }) => {
  return (
    <AbsoluteFill
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      }}
    >
      {/* Background visual layers */}
      <Background />

      {/* Top Progress Bar */}
      <ProgressBar />

      {/* Background Music ducked */}
      <Audio
        src={staticFile("bgm.mp3")}
        volume={(f) => {
          // Fade in first 30 frames, fade out last 45 frames
          if (f < 30) return (f / 30) * 0.14;
          if (f > script.totalFrames - 45) {
            return ((script.totalFrames - f) / 45) * 0.14;
          }
          return 0.14;
        }}
      />

      {/* Segments Sequences */}
      {script.segments.map((seg) => (
        <Sequence
          key={seg.id}
          from={seg.startFrame}
          durationInFrames={seg.durationFrames + 5}
        >
          {/* Spoken Voiceover Audio */}
          <Audio src={staticFile(seg.audioFile)} volume={1.0} />

          {/* Visual Card */}
          <SegmentCard segment={seg} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
