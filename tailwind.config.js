/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Playpen Sans', 'sans-serif'],
      },
      colors: {
        expressTeal: '#00758F', // Custom color name
      },
    },
  },
  plugins: [],
}
