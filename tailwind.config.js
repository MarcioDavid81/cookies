/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Josefin: ["Josefin Sans", "sans-serif"],
        Berkshire: ["Berkshire Swash", "monospace"],
      },

      colors: {
        primary: "#017301",
        secondary: "#CF3B2F",
        tertiary: "#262626",
        quartiary: "#FEFEFE",
        quinary: "#FF8800",
      },
    },
  },
  plugins: [],
}

