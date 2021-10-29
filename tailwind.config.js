module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        freigeist: ['Freigeist'],
        freigeistwide: ['Freigeist Wide'],
        euclid: ['Euclid Circular B']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
