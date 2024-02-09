import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Gabarito'", "sans-serif"],
      inter: ["'Inter'", "Gabarito", "sans-serif"],
      poppins: ["Poppins", "'Inter'", "Gabarito", "sans-serif"],
      volkhov: ["Volkhov", "'Inter'", "Gabarito", "sans-serif"],
    },
    colors(utils) {
      return {
        ...utils.colors,
        warm: "#F2F2F2",
        dark: "#00150F",

        primary_light: "#09C0B8",
        primary_dark: "#1B2E2F",
        bg_dark: "#1a202c",
        bg_darker: "#171923",
        bg_btn: "#81E6D9",
        secondary: {
          500: "#0A1F34",
        },

        primary: {
          50: "#EDFBFB",
          100: "#09C0B8",
          200: "#50a5a7",
          300: "#37999a",
          400: "#1e8c8e",
          500: "#057f81",
          // 500:"@09C0B8",
          600: "#057274",
          700: "#046667",
          800: "#04595a",
          // 900: "#034c4d",
          900: "#082B29",
        },
      };
    },

    letterSpacing: {
      widest: ".28em",
    },
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;
