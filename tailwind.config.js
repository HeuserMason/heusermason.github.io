/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        'xxl': '1600px',
        // => @media (min-width: 1200px) { ... }
      },
      colors: {
        'bYellow': '#FFE800'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

