import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ClosingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 56px",
        transform: `scale(${entrance})`,
      }}
    >
      <div
        style={{
          fontSize: 78,
          fontWeight: 900,
          color: "#f0f6fc",
          marginBottom: 24,
          letterSpacing: "-2px",
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        Tidak Ada yang Paling Hebat
      </div>

      <div
        style={{
          fontSize: 32,
          color: "#8b949e",
          textAlign: "center",
          lineHeight: 1.5,
          maxWidth: 720,
        }}
      >
        Pilih database yang paling pas <br />
        <span style={{ color: "#eab308", fontWeight: 700 }}>
          untuk kebutuhan sistem dan aplikasi kamu.
        </span>
      </div>
    </div>
  );
};
