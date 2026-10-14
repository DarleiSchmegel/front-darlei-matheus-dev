/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ground: {
          light: '#F8F8F6',
          dark: '#111215',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#181A1F',
          raise: '#1E2127',
        },
        edge: {
          light: '#E2E4E9',
          dark: '#2A2E37',
        },
        ink: {
          primary: '#111215',
          light: '#F4F2ED',
          muted: '#5A6270',
          'muted-dark': '#8E95A2',
        },
        accent: {
          DEFAULT: '#A3E635',
          light: '#65A30D',
        },
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A',
        },
      },
    },
  },
  plugins: [],
};
