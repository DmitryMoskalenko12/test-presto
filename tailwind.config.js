/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  theme: {
    screens: {
     xs: '320px',
     sm: '575px',
     md: '767px',
     mdx: '991px',
     lg: '1199px',
     xl: '1399px'
    },
    extend: {
      container: {
        center: true,
        screens: {
          xs: '100%',
          sm: '540px',
          md: '720px',
          mdx: '991px',
          lg: '1140px',
          xl: '1320px'
        },
      },
      colors: {},
      
      fontFamily: {
        openSans: ['Open Sans', 'sans-serif']
      },
    },
  },
  plugins: [],
}

