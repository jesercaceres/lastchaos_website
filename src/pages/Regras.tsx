import styled from 'styled-components'
import { Card } from '../components/ui'

const RegrasContainer = styled.div`
  max-width: 1000px;
  margin: ${({ theme }) => theme.spacing['2xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const RulesSection = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
`

const RulesCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const RulesList = styled.ol`
  padding-left: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.8;
`

const RulesItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
`

const WarningBox = styled.div`
  background: ${({ theme }) => theme.colors.error}22;
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.white};
`

const WarningTitle = styled.h3`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`

const rules = {
  comportamento: [
    'Respeitar todos os jogadores, independentemente do nível ou experiência',
    'Não utilizar linguagem ofensiva, discriminatória ou inadequada',
    'Não assediar outros jogadores de forma alguma',
    'Não fazer spam no chat ou em canais de comunicação',
    'Manter um ambiente amigável e acolhedor para todos',
  ],
  gameplay: [
    'Não utilizar cheats, hacks ou modificações não autorizadas',
    'Não explorar bugs ou glitches do jogo',
    'Não utilizar programas de automação ou bots',
    'Não trapacear em eventos ou competições',
    'Respeitar as regras de cada servidor',
  ],
  conta: [
    'Cada jogador pode ter apenas uma conta por servidor',
    'Não compartilhar sua conta com outras pessoas',
    'Você é responsável por todas as ações realizadas na sua conta',
    'Não comprar, vender ou trocar contas',
    'Reportar qualquer atividade suspeita em sua conta imediatamente',
  ],
  economia: [
    'Não utilizar métodos ilegais para obter itens ou moedas',
    'Não praticar golpes ou fraudes envolvendo transações',
    'Respeitar os preços de mercado justos',
    'Reportar jogadores que tentam enganar outros em transações',
  ],
}

export const Regras: React.FC = () => {
  return (
    <RegrasContainer>
      <Title>Regras do Servidor</Title>
      <Description>
        Para garantir uma experiência justa e agradável para todos, é importante seguir estas
        regras. O descumprimento pode resultar em punições, incluindo banimento permanente.
      </Description>

      <RulesSection>
        <SectionTitle>Comportamento</SectionTitle>
        <RulesCard>
          <RulesList>
            {rules.comportamento.map((rule, index) => (
              <RulesItem key={index}>{rule}</RulesItem>
            ))}
          </RulesList>
        </RulesCard>
      </RulesSection>

      <RulesSection>
        <SectionTitle>Gameplay</SectionTitle>
        <RulesCard>
          <RulesList>
            {rules.gameplay.map((rule, index) => (
              <RulesItem key={index}>{rule}</RulesItem>
            ))}
          </RulesList>
        </RulesCard>
      </RulesSection>

      <RulesSection>
        <SectionTitle>Conta</SectionTitle>
        <RulesCard>
          <RulesList>
            {rules.conta.map((rule, index) => (
              <RulesItem key={index}>{rule}</RulesItem>
            ))}
          </RulesList>
        </RulesCard>
      </RulesSection>

      <RulesSection>
        <SectionTitle>Economia</SectionTitle>
        <RulesCard>
          <RulesList>
            {rules.economia.map((rule, index) => (
              <RulesItem key={index}>{rule}</RulesItem>
            ))}
          </RulesList>
        </RulesCard>
      </RulesSection>

      <WarningBox>
        <WarningTitle>⚠️ Aviso Importante</WarningTitle>
        <p>
          A equipe de moderação reserva-se o direito de aplicar punições apropriadas para qualquer
          violação das regras. As punições podem variar desde advertências até banimento permanente,
          dependendo da gravidade da infração. Em caso de dúvidas sobre as regras, entre em contato
          com a equipe de suporte.
        </p>
      </WarningBox>
    </RegrasContainer>
  )
}
