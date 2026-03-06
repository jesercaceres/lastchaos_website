import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input } from '../shared/components/ui'
import { RegisterFormData } from '../types'
import registerBgImage from '../assets/images/register-bg.png'

const CopyrightText = styled.p`
  position: absolute;
  bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
  text-align: center;
  width: 100%;
  pointer-events: none;

  /* Oculta em notebooks para dar espaço ao formulário longo */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) or (max-height: 850px) {
    display: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`

const RegistroContainer = styled.div`
  height: calc(100dvh - var(--header-height, 80px));
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};

  background-image: url(${registerBgImage});
  background-size: cover;
  background-position: center;
  overflow: hidden; /* Remove scroll no desktop */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: flex-start;
    padding-top: calc(var(--header-height, 70px) + 2rem);
    height: auto;
    overflow-y: auto;
    min-height: 100dvh;
  }
`

const RegistroCard = styled.div`
  max-width: 480px;
  width: 100%;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.xl};

  /* Compactação para notebooks */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) or (max-height: 850px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    transform: scale(0.9);
    transform-origin: center;
  }
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* Reduz o gap entre os inputs para economizar altura vertical */
  gap: 2px;

  label {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    margin-bottom: 2px;
  }
`

const LinksContainer = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    color: ${({ theme }) => theme.colors.lightGold};
    text-decoration: underline;
  }
`

const ErrorMessage = styled.div`
  background: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const SuccessMessage = styled.div`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

export const Registro: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<RegisterFormData>({
    login: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Partial<RegisterFormData>>({})
  const [submitError, setSubmitError] = useState<string>('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {}

    if (!formData.login.trim()) {
      newErrors.login = 'Login é obrigatório'
    } else if (formData.login.length < 3) {
      newErrors.login = 'Login deve ter no mínimo 3 caracteres'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido'
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirmação de senha é obrigatória'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError('')
    setSubmitSuccess(false)

    if (!validateForm()) return

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitSuccess(true)
      setTimeout(() => navigate('/login'), 2000)
    }, 1000)
  }

  const handleChange = (field: keyof RegisterFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <RegistroContainer>
      <RegistroCard>
        <Title>Registrar</Title>
        {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        {submitSuccess && (
          <SuccessMessage>Sucesso! Redirecionando...</SuccessMessage>
        )}
        <Form onSubmit={handleSubmit}>
          <Input
            label="Login"
            type="text"
            placeholder="Digite seu login"
            value={formData.login}
            onChange={handleChange('login')}
            error={errors.login}
            required
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="Digite seu e-mail"
            value={formData.email}
            onChange={handleChange('email')}
            error={errors.email}
            required
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            value={formData.password}
            onChange={handleChange('password')}
            error={errors.password}
            required
          />
          <Input
            label="Confirmar Senha"
            type="password"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange('confirmPassword')}
            error={errors.confirmPassword}
            required
          />
          <Button type="submit" fullWidth size="large" disabled={isLoading || submitSuccess}>
            {isLoading ? 'Registrando...' : submitSuccess ? 'Registrado!' : 'Registrar'}
          </Button>
        </Form>
        <LinksContainer>
          <StyledLink to="/login">Já possui uma conta? Faça login</StyledLink>
        </LinksContainer>
      </RegistroCard>
      <CopyrightText>
        © {new Date().getFullYear()} Old World Last Chaos. Todos os direitos reservados.
      </CopyrightText>
    </RegistroContainer>
  )
}