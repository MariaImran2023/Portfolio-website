/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#6534bf',
      },
      spacing: {
        '18': '4.5rem', 
      },
    },
  },
  plugins: [],
}
