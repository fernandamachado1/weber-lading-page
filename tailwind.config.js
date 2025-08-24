/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "weber-orange": "#FF6A3D", // substitua pelo seu tom exato
        "weber-navy": "#001F3F",
        "muted-foreground": "#6B7280",
      },
      borderRadius: {
        "xl": "1rem", // se quiser usar radii customizados
      },
    },
  },
  plugins: [],
}
