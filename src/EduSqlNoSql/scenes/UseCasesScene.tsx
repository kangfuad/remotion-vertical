import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const UseCasesScene: React.FC = () => {
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
        Kapan Dipakai?
      </div>

      <div
        style={{
          fontSize: 28,
          color: "#8b949e",
          marginBottom: 44,
          textAlign: "center",
        }}
      >
        Sesuaikan dengan Tipe Aplikasi
      </div>

      <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
        {/* SQL Card */}
        <div
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderLeft: "6px solid #38bdf8",
            borderRadius: 14,
            padding: "28px 32px",
          }}
        >
          <div style={{ color: "#38bdf8", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
            PILIH SQL UNTUK:
          </div>
          <div style={{ color: "#f0f6fc", fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
            Perbankan, Keuangan & Sistem Akuntansi
          </div>
          <div style={{ color: "#8b949e", fontSize: 20 }}>
            Ketika konsistensi data mutlak dan setiap transaksi tidak boleh ada selisih.
          </div>
        </div>

        {/* NoSQL Card */}
        <div
          style={{
            backgroundColor: "#161b22",
            border: "1px solid #30363d",
            borderLeft: "6px solid #34d399",
            borderRadius: 14,
            padding: "28px 32px",
          }}
        >
          <div style={{ color: "#34d399", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
            PILIH NoSQL UNTUK:
          </div>
          <div style={{ color: "#f0f6fc", fontSize: 26, fontWeight: 700, marginBottom: 6 }}>
            Media Sosial, Katalog E-Commerce & IoT
          </div>
          <div style={{ color: "#8b949e", fontSize: 20 }}>
            Ketika butuh kecepatan tinggi, struktur dinamis, dan trafik raksasa.
          </div>
        </div>
      </div>
    </div>
  );
};
