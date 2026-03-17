import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button, Card, ErrorMessage, SuccessMessage } from '../../shared/components/ui'

const StyledCard = styled(Card)`
  max-width: 500px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  animation: fadeIn 0.5s ease-out;

  /* AJUSTE PARA LAYOUTS LARGE (NOTEBOOKS) */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    max-width: 450px;
    padding: ${({ theme }) => theme.spacing.lg};
    /* Escala sutil para caber melhor em telas de menor altura */
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
  gap: ${({ theme }) => theme.spacing.xs}; /* Redução do gap interno para layouts compactos */
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

export const RecoveryForm: React.FC = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password.length < 6) {
      setError("A senha deve conter pelo menos 6 caracteres.")
      return
    }

    if (password !== confirmPassword) {
      setError("As senhas digitadas não coincidem.")
      return
    }

    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Erro ao processar sua solicitação.');
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
          Sua senha foi redefinida com sucesso! Você já pode utilizar suas novas credenciais para acessar sua conta.
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
      <CardSubtitle>Escolha uma nova senha forte para proteger sua jornada em Old World Last Chaos.</CardSubtitle>
      
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

        <Button type="submit" fullWidth size="medium" disabled={isLoading}>
          {isLoading ? 'ENVIANDO...' : 'REDEFINIR'}
        </Button>

        {error && (
          <div style={{ marginTop: '1.5rem' }}>
            <ErrorMessage>{error}</ErrorMessage>
          </div>
        )}
      </Form>
    </StyledCard>
  )
}