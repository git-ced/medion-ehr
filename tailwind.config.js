module.exports = {
  purge: ['./pages/**', './components/**'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '15px',
      },
      backgroundColor: {
        'main': '#FAFAFA'
      }
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
}
