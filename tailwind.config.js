/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
      },
      colors: {
        gray: {
          50:  "#f9f9f9",
          100: "#f0f0f0",
          200: "#e0e0e0",
          300: "#cfcfcf",
          400: "#a5a5a5",
          500: "#7c7c7c",
          600: "#5a5a5a",
          700: "#3d3d3d",
          800: "#2a2a2a",
          900: "#1a1a1a",
          950: "#121212",
        },
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}