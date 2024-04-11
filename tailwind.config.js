// tailwind.config.js
export default {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D43D3D',
        dark: '#0D0D0D',
        violet: "#825EEE",
        secondary: "#C9C9C9"
      },
      container: {
        center: true,
        padding: '15px',
        screens: {
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
};
