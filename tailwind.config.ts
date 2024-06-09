import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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

        // black: "#12151E",
        "hot-pink": "#fd2d78",
        twitter: "#1d9bf0",
        linkedin: "#0a66c2",

        gray: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#111111",
        },

        indigo: {
          50: "#ecf4ff",
          100: "#ddeaff",
          200: "#c2d8ff",
          300: "#9cbcff",
          400: "#7596ff", // shadow
          500: "#617bff",
          600: "#3646f5",
          700: "#2a36d8",
          800: "#2531ae",
          900: "#263189",
          950: "#161a50",
        },

        yellow: {
          50: "#fffaeb",
          100: "#fff0c6",
          200: "#ffdf88",
          300: "#ffd166",
          400: "#ffb220", // shadow
          500: "#f98f07",
          600: "#dd6802",
          700: "#b74706",
          800: "#94360c",
          900: "#7a2e0d",
          950: "#461502",
        },
        green: {
          50: "#effef7",
          100: "#dafeef",
          200: "#b8fadd",
          300: "#81f4c3",
          400: "#43e5a0",
          500: "#1acd81",
          600: "#0fa968",
          700: "#108554",
          800: "#126945",
          900: "#11563a",
          950: "#03301f",
        },

        red: {
          50: "#fff1f3",
          100: "#fee5e9",
          200: "#fdced7",
          300: "#faa7b7",
          400: "#f77591",
          500: "#ef476f",
          600: "#db2357",
          700: "#b9174a",
          800: "#9b1644",
          900: "#85163f",
          950: "#4a071e",
        },
        blue: {
          50: "#f0f8ff",
          100: "#e0f0fe",
          200: "#bae2fd",
          300: "#7dcbfc",
          400: "#47b7f8",
          500: "#0f98e8",
          600: "#0378c6",
          700: "#0360a1",
          800: "#075185",
          900: "#0c446e",
          950: "#082b49",
        },

        tarawera: {
          50: "#ebffff",
          100: "#cefdff",
          200: "#a3f8fe",
          300: "#63f1fd",
          400: "#1ddff3",
          500: "#01c2d9",
          600: "#039bb7",
          700: "#0b7b93",
          800: "#126378",
          900: "#145265",
          950: "#073b4c",
        },
        purple: {
          50: "#fbf3ff",
          100: "#f4e4ff",
          200: "#ecceff",
          300: "#dda7ff",
          400: "#c86fff",
          500: "#b439ff",
          600: "#a213ff",
          700: "#8d04ec",
          800: "#7209b7",
          900: "#62099a",
          950: "#430074",
        },
      },
      borderRadius: {
        DEFAULT: "calc(var(--radius) - 2px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      boxShadow: {
        yellow: "0px 2px 0px 0px #ffb220 !important",
        "yellow-lg": "0px 4px 0px 0px #ffb220 !important",
        indigo: "0px 2px 0px 0px #7596ff !important",
        "indigo-lg": "0px 4px 0px 0px #7596ff !important",
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        34: "8.5rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        76: "19rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        110: "28rem",
        118: "30rem",
        126: "32rem",
        132: "34rem",
        140: "36rem",
      },
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        "-10": "-10deg",
        "-9": "-9deg",
        "-8": "-8deg",
        "-7": "-7deg",
        "-6": "-6deg",
        "-5": "-5deg",
        "-4": "-4deg",
        "-3": "-3deg",
        "-2": "-2deg",
        "-1": "-1deg",
        0: "0",
        1: "1deg",
        2: "2deg",
        3: "3deg",
        4: "4deg",
        5: "5deg",
        6: "6deg",
        7: "7deg",
        8: "8deg",
        9: "9deg",
        10: "10deg",
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
      spacing: {
        px: "1px",
        0: "0",
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        9: "2.25rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        34: "8.5rem",
        36: "9rem",
        38: "9.5rem",
        40: "10rem",
        44: "11rem",
        48: "12rem",
        52: "13rem",
        56: "14rem",
        60: "15rem",
        64: "16rem",
        68: "17rem",
        72: "18rem",
        76: "19rem",
        80: "20rem",
        88: "22rem",
        96: "24rem",
        104: "26rem",
        110: "28rem",
        118: "30rem",
        126: "32rem",
        132: "34rem",
        140: "36rem",
      },
    },
    variants: {
      transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
      inset: ["responsive", "hover"],
      cursor: ["disabled"],
      opacity: ["disabled"],
      scrollbar: ["dark"],
      margin: ["responsive", "hover", "focus"],
    },
  },
  plugins: [
    // comment for better diffs
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("tailwindcss-animate"),
  ],
} satisfies Config;

export default config;