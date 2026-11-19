import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SqlQueryScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  const fullQuery = `SELECT name, email\nFROM users\nWHERE id = 1;`;
  const charsTyped = Math.floor(
    interpolate(frame, [10, 55], [0, fullQuery.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  const typedText = fullQuery.substring(0, charsTyped);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 48px",
        transform: `scale(${entrance})`,
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 900,
          color: "#f0f6fc",
          marginBottom: 12,
          letterSpacing: "-1.5px",
          textAlign: "center",
        }}
      >
        Cara Ambil Data
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#8b949e",
          marginBottom: 44,
          textAlign: "center",
        }}
      >
        SELECT, WHERE, dan JOIN untuk Hasil Presisi
      </div>

      {/* Code Editor */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 14,
          overflow: "hidden",
          boxShadow: "0 16px 32px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div
          style={{
            backgroundColor: "#21262d",
            padding: "14px 20px",
            borderBottom: "1px solid #30363d",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span style={{ color: "#8b949e", fontSize: 16 }}>query.sql</span>
          <span style={{ color: "#38bdf8", fontSize: 14 }}>PostgreSQL</span>
        </div>

        <div style={{ padding: "28px 32px", fontFamily: "ui-monospace, monospace", fontSize: 32, lineHeight: 1.6 }}>
          <pre style={{ margin: 0, color: "#38bdf8" }}>
            {typedText}
            {frame < 60 && frame % 10 < 5 && <span style={{ color: "#eab308" }}>_</span>}
          </pre>
        </div>
      </div>

      {/* Terminal Query Output Result */}
      {frame >= 65 && (
        <div
          style={{
            marginTop: 24,
            width: "100%",
            backgroundColor: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 12,
            padding: "20px 24px",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <div style={{ color: "#34d399", fontSize: 18, marginBottom: 8 }}>
            ✔ 1 row in set (0.01 sec)
          </div>
          <div style={{ color: "#f0f6fc", fontSize: 24, fontWeight: 700 }}>
            Andi <span style={{ color: "#8b949e" }}>|</span> andi@mail.com
          </div>
        </div>
      )}
    </div>
  );
};
