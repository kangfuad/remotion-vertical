import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const NoSqlIntroScene: React.FC = () => {
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
        NoSQL Database
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#8b949e",
          marginBottom: 44,
          textAlign: "center",
        }}
      >
        Struktur Bebas & Mudah Berkembang
      </div>

      {/* JSON Editor UI */}
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
          <span style={{ color: "#8b949e", fontSize: 16 }}>user_profile.json</span>
          <span style={{ color: "#34d399", fontSize: 14 }}>MongoDB / Document</span>
        </div>

        <div style={{ padding: "28px 32px", fontFamily: "ui-monospace, monospace", fontSize: 26, lineHeight: 1.6 }}>
          <pre style={{ margin: 0, color: "#f0f6fc" }}>
            {`{\n`}
            <span style={{ color: "#79c0ff" }}>  "id": </span><span style={{ color: "#ffa657" }}>1</span>,{`\n`}
            <span style={{ color: "#79c0ff" }}>  "name": </span><span style={{ color: "#a5d6ff" }}>"Andi"</span>,{`\n`}
            <span style={{ color: "#79c0ff" }}>  "skills": </span>[<span style={{ color: "#7ee787" }}>"Java"</span>, <span style={{ color: "#7ee787" }}>"Python"</span>],{`\n`}
            <span style={{ color: "#79c0ff" }}>  "address": </span>{`{ `}<span style={{ color: "#79c0ff" }}>"city": </span><span style={{ color: "#7ee787" }}>"Jakarta"</span>{` }\n`}
            {`}`}
          </pre>
        </div>
      </div>
    </div>
  );
};
