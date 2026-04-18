/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        night: {
          DEFAULT: '#0f0a18',
          soft: '#17102a',
          alt: '#1c1433',
        },
        cream: {
          DEFAULT: '#f4eedd',
          dim: '#c9c0a8',
          page: '#fbf6ea',
          soft: '#f3ead1',
        },
        ink: {
          DEFAULT: '#1a1024',
          dim: '#5c5340',
        },
        muted: '#8f8779',
        gold: {
          DEFAULT: '#d4a84b',
          bright: '#f1c86a',
          deep: '#9b7524',
        },
      },
    },
  },
  plugins: [],
}
