/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    
    extend: {
      colors: {
        'grouptag': '#46cdff',
        'primary': '#0c2030',
        'eggshell': '#fafafa',
        'accent-green': '#15291b',
        'accent-blue': '#00a0ff'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: []
};