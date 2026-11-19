import React from "react";
import { useCurrentFrame, useVideoConfig } from "remotion";

export interface WordTimestamp {
  word: string;
  startSec: number;
  endSec: number;
  startMs: number;
  endMs: number;
}

export const WordSubtitle: React.FC<{ words: WordTimestamp[] }> = ({ words }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const currentTime = frame / fps;

  // Find currently active word
  const activeIndex = words.findIndex(
    (w) => currentTime >= w.startSec && currentTime <= w.endSec
  );

  let currentIdx = activeIndex;
  if (currentIdx === -1) {
    const lastWord = [...words].reverse().find((w) => currentTime >= w.endSec);
    if (!lastWord || currentTime - lastWord.endSec > 0.4) {
      return null;
    }
    currentIdx = words.findIndex((w) => w === lastWord);
  }

  if (currentIdx === -1) return null;

  // 4 words window
  const phraseStart = Math.floor(currentIdx / 4) * 4;
  const phraseWords = words.slice(phraseStart, phraseStart + 4);

  return (
    <div
      style={{
        position: "absolute",
        // Positioned safely in the social media safe area (above UI buttons, channel name & description)
        bottom: 460,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 90,
        pointerEvents: "none",
        padding: "0 48px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(22, 27, 34, 0.95)",
          border: "1px solid #30363d",
          borderRadius: 18,
          padding: "16px 36px",
          display: "flex",
          gap: 12,
          flexWrap: "wrap",
          justifyContent: "center",
          boxShadow: "0 12px 32px rgba(0, 0, 0, 0.7)",
        }}
      >
        {phraseWords.map((item, idx) => {
          const isSpoken = currentTime >= item.startSec && currentTime <= item.endSec;
          return (
            <span
              key={idx}
              style={{
                fontFamily:
                  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: 34,
                fontWeight: isSpoken ? 900 : 600,
                color: isSpoken ? "#f59e0b" : "#f0f6fc",
                letterSpacing: "-0.5px",
                transform: isSpoken ? "scale(1.06)" : "scale(1)",
                transition: "transform 0.08s ease",
              }}
            >
              {item.word}
            </span>
          );
        })}
      </div>
    </div>
  );
};
