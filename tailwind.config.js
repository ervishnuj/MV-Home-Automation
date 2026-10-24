
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0a0f1a",
          900: "#0f172a",
          800: "#1e293b",
          700: "#334155",
          600: "#475569"
        },
        gold: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
