/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{css}', 
    './output/**/*.{html,js,css}'  
  ],
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

