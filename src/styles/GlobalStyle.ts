import { createGlobalStyle } from 'styled-components'
import { Theme } from './theme'

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.darker} 0%, ${({ theme }) => theme.colors.dark} 100%);
    color: ${({ theme }) => theme.colors.white};
    line-height: 1.6;
    min-height: 100vh;
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

  /* Animações */
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
`
