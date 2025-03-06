/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true, 
        padding: "1rem", 
        screens: {
          sm: "576px",
          md: "750px",
          lg: "970px",
          xl: "1170px",
          "2xl": "1350px", 
        },
      },
      screens: {
        sm: "576px",
        md: "769px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        citypac: "#007167",
        gray: "#f5f5f5",
        paragrah: "#e9e9e9",
      },
    },
  },
  plugins: [],
};
