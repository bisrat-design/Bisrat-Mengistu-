import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#050505", navy: "#040523", lime: "#9ABF45", lilac: "#E3D9FF" },
    fontFamily: { sans: ["var(--font-poppins)", "system-ui", "sans-serif"], display: ["var(--font-bebas)", "Impact", "sans-serif"] },
  } },
  plugins: [],
} satisfies Config;
