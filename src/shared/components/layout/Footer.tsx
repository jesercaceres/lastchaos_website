import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const Copyright = styled.div`
  max-width: auto;
  padding-top: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.xs};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  width: 100%;
  box-sizing: border-box;
`

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <FooterContainer>
      <Copyright>© {currentYear} Jéser Cáceres Marcelino. Todos os direitos reservados.</Copyright>
    </FooterContainer>
  )
}
