/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {

    fontFamily: {
      manrope: ['Manrope', 'sans-serif']
    },

    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    extend: {
      colors: {
        lightCyan: 'hsl(193, 38%, 86%)',
        neonGreen: 'hsl(150, 100%, 66%)',
        grayishBlue: 'hsl(218, 20%, 24%)',
        darkGrayishBlue: 'hsl(217, 19%, 24%)',
        darkBlue: 'hsl(218, 23%, 16%)'
      }
    },
  },
  plugins: [],
}

