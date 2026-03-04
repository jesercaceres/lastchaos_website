import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button, Card, TextLink } from '../../../shared/components/ui'

const StyledCard = styled(Card)`
  max-width: 600px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  margin: 0 auto;

  /* Ajuste para Notebook / Telas menores que 1310px */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 500px;
    margin-top: ${({ theme }) => theme.spacing.lg};
  }

  /* Ajuste fino para Mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
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
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Recuperar senha para:', email)
  }

  return (
    <StyledCard>
      <CardTitle>Redefinir Sua Senha</CardTitle>
      <CardSubtitle>
        Insira o endereço de e-mail da sua conta para receber instruções de redefinição.
      </CardSubtitle>

      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
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
    </StyledCard>
  )
}