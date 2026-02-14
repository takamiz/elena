/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./frontend/index.html",
    "./frontend/src/**/*.rs",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
            900: '#0f172a',
            800: '#1e293b',
        },
        emerald: {
            400: '#34d399',
            500: '#10b981',
        },
        rose: {
            500: '#f43f5e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
