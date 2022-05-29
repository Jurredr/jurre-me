module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
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
        jurregray: '#F0F1F4',
        jurreoffwhite: '#F5F0F5',
        jurredark: '#1C1C27',
        jurredarklight: '#28293E',
        jurredarklighter: '#42426A'
      }
    }
  },
  plugins: []
}
