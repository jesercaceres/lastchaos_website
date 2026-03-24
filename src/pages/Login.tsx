import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input } from '../shared/components/ui'
import loginImage from '../assets/images/login-bg2.png'
import { api } from '../shared/services/api'
import { loginSchema, LoginDto } from '../features/auth/schemas/login.schema'
import { useAuth } from '../shared/contexts/AuthContext';

// ... (Aqui mantêm-se os seus Styled Components: CopyrightText, LoginContainer, LoginCard, Title, Form, LinksContainer, StyledLink, ErrorMessage)
const CopyrightText = styled.p`
  position: absolute;
  bottom: 1rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
  text-align: center;
  width: 100%;
  pointer-events: none;

  @media (max-height: 800px), (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    position: relative;
    bottom: auto;
    margin-top: 2rem;
    padding-bottom: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`

const LoginContainer = styled.div`
  height: calc(100dvh - var(--header-height, 80px));
  width: 100%;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-image: url(${loginImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    min-height: 100dvh;
    overflow-y: auto;
    padding-top: calc(var(--header-height, 70px) + 2rem);
  }
`

const LoginCard = styled.div`
  max-width: 550px;
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

  @media(max-width: ${({ theme}) => theme.breakpoints.large}){
    padding: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing['2xl']};
  }
`
 
const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media(max-width: ${({ theme}) => theme.breakpoints.large}){
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  
  @media(max-width: ${({ theme }) => theme.breakpoints.large}){
    gap: ${({ theme }) => theme.spacing.sm};
  }
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
  color: red;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const Login: React.FC = () => {
  const navigate = useNavigate()
  const { signIn } = useAuth();
  
  const [formData, setFormData] = useState<LoginDto>({
    userId: '',
    passwd: '',
  })
  
  const [errors, setErrors] = useState<Partial<LoginDto>>({})
  const [submitError, setSubmitError] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false) 

  const handleChange = (field: keyof LoginDto) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const newData = { ...formData, [field]: newValue };
    
    setFormData(newData);

    if (hasSubmitted) {
      const result = loginSchema.safeParse(newData);
      if (!result.success) {
        const fieldError = result.error.issues.find(issue => issue.path[0] === field);
        setErrors(prev => ({
          ...prev,
          [field]: fieldError ? fieldError.message : undefined
        }));
      } else {
        setErrors({});
      }
    } else {
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    }
  }

  const handleBlur = (field: keyof LoginDto) => () => {
    const result = loginSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldError = result.error.issues.find(issue => issue.path[0] === field);
      if (fieldError) {
        setErrors(prev => ({ ...prev, [field]: fieldError.message }));
      } else {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    } else {
      setErrors({});
    }
  }

  const validateForm = (): boolean => {
    const result = loginSchema.safeParse(formData);
    
    if (!result.success) {
      const formattedErrors: Partial<LoginDto> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof LoginDto;
        if (!formattedErrors[field]) {
          formattedErrors[field] = issue.message;
        }
      });
      setErrors(formattedErrors);
      return false;
    }

    setErrors({});
    return true;
  }

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setHasSubmitted(true);
    setSubmitError('')

    if (!validateForm()) return
    setIsLoading(true)

    try {
      const response = await api.post('/auth/login', formData)

      // 2. Apague aquele localStorage.setItem manual e chame o Gerente!
      // O seu backend devolve: token e user (com userCode, userId, email)
      signIn(response.data.token, response.data.user);
      console.log(response.data.user)
      console.log(response.data.token)

      setIsLoading(false)
      navigate('/')
    } catch (error: any) {
      setIsLoading(false)
      if (error.response && error.response.data && error.response.data.message) {
        setSubmitError(error.response.data.message)
      } else {
        setSubmitError('Ocorreu um erro inesperado ao contactar o servidor.')
      }
    }
  }

  return (
    <LoginContainer>
      <LoginCard>
        <Title>Login</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Utilizador"
            type="text"
            placeholder="Digite seu login"
            value={formData.userId}
            onChange={handleChange('userId')}
            onBlur={handleBlur('userId')}
            error={errors.userId}
            required
          />

          <Input
            label="Palavra-passe"
            type="password"
            placeholder="Digite sua senha"
            value={formData.passwd}
            onChange={handleChange('passwd')}
            onBlur={handleBlur('passwd')}
            error={errors.passwd}
            required
          />

          <Button type="submit" fullWidth size="large" disabled={isLoading}>
            {isLoading ? 'Entrando...' : 'Entrar'}
          </Button>
          {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
        </Form>

        <LinksContainer>
          <StyledLink to="/registro">Criar uma conta</StyledLink>
          <StyledLink to="/forgot-password">Esqueci minha senha</StyledLink>
        </LinksContainer>
      </LoginCard>
      <CopyrightText>
        © {new Date().getFullYear()} Old World Last Chaos. Todos os direitos reservados.
      </CopyrightText>
    </LoginContainer>
  )
}