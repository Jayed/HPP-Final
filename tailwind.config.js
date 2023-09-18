/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      spacing: {
        "1%": "1%",
        "2%": "2%",
        "3%": "3%",
        "6%": "6%",
        "12%": "12%",
      },
      // animation: {
      //   "spin-slow": "spin 10s linear infinite",
      // },
    },
  },
  plugins: [require("daisyui")],
};
