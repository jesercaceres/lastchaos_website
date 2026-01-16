import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input } from '../components/ui'
import { LoginFormData } from '../types'
import loginImage from '../assets/images/login-bg2.png'

const CopyrightText = styled.p`
  position: absolute;
  bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
  text-align: center;
  width: 100%;
  pointer-events: none; 

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
   font-size: ${({ theme }) => theme.fontSizes.xs};
    position: relative;
    bottom: auto;
    margin-top: 2rem;
    padding-bottom: 1rem;
  }

  @media (max-height: 600px) and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

const LoginContainer = styled.div`
  min-height: 100dvh; 
  width: 100%;
  
  display: flex;
  flex-direction: column; /* Importante para o copyright ficar embaixo no mobile */
  justify-content: center;
  align-items: center;
  
  padding: ${({ theme }) => theme.spacing.xl};

  /* Imagem de fundo */
  background-image: url(${loginImage});
  background-size: cover;
  background-position: center;
  
  /* Desktop: */
  @media (min-height: 690px) {
    min-height: calc(100dvh - var(--header-height, 80px)); 
  }

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
const LoginCard = styled.div`
  max-width: 600px; 
  width: 100%;
  
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};

  display: flex;
  flex-direction: column;
  justify-content: center;

`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
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

export const Login: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<LoginFormData>({
    loginOrEmail: '',
    password: '',
  })
  const [errors, setErrors] = useState<Partial<LoginFormData>>({})
  const [submitError, setSubmitError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {}

    if (!formData.loginOrEmail.trim()) {
      newErrors.loginOrEmail = 'Login ou e-mail é obrigatório'
    }

    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError('')

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulação de login (em produção, aqui seria a chamada à API)
    setTimeout(() => {
      setIsLoading(false)
      // Simular sucesso
      navigate('/')
    }, 1000)
  }

  const handleChange = (field: keyof LoginFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
    // Limpar erro do campo ao digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Login</Title>

        {submitError && <ErrorMessage>{submitError}</ErrorMessage>}

        <Form onSubmit={handleSubmit}>
          <Input
            label="Login ou E-mail"
            type="text"
            placeholder="Digite seu login ou e-mail"
            value={formData.loginOrEmail}
            onChange={handleChange('loginOrEmail')}
            error={errors.loginOrEmail}
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

          <Button type="submit" fullWidth size="large" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
        </Form>

        <LinksContainer>
          <StyledLink to="/registro">Criar uma conta</StyledLink>
          <StyledLink to="/">Esqueci minha senha</StyledLink>
        </LinksContainer>
      </LoginCard>
      <CopyrightText>
        © {new Date().getFullYear()} Old World Last Chaos. Todos os direitos reservados.
      </CopyrightText>
    </LoginContainer>
  )
}
