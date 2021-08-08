module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
            '144': '36rem',
            '176': '44rem'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
