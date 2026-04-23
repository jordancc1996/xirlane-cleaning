/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        "text-primary": "#1A1A1A",
        "text-body": "#4A4A4A",
        accent: "#C9A96E",
        "accent-dark": "#A8854A",
        "button-primary-bg": "#1A1A1A",
        "button-primary-text": "#FFFFFF",
        "nav-bg-transparent": "transparent",
        "nav-bg-solid": "#FFFFFF",
        "border-light": "#E8E8E8",
        "section-alt-bg": "#F9F7F4",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        sectionDesktop: "6rem",
        sectionMobile: "4rem",
        gapDesktop: "3rem",
        gapMobile: "2rem",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },
      fontSize: {
        h1: ["72px", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "300" }],
        "h1-mobile": ["44px", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "300" }],
        h2: ["48px", { lineHeight: "1.15", fontWeight: "400" }],
        "h2-mobile": ["32px", { lineHeight: "1.2", fontWeight: "400" }],
        h3: ["28px", { lineHeight: "1.25", fontWeight: "400" }],
        "h3-mobile": ["22px", { lineHeight: "1.3", fontWeight: "400" }],
      },
      boxShadow: {
        cardHover: "0 12px 28px rgba(26, 26, 26, 0.08)",
      },
      transitionDuration: {
        300: "300ms",
      },
      letterSpacing: {
        nav: "0.12em",
        eyebrow: "0.2em",
      },
    },
  },
  plugins: [],
};

module.exports = config;
