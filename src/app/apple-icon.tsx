import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#121316",
          borderRadius: "40px",
        }}
      >
        <svg
          width="110"
          height="130"
          viewBox="0 0 34 40"
          fill="none"
          stroke="#F9F9F8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 5 L17 1 V21 L28 17 V29 L17 35 L6 30 Z" />
          <path d="M17 1 V35" />
          <path d="M6 30 L17 24 L28 29" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
