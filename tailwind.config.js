/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'rosa-custom': {
          // Tonos más claros para fondos
          50: '#FFF8FA',   // Casi blanco con tinte rosa
          100: '#FFE8EE',  // Rosa muy claro
          200: '#FFB0C7',  // Tu color #FFB0C7
          300: '#F4A4B8',  // Intermedio claro
          400: '#E898AC',  // Intermedio
          500: '#D68AA2',  // Tu color #D68AA2
          600: '#C47C96',  // Intermedio más oscuro
          700: '#AD657C',  // Tu color #AD657C
          800: '#833F57',  // Tu color #833F57
          900: '#5A1932',  // Tu color #5A1932
          950: '#3D111F',  // Más oscuro para acentos
        }
      }
    },
  },
  plugins: [],
}
