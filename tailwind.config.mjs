/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef9ff',
          100: '#dcf3ff',
          200: '#b3e7ff',
          300: '#74d6ff',
          400: '#2cbeff',
          500: '#00a3ff',
          600: '#0083d4',
          700: '#0068ab',
          800: '#00568c',
          900: '#004974',
          950: '#002e4d',
        },
        secondary: {
          50: '#f4fbea',
          100: '#e7f6d0',
          200: '#cfeda7',
          300: '#b0df74',
          400: '#94ce4a',
          500: '#73b22a',
          600: '#5a8f1e',
          700: '#426b1a',
          800: '#36551a',
          900: '#2e4719',
          950: '#15270a',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffeecb',
          200: '#ffd988',
          300: '#ffbf45',
          400: '#ffa51c',
          500: '#fa8903',
          600: '#dd6700',
          700: '#b74b03',
          800: '#953a0b',
          900: '#7a310d',
          950: '#461700',
        },
      },
      fontFamily: {
        display: ['"Montserrat"', 'sans-serif'],
        body: ['"Nunito"', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 1.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};