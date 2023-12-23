// import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
      },
    },
    // typography: (theme) => ({
    //   DEFAULT: {
    //     css: {
    //       color: theme("colors.foreground"),
    //       a: {
    //         color: theme("colors.primary.DEFAULT"),
    //         "&:hover": {
    //           color: theme("colors.primary.foreground"),
    //         },
    //       },
    //       h1: {
    //         color: theme("colors.foreground"),
    //       },
    //       h2: {
    //         color: theme("colors.foreground"),
    //       },
    //       h3: {
    //         color: theme("colors.foreground"),
    //       },
    //       h4: {
    //         color: theme("colors.foreground"),
    //       },
    //       h5: {
    //         color: theme("colors.foreground"),
    //       },
    //       h6: {
    //         color: theme("colors.foreground"),
    //       },
    //       strong: {
    //         color: theme("colors.foreground"),
    //       },
    //       code: {
    //         color: theme("colors.foreground"),
    //       },
    //       blockquote: {
    //         color: theme("colors.foreground"),
    //       },
    //       "blockquote p:first-of-type::before": {
    //         content: "none",
    //       },
    //       "blockquote p:last-of-type::after": {
    //         content: "none",
    //       },
    //       "ol > li::before": {
    //         color: theme("colors.foreground"),
    //       },
    //       "ul > li::before": {
    //         backgroundColor: theme("colors.foreground"),
    //       },
    //       hr: {
    //         borderColor: theme("colors.foreground"),
    //       },
    //       "figure figcaption": {
    //         color: theme("colors.foreground"),
    //       },
    //       thead: {
    //         color: theme("colors.foreground"),
    //       },
    //       tbody: {
    //         color: theme("colors.foreground"),
    //       },
    //       "th, td": {
    //         color: theme("colors.foreground"),
    //       },
    //       pre: {
    //         color: theme("colors.foreground"),
    //       },
    //       "pre code": {
    //         color: theme("colors.foreground"),
    //       },
    //       code: {
    //         color: theme("colors.foreground"),
    //       },
    //       "a code": {
    //         color: theme("colors.foreground"),
    //       },
    //       "code::before": {
    //         color: theme("colors.foreground"),
    //       },
    //       "code::after": {
    //         color: theme("colors.foreground"),
    //       },
    //     },
    //   },
    // }),
  },
  plugins: [require("tailwindcss-animate")],
};
// } satisfies Config;
