import styled from "styled-components"; 
import { RecoveryForm } from '../features/recovery-password/RecoveryForm'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  min-height: calc(100dvh - var(--header-height, 80px) - var(--footer-height, 70px) - 1px);
`

export const PasswordRecovery = () => {
  return (
    <PageContainer>
      <RecoveryForm></RecoveryForm>
    </PageContainer>
  )
}