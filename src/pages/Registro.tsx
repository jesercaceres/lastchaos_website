import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input } from '../components/ui'
import { RegisterFormData } from '../types'
import registerBgImage from '../assets/images/register-bg.png'

const CopyrightText = styled.p`
  position: absolute;
  bottom: 0.1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
  text-align: center;
  width: 100%;
  pointer-events: none; 

   @media (max-height: 800px), (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    bottom: auto;
    margin-top: 2rem; /* Espaço entre o card e o texto */
    padding-bottom: 0.5rem; /* Margem de segurança no fundo */
  }
  
   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`

const RegistroContainer = styled.div`
  min-height: 100dvh; 
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  
  padding: ${({ theme }) => theme.spacing.md};

  background-image: url(${registerBgImage});
  background-size: cover;
  background-position: center;
  
  /* MOBILE*/
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    /* No mobile, não centralizamos verticalmente de forma rígida.
       Damos um padding no topo para fugir do Header e deixamos rolar se precisar. */
    justify-content: flex-start; 
    padding: ${({ theme }) => theme.spacing.md};
    
    /* Empurra o card para baixo o suficiente para não bater no Header fixo */
    padding-top: calc(var(--header-height, 70px) + 2rem);
    
    height: auto; /* Permite que a altura cresça se o teclado abrir */
  }
`

const RegistroCard = styled.div`
  max-width: 500px; // Largura mantida
  width: 100%;
  background: linear-gradient(  
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  /* --- ALTERAÇÃO PRINCIPAL --- */
  /* Reduzimos o padding vertical (topo/base) para 'md' e mantivemos o horizontal em 'xl' */
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  
  box-shadow: ${({ theme }) => theme.shadows.xl};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  /* --- ALTERAÇÃO OPCIONAL --- */
  /* Reduzida a margem inferior de 'lg' para 'md' para compactar mais */
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  /* --- ALTERAÇÃO OPCIONAL --- */
  /* Reduzido o espaço entre os inputs de 'md' para 'sm' */
  gap: ${({ theme }) => theme.spacing.sm};
`

const LinksContainer = styled.div`
  text-align: center;
  /* --- ALTERAÇÃO OPCIONAL --- */
  /* Reduzida a margem superior de 'md' para 'sm' */
  margin-top: ${({ theme }) => theme.spacing.sm};
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
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SuccessMessage = styled.div`
  background: ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
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

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulação de registro (em produção, aqui seria a chamada à API)
    setTimeout(() => {
      setIsLoading(false)
      setSubmitSuccess(true)
      setTimeout(() => {
        navigate('/login')
      }, 2000)
    }, 1000)
  }

  const handleChange =
    (field: keyof RegisterFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData(prev => ({ ...prev, [field]: e.target.value }))
      // Limpar erro do campo ao digitar
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
          <SuccessMessage>Registro realizado com sucesso! Redirecionando...</SuccessMessage>
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