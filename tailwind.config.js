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
        bghover: "#555555",
        ptext: "#AAAAAA",
      },
    },
    screens: {
      xs: "400px", // New custom size
      sm: "640px", // Tailwind default
      md: "768px", // Tailwind default
      lg: "1024px", // Tailwind default
      xl: "1280px", // Tailwind default
      "2xl": "1536px", // Tailwind default
    },
  },
  plugins: [],
};
