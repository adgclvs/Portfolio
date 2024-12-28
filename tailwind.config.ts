import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        background_alt: "rgba(var(--subtle-background))",
        foreground: "rgba(var(--foreground))",
        border: "rgba(var(--subtle-border))",
        input: "rgba(var(--interactive-border))",
        accent: {
          DEFAULT: "rgba(var(--solid-background))",
          hover: "rgba(var(--solid-hover-background))",
        },
        text: {
          low: "rgba(var(--low-contrast-text))",
          high: "rgba(var(--high-contrast-text))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

