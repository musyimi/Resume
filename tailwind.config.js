module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        screens: {
          'xs':{'min':'280px'},
          'xs1': {'min':'360px'},
          'xs2': {'min': '375px'},
          'xs3': {'min': '411px'},
          'sm1': {'min': '540px'},
          'sm2': {'min': '768px'},
          'lg1': {'min': '1280px'}



          
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }