/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,liquid}",
    "./_layouts/**/*.{html,liquid}",
    "./_posts/**/*.{md,markdown,html,liquid}",
    "./*.{md,markdown,html,liquid}",
    "./**/*.{md,markdown,html,liquid}"
  ],
  theme: {
    extend: {
      colors: {
        potato: "#ffd166",
        mint: "#72efdd",
        panel: "#141821",
        bg: "#0f1115",
        text: "#eaecef",
        muted: "#94a3b8"
      },
      borderRadius: { xl: "1rem" }
    }
  },
  plugins: []
};
