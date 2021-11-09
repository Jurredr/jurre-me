import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  mode: 'jit',
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next']
  },
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
        jurreblack: '#2A2A2A',
        jurreorange: '#FFA800'
      }
    },
    screens: {
      xs: '320px'
    }
  },
  plugins: []
})
