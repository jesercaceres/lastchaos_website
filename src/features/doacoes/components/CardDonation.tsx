import React from 'react'
import styled from 'styled-components'
import { CardProps } from '../../../types'

const StyledCard = styled.div<{ hoverable?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md};
  transition: ${({ theme }) => theme.transitions.normal};
  cursor: ${({ hoverable }) => (hoverable ? 'pointer' : 'default')};
  overflow: visible;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.dark} 0%,
      ${({ theme }) => theme.colors.darker} 100%
    );
    opacity: 0.85;
    border-radius: inherit;
    pointer-events: none;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
  }

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

export const CardDonation: React.FC<CardProps & { className?: string }> = ({
  children,
  onClick,
  hoverable = false,
  className,
}) => {
  return (
    <StyledCard onClick={onClick} hoverable={hoverable} className={className}>
      {children}
    </StyledCard>
  )
}
