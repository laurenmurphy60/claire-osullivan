import type { Config } from "tailwindcss";

/*
 * Tailwind is a thin layer over the CSS variables in
 * src/design-system/tokens.css. Change values there, not here.
 */
const channel = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: channel("ink-950"),
          900: channel("ink-900"),
          800: channel("ink-800"),
          700: channel("ink-700"),
        },
        paper: {
          DEFAULT: channel("paper"),
          200: channel("paper-200"),
        },
        stone: {
          400: channel("stone-400"),
          500: channel("stone-500"),
          600: channel("stone-600"),
        },
        blue: {
          600: channel("blue-600"),
          500: channel("blue-500"),
          400: channel("blue-400"),
        },
        white: channel("white"),
        // Tone-aware: follow the nearest .tone-dark / .tone-light section
        canvas: "rgb(var(--base) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        strong: "rgb(var(--fg-strong) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        rule: "var(--color-rule)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        script: ["var(--font-script)"],
      },
      fontSize: {
        "2xs": "var(--text-2xs)",
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        h4: "var(--text-h4)",
        h3: "var(--text-h3)",
        h2: "var(--text-h2)",
        h1: "var(--text-h1)",
        display: "var(--text-display)",
      },
      maxWidth: {
        page: "var(--container-max)",
        narrow: "var(--container-narrow)",
      },
      spacing: {
        gutter: "var(--gutter)",
        section: "var(--section-y)",
        header: "var(--header-h)",
      },
      gap: {
        grid: "var(--grid-gap)",
      },
      transitionDuration: {
        fast: "var(--duration-fast)",
        base: "var(--duration-base)",
        slow: "var(--duration-slow)",
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        out: "var(--ease-out)",
        "in-out": "var(--ease-in-out)",
      },
    },
  },
  plugins: [],
};

export default config;
