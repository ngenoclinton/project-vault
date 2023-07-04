/** @type {import('tailwindcss').Config} */
const googleFonts = require("google-fonts-plugin");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sx': {'min': '475px', 'max': '640px'},
      'sm': {'min': '640px'},
      'mm': {'min': '640px', 'max': '768px'},
      'md': {'min': '768px'},      
      'mx': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px'},
      'lx': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
      '2xl': {'min': '1536px'},
    },
    extend: {
      colors:{
        primaryWhite:'#fff',
        darkBlue:'#0d333f',
        brightRed: 'hsl(12, 88%, 59%)',

        darkBlueDeep: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
        
        Grey0:'#333',
        backgroundColor: '#fff1bd',
        border: '#111460',
        boxShadow:'#111460',

        Grey1: '#393a3d',
        Grey2: '#6b6c72',
        Grey3: '#8d9096',
        Grey4: '#babec5',
        Grey5: '#d4d7dc',
        Grey6: '#e3e5e8',
        Grey7: '#eceef1',
        Grey8: '#f4f5f8',
        GreyGrey1: '#e5e5e5',
        GreyGrey2: '#f7f8f3',
        GreyGrey3: '#ddd',
        GreyGrey: '#c4c4c4',
        blue0: '#053d6d',
        blue1: '#055393',
      },
      fontFamily:{
        roboto:'Roboto Flex',
        robotoFlex:'Roboto Flex',
        nanoSans:'Noto Sans',
        inter:'Inter',
        bubblerOne:'Bubbler One'
      }
    },
  },
  plugins: [],
}

