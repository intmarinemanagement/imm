module.exports = {
  purge: {
    enabled: false,
    content: [
      './*.html',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    filter: {
      'grayscale': 'grayscale(1)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}
