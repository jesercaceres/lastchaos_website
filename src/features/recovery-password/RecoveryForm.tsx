import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Input, Button, Card, ErrorMessage, SuccessMessage } from '../../shared/components/ui'
import { api } from '../../shared/services/api'
import { resetPasswordSchema } from '../auth/schemas/resetPassword.schema'

const StyledCard = styled(Card)`
  max-width: 500px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  animation: fadeIn 0.5s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 450px;
    padding: ${({ theme }) => theme.spacing.lg};
    transform: scale(0.95);
    transform-origin: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
    width: 92%; 
    transform: none;
  }
`

const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`

const TopNav = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`

const BackLink = styled(Link)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }
`

const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs}; 
`

const SuccessIconWrapper = styled.div`
  color: ${({ theme }) => theme.colors.success};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: flex-start;

  svg {
    width: 54px;
    height: 54px;
    filter: drop-shadow(0 0 10px rgba(76, 175, 80, 0.4));
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    svg {
      width: 44px;
      height: 44px;
    }
  }
`

const ErrorIconWrapper = styled(SuccessIconWrapper)`
  color: ${({ theme }) => theme.colors.error};
  svg {
    filter: drop-shadow(0 0 10px rgba(244, 67, 54, 0.4));
  }
`

export const RecoveryForm: React.FC = () => {
  const navigate = useNavigate()
  
  // 3. Capturamos o token e o userId diretamente da URL!
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const userId = searchParams.get('userId')

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // 4. Se não houver token na URL, barramos o utilizador imediatamente
  if (!token) {
    return (
      <StyledCard>
        <ErrorIconWrapper>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        </ErrorIconWrapper>
        <CardTitle>LINK INVÁLIDO</CardTitle>
        <CardSubtitle style={{ marginBottom: '1rem' }}>
          O link de recuperação é inválido, está incompleto ou já expirou.
        </CardSubtitle>
        <Button onClick={() => navigate('/forgot-password')} fullWidth size="medium">
          SOLICITAR NOVO LINK
        </Button>
      </StyledCard>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    // Validamos usando o nosso Zod Schema
    const validation = resetPasswordSchema.safeParse({
      token,
      newPassword: password,
      confirmPassword: confirmPassword
    });

    if (!validation.success) {
      // Pega o primeiro erro encontrado e exibe
      setError(validation.error.issues[0].message);
      return;
    }

    setIsLoading(true)

    try {
      // 5. Enviamos a nova senha e o token para a nossa cozinha (Back-end)
      await api.post('/auth/reset-password', {
        token,
        newPassword: password
      })
      
      setIsSubmitted(true)
    } catch (err: any) {
      // 6. Se o token expirou (passou dos 15 minutos) ou for falso, o back-end avisa!
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message)
      } else {
        setError('Ocorreu um erro inesperado. Tente solicitar um novo link.')
      }
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <StyledCard>
        <SuccessIconWrapper>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </SuccessIconWrapper>

        <CardTitle>SENHA ALTERADA</CardTitle>
        
        <SuccessMessage>
          A sua senha foi redefinida com sucesso! Já pode utilizar as suas novas credenciais para acessar sua conta.
        </SuccessMessage>

        <Button onClick={() => navigate('/login')} fullWidth size="large">
          VOLTAR PARA O LOGIN
        </Button>
      </StyledCard>
    )
  }

  return (
    <StyledCard>
      <TopNav>
        <BackLink to="/login"><span>‹</span> Voltar</BackLink>
      </TopNav>
      <CardTitle>REDEFINIR SENHA</CardTitle>
      
      {/* Mostramos o nome do utilizador para ele ter certeza de que está a alterar a conta certa! */}
      <CardSubtitle>
        Escolha uma nova senha forte para proteger a conta <strong>{userId}</strong>.
      </CardSubtitle>
      
      <Form onSubmit={handleSubmit}>
        <Input
          id="password"
          label="Nova senha"
          placeholder="Digite sua nova senha"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          disabled={isLoading}
        />

        <Input
          id="confirmPassword"
          label="Confirmar nova senha"
          placeholder="Repita a nova senha"
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
          required
          disabled={isLoading}
        />
          {error && (
          <div style={{ marginBottom: '1rem' }}>
            <ErrorMessage>{error}</ErrorMessage>
          </div>
        )}
        <Button type="submit" fullWidth size="medium" disabled={isLoading}>
          {isLoading ? 'ENVIANDO...' : 'REDEFINIR'}
        </Button>

      </Form>
    </StyledCard>
  )
}