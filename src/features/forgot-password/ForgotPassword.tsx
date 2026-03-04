import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button, Card, TextLink} from '../../shared/components/ui'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  
  min-height: calc(100dvh - var(--header-height, 80px) - var(--footer-height, 70px) - 1px);
  
  box-sizing: border-box;
  overflow: hidden; /* Garante que o container em si não gere scroll interno */
`;

const ForgotPasswordCard = styled(Card)`
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  margin: 0 auto;
`

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  text-align: center;
`

const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
`

const Form = styled.form`
  // Alterado para 'form'
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

export const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Recuperar senha para:', email)
  }

  return (
    <Container>
      <ForgotPasswordCard>
        <CardTitle>Redefinir Sua Senha</CardTitle>
        <CardSubtitle>
          Insira o endereço de e-mail da sua conta para receber instruções de redefinição.
        </CardSubtitle>

        <Form onSubmit={handleSubmit}>
          <Input
            id=""
            label="Digite seu e-mail ou ID de usuário"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Button type="submit" fullWidth size="large">
            Continuar
          </Button>
          <TextLink to="/login">Voltar para o Login</TextLink>
        </Form>
      </ForgotPasswordCard>
    </Container>
  )
}
