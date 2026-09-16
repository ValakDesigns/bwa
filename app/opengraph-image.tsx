import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Brain Warrior Academy — free tutoring for K-12 students facing serious illness";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

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
          background: "linear-gradient(135deg, #FFD9A0 0%, #02A8B0 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          width={140}
          height={140}
          alt=""
          style={{ marginBottom: 32 }}
        />
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "#00244E",
            textAlign: "center",
          }}
        >
          Brain Warrior Academy
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            color: "#00244E",
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
