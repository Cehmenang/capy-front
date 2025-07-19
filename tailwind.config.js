/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#fffff3",
        second: "#feddab",
        third: "#493522",
        fourth: "#E37F49",
        fifth: '#FFE8BA'
      },
      fontFamily: {
        opensans: ["OpenSans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

