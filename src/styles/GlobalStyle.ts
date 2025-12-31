import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --header-height: 0px; /* updated by Header.tsx at runtime */
    /* smaller, more compact gap: responsive between 0.75rem and 1.5rem */
    --section-gap: clamp(0.75rem, 2vh, 1.5rem); /* reusable vertical gap between sections */
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    width: 100%;
    min-height: 100dvh;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.darker} 0%, ${({ theme }) => theme.colors.dark} 100%);
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.6;
    min-height: 100dvh;
    width: 100%;
    overflow-x: hidden;
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.dark};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gold};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    
    &:hover {
      background: ${({ theme }) => theme.colors.darkGold};
    }
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.normal};

    &:hover {
      color: ${({ theme }) => theme.colors.lightGold};
    }
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.epic};
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  /* Ensure anchored sections respect the header height and avoid being obscured */
  section {
    scroll-margin-top: calc(var(--header-height, 0px) + 1rem);
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }

  /* Botões padrão resetados */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  /* Inputs padrão resetados */
  input, textarea {
    font-family: inherit;
    outline: none;
  }

  /* Imagens responsivas */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* --- Animações --- */
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  /* Pulse de Opacidade (bom para Loading/Skeletons) */
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }

  /* Efeito de onda/radar para o LED online (NOVO) */
  @keyframes ripple {
    0% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(46, 204, 113, 0); }
    100% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
  }
`