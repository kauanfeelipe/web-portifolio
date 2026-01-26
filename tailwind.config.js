/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-black': '#0a0a0a',
        'terminal-dark': '#111111',
        'neon-green': '#00ff41',
        'neon-cyan': '#00f3ff',
        'neon-pink': '#ff00ff',
        'amber-alert': '#ffb000',
        'dim-gray': '#444444',
      },
      fontFamily: {
        'mono': ['"Fira Code"', 'monospace'],
        'pixel': ['"VT323"', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'cursor': 'cursor .75s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        glitch: {
          '2%, 64%': { transform: 'translate(2px,0) skew(0deg)' },
          '4%, 60%': { transform: 'translate(-2px,0) skew(0deg)' },
          '62%': { transform: 'translate(0,0) skew(5deg)' },
        },
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}