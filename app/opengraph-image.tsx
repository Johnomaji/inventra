import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050810",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 96px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid background lines — horizontal */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            display: "flex",
          }}
        />

        {/* Glow blob */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-80px",
            width: "680px",
            height: "680px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(248,124,43,0.12) 0%, rgba(39,97,146,0.06) 50%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, #f87c2b, #276192, #C49A2A)",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #f87c2b, #276192)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "22px",
              fontWeight: 900,
              color: "#050810",
            }}
          >
            I
          </div>
          <span
            style={{
              fontSize: "26px",
              fontWeight: 800,
              color: "#e8edf5",
              letterSpacing: "-0.02em",
            }}
          >
            Inventra
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#e8edf5",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: "800px",
            marginBottom: "28px",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          The Intelligent OS for African Commerce
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: "24px",
            fontWeight: 400,
            color: "#6b7a99",
            maxWidth: "680px",
            lineHeight: 1.55,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          AI · Augmented Reality · VR — unified inventory intelligence for African businesses.
        </div>

        {/* Pills */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "48px",
          }}
        >
          {["AI Forecasting", "AR Shelf Audit", "VR Dashboard"].map((label) => (
            <div
              key={label}
              style={{
                background: "rgba(248,124,43,0.08)",
                border: "1px solid rgba(248,124,43,0.2)",
                color: "#f87c2b",
                fontSize: "15px",
                padding: "8px 18px",
                borderRadius: "4px",
                display: "flex",
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* Bottom right domain */}
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "96px",
            fontSize: "16px",
            color: "#3a4a66",
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          inventra.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
