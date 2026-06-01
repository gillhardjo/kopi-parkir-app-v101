/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#3c5b41',
          dark: '#2c4330',
          light: '#4d7554'
        }
      }
    },
  },
  plugins: [],
}
