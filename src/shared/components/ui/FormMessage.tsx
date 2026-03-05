import styled from 'styled-components'

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.red};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;
`

export const SuccessMessage = styled.div`
  /* Verde mais escuro e integrado ao tema Dark */
  background: rgba(76, 175, 80, 0.15); 
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: left; /* Alinhado à esquerda conforme o padrão Epic */
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.success};
  }
`