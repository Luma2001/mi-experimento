import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2563EB",
          teal: "#14B8A6",
          orange: "#F97316",
          ink: "#111827",
          muted: "#4B5563",
          soft: "#EFF6FF"
        }
      },
      fontFamily: {
        sans: [
          "Atkinson Hyperlegible",
          "Inter",
          "Source Sans Pro",
          "system-ui",
          "sans-serif"
        ]
      },
      boxShadow: {
        focus: "0 0 0 4px rgba(37, 99, 235, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
