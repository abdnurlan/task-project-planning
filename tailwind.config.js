/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: "16px" },
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1677ff",
          50: "#eaf3ff",
          100: "#d5e7ff",
          200: "#a8ccff",
          300: "#7ab1ff",
          400: "#4c96ff",
          500: "#1677ff",
          600: "#0f5ed1",
          700: "#0b47a0",
          800: "#07316e",
          900: "#041c40",
        },
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
