import { type Config } from "tailwindcss";
import { fontFamily, colors } from "tailwindcss/defaultTheme";

const defaultColors = colors;

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      ...defaultColors,
      transparent: "transparent",
      current: "currentColor",
      white: "#F9F7F7",
      lightgrey: "#DBE2EF",
      black: "#000000",
      primary: "#112D4E",
      secondary: "#3F72AF",
      hover: "#2b4d77",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
