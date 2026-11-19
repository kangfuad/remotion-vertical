import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Subtle floating ambient movements
  const orb1Y = interpolate(frame, [0, durationInFrames], [-50, 80], {
    extrapolateRight: "clamp",
  });
  const orb2X = interpolate(frame, [0, durationInFrames], [40, -60], {
    extrapolateRight: "clamp",
  });
  const pulse = Math.sin(frame * 0.05) * 0.1 + 0.95;

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#070a13",
        overflow: "hidden",
      }}
    >
      {/* Background Gradient Mesh */}
      <div
        style={{
          position: "absolute",
          width: 900,
          height: 900,
          borderRadius: "50%",
          top: "15%",
          left: `calc(50% - 450px + ${orb2X}px)`,
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)",
          filter: "blur(70px)",
          transform: `scale(${pulse})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          borderRadius: "50%",
          top: `calc(50% + ${orb1Y}px)`,
          right: "-10%",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.12) 0%, rgba(236, 72, 153, 0) 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          bottom: "10%",
          left: "-5%",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, rgba(14, 165, 233, 0) 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle Grid overlay for high-tech aesthetic */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(circle, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(circle, black 40%, transparent 85%)",
        }}
      />
    </AbsoluteFill>
  );
};
