import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ButtonProps } from '../../types'

const StyledButtonLink = styled(Link)<Omit<ButtonProps, 'as'>>`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  text-align: center;
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
          
          &:hover {
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
          
          &:hover {
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
          
          &:hover {
            background: linear-gradient(135deg, ${theme.colors.lightGold} 0%, ${theme.colors.gold} 100%);
            box-shadow: ${theme.shadows.gold};
            transform: translateY(-2px);
          }
          
          &:active {
            transform: translateY(0);
          }
        `
    }
  }}
`

interface ButtonLinkProps extends Omit<ButtonProps, 'as'> {
  to: string
}

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  children,
  to,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
}) => {
  return (
    <StyledButtonLink to={to} variant={variant} size={size} fullWidth={fullWidth}>
      {children}
    </StyledButtonLink>
  )
}
