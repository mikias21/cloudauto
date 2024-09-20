/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        railway: ['Raleway', 'sans-serif'],
        satisfy: ['Satisfy', 'cursive'],
        kaushan: ['Kaushan Script', 'cursive'],
      }
    },
  },
  plugins: [],
}

