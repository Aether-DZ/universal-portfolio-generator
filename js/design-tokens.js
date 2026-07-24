/* =============================================
   design-tokens.js — Design System
   Colors, Typography, Spacing, Shadows, Components
   Part of Universal Portfolio Generator
   ============================================= */
const DesignSystem = {
  // === Color Palettes ===
  palettes: {
    default: { primary: '#2563EB', accent: '#A16207', bg: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', muted: '#E9EEF5', border: '#CBD5E1' },
    dracula: { primary: '#BD93F9', accent: '#FF79C6', bg: '#282A36', surface: '#44475A', text: '#F8F8F2', muted: '#3A3D4E', border: '#6272A4' },
    nord:    { primary: '#88C0D0', accent: '#BF616A', bg: '#ECEFF4', surface: '#FFFFFF', text: '#2E3440', muted: '#D8DEE9', border: '#D8DEE9' },
    monokai: { primary: '#A6E22E', accent: '#FD971F', bg: '#272822', surface: '#383830', text: '#F8F8F2', muted: '#3E3D32', border: '#49483E' },
    tailwind:{ primary: '#3B82F6', accent: '#F59E0B', bg: '#F8FAFC', surface: '#FFFFFF', text: '#0F172A', muted: '#F1F5F9', border: '#E2E8F0' },
    night:   { primary: '#82AAFF', accent: '#C792EA', bg: '#011627', surface: '#0D2137', text: '#D6DEEB', muted: '#1A3454', border: '#2C4A6E' },
    cyberpunk:{primary:'#00FFF0', accent:'#FF00AA', bg:'#0A0A1A', surface:'#12122A', text:'#E0E0FF', muted:'#1A1A3E', border:'#00FFF033'},
    rosepine:{ primary:'#9CCFD8', accent:'#EB6F92', bg:'#191724', surface:'#1F1D2E', text:'#E0DEF4', muted:'#2A283E', border:'#3A3852' },
    catppuccin:{primary:'#89B4FA', accent:'#F5C2E7', bg:'#1E1E2E', surface:'#313244', text:'#CDD6F4', muted:'#45475A', border:'#585B70' },
    nordlight:{primary:'#5E81AC', accent:'#BF616A', bg:'#FFFFFF', surface:'#F9FAFB', text:'#2E3440', muted:'#E5E9F0', border:'#D8DEE9' }
  },

  /** Get palette by ID — returns full palette object */
  getPalette(id) {
    return this.palettes[id] || this.palettes.default;
  },

  /** Generate CSS custom property string from a palette */
  getPaletteCSS(id) {
    const p = this.getPalette(id);
    return [
      `--color-primary: ${p.primary};`,
      `--color-accent: ${p.accent};`,
      `--color-bg: ${p.bg};`,
      `--color-surface: ${p.surface};`,
      `--color-text: ${p.text};`,
      `--color-muted: ${p.muted};`,
      `--color-border: ${p.border};`
    ].join('\n');
  },

  /** Apply a palette to :root by setting CSS variables */
  applyPalette(id) {
    const p = this.getPalette(id);
    const root = document.documentElement;
    root.style.setProperty('--color-primary', p.primary);
    root.style.setProperty('--color-accent', p.accent);
    root.style.setProperty('--color-bg', p.bg);
    root.style.setProperty('--color-surface', p.surface);
    root.style.setProperty('--color-text', p.text);
    root.style.setProperty('--color-muted', p.muted);
    root.style.setProperty('--color-border', p.border);
  },

  // === Typography Scale ===
  typography: {
    xs:  { size: '0.75rem',  lineHeight: 1,    weight: 400 },
    sm:  { size: '0.875rem', lineHeight: 1.25, weight: 400 },
    base:{ size: '1rem',     lineHeight: 1.5,  weight: 400 },
    lg:  { size: '1.125rem', lineHeight: 1.5,  weight: 500 },
    xl:  { size: '1.25rem',  lineHeight: 1.4,  weight: 600 },
    '2xl':{size:'1.5rem',   lineHeight: 1.3,  weight: 600 },
    '3xl':{size:'1.875rem', lineHeight: 1.2,  weight: 700 },
    '4xl':{size:'2.25rem',  lineHeight: 1.1,  weight: 700 },
    '5xl':{size:'3rem',     lineHeight: 1.05, weight: 800 }
  },

  fontFamilies: [
    'Inter', 'JetBrains Mono', 'Space Grotesk', 'Fira Code',
    'Archivo', 'DM Sans', 'Crimson Pro', 'Plus Jakarta Sans',
    'Clash Display', 'Satoshi'
  ],

  /** Get Google Fonts URL for a family */
  getFontUrl(family) {
    const map = {
      'Inter': 'Inter:wght@400;500;600;700',
      'JetBrains Mono': 'JetBrains+Mono:wght@400;500;600;700',
      'Space Grotesk': 'Space+Grotesk:wght@400;500;600;700',
      'Fira Code': 'Fira+Code:wght@400;500;600;700',
      'Archivo': 'Archivo:wght@400;500;600;700',
      'DM Sans': 'DM+Sans:wght@400;500;700',
      'Crimson Pro': 'Crimson+Pro:wght@400;600;700',
      'Plus Jakarta Sans': 'Plus+Jakarta+Sans:wght@400;500;600;700',
      'Clash Display': 'Clash+Display:wght@400;500;600;700',
      'Satoshi': 'Satoshi:wght@400;500;700'
    };
    return map[family] || 'Inter:wght@400;500;600;700';
  },

  // === Spacing Scale ===
  spacing: {
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '0.75rem',  // 12px
    lg: '1rem',     // 16px
    xl: '1.5rem',   // 24px
    '2xl': '2rem',  // 32px
    '3xl': '2.5rem',// 40px
    '4xl': '3rem'   // 48px
  },

  // === Border Radius ===
  radius: {
    none: '0',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
    full: '9999px'
  },

  // === Elevation / Shadows ===
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0,0,0,0.05)',
    md: '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)',
    lg: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    xl: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)',
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)'
  },

  // === Animation Timing ===
  duration: {
    fast: '150ms',
    normal: '250ms',
    slow: '400ms',
    slower: '600ms'
  },

  // === Component Recipes ===
  /** Generate a button-primary CSS string */
  btnPrimary(paletteId) {
    const p = this.getPalette(paletteId);
    return `display:inline-flex;align-items:center;gap:0.5rem;padding:0.625rem 1.25rem;background:${p.primary};color:white;border-radius:0.75rem;font-weight:600;font-size:0.875rem;border:none;cursor:pointer;transition:all 0.2s;box-shadow:0 4px 14px ${p.primary}33`;
  },

  /** Generate a card CSS string */
  cardCSS(paletteId, options = {}) {
    const p = this.getPalette(paletteId);
    const radius = options.radius || '1rem';
    return `background:${p.surface};border:1px solid ${p.border};border-radius:${radius};padding:1.5rem;transition:all 0.2s`;
  },

  /** Generate a badge CSS string */
  badgeCSS(paletteId) {
    const p = this.getPalette(paletteId);
    return `display:inline-flex;align-items:center;padding:0.25rem 0.75rem;background:${p.muted};border-radius:9999px;font-size:0.8125rem;font-weight:500;color:${p.text}`;
  },

  /** Generate a section title CSS string */
  sectionTitleCSS() {
    return `font-family:'Space Grotesk',sans-serif;font-size:1.125rem;font-weight:600;margin-bottom:1rem;letter-spacing:-0.01em`;
  }
};

/* Apply default palette on load */
DesignSystem.applyPalette('default');
