/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/ui/views/**/*.{vue,ts,tsx}',
    './src/ui/components/**/*.{vue,ts,tsx}'
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      darkBlue: '#2B3945',
      veryDarkBlue: '#202C37'
    },
  },
  plugins: [],
}
