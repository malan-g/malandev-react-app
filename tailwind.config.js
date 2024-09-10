/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx, scss}"],
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      md: "640px",
      lg: "1256px"
    }
  },
  plugins: [],
}

