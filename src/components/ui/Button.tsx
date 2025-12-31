import React from 'react'
import styled from 'styled-components'
import { ButtonProps } from '../../types'

const StyledButton = styled.button<Omit<ButtonProps, 'as'>>`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Tamanhos */
  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
        `
      case 'large':
        return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
        `
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
        `
    }
  }}

  /* Variantes */
  ${({ variant, theme }) => {
    switch (variant) {
      case 'secondary':
        return `
          background: linear-gradient(135deg, ${theme.colors.brown} 0%, ${theme.colors.darkBrown} 100%);
          color: ${theme.colors.white};
          border: 2px solid ${theme.colors.lightBrown};
          
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, ${theme.colors.lightBrown} 0%, ${theme.colors.brown} 100%);
            box-shadow: ${theme.shadows.gold};
            transform: translateY(-2px);
          }
        `
      case 'danger':
        return `
          background: linear-gradient(135deg, ${theme.colors.darkRed} 0%, ${theme.colors.red} 100%);
          color: ${theme.colors.white};
          border: 2px solid ${theme.colors.lightRed};
          
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, ${theme.colors.red} 0%, ${theme.colors.lightRed} 100%);
            box-shadow: 0 0 20px rgba(196, 30, 58, 0.5);
            transform: translateY(-2px);
          }
        `
      default:
        return `
          background: linear-gradient(135deg, ${theme.colors.gold} 0%, ${theme.colors.darkGold} 100%);
          color: ${theme.colors.dark};
          border: 2px solid ${theme.colors.lightGold};
          font-weight: 700;
          
          &:hover:not(:disabled) {
            background: linear-gradient(135deg, ${theme.colors.lightGold} 0%, ${theme.colors.gold} 100%);
            box-shadow: ${theme.shadows.gold};
            transform: translateY(-2px);
          }
          
          &:active:not(:disabled) {
            transform: translateY(0);
          }
        `
    }
  }}
`

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  fullWidth = false,
}) => {
  return (
    <StyledButton
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      type={type}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  )
}
