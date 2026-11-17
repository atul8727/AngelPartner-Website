// ─────────────────────────────────────────────────────────────
// BRAND THEME: change colors / fonts here and the whole site updates.
// Source: Angel Partner Brand Manual (Forest Green #1E3A2B, Gold #E0A96D, Futura PT)
// ─────────────────────────────────────────────────────────────
module.exports = {
  colors: {
    forest: { DEFAULT: '#1E3A2B', light: '#2B5340', dark: '#142A1E' },
    gold: { DEFAULT: '#E0A96D', dark: '#C98F50' },
    ivory: '#FBF8F1',
    ink: '#1E3A2B',
    muted: '#4F6357',
    line: '#E4DCCB',
  },
  fonts: {
    // Futura PT is the brand font. Jost is the free look-alike until Futura PT files are added to /public/fonts
    sans: ['"Futura PT"', 'Jost', '"Century Gothic"', 'sans-serif'],
  },
  shadows: {
    card: '0 12px 32px rgba(30, 58, 43, 0.10)',
    lift: '0 24px 60px rgba(20, 42, 30, 0.28)',
  },
};
