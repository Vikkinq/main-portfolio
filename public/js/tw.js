tailwind.config = {
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui"] },
      colors: {
        base: {
          900: "#0B0F1A",
          800: "#0E1626",
          700: "#0F172A",
        },
        glass: "rgba(255,255,255,0.06)",
      },
      dropShadow: {
        glow: "0 0 40px rgba(56,189,248,0.25)",
      },
      boxShadow: {
        glass: "0 10px 40px rgba(0,0,0,0.35)",
      },
    },
  },
};
