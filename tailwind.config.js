/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    
      // colors: {
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   black: colors.black,
      //   white: colors.white,
      //   gray: colors.trueGray,
      //   yellow: colors.amber,
      //   blue:colors.blue
      // }
    
  },
  plugins: [],
}

