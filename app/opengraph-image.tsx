import { ImageResponse } from "next/og";
import { CSSProperties } from "react";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const containerStyle: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100%",
  background: "#090b0e",
  color: "#e8edf4",
  padding: "72px",
  flexDirection: "column",
  justifyContent: "space-between",
  border: "1px solid #2a313d",
};

const nameStyle: CSSProperties = {
  fontSize: 20,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#c9a463",
};

const contentWrapperStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const headlineStyle: CSSProperties = {
  fontSize: 68,
  lineHeight: 1.05,
  maxWidth: "900px",
};

const descriptionStyle: CSSProperties = {
  fontSize: 28,
  color: "#98a2b3",
  maxWidth: "920px",
};

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={containerStyle}>
        <div style={nameStyle}>Patrick Duchesneau</div>
        <div style={contentWrapperStyle}>
          <div style={headlineStyle}>
            Founder-builder shipping deterministic product systems.
          </div>
          <div style={descriptionStyle}>
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
