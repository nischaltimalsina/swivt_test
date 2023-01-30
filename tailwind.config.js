/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        nav:"#1D262A",
        base:"#F3F3F3",
        catalogue:"#FFFAF2",
        carousel:"#FCE5C0",
        brown:"#926228",

      },
      height:{
        topbar:"48px",
        navbar:"104px"
      }
    },
  },
  plugins: [],
}