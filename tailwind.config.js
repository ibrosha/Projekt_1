/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:"class",
  theme: {
    screens: {
      md:{"max":"450px"}
    },
    extend: {},
  },
  plugins: [],
};
