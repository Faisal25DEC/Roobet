const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      sc560: "560px",
      maxSc360: { max: "360px" },
      sm600: "600px",
      md1024: "1024px",
      md1200: "1200px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
