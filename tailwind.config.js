/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./section/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'light_green': '#00CA99',
      'light_black': '#000000',
      'light_white': '#ffffff',
      'light_soft_white': '#E6E6E6',
      'light_gray_white': '#696969',
    },

  },
  plugins: [require("daisyui")],
}