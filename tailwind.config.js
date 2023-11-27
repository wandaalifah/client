/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        grey: {
          100: '#606060',
          500: '#3B3B3B'
        },
        blue: {
          900: '#35414B',
          950: '#1D2830'
        },
        purple: {
          550: '#796EFF'
        }
      }
    },
  },
  plugins: [],
}

