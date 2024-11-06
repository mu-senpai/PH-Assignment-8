import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'purchase': '0px 4px 50px 0px rgba(11, 11, 11, 0.15)',
      }
    },
  },
  plugins: [
    daisyui,
  ],
}

