/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./output/*.{html,js}"],
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
