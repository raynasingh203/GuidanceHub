/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
    
      notable: ["notable"],
      pixelsans: ["pixelsans"], 
      pixeloidmono: ["pixeloidmono"],

    },
    extend: {},
  },
  plugins: [ require('daisyui'),
    
  ],
}

