import { type Config } from "tailwindcss";
import { fontFamily, colors as defaultColors } from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        ...defaultColors, // Spreading the entire default color palette
        white: "#F9F7F7",
        background: "#101827",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
