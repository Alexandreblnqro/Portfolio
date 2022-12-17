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
          DEFAULT: "#dc3e3e"
        },
        blue: {
          DEFAULT: "#155F6F"
        },
        gray: {
          FORM: "#F0F0F0"
        }
      },
      height: {
        '80vh': '85vh',
      }
    },
  },
  plugins: [],
}