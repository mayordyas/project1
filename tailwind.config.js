/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.{html,liquid}",
    "./_layouts/**/*.{html,liquid}",
    "./_posts/**/*.{md,markdown,html,liquid}",
    "./*.{html,md,markdown,liquid}",
    "./_site/**/*.html"
  ],
  safelist: [
    'bg-[#f7e0c4]',
    'bg-[#b9846a]',
    'bg-[#c85a3a]',
    'bg-[#e8b84d]',
    'bg-[#5b7bb4]',
    'bg-[#c9a08a]',
    'text-[#5c392c]',
    'text-[#fef5ec]',
    'border-[#b9846a]',
    'border-[#c85a3a]',
    'hover:bg-[#b9846a]',
    'hover:bg-[#c85a3a]',
    'hover:text-[#fef5ec]',
    'h-[2px]',
    'h-[500px]',
    'h-[600px]',
    'left-[-32px]',
    'aspect-[4/3]',
    'tracking-[0.18em]',
    'bg-[#B43A1D]'
  ],
  theme: {
    extend: {
      colors: {
        potato: "#ffd166",
        mint: "#72efdd",
        panel: "#141821",
        bg: "#0f1115",
        text: "#eaecef",
        muted: "#94a3b8",
        alani: {
          cream: "#f7e0c4",
          brown: "#b9846a",
          red: "#c85a3a",
          yellow: "#e8b84d",
          blue: "#5b7bb4",
          tan: "#c9a08a",
          dark: "#5c392c",
          light: "#fef5ec"
        }
      },
      borderRadius: { xl: "1rem" }
    }
  },
  plugins: []
};
