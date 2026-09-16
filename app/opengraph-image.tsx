import { ImageResponse } from "next/og";

export const alt = "Brain Warrior Academy — free tutoring for K-12 students facing serious illness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FFD9A0 0%, #FF8C61 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "9999px",
            background: "#1B4B5A",
            color: "#FDF8F0",
            fontSize: 40,
            fontWeight: 800,
            marginBottom: 32,
          }}
        >
          BW
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#1B4B5A",
            textAlign: "center",
          }}
        >
          Brain Warrior Academy
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "#1B4B5A",
            textAlign: "center",
            maxWidth: 900,
          }}
        >
          Free, one-on-one tutoring for K-12 students facing serious illness
        </div>
      </div>
    ),
    { ...size }
  );
}
