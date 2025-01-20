/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [".html,js"],
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
