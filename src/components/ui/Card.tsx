import styled from 'styled-components'
import { CardProps } from '../../types'

const StyledCard = styled.div<{ hoverable?: boolean }>`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: ${({ hoverable }) => (hoverable ? 'pointer' : 'default')};

  ${({ hoverable, theme }) =>
    hoverable &&
    `
    &:hover {
      border-color: ${theme.colors.gold};
      box-shadow: ${theme.shadows.gold};
      transform: translateY(-4px);
    }
  `}
`

export const Card: React.FC<CardProps> = ({ children, onClick, hoverable = false }) => {
  return (
    <StyledCard onClick={onClick} hoverable={hoverable}>
      {children}
    </StyledCard>
  )
}
