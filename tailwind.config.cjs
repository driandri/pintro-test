/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': {'min': '0px', 'max': '550px'},
      ...defaultTheme.screens,
    },
    extend: {
    },
  },
  plugins: [],
});
