const colors = {
  'ak-green': '#DEECB1',
  'ak-green-light': '#E7F1C8',
  'ak-green-dark': '#5F741C',
  'ak-red': '#F0CACE',
  'ak-yellow': '#FFF7BE',
  'ak-sky-blue': '#CEEFE8',
  'ak-orange': '#F1E2D8',
  'ak-purple': '#E6E3FA',
  'ak-gray': '#565F69'
}

module.exports = {
  theme: {
    fontFamily: {
      display: ['Handlee', 'sans-serif'],
      body: ['Handlee', 'sans-serif'],
    },
    extend: {
      colors: {
        ...colors
      },
    },
  },
}
