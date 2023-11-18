/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: ['even'],
      fontFamily:{
        "Kanit": ['Kanit', 'sans-serif']
      }
    },
  },
  plugins: [],
};
