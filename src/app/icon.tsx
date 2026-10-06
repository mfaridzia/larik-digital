import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: "7px",
        }}
      >
        <svg
          width="20"
          height="24"
          viewBox="0 0 34 40"
          fill="none"
          stroke="#F9F9F8"
          strokeWidth="3.2"
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
