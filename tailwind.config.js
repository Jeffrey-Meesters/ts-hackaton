/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-primeui')],
  theme: {
    colors: {
      primary: '#3178C6',
      accent: '#303036',
      background: '#FFFAFF',
    }
  }
}

