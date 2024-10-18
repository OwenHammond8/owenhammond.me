/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        background: "#171717",
        foreground: "#292929",
        text: "#cccccc",
      },
    },
  },
  plugins: [],
};
