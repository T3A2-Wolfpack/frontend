/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        // for easy use of background image (className='bg-hero')
        hero: "url('https://res.cloudinary.com/sonny949/image/upload/v1658042872/whiskeyBackground_jil1ai.jpg')",
      },
    },
  },
  plugins: [
    // regains normal h1 behaviour absent from tailwind
    require("@tailwindcss/typography"),
  
  ],
  variants: {
    backgroundImage: ["responsive", "hover", "focus"],
  },
};
