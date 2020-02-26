const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        secondary: colors.yellow,
        neutral: colors.gray,
        contrast: colors.white
      },
      spacing: {
        '72': '18rem',
        '80': '20rem',
        '88': '22rem',
        '96': '24rem',
        '104': '26rem',
        '112': '28rem',
        '120': '30rem',
        '128': '32rem'
      }
    },
  },
  variants: {
    borderRadius: ['responsive', 'focus-within'],
    boxShadow: ['responsive', 'hover', 'focus', 'focus-within'],
    outline: ['responsive', 'focus', 'focus-within']
  },
  plugins: []
};
