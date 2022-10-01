const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{ts,tsx}"],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      fontFamily: {
        sans: [
          // "Inter var",
          "Helvetica",
          "Trebuchet MS",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        slate: colors.slate,
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dracula",
      "forest",
      "autumn",
      "forest",
      "aqua",
      "cyberpunk",
      "pastel",
    ],
  },
};
