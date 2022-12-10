/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs:['0.85rem', '1rem'],
      base:['0.95rem', '1.2rem'],
      xl:['1.25rem','1.75rem']
    },
    borderRadius: {
      'md':'0.375rem',
      'lg':'0.5rem',
      'xl':'0.75rem'
    },
    extend: {
      colors: {
        blue: '#080f2e',
        black: '#2E0D23',
        white: '#dcdee6'
      },
    },
   
  },
  plugins: [],
}
