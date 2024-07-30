/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,ts,css,scss,sass,less,styl}",  
    ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#009295',
        secondary: '#324b4c',
      },
    },
  },
  plugins: [function({ addUtilities }) {
    addUtilities({
      '.bg-primary': {
        'background-color': 'var(--color-primary)',
      },
      '.text-main-color': {
        'color': 'var(--color-primary) ',
      },
      '.bg-secondary': {
        'background-color': 'var(--color-secondary)',
      },
      '.text-secondary': {
        'color': 'var(--color-secondary)',
      },
    }, ['responsive', 'hover'])
  }],
}

