/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f0f0f",
          200: "#161616",
          700: "#e5e5e5",
        },
        secondary: "#ad251b",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
