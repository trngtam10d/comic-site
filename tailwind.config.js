/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        dark: "black",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        first: "10px 0 0 10px",
        last: "0 10px 10px 0"
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'spin-slow': 'spin 2s linear infinite',
        'spin-card': 'fadeIn .35s ease forwards'
      },
      gridTemplateColumns: {
        sm: "repeat(auto-fill, minmax(130px, 1fr))",
        lg: "repeat(auto-fill, minmax(160px, 1fr))",
      },
      boxShadow: {
        '3m': 'black 20em 10px 15em 2em inset',
        '3l': 'black 10em 5px 5em 0 inset'
      },
      width: {
        'card': 'calc(100% / 6 - 1rem)'
      },
      backgroundImage: {
        'card-wrapper': 'linear-gradient(0deg,#343a40 8%,#343a40c1 16%,#343a4069 24%,#343a4000 32%)'
      },
      padding: {
        'card-rate': '1px 4px' ,
        'tab': '7px 10px'
      },
      margin: {
        'dot': '3px 6px'
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

