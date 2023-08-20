/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      margin: {
        '11+11px': 'calc(11% + 11px)',
      },
      colors: {
        'slate': 'rgb(240, 240, 245)',
      },
      screens: {
        'xs': '320px', // Define your extra small breakpoint here
      },
    },
  },
  plugins: [],
}