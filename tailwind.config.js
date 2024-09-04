import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        "FontThai":["Anuphan","sans-serif"],
        "FontEng":["Nunito","sans-serif"],
        "FontHeadEng":["Comfortaa", "sans-serif;"],
      },
    },
  },
  plugins: [daisyui],
  
}