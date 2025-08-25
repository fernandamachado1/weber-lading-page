import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "weber-orange": "#FF6600",
        "weber-navy": "#001F3F",
      },
    },
  },
  plugins: [],
} satisfies Config
