import { AlarmClockMinus } from 'lucide-react';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      fontFamily: {
        lobster: ["Lobster", "serif"],
        Rajdhani: ["Rajdhani", "serif"],
        Questrial: ["Questrial", "serif"],
        Exo: ["Exo", "serif"],
		arvobold:["Arvo", "serif"],
		comfortaa:["Comfortaa", "serif"],
		Acme:["Acme", "serif"],
		righteous:["Righteous", "serif"],
		Russo:["Russo One", "serif"],
		francois:["Francois One", "serif"]
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
