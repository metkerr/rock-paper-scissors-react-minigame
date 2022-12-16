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
        "dark-blue": "#1F2C46",
      },
      width: {
        18: "4.5rem",
        13: "3.25rem",
        26: "6.5rem",
        38: "9.3rem",
        54: "13.5rem",
        78: "19.5rem",
        88: "22rem",
        108: "26rem",
        168: "43rem",
      },
      height: {
        18: "4.5rem",
        26: "6.5rem",
        38: "9.5rem",
        54: "13.5rem",
        88: "22rem",
      },
      minHeight: {
        nam: "68vh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      borderRadius: {
        xl: "1rem",
      },
      fontSize: {
        "2xs": "0.65rem",
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
