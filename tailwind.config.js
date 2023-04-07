/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      sans:'Nunito Sans'
    },
    fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '800',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {},
  },
  plugins: [],
}

