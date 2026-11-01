import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0A6FDA",
          hover: "#085bb5",
          light: "#eaf3fc",
        },
        accent: {
          DEFAULT: "#00B3FE",
          hover: "#009edc",
          light: "#e5f7ff",
        },
        secondary: {
          DEFAULT: "#16A91C",
          hover: "#138f18",
          light: "#e8f7e9",
        },
        deepGreen: {
          DEFAULT: "#00721D",
          hover: "#005b17",
        },
        textDark: "#161616",
        softBg: "#F2F8FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "marquee-left": "marqueeLeft 28s linear infinite",
        "marquee-right": "marqueeRight 28s linear infinite",
      },
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(10, 111, 218, 0.08)",
        card: "0 8px 30px rgba(0, 0, 0, 0.04)",
        "card-hover": "0 20px 40px rgba(10, 111, 218, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
