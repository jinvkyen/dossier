/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        radar: 'radar-ping 3s infinite ease-in-out',
      },
      keyframes: {
        'radar-ping': {
          '0%': { transform: 'scale(1)', opacity: '0.12' },
          '70%': { transform: 'scale(3.5)', opacity: '0' },
          '100%': { transform: 'scale(3.5)', opacity: '0' },
        },
      },
      fontFamily: {
        sf: ["SF Pro Display", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#000000",
        bgcards: "#1D1D1D",
        bgoutline: "#444444",
        bghover: "#555555",
        ptext: "#ababab",
      },
      keyframes: {
        radar: {
          "0%": { transform: "scale(0.2)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "0" },
        },
      },
      animation: {
        radar: "radar 1.5s ease-out infinite",
      },
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1208px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
