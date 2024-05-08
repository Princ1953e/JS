/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*",
    "./PR-1/PR_1/index.html",
    "./PR-1/PR_2/index.html",
    "./PR-1/PR_3/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
