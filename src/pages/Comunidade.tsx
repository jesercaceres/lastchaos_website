import React from 'react'
import styled from 'styled-components'
import { CommunityCard } from '../features/community/components/CommunityCard'
import whatsappIcon from '../assets/icons/whatsapp-icon.png'
import communityBg from '../assets/images/community-bg.png'

const WhatsappIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ComunidadeContainer = styled.section`
  width: 100%;
  /* Resolve o problema do footer "esticado" ou sobras de espaço */
  min-height: calc(100vh - var(--header-height, 72px) - var(--footer-height, 60px));

  padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.85) 0%, transparent 25%),
    linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 15%), url(${communityBg});

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 100px;
    padding-bottom: 60px;
    height: auto;
    min-height: 100vh;
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 3px;

  /* Sombra multicamadas para destaque total no fundo claro */
  text-shadow:
    0 2px 4px rgba(0, 0, 0, 1),
    0 4px 12px rgba(0, 0, 0, 0.9),
    0 0 20px rgba(0, 0, 0, 0.5);
`

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 500;
  max-width: 650px;
  /* Aumento do margin-bottom para dar mais ar entre o texto e os cards */
  margin: 0 auto 60px;
  line-height: 1.6;

  text-shadow:
    1px 1px 3px rgba(0, 0, 0, 1),
    0 2px 10px rgba(0, 0, 0, 0.8);
`

const CommunitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  justify-items: center;
  width: 100%;
  max-width: 1000px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const StyledCommunityCard = styled(CommunityCard)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 420px;
  min-height: 380px;
  background: rgba(10, 10, 10, 0.85);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-10px);
    border-color: ${({ theme }) => theme.colors.gold};
    background: rgba(15, 15, 15, 0.95);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
  }
`

const CommunityIcon = styled.div`
  font-size: 3.5rem;
  height: 90px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* Brilho sutil para fazer o ícone saltar do card */
  filter: drop-shadow(0 0 12px ${({ theme }) => theme.colors.gold}33);
`

const CommunityTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin: 0;
  letter-spacing: 1.5px;
`

const CommunityDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  flex-grow: 1; /* Garante que os botões fiquem alinhados */
`

const CommunityButton = styled.a`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold} 0%,
    ${({ theme }) => theme.colors.darkGold} 100%
  );
  color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 800;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1.5px;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(1.2);
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.gold}aa;
    transform: scale(1.02);
  }
`

const communities = [
  {
    id: '1',
    name: 'Whatsapp',
    icon: <WhatsappIcon src={whatsappIcon} alt="Whatsapp" />,
    description:
      'Junte-se à nossa comunidade no Whatsapp! Converse com outros jogadores, participe de eventos e receba atualizações em tempo real.',
    link: 'https://chat.whatsapp.com',
    linkText: 'Entrar no Whatsapp',
  },
  {
    id: '2',
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
      <ContentWrapper>
        <Title>Comunidade</Title>
        <Description>
          Conecte-se com outros jogadores através das nossas plataformas oficiais. Faça parte da
          comunidade Last Chaos!
        </Description>
        <CommunitiesGrid>
          {communities.map(community => (
            <StyledCommunityCard key={community.id}>
              <CommunityIcon>{community.icon}</CommunityIcon>
              <CommunityTitle>{community.name}</CommunityTitle>
              <CommunityDescription>{community.description}</CommunityDescription>
              <CommunityButton href={community.link} target="_blank" rel="noopener noreferrer">
                {community.linkText}
              </CommunityButton>
            </StyledCommunityCard>
          ))}
        </CommunitiesGrid>
      </ContentWrapper>
    </ComunidadeContainer>
  )
}
