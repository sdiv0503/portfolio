import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Divyansh Sharma - Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#030303", // Dark background
        backgroundImage:
          "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
        backgroundSize: "100px 100px",
      }}
    >
      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 50% 0%, #7928ca 0%, transparent 50%)",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            padding: "10px 30px",
            backgroundColor: "#fff",
            color: "#000",
            borderRadius: "50px",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Portfolio
        </div>
      </div>

      <div
        style={{
          fontSize: 100,
          fontStyle: "normal",
          fontWeight: "bold",
          color: "white",
          lineHeight: 1,
          marginBottom: 20,
          letterSpacing: "-0.05em",
          whiteSpace: "pre-wrap",
          textAlign: "center",
        }}
      >
        Divyansh Sharma
      </div>

      <div
        style={{
          fontSize: 40,
          color: "#a1a1aa", // zinc-400
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        Full Stack Developer • Designer • Creator
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    }
  );
}
