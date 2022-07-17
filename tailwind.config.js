/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // for easy use of background image (className='bg-hero')
        'hero': "url('https://res.cloudinary.com/sonny949/image/upload/v1658042872/whiskeyBackground_jil1ai.jpg')",
      }
    },
  },
  plugins: [
    // regains normal h1 behaviour absent from tailwind
    require('@tailwindcss/typography')
  ],
  variants: {
    backgroundImage: ['responsive', 'hover', 'focus'],
  },
}
