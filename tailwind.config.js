module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        freigeist: ['Freigeist'],
        freigeistwide: ['Freigeist Wide'],
        euclid: ['Euclid Circular B']
      },
      colors: {
        jurreyellow: '#FFC400',
        jurrelightyellow: '#FFC35E',
        jurrelightpurple: '#DC98FF',
        jurrelightblue: '#54BBFF',
        jurredarkyellow: '#FFAD00',
        jurredarkpurple: '#B729FF',
        jurredarkblue: '#00A8FF',
        jurrelightgray: '#F0F1F4',
        jurregray: '#676767',
        jurredarkgray: '#E2E2E2',
        jurreoffwhite: '#F5F0F5',
        jurredark: '#1C1C27',
        jurredarklight: '#28293E',
        jurredarklighter: '#42426A'
      }
    },
    screens: {
      xs: '420px',
      sm: '640px',
      md: '768px',
      mdlg: '896px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
}
