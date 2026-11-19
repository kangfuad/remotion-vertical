import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const ComparisonScene: React.FC = () => {
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
        Perbedaan Utama
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#8b949e",
          marginBottom: 44,
          textAlign: "center",
        }}
      >
        Perbandingan Karakteristik Dasar
      </div>

      {/* Comparison Table */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 14,
          overflow: "hidden",
        }}
      >
        {/* Table Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            padding: "18px 24px",
            backgroundColor: "#21262d",
            borderBottom: "1px solid #30363d",
            fontFamily: "ui-monospace, monospace",
            fontSize: 20,
            fontWeight: 800,
          }}
        >
          <div style={{ color: "#8b949e" }}>ASPEK</div>
          <div style={{ color: "#38bdf8" }}>SQL</div>
          <div style={{ color: "#34d399" }}>NoSQL</div>
        </div>

        {/* Row 1: Model */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            padding: "22px 24px",
            borderBottom: "1px solid #21262d",
            fontSize: 20,
          }}
        >
          <div style={{ color: "#8b949e", fontWeight: 700 }}>Model Data</div>
          <div style={{ color: "#f0f6fc", fontWeight: 600 }}>Tabel & Baris</div>
          <div style={{ color: "#f0f6fc", fontWeight: 600 }}>Dokumen JSON</div>
        </div>

        {/* Row 2: Schema */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            padding: "22px 24px",
            borderBottom: "1px solid #21262d",
            fontSize: 20,
          }}
        >
          <div style={{ color: "#8b949e", fontWeight: 700 }}>Skema</div>
          <div style={{ color: "#f0f6fc", fontWeight: 600 }}>Kaku & Pasti</div>
          <div style={{ color: "#f0f6fc", fontWeight: 600 }}>Bebas & Dinamis</div>
        </div>

        {/* Row 3: Scaling */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr 1fr",
            padding: "22px 24px",
            fontSize: 20,
          }}
        >
          <div style={{ color: "#8b949e", fontWeight: 700 }}>Skalabilitas</div>
          <div style={{ color: "#f0f6fc", fontWeight: 600 }}>Vertikal (Server Kuat)</div>
          <div style={{ color: "#f0f6fc", fontWeight: 600 }}>Horizontal (Multi-Server)</div>
        </div>
      </div>
    </div>
  );
};
