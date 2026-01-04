// Tema do site - Cores e estilos baseados em fantasia medieval
export const theme = {
  colors: {
    // Cores principais
    gold: '#D4AF37',
    darkGold: '#B8941E',
    lightGold: '#F4E4BC',

    darkRed: '#8B0000',
    red: '#C41E3A',
    lightRed: '#DC143C',

    brown: '#654321',
    darkBrown: '#3E2723',
    lightBrown: '#8B6914',

    dark: '#1A1A1A',
    darker: '#0D0D0D',
    gray: '#4A4A4A',
    lightGray: '#E0E0E0',

    white: '#FFFFFF',
    black: '#000000',

    // Estados
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FF9800',
    info: '#2196F3',
  },

  fonts: {
    // Fonte épica para títulos
    epic: "'Cinzel', serif",
    // Fonte padrão para conteúdo
    body: "'Roboto', sans-serif",
  },

  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '7xl': '4rem',
  },

  spacing: {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    '2xl': '4rem', // 64px

    '3xl': '5rem', // 80px
    '4xl': '6rem', // 96px
    '5xl': '8rem', // 128px  <-- Usado no topo das Notícias
    '6xl': '10rem', // 160px  <-- Usado no topo dos Servidores
    '7xl': '12rem', // 192px
    '8xl': '14rem', // 224px  <-- Usado no fundo dos Servidores

    xxl: '10rem', // (Mantido o seu original por compatibilidade)
  },

  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 20px rgba(0, 0, 0, 0.2)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.3)',
    gold: '0 0 20px rgba(212, 175, 55, 0.5)',
  },

  transitions: {
    fast: '0.15s ease-in-out',
    normal: '0.3s ease-in-out',
    slow: '0.5s ease-in-out',
  },

  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    intermediate: '951px',
    large: '1310px',
    wide: '1440px',
  },
} as const

export type Theme = typeof theme
