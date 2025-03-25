module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#FF4E00', // Cape Town sunset orange
        'navy': '#003A5D',   // Table Mountain navy
        'slate': {
          100: '#f3f4f6',    // Lightest
          800: '#1e293b',    // Darkest
        }
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // Modern clean font
      }
    },
  },
  plugins: [],
}