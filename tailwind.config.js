/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    container: false,
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2340",
          dark: "#071729",
          light: "#14385F",
        },
        teal: {
          DEFAULT: "#136B63",
          light: "#1C8C82",
        },
        volt: {
          DEFAULT: "#3ED598",
          dim: "#2CB27D",
        },
        ink: "#101820",
        slate: {
          muted: "#5B6B79",
          line: "#E2E8ED",
          surface: "#F6F8F9",
          surface2: "#EEF2F4",
        },
      },
      fontFamily: {
        heading: ["Manrope", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(2.75rem, 5vw, 5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2.25rem, 3.6vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.75rem, 2.4vw, 2.5rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        content: "1320px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,35,64,0.04), 0 12px 24px -12px rgba(11,35,64,0.12)",
        card: "0 1px 2px rgba(11,35,64,0.06), 0 20px 40px -20px rgba(11,35,64,0.18)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
