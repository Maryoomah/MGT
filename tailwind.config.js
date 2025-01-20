/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js", "./src/*.css"],
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
