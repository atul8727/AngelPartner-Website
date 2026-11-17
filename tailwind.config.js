// Colors and fonts come from ONE file: src/config/theme.js
const theme = require('./src/config/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: theme.colors,
      fontFamily: theme.fonts,
      boxShadow: theme.shadows,
    },
  },
  plugins: [],
};
