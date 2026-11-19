import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const OpeningScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.8 },
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
      {/* Clean Headline */}
      <div
        style={{
          fontSize: 88,
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: "-2px",
          color: "#f0f6fc",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        SQL <span style={{ color: "#eab308" }}>vs</span> NoSQL
      </div>

      <div
        style={{
          fontSize: 32,
          fontWeight: 500,
          color: "#8b949e",
          textAlign: "center",
          marginBottom: 56,
          lineHeight: 1.4,
          maxWidth: 750,
        }}
      >
        Dua Cara Berbeda Menyimpan Jutaan Data
      </div>

      {/* Two Architecture Cards */}
      <div
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
      >
        <div
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: 16,
            padding: "36px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 52, fontWeight: 900, color: "#38bdf8", marginBottom: 12 }}>
            SQL
          </div>
          <div style={{ fontSize: 22, color: "#c9d1d9", fontWeight: 600 }}>
            Tabel & Relasi
          </div>
          <div style={{ fontSize: 18, color: "#8b949e", marginTop: 8 }}>
            Data Sangat Rapi
          </div>
        </div>

        <div
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderRadius: 16,
            padding: "36px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 52, fontWeight: 900, color: "#34d399", marginBottom: 12 }}>
            NoSQL
          </div>
          <div style={{ fontSize: 22, color: "#c9d1d9", fontWeight: 600 }}>
            Dokumen JSON
          </div>
          <div style={{ fontSize: 18, color: "#8b949e", marginTop: 8 }}>
            Sangat Fleksibel
          </div>
        </div>
      </div>
    </div>
  );
};
