/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CA64FB",
        secondary: "#8230B2",
      }
    },
  },
  plugins: [],
};
