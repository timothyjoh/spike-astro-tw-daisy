/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,ts,tsx,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}