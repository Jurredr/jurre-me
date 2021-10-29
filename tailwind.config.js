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
      },
      colors: {
        jurreyellow: {
          light: '#FFEC91',
          DEFAULT: '#FFDE36',
          dark: '#FFC532'
        },
        jurrepurple: '#9C67FF',
        jurremagenta: '#DC98FF',
        jurreblue: '#54BBFF',
        jurreblack: '#2A2A2A'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
