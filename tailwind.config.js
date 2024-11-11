/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('daisyui'),
  ],
}

