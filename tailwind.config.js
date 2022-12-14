/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
    extend: {
      colors: {
        "scissors-1": "hsl(39, 89%, 49%)",
        "scissors-2": "hsl(40, 84%, 53%)",
        "paper-1": "hsl(230, 89%, 62%)",
        "paper-2": "hsl(230, 89%, 65%)",
        "rock-1": "hsl(349, 71%, 52%)",
        "rock-2": "hsl(349, 70%, 56%)",
        "lizard-1": "hsl(261, 73%, 60%)",
        "lizard-2": "hsl(261, 72%, 63%)",
        "cyan-1": "hsl(189, 59%, 53%)",
        "cyan-2": "hsl(189, 58%, 57%)",
        dark: "hsl(229, 25%, 31%)",
        score: "hsl(229, 64%, 46%)",
        "header-outline": "hsl(217, 16%, 45%)",
        "radial-1": "hsl(214, 47%, 23%)",
        "radial-2": "hsl(237, 49%, 15%)",
      },
      width: {
        18: "4.5rem",
        13: "3.25rem",
      },
      height: {
        18: "4.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
