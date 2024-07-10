/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {},
    fontFamily: {
      popins:["Poppins","sans-serif"]
    },
    screens:{
      exsm:"330px",

      sm: '400px',

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
