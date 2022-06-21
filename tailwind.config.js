const colors = require('tailwindcss/colors')

module.exports = {
  plugins: [
    require('@tailwindcss/typography')
  ],
  darkMode: 'class',
  content: ['content/**/*.{md,yml,json,json5,csv}'],
  theme: {
    extend: {
      colors: {
        'z-orange': {
          50: '#FFEDD5',
          100: '#FED7AA',
          200: '#FDBA74',
          300: '#FB923C',
          400: '#FF8D47',
          500: '#FF7447',
          600: '#EA580C',
          700: '#FF4444',
          800: '#EA580C'
        },

        'z-pink': {
          400: '#FF4247',
          500: '#E92A5B',
          600: '#DD1C67',
          700: '#D31071',
          800: '#CF0283'
        },

        gray: colors.stone
      }
    }
  }
}
