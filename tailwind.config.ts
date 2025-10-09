module.exports = {
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutralbackground: "var(--neutralbackground)",
        "neutraltext-primary": "var(--neutraltext-primary)",
        "wedding-colorsprimary": "var(--wedding-colorsprimary)",
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
      fontFamily: {
        "form-checkbox-label": "var(--form-checkbox-label-font-family)",
        "form-input-placeholder": "var(--form-input-placeholder-font-family)",
        "form-label": "var(--form-label-font-family)",
        "heading-all-caps-h6-desktop":
          "var(--heading-all-caps-h6-desktop-font-family)",
        "heading-medium-h2-desktop":
          "var(--heading-medium-h2-desktop-font-family)",
        "heading-small-h3-desktop":
          "var(--heading-small-h3-desktop-font-family)",
        "heading-tiny-h5-desktop": "var(--heading-tiny-h5-desktop-font-family)",
        "heading-xlarge-desktop": "var(--heading-xlarge-desktop-font-family)",
        "heading-xsmall-h4-desktop-400":
          "var(--heading-xsmall-h4-desktop-400-font-family)",
        "link-button": "var(--link-button-font-family)",
        "link-nav": "var(--link-nav-font-family)",
        "text-base-all-breakpoints":
          "var(--text-base-all-breakpoints-font-family)",
        "text-medium-desktop": "var(--text-medium-desktop-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
  darkMode: ["class"],
};
