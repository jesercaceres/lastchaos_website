import styled from 'styled-components'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default'
}

const StyledBadge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ variant, theme }) => {
    switch (variant) {
      case 'success':
        return `
          background: ${theme.colors.success};
          color: ${theme.colors.white};
        `
      case 'error':
        return `
          background: ${theme.colors.error};
          color: ${theme.colors.white};
        `
      case 'warning':
        return `
          background: ${theme.colors.warning};
          color: ${theme.colors.white};
        `
      case 'info':
        return `
          background: ${theme.colors.info};
          color: ${theme.colors.white};
        `
      default:
        return `
          background: ${theme.colors.gray};
          color: ${theme.colors.white};
        `
    }
  }}
`

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  return <StyledBadge variant={variant}>{children}</StyledBadge>
}
