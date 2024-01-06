/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
'bllue':'#1e40af'
    },
    extend: {
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(50%)'
          },
          '100%': {
            transform: 'translateY(0)'
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "black"
          }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        typing: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out',
        typing: 'typing 2s steps(20, end) infinite',
        'slide-up': 'slide-up 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards',
      },
    },
  },
  plugins: [],
}
