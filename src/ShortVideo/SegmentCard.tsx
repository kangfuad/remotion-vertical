import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export interface SegmentData {
  id: number;
  tag: string;
  text: string;
  highlight: string;
  keyWord: string;
  durationFrames: number;
}

export const SegmentCard: React.FC<{ segment: SegmentData }> = ({ segment }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance spring animation
  const cardScale = spring({
    frame,
    fps,
    config: {
      damping: 14,
      mass: 0.6,
      stiffness: 120,
    },
  });

  const cardOpacity = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Exit fade out before segment ends
  const exitOpacity = interpolate(
    frame,
    [segment.durationFrames - 10, segment.durationFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const finalOpacity = Math.min(cardOpacity, exitOpacity);

  // Split text into normal and highlighted parts
  const renderFormattedText = () => {
    if (!segment.highlight || !segment.text.includes(segment.highlight)) {
      return <span>{segment.text}</span>;
    }

    const parts = segment.text.split(segment.highlight);
    return (
      <span>
        {parts[0]}
        <span
          style={{
            background: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
            color: "#ffffff",
            padding: "4px 16px",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(239, 68, 68, 0.4)",
            display: "inline-block",
            fontWeight: 800,
            letterSpacing: "-0.5px",
          }}
        >
          {segment.highlight}
        </span>
        {parts[1]}
      </span>
    );
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 60px",
        opacity: finalOpacity,
        transform: `scale(${cardScale})`,
      }}
    >
      {/* Category Tag / Hook Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 28px",
          borderRadius: 999,
          backgroundColor: "rgba(99, 102, 241, 0.18)",
          border: "1.5px solid rgba(129, 140, 248, 0.4)",
          color: "#c7d2fe",
          fontSize: 26,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "3px",
          marginBottom: 36,
          boxShadow: "0 0 24px rgba(99, 102, 241, 0.25)",
        }}
      >
        <span
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            backgroundColor: "#818cf8",
            boxShadow: "0 0 10px #818cf8",
          }}
        />
        {segment.tag}
      </div>

      {/* Main Glass Card */}
      <div
        style={{
          width: "100%",
          padding: "64px 48px",
          borderRadius: 36,
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1.5px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.6)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {/* Large Highlight Keyword / Counter */}
        <div
          style={{
            fontSize: 76,
            fontWeight: 900,
            letterSpacing: "-1.5px",
            lineHeight: 1.1,
            color: "#ffffff",
            marginBottom: 32,
            textShadow: "0 4px 30px rgba(255, 255, 255, 0.2)",
            textTransform: "uppercase",
          }}
        >
          {segment.keyWord}
        </div>

        {/* Dynamic Spoken Text */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 600,
            lineHeight: 1.5,
            color: "#e2e8f0",
          }}
        >
          {renderFormattedText()}
        </div>
      </div>

      {/* Bottom Branding / Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "rgba(255, 255, 255, 0.45)",
          fontSize: 24,
          fontWeight: 600,
          letterSpacing: "1px",
        }}
      >
        <span>DAILY MINDSET & PRODUCTIVITY</span>
      </div>
    </div>
  );
};
