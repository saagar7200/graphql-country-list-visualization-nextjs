import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chartPrimary: "var(--chart-primary)",
        chartHover: "var(--chart-hover)",
        chartSecondary: "var(--chart-secondary)",
        bgSecondary: "var(--secondary-background)",
        textSecondary: "var(--text-gray-secondary)",
        textBlue: "var(--text-blue)",
        
      },
    },
  },
  plugins: [],
} satisfies Config;
