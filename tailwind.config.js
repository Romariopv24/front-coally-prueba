/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html,css}"],
  theme: {
    colors: {
      blue: '#0000FF',
      white: '#FFFFFF',
      offWhite: '#F7F8FC',
      green: '#3BC6A7',
      purple: '#6741E4',
      lightPurple: '#F3EAFF',
      lighterPurple: '#ECE9FE',
      lightGreen: '#DCFCF1',
      red: '#FFD8D9',
      yellow: '#FDF2D2',
      lightBlue: '#D4FFFA',
      lighterBlue: '#D2E6FE',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}

