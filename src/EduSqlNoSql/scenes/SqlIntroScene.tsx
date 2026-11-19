import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const SqlIntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 14, mass: 0.7 },
  });

  const rows = [
    { id: "1", name: "Andi", email: "andi@mail.com" },
    { id: "2", name: "Budi", email: "budi@mail.com" },
    { id: "3", name: "Citra", email: "citra@mail.com" },
  ];

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
        SQL Database
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#8b949e",
          marginBottom: 44,
          textAlign: "center",
        }}
      >
        Struktur Tabel dengan Skema Teratur
      </div>

      {/* Database Inspector UI */}
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
        {/* Table Title Bar */}
        <div
          style={{
            backgroundColor: "#21262d",
            padding: "16px 24px",
            borderBottom: "1px solid #30363d",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          <span style={{ color: "#f0f6fc", fontWeight: 700, fontSize: 20 }}>
            table: users
          </span>
          <span style={{ color: "#38bdf8", fontSize: 16 }}>3 rows</span>
        </div>

        {/* Columns Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "100px 1.2fr 1.8fr",
            padding: "16px 24px",
            backgroundColor: "#161b22",
            borderBottom: "1px solid #30363d",
            fontFamily: "ui-monospace, monospace",
            fontSize: 18,
            color: "#8b949e",
            fontWeight: 700,
          }}
        >
          <div>id</div>
          <div>name</div>
          <div>email</div>
        </div>

        {/* Rows */}
        {rows.map((row, idx) => {
          const rowSpring = spring({
            frame: frame - 15 - idx * 12,
            fps,
            config: { damping: 14 },
          });

          return (
            <div
              key={row.id}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 1.2fr 1.8fr",
                padding: "20px 24px",
                borderBottom: idx < 2 ? "1px solid #21262d" : "none",
                fontFamily: "ui-monospace, monospace",
                fontSize: 22,
                color: "#f0f6fc",
                opacity: rowSpring,
                transform: `translateX(${(1 - rowSpring) * -20}px)`,
                backgroundColor: idx % 2 === 0 ? "rgba(255, 255, 255, 0.015)" : "transparent",
              }}
            >
              <div style={{ color: "#eab308", fontWeight: 700 }}>{row.id}</div>
              <div>{row.name}</div>
              <div style={{ color: "#8b949e" }}>{row.email}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
