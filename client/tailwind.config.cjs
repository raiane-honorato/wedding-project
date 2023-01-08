/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      animation: {
        'pulse-logo': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontFamily: {
        mainTitle: 'Amatic SC, sans-serif',
        specialTitle: 'Pacifico, sans-serif',
        text: 'Montserrat, sans-serif',
      },
      colors: {
        brand: {
          primary: {
            main: '#BA7C7D',
            200: '#B06062',
            300: '#984648',
          },
          primary_lighten: '#CBB1A4',
          primary_transparent: '#CBB1A44D',
          secondary: '#A3734F',
          secondary_transparent: '#A3734FA6',
          secondary_lighten: '#867A62',
          secondary_dark: '#62482F',
          text: '#606060',
          white: '#FFFFFF',
        },
      },
      backgroundImage: {
        header: 'url(/assets/header.png)',
        gradient:
          'linear-gradient(180deg, #CBB1A4 0%, rgba(203, 177, 164, 0.677083) 54.17%, rgba(203, 177, 164, 0.561671) 71.87%, rgba(203, 177, 164, 0) 100%)',
      },
    },
  },
  plugins: [],
};
