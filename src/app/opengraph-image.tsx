import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F4F1E9",
          color: "#10181B",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ color: "#236662", fontSize: 26, fontWeight: 800 }}>
          PUBLIC-SECTOR TRANSFORMATION / DIGITAL SYSTEMS / AFRICA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ fontSize: 78, fontWeight: 760, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div style={{ color: "#263238", fontSize: 40, marginTop: 24 }}>
            Public-Sector Transformation & Digital Systems Leader
          </div>
        </div>
        <div style={{ color: "#5D676B", fontSize: 28 }}>
          Strategy / Data / Geospatial Intelligence / Africa
        </div>
      </div>
    ),
    size,
  );
}
