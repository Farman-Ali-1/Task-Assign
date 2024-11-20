/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Adding Poppins and Merriweather to the font families
        sans: ['Poppins', 'Arial', 'sans-serif'], // Poppins as the primary sans font
        serif: ['Merriweather', 'serif'], // Merriweather as the primary serif font
      },
    },
  },
  plugins: [],
}

