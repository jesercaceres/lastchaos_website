import styled from 'styled-components'

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;
`

export const SuccessMessage = styled.div`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
  line-height: 1.5;
`