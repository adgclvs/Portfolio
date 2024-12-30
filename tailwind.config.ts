import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'rgba(var(--background))',
  			background_alt: 'rgba(var(--subtle-background))',
  			foreground: 'rgba(var(--foreground))',
  			border: 'rgba(var(--border))',
  			input: 'rgba(var(--input))',
  			accent: {
  				DEFAULT: 'rgba(var(--accent))',
  				hover: 'rgba(var(--solid-hover-background))',
  				foreground: 'rgba(var(--accent-foreground))'
  			},
  			text: {
  				low: 'rgba(var(--low-contrast-text))',
  				high: 'rgba(var(--high-contrast-text))'
  			},
  			card: {
  				DEFAULT: 'rgba(var(--card))',
  				foreground: 'rgba(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'rgba(var(--popover))',
  				foreground: 'rgba(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'rgba(var(--primary))',
  				foreground: 'rgba(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'rgba(var(--secondary))',
  				foreground: 'rgba(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'rgba(var(--muted))',
  				foreground: 'rgba(var(--muted-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'rgba(var(--destructive))',
  				foreground: 'rgba(var(--destructive-foreground))'
  			},
  			ring: 'rgba(var(--ring))',
  			chart: {
  				'1': 'rgba(var(--chart-1))',
  				'2': 'rgba(var(--chart-2))',
  				'3': 'rgba(var(--chart-3))',
  				'4': 'rgba(var(--chart-4))',
  				'5': 'rgba(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

