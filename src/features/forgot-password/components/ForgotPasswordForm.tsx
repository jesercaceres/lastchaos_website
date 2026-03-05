import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { Input, Button, Card, ErrorMessage, SuccessMessage, Captcha } from '../../../shared/components/ui'

const StyledCard = styled(Card)`
  max-width: 500px;
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  animation: fadeIn 0.5s ease-out; /* Animação definida no GlobalStyle.ts */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.lg};
    width: 92%; 
  }
`

const TopNav = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
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

const CardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  text-align: left;
`

const CardSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.6;
  text-align: left;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const CaptchaWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
  display: flex;
  justify-content: flex-start; 
  width: 100%;
  
  & > div {
    transform: scale(0.85);
    transform-origin: left top; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    & > div {
      transform: scale(0.82); 
    }
  }
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
`

export const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      setError("Por favor, resolva o desafio de segurança.")
      return
    }
    setError(null)
    setIsLoading(true)

    try {
      // Simulação de API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Exemplo de erro para teste de reset do captcha
      if (email === 'erro@gmail.com') throw new Error("Serviço temporariamente indisponível.")

      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Erro ao processar solicitação.');
      captchaRef.current?.reset();
      setCaptchaToken(null);
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <StyledCard>
        <TopNav style={{ visibility: 'hidden', marginBottom: '0.5rem' }}>
          <BackLink to="/login"><span>‹</span> Voltar</BackLink>
        </TopNav>

        <SuccessIconWrapper>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </SuccessIconWrapper>

        <CardTitle>E-MAIL ENVIADO</CardTitle>
        
        <SuccessMessage>
          As instruções de recuperação de senha foram enviadas para o endereço 
          <strong> {email}</strong>. Por favor, verifique sua caixa de entrada e siga as orientações.
        </SuccessMessage>

        <Button onClick={() => navigate('/login')} fullWidth size="medium">
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

      <CardTitle>Redefinir Sua Senha</CardTitle>
      <CardSubtitle>Insira o endereço de e-mail da sua conta para receber instruções de redefinição.</CardSubtitle>
      
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Endereço de e-mail"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
        
        <CaptchaWrapper>
          <Captcha 
            ref={captchaRef}
            siteKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            theme="dark"
            size="normal"
            onChange={(token) => setCaptchaToken(token)}
          />
        </CaptchaWrapper>

        <Button type="submit" fullWidth size="large" disabled={isLoading}>
          {isLoading ? 'ENVIANDO...' : 'CONTINUAR'}
        </Button>

        {error && <ErrorMessage style={{ marginTop: '1.5rem' }}>{error}</ErrorMessage>}
      </Form>
    </StyledCard>
  )
}