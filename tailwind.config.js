/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./*.html', './js/**/*.js'],
  darkMode: 'class',  // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

