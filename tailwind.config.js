/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily:{
      inter:['Inter', 'sans-serif'],
      monst: ['Montserrat', 'sans-serif'],
    },
  extend:{
    colors:{
      'primary':'#8872BF',
      'background':'#141A1A',
    }
  }
  },
  plugins: [],
}

