import styled from 'styled-components'

const FooterContainer = styled.footer`
  
  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`

const Copyright = styled.div`
  max-width: 1440px;
  margin: ${({ theme }) => theme.spacing.xl} auto 0;
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Copyright>
        © {currentYear} Old World Last Chaos. Todos os direitos reservados. 
      </Copyright>
    </FooterContainer>
  )
}
