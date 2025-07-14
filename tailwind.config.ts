import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "neon-green": "#39ff14",
        "neon-pink": "#ff1493",
        "neon-blue": "#00ffff",
        "neon-yellow": "#ffff00",
        "neon-purple": "#bf00ff",
        "neon-orange": "#ff8000",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Animazioni base esistenti
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "glow": {
          "0%, 100%": { 
            boxShadow: "0 0 5px #39ff14, 0 0 10px #39ff14, 0 0 15px #39ff14",
            transform: "scale(1)"
          },
          "50%": { 
            boxShadow: "0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #39ff14",
            transform: "scale(1.05)"
          },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-10px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(10px)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "bg-pulse": {
          "0%, 100%": { 
            backgroundPosition: "0% 50%" 
          },
          "50%": { 
            backgroundPosition: "100% 50%" 
          },
        },
        "rainbow": {
          "0%": { borderColor: "#ff0000" },
          "16.66%": { borderColor: "#ff8000" },
          "33.33%": { borderColor: "#ffff00" },
          "50%": { borderColor: "#00ff00" },
          "66.66%": { borderColor: "#0080ff" },
          "83.33%": { borderColor: "#8000ff" },
          "100%": { borderColor: "#ff0000" },
        },
        // NUOVE ANIMAZIONI CAOTICHE ISPIRATE AL SITO ORIGINALE
        "wobble": {
          "0%, 100%": { transform: "rotate(0deg) scale(1)" },
          "15%": { transform: "rotate(-5deg) scale(1.1)" },
          "30%": { transform: "rotate(5deg) scale(0.9)" },
          "45%": { transform: "rotate(-3deg) scale(1.05)" },
          "60%": { transform: "rotate(3deg) scale(0.95)" },
          "75%": { transform: "rotate(-1deg) scale(1.02)" },
        },
        "bounce-crazy": {
          "0%, 20%, 53%, 80%, 100%": { transform: "translate3d(0,0,0) rotate(0deg)" },
          "40%, 43%": { transform: "translate3d(0, -30px, 0) rotate(-5deg)" },
          "70%": { transform: "translate3d(0, -15px, 0) rotate(3deg)" },
          "90%": { transform: "translate3d(0, -4px, 0) rotate(-1deg)" },
        },
        "spin-chaos": {
          "0%": { transform: "rotate(0deg) scale(1)" },
          "25%": { transform: "rotate(90deg) scale(1.2)" },
          "50%": { transform: "rotate(180deg) scale(0.8)" },
          "75%": { transform: "rotate(270deg) scale(1.1)" },
          "100%": { transform: "rotate(360deg) scale(1)" },
        },
        "tilt-left": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-15deg)" },
        },
        "tilt-right": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        "glitch": {
          "0%, 100%": { 
            transform: "translate(0)",
            filter: "hue-rotate(0deg)"
          },
          "20%": { 
            transform: "translate(-2px, 2px)",
            filter: "hue-rotate(90deg)"
          },
          "40%": { 
            transform: "translate(-2px, -2px)",
            filter: "hue-rotate(180deg)"
          },
          "60%": { 
            transform: "translate(2px, 2px)",
            filter: "hue-rotate(270deg)"
          },
          "80%": { 
            transform: "translate(2px, -2px)",
            filter: "hue-rotate(360deg)"
          },
        },
        "fly-around": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(100px, -50px) rotate(90deg)" },
          "50%": { transform: "translate(50px, -100px) rotate(180deg)" },
          "75%": { transform: "translate(-50px, -50px) rotate(270deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        "rubber-band": {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" },
        },
        "neon-flicker": {
          "0%, 100%": { 
            textShadow: "0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor",
            opacity: "1"
          },
          "50%": { 
            textShadow: "0 0 2px currentColor, 0 0 5px currentColor, 0 0 8px currentColor",
            opacity: "0.8"
          },
        },
        "jello": {
          "0%, 11.1%, 100%": { transform: "translate3d(0, 0, 0)" },
          "22.2%": { transform: "skewX(-12.5deg) skewY(-12.5deg)" },
          "33.3%": { transform: "skewX(6.25deg) skewY(6.25deg)" },
          "44.4%": { transform: "skewX(-3.125deg) skewY(-3.125deg)" },
          "55.5%": { transform: "skewX(1.5625deg) skewY(1.5625deg)" },
          "66.6%": { transform: "skewX(-0.78125deg) skewY(-0.78125deg)" },
          "77.7%": { transform: "skewX(0.390625deg) skewY(0.390625deg)" },
          "88.8%": { transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Animazioni base
        "float": "float 3s ease-in-out infinite",
        "wiggle": "wiggle 1s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "shake": "shake 0.5s ease-in-out infinite",
        "spin-slow": "spin-slow 3s linear infinite",
        "bg-pulse": "bg-pulse 4s ease-in-out infinite",
        "rainbow": "rainbow 2s linear infinite",
        // NUOVE ANIMAZIONI CAOTICHE
        "wobble": "wobble 2s ease-in-out infinite",
        "bounce-crazy": "bounce-crazy 2s infinite",
        "spin-chaos": "spin-chaos 4s ease-in-out infinite",
        "tilt-left": "tilt-left 2s ease-in-out infinite",
        "tilt-right": "tilt-right 2s ease-in-out infinite",
        "glitch": "glitch 0.3s infinite",
        "fly-around": "fly-around 8s ease-in-out infinite",
        "rubber-band": "rubber-band 1s",
        "neon-flicker": "neon-flicker 1.5s ease-in-out infinite",
        "jello": "jello 1s",
        // Combinazioni di animazioni
        "float-wobble": "float 3s ease-in-out infinite, wobble 2s ease-in-out infinite",
        "shake-glow": "shake 0.5s ease-in-out infinite, glow 2s ease-in-out infinite",
        "spin-bounce": "spin-slow 3s linear infinite, bounce-crazy 2s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config