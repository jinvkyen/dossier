import { parseJsonText } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sf: ["SF Pro Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#000000",
        bgcards: "#1D1D1D",
        bgoutline: "#444444",
        ptext: "#AAAAAA",
      },
    },
  },
  plugins: [],
};

