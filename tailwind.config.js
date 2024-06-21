// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },

      colors: {
        rotion: {
          50: '#ebeaed',
          100: '#d5d6e0',
          200: '#bcbecf',
          300: '#a3a5be',
          400: '#7e81a0',
          500: '#595c82',
          600: '#52556f',
          700: '#45475b',
          800: '#373943',
          900: '#2c2d32',
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        'regin-drag': {
          '-webkit-app-region': 'drag',
        },
        'region-no-drag': {
          '-webkit-app-region': 'no-drag',
        },
      })
    }),
  ],
}
