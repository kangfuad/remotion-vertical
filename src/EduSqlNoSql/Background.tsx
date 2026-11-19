import React from "react";
import { AbsoluteFill } from "remotion";

export const Background: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0d1117",
        overflow: "hidden",
      }}
    >
      {/* Crisp Architectural Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Subtle Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, transparent 45%, rgba(13, 17, 23, 0.9) 100%)",
        }}
      />
    </AbsoluteFill>
  );
};
