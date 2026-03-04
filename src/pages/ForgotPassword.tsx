import styled from 'styled-components'
import { ForgotPasswordForm } from '../features/forgot-password/components/ForgotPasswordForm'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: calc(100dvh - var(--header-height, 80px) - var(--footer-height, 70px) - 1px);
`

export const ForgotPassword = () => {
  return (
    <PageContainer>
      <ForgotPasswordForm />
    </PageContainer>
  )
}