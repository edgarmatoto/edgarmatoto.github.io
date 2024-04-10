/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}

