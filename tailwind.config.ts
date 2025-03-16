import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "65ch",
            color: "var(--tw-prose-body)",
            "[class~='lead']": {
              color: "var(--tw-prose-lead)",
            },
            strong: {
              color: "var(--tw-prose-bold)",
            },
            "a:hover": {
              color: "var(--tw-prose-links)",
            },
            h1: {
              color: "var(--tw-prose-headings)",
            },
            h2: {
              color: "var(--tw-prose-headings)",
            },
            h3: {
              color: "var(--tw-prose-headings)",
            },
            h4: {
              color: "var(--tw-prose-headings)",
            },
            code: {
              color: "var(--tw-prose-code)",
            },
            hr: {
              borderColor: "var(--tw-prose-hr)",
            },
            ol: {
              li: {
                "&::marker": {
                  color: "var(--tw-prose-counters)",
                },
              },
            },
            ul: {
              li: {
                "&::marker": {
                  color: "var(--tw-prose-bullets)",
                },
              },
            },
            blockquote: {
              color: "var(--tw-prose-quotes)",
              borderLeftColor: "var(--tw-prose-quote-borders)",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config; 