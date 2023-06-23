/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#0d0d0f',
          800: '#1e1e24', 
          700: '#2f2f3b',
          600: '#424254',
          500: '#4f4f6b',
          100: '#dfdfed'
        },
        theme: {
          800: '#332b2a',
          700: '#4a3e3b',
          600: '#594a46',
          500: '#695651',
          400: '#78605a',
          300: '#947a73',
          200: '#ab8f87',
          100: '#f7e9d5'
        },
        yellow: {
          100: '#ffd59c',
        },
      },
      backgroundImage: {
        'layer-01' : "url('/public/layer1.svg')",
        'layer-02' : "url('/public/layer2.svg')",
        'layer-03' : "url('/public/layer3.svg')",
      },
      fontFamily: {
        alte: ['Alte']
      },
    },
  },
  plugins: [],
}
