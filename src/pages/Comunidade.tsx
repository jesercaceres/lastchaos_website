import styled from 'styled-components'
import { Card } from '../components/ui'

const ComunidadeContainer = styled.div`
  max-width: 1200px;
  margin: ${({ theme }) => theme.spacing['2xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  box-sizing: border-box;

  /* Ajuste de altura para viewports altas (limitar espaço vertical excessivo) */
  @media (min-height: 690px) {
    min-height: clamp(500px, calc(100dvh - var(--header-height, 72px)), 760px);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
    margin: ${({ theme }) => theme.spacing.lg} auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
    margin: ${({ theme }) => theme.spacing.md} auto;
  }
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const CommunitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const CommunityCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 300px;
`

const CommunityIcon = styled.div`
  font-size: 4rem;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const CommunityTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin: 0;
`

const CommunityDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.6;
  flex-grow: 1;
`

const CommunityButton = styled.a`
  display: inline-block;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold} 0%, ${({ theme }) => theme.colors.darkGold} 100%);
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${({ theme }) => theme.transitions.normal};
  margin-top: ${({ theme }) => theme.spacing.md};

  &:hover {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.lightGold} 0%, ${({ theme }) => theme.colors.gold} 100%);
    box-shadow: ${({ theme }) => theme.shadows.gold};
    transform: translateY(-2px);
  }
`

const communities = [
  {
    id: '1',
    name: 'Discord',
    icon: '💬',
    description:
      'Junte-se à nossa comunidade no Discord! Converse com outros jogadores, participe de eventos e receba atualizações em tempo real.',
    link: 'https://discord.gg',
    linkText: 'Entrar no Discord',
  },
  {
    id: '2',
    name: 'Telegram',
    icon: '✈️',
    description:
      'Participe do nosso canal no Telegram para receber notícias, dicas e informações sobre o jogo diretamente no seu celular.',
    link: 'https://t.me',
    linkText: 'Entrar no Telegram',
  },
  {
    id: '3',
    name: 'Fórum',
    icon: '📋',
    description:
      'Acesse nosso fórum oficial para discussões, guias, tutoriais e muito mais. Compartilhe suas experiências com a comunidade.',
    link: '#',
    linkText: 'Acessar Fórum',
  },
]

export const Comunidade: React.FC = () => {
  return (
    <ComunidadeContainer>
      <Title>Comunidade</Title>
      <Description>
        Conecte-se com outros jogadores através das nossas plataformas oficiais. Faça parte da
        comunidade Last Chaos!
      </Description>
      <CommunitiesGrid>
        {communities.map((community) => (
          <CommunityCard key={community.id} hoverable>
            <CommunityIcon>{community.icon}</CommunityIcon>
            <CommunityTitle>{community.name}</CommunityTitle>
            <CommunityDescription>{community.description}</CommunityDescription>
            <CommunityButton href={community.link} target="_blank" rel="noopener noreferrer">
              {community.linkText}
            </CommunityButton>
          </CommunityCard>
        ))}
      </CommunitiesGrid>
    </ComunidadeContainer>
  )
}
