/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 This enables toggle-based dark mode
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
