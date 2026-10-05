import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F8",
        surface: "#FFFFFF",
        "surface-subtle": "#F3F3F1",
        border: "#E5E5E2",
        "border-subtle": "#EDEDEB",
        primary: {
          DEFAULT: "#141517",
          hover: "#282A2E",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F1F1EE",
          hover: "#E8E8E4",
          foreground: "#141517",
        },
        muted: {
          DEFAULT: "#6B7280",
          foreground: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#0F766E",
          hover: "#0D655E",
          subtle: "#F0FDFA",
        },
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        container: "1240px",
        content: "840px",
      },
    },
  },
  plugins: [],
};

export default config;
