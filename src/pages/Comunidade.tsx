import React from 'react'
import styled from 'styled-components'
import { CommunityCard } from '../components/ui/CommunityCard'
import whatsappIcon from '../assets/icons/whatsapp-icon.png'
import communityBg from '../assets/images/community-bg.png'

const WhatsappIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const ComunidadeContainer = styled.div`
  max-width: auto;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;

  /* Ajuste de altura para viewports altas */
  @media (min-height: 690px) {
    min-height: clamp(500px, calc(100dvh - var(--header-height, 72px)), 760px);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }

  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, transparent 45%),
    linear-gradient(to top, rgba(0, 0, 0, 0.9) 0.5%, transparent 20%), url(${communityBg});
  background-size: cover;

  background-repeat: no-repeat;
  background-position-xp: center;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
`

const CommunitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: ${({ theme }) => theme.spacing.xl} 0;
  justify-content: center;

  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

// AJUSTE 2: Padding reduzido de xl para lg
const StyledCommunityCard = styled(CommunityCard)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  max-width: 500px; /* Limita a largura máxima do card */
  height: 330px; 
  margin: 0 auto;
  opacity: 0.83;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: auto; 
  }
`

const CommunityIcon = styled.div`
  font-size: 4rem;
  object-fit: contain;
  
  height: 100px;
  width: 100px;
`

const CommunityTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin:0;
`

const CommunityDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.xs}; /* Fonte levemente reduzida */
  
`

const CommunityButton = styled.a`
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold} 0%,
    ${({ theme }) => theme.colors.darkGold} 100%
  );
  color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.lightGold} 0%,
      ${({ theme }) => theme.colors.gold} 100%
    );
    box-shadow: ${({ theme }) => theme.shadows.gold};
    transform: translateY(-2px);
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
      <Title>Comunidade</Title>
      <Description>
        Conecte-se com outros jogadores através das nossas plataformas oficiais. Faça parte da
        comunidade Last Chaos!
      </Description>
      <CommunitiesGrid>
        {communities.map(community => (
          <StyledCommunityCard key={community.id} hoverable>
            <CommunityIcon>{community.icon}</CommunityIcon>
            <CommunityTitle>{community.name}</CommunityTitle>
            <CommunityDescription>{community.description}</CommunityDescription>
            <CommunityButton href={community.link} target="_blank" rel="noopener noreferrer">
              {community.linkText}
            </CommunityButton>
          </StyledCommunityCard>
        ))}
      </CommunitiesGrid>
    </ComunidadeContainer>
  )
}
