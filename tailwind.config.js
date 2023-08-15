/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      breeSerif: ["Bree Serif", "serif"],
      gabriela: ["Gabriela", "serif"],
      quicksand: ["Quicksand", "sans-serif"],
      roboto: ["Roboto Mono", "monospace"],
      saira: ["Saira", "sans-serif"],
    },
    colors: {
      oscuro: "#071E22",
      verde: "#1D7874",
      amarillo: "#EDAE49",
      perla: "#E7DFC6",
      rojo: "#EE2E31",
      snow: "#FFF9FB",
      azul: "#3F84E5",
      gray200: "#e5e7eb",
      gray300: "#d1d5db",
      gray600: "#4b5563",
      gray700: "#374151",
      blue300: "#93c5fd",
      blue600: "#0284c7",
      blue900: "#1e3a8a",
    },
  },
  plugins: [],
};

// F4C095
// 679289
// EDAE49 amarillo
// E7DFC6 perla
// FFF9FB snow
