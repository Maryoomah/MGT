/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      transitionProperty: {
        transform: "transform",
        opacity: "opacity",
      },
    },
  },
  plugins: [],
};
