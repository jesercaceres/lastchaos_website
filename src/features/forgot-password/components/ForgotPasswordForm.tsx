import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Button, Card, TextLink, ErrorMessage, SuccessMessage } from '../../../shared/components/ui'

const StyledCard = styled(Card)`
  max-width: 600px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  margin: 0 auto;

  /* Ajuste para Notebook (Breakpoint Large) */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 500px;
    margin-top: ${({ theme }) => theme.spacing.lg};
  }

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
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      // Simulação da chamada de API (Substituir pela chamada real depois)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Exemplo de como tratar erro do backend:
      if (email !== 'teste@gmail.com') throw new Error("Usuário não encontrado.")

      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Ocorreu um erro. Tente novamente mais tarde.')
    } finally {
      setIsLoading(false)
    }
  }

  // Se o formulário foi enviado com sucesso, mostramos a confirmação
  if (isSubmitted) {
    return (
      <StyledCard>
        <CardTitle>E-mail Enviado!</CardTitle>
        <SuccessMessage>
          Um link de recuperação foi enviado para <strong>{email}</strong>. 
          Verifique sua caixa de entrada para redefinir sua senha.
        </SuccessMessage>
        <TextLink to="/login">Voltar para o Login</TextLink>
      </StyledCard>
    )
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
          disabled={isLoading}
        />
        <Button type="submit" fullWidth disabled={isLoading}>
          {isLoading ? 'Enviando...' : 'Continuar'}
        </Button>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <TextLink to="/login">Voltar para o Login</TextLink>
      </Form>
    </StyledCard>
  )
}