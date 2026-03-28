import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background: "#090b0e",
          color: "#e8edf4",
          padding: "72px",
          flexDirection: "column",
          justifyContent: "space-between",
          border: "1px solid #2a313d",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c9a463",
          }}
        >
          Patrick Duchesneau
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, maxWidth: "900px" }}>
            Founder-builder shipping deterministic product systems.
          </div>
          <div style={{ fontSize: 28, color: "#98a2b3", maxWidth: "920px" }}>
            Architecture, product, and execution across Bookiji, Kinetix, and
            MyAssist.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
