import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Livadski med — premium brend identitet Pčelarstva Jevtić";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const recoleta = await readFile(
  join(process.cwd(), "src/fonts/Recoleta-Regular.otf"),
);

export default function SocialImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background: "#C9A65D",
          color: "#6B4423",
          fontFamily: "Recoleta",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -130,
            right: -40,
            display: "flex",
            width: 540,
            height: 540,
            border: "2px solid rgba(107,68,35,.22)",
            borderRadius: "50%",
            background: "rgba(245,241,232,.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 92,
            top: 74,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 210,
            height: 210,
            border: "2px solid #6B4423",
            borderRadius: "50%",
            fontFamily: "Arial",
            fontSize: 24,
            letterSpacing: 4,
            textAlign: "center",
          }}
        >
          PČELARSTVO
          <br />
          JEVTIĆ
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "58px 72px",
          }}
        >
          <div
            style={{
              fontFamily: "Arial",
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: 5,
            }}
          >
            BREND IDENTITET · BANJA LUKA
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 46,
              fontSize: 154,
              lineHeight: 0.72,
              letterSpacing: -9,
            }}
          >
            livadski
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 56,
              marginLeft: 338,
              fontSize: 98,
              letterSpacing: 7,
            }}
          >
            MED
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontFamily: "Arial",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 4,
            }}
          >
            PČELARSTVO OD SRCA.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Recoleta",
          data: recoleta,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
