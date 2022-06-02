module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pry": "#D87D4A",
        "bg-black": "#101010",
        gray: "#F1F1F1",
        "bg-white": "#FAFAFA",
        white: "#FFFFFF",
        black: "#000000",
        "accent": "#fbaf85",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        h1: '3.5rem',
        h2: '2.5rem',
        h3: '2rem',
        h4: '1.75rem',
        h5: '1.5rem',
        h6: '1.125rem',
        body:'0.9375rem'
      }
    },
  },
  plugins: [],
}
