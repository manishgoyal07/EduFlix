/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}