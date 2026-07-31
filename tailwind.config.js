/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Warm palette drawn from the Nepres logo (navy + crimson) plus
        // Nepali/Indian-cuisine accents. Tune once the final logo file is in.
        navy: {
          DEFAULT: '#1b1f4b',
          50: '#eef0fa',
          100: '#d6d9f0',
          200: '#adb3e1',
          300: '#848dd2',
          400: '#5b67c3',
          500: '#3843a8',
          600: '#2b3486',
          700: '#232a6b',
          800: '#1b1f4b',
          900: '#12142f',
        },
        crimson: {
          DEFAULT: '#b7202e',
          50: '#fbeaec',
          100: '#f4c6cb',
          200: '#e8949e',
          300: '#dc6270',
          400: '#c93b4c',
          500: '#b7202e',
          600: '#9a1a26',
          700: '#7c151f',
          800: '#5f1017',
          900: '#420b10',
        },
        saffron: {
          DEFAULT: '#e2a63b',
          50: '#fdf6e9',
          100: '#f9e6bd',
          200: '#f2d18c',
          300: '#ecbc5c',
          400: '#e2a63b',
          500: '#c98c25',
          600: '#a8701c',
          700: '#835515',
          800: '#5e3c0f',
          900: '#3a250a',
        },
        terracotta: '#c1633d',
        cream: '#faf3e7',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
