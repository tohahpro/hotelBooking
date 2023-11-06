/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // poppins: "'Poppins', sans-seri",
        // caveat: "'Caveat', cursive",
        // kalam: "'Kalam', cursive;",
        macondo: "'Macondo', cursive;",
        lora: "'Lora', serif;"

      }
    },
  },
  plugins: [require("daisyui")],
}

