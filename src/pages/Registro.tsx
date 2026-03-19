import { useState, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Button, Input } from '../shared/components/ui'
import registerBgImage from '../assets/images/register-bg.png'
import { api } from '../shared/services/api'
import { registerSchema, RegisterDto } from '../features/auth/schemas/register.schema'


const CopyrightText = styled.p`
  position: absolute;
  bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
  text-align: center;
  width: 100%;
  pointer-events: none;

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
  overflow: hidden;

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
  margin-top: ${({ theme }) => theme.spacing.sm};
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
  
  // 3. Atualizámos as chaves do estado para baterem certo com o Zod/Backend
  const [formData, setFormData] = useState<RegisterDto>({
    userId: '',
    email: '',
    passwd: '',
    confirmPasswd: '',
  })
  
  const [errors, setErrors] = useState<Partial<RegisterDto>>({})
  const [submitError, setSubmitError] = useState<string>('')
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // 4. O nosso validador agora é incrivelmente simples, poderoso e seguro!
  const validateForm = (): boolean => {
    const result = registerSchema.safeParse(formData);
    
    if (!result.success) {
      // O Zod devolve os erros num formato um pouco complexo, 
      // aqui formatamos para o nosso estado `errors` ler facilmente.
      const formattedErrors: Partial<RegisterDto> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof RegisterDto;
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
    e.preventDefault();
    setHasSubmitted(true); // <-- ADICIONE AQUI: Marcamos que ele já tentou enviar!
    setSubmitError('');
    setSubmitSuccess(false)

    if (!validateForm()) return

    setIsLoading(true)

    try {
      // Como o nosso formData agora tem os nomes exatos do DTO, podemos passar diretamente!
      await api.post('/auth/register', formData)

      setIsLoading(false)
      setSubmitSuccess(true)

      setTimeout(() => navigate('/login'), 2000)
    } catch (error: any) {
      setIsLoading(false)
      if (error.response && error.response.data && error.response.data.message) {
        setSubmitError(error.response.data.message)
      } else {
        setSubmitError('Ocorreu um erro inesperado ao contactar o servidor.')
      }
    }
  }

const handleChange = (field: keyof RegisterDto) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const newData = { ...formData, [field]: newValue };
    
    setFormData(newData);

    // Se ele já clicou em Registar antes e tomou erro, ajudamos em tempo real letra a letra:
    if (hasSubmitted) {
      const result = registerSchema.safeParse(newData);
      if (!result.success) {
        const fieldError = result.error.issues.find(issue => issue.path[0] === field);
        setErrors(prev => ({
          ...prev,
          [field]: fieldError ? fieldError.message : undefined
        }));
      } else {
        setErrors({}); // Tudo perfeito, limpa todos os erros!
      }
    } else {
      // Se ele está digitando pela primeira vez (antes de clicar em Registar), somos "bonzinhos".
      // Se tinha um erro do 'onBlur' e ele voltou a digitar, limpamos a tela para não estressar.
      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    }
  }

  // Essa função dispara no exato momento que o usuário "sai" de um campo (aperta TAB ou clica fora)
  const handleBlur = (field: keyof RegisterDto) => () => {
    const result = registerSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldError = result.error.issues.find(issue => issue.path[0] === field);
      
      if (fieldError) {
        // Se o Zod achou erro NESTE campo que ele acabou de sair, mostramos!
        setErrors(prev => ({ ...prev, [field]: fieldError.message }));
      } else {
        // Se ele consertou o campo e saiu, garantimos que a mensagem de erro soma
        setErrors(prev => ({ ...prev, [field]: undefined }));
      }
    } else {
      // Se ao sair do campo o formulário inteiro ficou válido, limpamos tudo
      setErrors({});
    }
  }

  return (
    <RegistroContainer>
      <RegistroCard>
        <Title>Registrar</Title>
        {submitSuccess && <SuccessMessage>Sucesso! Redirecionando para o Login...</SuccessMessage>}
        <Form onSubmit={handleSubmit}>
          {/* Atualizámos os bindings dos inputs para as novas propriedades */}
          <Input
            label="Utilizador"
            type="text"
            placeholder="Digite o seu nome de utilizador"
            value={formData.userId}
            onChange={handleChange('userId')}
            onBlur={handleBlur('userId')}
            error={errors.userId}
            required
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="Digite o seu e-mail"
            value={formData.email}
            onChange={handleChange('email')}
            error={errors.email}
            required
          />
          <Input
            label="Palavra-passe"
            type="password"
            placeholder="Digite a sua palavra-passe"
            value={formData.passwd}
            onChange={handleChange('passwd')}
            onBlur={handleBlur('passwd')}
            error={errors.passwd}
            required
          />
          <Input
            label="Confirmar Palavra-passe"
            type="password"
            placeholder="Confirme a sua palavra-passe"
            value={formData.confirmPasswd}
            onChange={handleChange('confirmPasswd')}
            onBlur={handleBlur('confirmPasswd')}
            error={errors.confirmPasswd}
            required
          />
          <Button type="submit" fullWidth size="large" disabled={isLoading || submitSuccess}>
            {isLoading ? 'A Registar...' : submitSuccess ? 'Registado!' : 'Registar'}
          </Button>
          {submitError && <ErrorMessage>{submitError}</ErrorMessage>}
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