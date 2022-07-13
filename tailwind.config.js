/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/images/whiskeyBackground.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus'],
  }
}
