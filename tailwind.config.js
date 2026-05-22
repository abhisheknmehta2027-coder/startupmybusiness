/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // 🚀 Yeh line Tailwind ko batati hai ki JSX files padhni hain
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}