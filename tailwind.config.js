/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Satochi", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0F44CD",
      },
      screens: {
        sm: '400px'
      }
    },
  },
  plugins: [],
};
