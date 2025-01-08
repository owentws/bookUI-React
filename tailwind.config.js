// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], 
      },
      colors:{
        btn1:'#FA812F',
        color1:'#FA4032',
        color2:'#FAB12F',
        color3:'#FEF3E2',
      },
    },
  },
  plugins: [],
};
