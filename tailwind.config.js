module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '25px',
    },
    extend: {
      animation: {
        cursor: 'cursor .8s linear infinite alternate',
        type: 'type 1.8s ease-out .8s 1 normal both',
        'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '85%, 90%': { width: '9ch' },
          '95%, 100%' : { width: '12ch' },
        },
      },
      colors: {
        primary: '#0b132b',
        secondary: '#6fffe9',
      },
      screens: {
        'xl' : '1420px',
      }
    },
  },
  plugins: [],
}
