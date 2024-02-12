/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kollektif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'mint-green': {
          '50': '#effef0',
          '100': '#d9ffdd',
          '200': '#a4fcad',
          '300': '#7cf98a',
          '400': '#3cec50',
          '500': '#13d42a',
          '600': '#09b01e',
          '700': '#0b8a1b',
          '800': '#0f6c1b',
          '900': '#0e5919',
          '950': '#013209',
        },
      },
},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

