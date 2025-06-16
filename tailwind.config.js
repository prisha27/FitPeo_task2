export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        headline: ['Anton', 'Impact', 'Arial Narrow', 'sans-serif'],
      },
      animation: {
        'reveal-text': 'revealText 1s ease-out forwards',
        'slide-in': 'slideInRight 1s ease-out forwards',
        'slide-in-left': 'slideInLeft 1s ease-out forwards',
        'slide-in-right': 'slideInRight 1s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        revealText: {
          '0%': {
            clipPath: 'inset(100% 0 0 0)',
            opacity: '0',        
          },
          '100%': {
            clipPath: 'inset(0 0 0 0)',
            opacity: '1',         
          },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}