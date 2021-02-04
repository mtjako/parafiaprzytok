module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
       '-10': '-10',
      }
    },
    fontFamily: {
      'display': ['Source Sans Pro'],
      'body': ['Source Sans Pro'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
