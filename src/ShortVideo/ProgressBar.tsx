import React from "react";
import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const ProgressBar: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const progress = interpolate(frame, [0, durationInFrames], [0, 100], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 10,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          height: "100%",
          background: "linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)",
          boxShadow: "0 0 16px rgba(236, 72, 153, 0.8)",
          borderRadius: "0 4px 4px 0",
        }}
      />
    </div>
  );
};
