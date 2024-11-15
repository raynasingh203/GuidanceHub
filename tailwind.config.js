/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    fontFamily: {
    
      notable: ["notable"],
      pixelsans: ["pixelsans"], 
      pixeloidmono: ["pixeloidmono"],

    },
    extend: {
      colors: {
        // Cool grays
        'steel': {
          50: '#d9d9d9',
          100: '#b9bbbf',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        // Ocean blues
        'ocean': {
          50: '#f0fdff',
          100: '#ccf7fe',
          200: '#99ecfd',
          300: '#66d9f9',
          400: '#33bef2',
          500: '#00a3e6',
          600: '#0082b8',
          700: '#00618a',
          800: '#00415c',
          900: '#00202e',
        },
        // Forest greens
        'forest': {
          50: '#f2fdf5',
          100: '#dcf8e4',
          200: '#b8f1c5',
          300: '#7fe49a',
          400: '#46d66d',
          500: '#2cb853',
          600: '#229442',
          700: '#1b7034',
          800: '#154c26',
          900: '#0e2817',
        },
        // Sunset oranges
        'sunset': {
          50: '#edff88',
          100: '#f77c74',
          200: '#f8dddb',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Berry purples
        'berry': {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        },
        // Candy pinks
        'candy': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        // Earth tones
        'earth': {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
        // Jewel tones
        'jewel': {
          'ruby': '#e31837',
          'sapphire': '#0f52ba',
          'emerald': '#046307',
          'amethyst': '#9966cc',
          'topaz': '#ffc87c',
          'garnet': '#733635',
        },
      },
    },
  },
  plugins: [ require('daisyui'),
    require('preline/plugin'),
    [require("tailgrids/plugin")],
    
  ],
}

