/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    borderRadius: {
      '4xl': '2rem'
    },
    borderWidth: {
      '3': '3px'
    },
    extend: {
      colors: {
        'grouptag': '#46cdff',
        'primary': '#0c2030',
        'eggshell': '#fafafa',
        'accent-green': '#15291b',
        'light-green': '#1ab1ab',
        'accent-blue': '#00a0ff',
        'light-gray': '#efefef59',
        'dark-gray': '#282626',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      spacing: {
        '8.5': '2.125rem',
        '13': '3.25rem',
        '18': '4.5rem',
        '19': '4.75rem',
        '22': '5.5rem',
        '25': '6.25rem',
        '40.5': '10.125rem',
        '47': '11.75rem',
        '50': '12.5rem',
        '70': '17.5rem',
        '79': '19.75rem',
        'feature': 'calc((100% - 980px) * 0.5)',
      }
    },
  },
  plugins: []
};