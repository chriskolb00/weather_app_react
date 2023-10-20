/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js,jsx}"],
  theme: { 
    extend: {
      screens:{
        xss:'280px',
        xs:'540px',
      },
    },
  },
  plugins: [],
}

