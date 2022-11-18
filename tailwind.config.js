/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      interBold: ["InterBold", "sans-serif"],
    },
    extend: {
      colors: {
        red: {
          DEFAULT: "#E34A47"
        },
        blue: {
          DEFAULT: "#0F5A69"
        }
      }
    },
  },
  plugins: [],
}