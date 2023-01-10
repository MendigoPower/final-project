/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {

    extend: {
      fontSize: {
        '85xl': '5.31rem',
        '65xl': '4.0rem',
        '50xl': '3.1rem',
      },
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'cursive']
      },
      skew: {
        '4': '4deg',
        '44': '-4deg'
      },
      rotate: {
        '4': '-3deg'
      },
      colors: {
        'eastern-blue': '#008294',
        'not-white': '#E5E5E5',
        'darker-grey': '#C6C6C6',
        'light-grey': '#D9D9D9',
        'medium-grey': '#484848',
        'wierdo-orange': '#FF843A',
      },
      boxShadow: {
        '3xl': '0 6px 6px  rgba(0, 0, 0, 0.35)',
        'button-shadow': ' 0px 2px 8px 0px  rgba(99, 99, 99, 0.2)',
      },
      lineHeight: {
        '11': '3rem',
        '13': '4rem',
        '15': '6rem',

      },
      letterSpacing: {
        'big': '0.14em'
      },
      spacing: {
        '128': '32rem',
        '136': '40rem',
        '140': '45rem',
      },
      width: {
        '600': '37.5rem'
      },
      maxWidth: {
        '85': '85%'
      },
      scale: {
        '101': '1.01',
      },
      opacity: {
        '85': '.85',
      },
      screens: {
        'mobile': '480px',

        'tablet': '640px',

        'laptop': '1024px',

        'desktop': '1280px',
      },


    },
  },
  plugins: [],
}