/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
        base: ["Cairo", "sans-serif"],
      },
      colors: {
        primary: "#ec8812",
      },
    },
  },
  plugins: [],
};