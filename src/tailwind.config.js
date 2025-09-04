// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gloock: ['Gloock', 'serif'], // ✅ your custom font
      },
    },
  },
  plugins: [],
}
