/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        chicago: {
          black: "#0a0a0a",
          dark: "#1a1a1a",
          gray: "#2d2d2d",
          red: "#cc0000",
          "red-dark": "#990000",
          "red-light": "#ff1a1a",
          gold: "#d4af37",
          white: "#f5f5f5",
        },
      },
      fontFamily: {
        show: ['"Playfair Display"', "serif"],
        sans: ["Montserrat", "sans-serif"],
        marquee: ['"Bebas Neue"', "sans-serif"],
        playbill: ['"Playfair Display"', "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease",
        spotlight: "spotlight 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        spotlight: {
          "0%, 100%": { opacity: "0.1" },
          "50%": { opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};
