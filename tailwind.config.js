/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--border)",
        ring: "var(--ring)",
        background: "var(--bg)",
        foreground: "var(--text-primary)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--text-inverse)",
        },
        secondary: {
          DEFAULT: "var(--bg-surface)",
          foreground: "var(--text-secondary)",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "var(--bg-surface)",
          foreground: "var(--text-muted)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
    },
  },
  plugins: [],
}
