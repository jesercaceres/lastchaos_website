import styled, { keyframes, css } from 'styled-components'
import { Button } from '../../../shared/components/ui/Button'

const bloomGlow = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(212, 175, 55, 0.7),
      0 0 40px rgba(212, 175, 55, 0.4),
      0 0 70px rgba(212, 175, 55, 0.2);
    filter: brightness(1);
  }
  50% {
    box-shadow: 
      0 0 30px rgba(212, 175, 55, 0.9),
      0 0 60px rgba(212, 175, 55, 0.6),
      0 0 110px rgba(255, 223, 128, 0.4); /* Brilho mais claro no pico */
    filter: brightness(1.15);
  }
`

export const DownloadButton = styled(Button)`
  /* --- Dimensões Estilo Barra --- */
  padding: 1.3rem 0;
  min-width: 350px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  white-space: nowrap;

  /* --- Tipografia Épica --- */
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  letter-spacing: 1.5px;
  color: #1a1a1a; /* Texto bem escuro para contraste total com o ouro */
  text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);

  /* --- Estética de Ouro Polido --- */
  border: 2.5px solid #f4e4bc;
  background: linear-gradient(180deg, #f4e4bc 0%, #d4af37 45%, #b8941e 100%);

  /* --- Efeito Bloom Ativo --- */
  ${({ disabled }) =>
    !disabled &&
    css`
      animation: ${bloomGlow} 4s infinite ease-in-out;
    `}

  /* --- Interações --- */
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover:not(:disabled) {
    transform: scale(1.04) translateY(-3px);
    box-shadow:
      0 0 40px rgba(212, 175, 55, 1),
      0 0 80px rgba(212, 175, 55, 0.7),
      0 0 150px rgba(255, 223, 128, 0.5);
  }

  /* --- Responsividade --- */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-width: 320px;
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    letter-spacing: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 90%;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`
