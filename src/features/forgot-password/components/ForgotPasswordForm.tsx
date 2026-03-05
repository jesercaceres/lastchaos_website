import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Input, Button, Card, ErrorMessage, SuccessMessage, Captcha } from '../../../shared/components/ui'

const StyledCard = styled(Card)`
  max-width: 500px; /* Reduzido para notebook conforme modelo Epic Games */
  width: 100%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
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
  text-align: left; /* Alinhamento Epic Games */
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
  justify-content: flex-start; /* Alinha o captcha à esquerda */
  
  /* Ajuste fino para o tamanho não esticar o layout */
  & > div {
    transform: scale(0.9); /* Deixa o captcha ligeiramente menor */
    transform-origin: left top;
  }
`

export const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const captchaRef = useRef<ReCAPTCHA>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!captchaToken) {
      setError("Por favor, resolva o CAPTCHA.")
      return
    }
    setError(null)
    setIsLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Erro ao processar.')
      captchaRef.current?.reset()
      setCaptchaToken(null)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <StyledCard>
        <CardTitle>E-MAIL ENVIADO</CardTitle>
        <SuccessMessage>
          Um link de recuperação foi enviado para <strong>{email}</strong>.
        </SuccessMessage>
        <Link to="/login" style={{ textAlign: 'center', display: 'block', color: '#D4AF37' }}>
          Voltar para o Login
        </Link>
      </StyledCard>
    )
  }

  return (
    <StyledCard>
      <TopNav>
        <BackLink to="/login">
          <span>‹</span> Voltar
        </BackLink>
      </TopNav>

      <CardTitle>Redefinir Sua Senha</CardTitle>
      <CardSubtitle>
        Insira o endereço de e-mail da sua conta para receber instruções de redefinição.
      </CardSubtitle>
      
      <Form onSubmit={handleSubmit}>
        <Input
          id="email"
          label="Endereço de e-mail *"
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
            size="normal" // Formato mais horizontal que o compact
            onChange={(token) => setCaptchaToken(token)}
          />
        </CaptchaWrapper>

        <Button type="submit" fullWidth size="large" disabled={isLoading}>
          {isLoading ? 'ENVIANDO...' : 'CONTINUAR'}
        </Button>

        {error && (
          <ErrorMessage style={{ marginTop: '1.5rem' }}>
            {error}
          </ErrorMessage>
        )}
      </Form>
    </StyledCard>
  )
}