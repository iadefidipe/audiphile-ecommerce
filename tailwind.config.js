module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        max: "1110px",
      },
      colors: {
        pry: "#D87D4A",
        bgBlack: "#101010",
        gray: "#F1F1F1",
        offWhite: "#FAFAFA",
        white: "#FFFFFF",
        black: "#000000",
        accent: "#fbaf85",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        h1: "3.5rem",
        "h1-sm": "2.25rem",
        h2: "2.5rem",
        "h2-sm": "1.75rem",
        h3: "2rem",
        "h3-sm": "1.5rem",
        h4: "1.75rem",
        h5: "1.5rem",
        h6: "1.125rem",
        body: "0.9375rem",
        nav: "0.8125rem",
        overline: "0.875rem",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
      margin: {
        "5px": "5px",
      },
      spacing: {
        pad: "24px",
        by: "15px",
        bx: `30px`,
      },
      lineHeight: {
        text: "25px",
        h2: "44px",
        h3: "36px",
        h5: "33px"
      },
      letterSpacing: {
        h2: "1.43px",
        h3: "1.14px",
        h4: "2px",
        h5: "1.71px",
        overline: "10px",
      },
      borderRadius: {
        pry: "8px",
      },
      backgroundImage: {
        "wide-card-sm": "url('/assets/home/mobile/image-speaker-zx7.jpg')",
        "wide-card-md": "url('/assets/home/tablet/image-speaker-zx7.jpg')",
        "wide-card-lg": "url('/assets/home/desktop/image-speaker-zx7.jpg')",
        "card-pattern-circle":
          "url('/assets/home/desktop/pattern-circles.svg')",
        "hero-desktop": "url('/assets/home/desktop/image-hero.png')",
        "hero-tablet": "url('/assets/home/tablet/image-header.png')",
        "hero-mobile": "url('/assets/home/mobile/image-header.png')",
      },
      backgroundPosition: {
        "desk-pattern": " -150px 170px",
      },
    },
  },
  plugins: [],
}
