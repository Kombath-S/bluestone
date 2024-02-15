/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray": {
          100: "#d8d8d8",
          200: "#999999",
          300: "#707070",
          400: "#242424"
        },
        "red": "#ff3d55",
        "blue": "#0856a2",
        "pink": "#ff00cc",
        "transparent": "transparent",
        "white": "#ffffff"
      },
      maxWidth: {
        "pad": "1400px !important"
      },
      backgroundColor:{
        "blueGradient": "linear-gradient(90deg,#ffffff,#000000)"
      },
      height:{
        "hero": "calc(100vh - 120px)"
      },
      minHeight:{
        "hero": "calc(100vh - 120px)",
      }
    },
   
    screens: {
      "phone": { 'max': "700px", },
      "tablet": { "max": "950px",  },
      "screen": { "max": "1180px",},
      "screen-xl": { "max": "1200px" },
      "screen-xxl": "1440px",
      "menu":{"min": "1180px"}
    },

  },
  plugins: [],
}

