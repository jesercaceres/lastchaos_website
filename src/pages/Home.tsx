import React, { useState } from 'react'
import styled from 'styled-components'

import { ButtonLink } from '../shared/components/ui/ButtonLink'
import { Card } from '../shared/components/ui/Card'
import { Modal } from '../shared/components/ui/Modal'
import { SectionDivider } from '../shared/components/ui/SectionDivider'
import { mockNews, mockServers } from '../mocks'
import { HomeRankingsSection } from '../features/ranking/components/HomeRankingsSection'
import { News } from '../types'

import heroImage from '../assets/images/oldWorld-lc.png'
import newsBg from '../assets/images/news-bg.png'
import serversBg from '../assets/images/server-bg.png'

const ContentContainer = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image:
    linear-gradient(to top, rgba(0, 0, 0, 1) 0%, transparent 30%), url(${heroImage});
  background-position: center top;
  background-size: cover;
  padding-bottom: ${({ theme }) => theme.spacing['6xl']};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 10;
`

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  animation: fadeIn 1.2s ease-in-out;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`

const ButtonsOverlay = styled.div`
  position: relative;
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  z-index: 2;
  flex-wrap: wrap;
  justify-content: center;
`

const sectionBaseStyles = `
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-size: cover;
  background-position: center;
`

const NewsSectionWrapper = styled.section`
  ${sectionBaseStyles}
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing['5xl']};
  background-image: url(${newsBg});
  background-attachment: fixed;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: ${({ theme }) => theme.spacing['6xl']};
    padding-top: ${({ theme }) => theme.spacing['2xl']};
    background-attachment: scroll;
  }
`

const ServersSectionWrapper = styled.section`
  ${sectionBaseStyles}
  padding-top: ${({ theme }) => theme.spacing.xl};
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, transparent 100%),
    linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 30%),
    url(${serversBg});

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: ${({ theme }) => theme.spacing['6xl']};
    padding-top: ${({ theme }) => theme.spacing['2xl']};
  }
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => `calc(${theme.spacing.xl} + ${theme.spacing.xs})`};
  text-shadow: 0 4px 15px rgba(0, 0, 0, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

const ServersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  & > div {
    flex: 1 1 300px;
    max-width: 400px;
    width: 100%;
  }
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const TransparentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(11, 12, 16, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.15);
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.gold};
    background: rgba(11, 12, 16, 0.9);
  }
`

const NewsImage = styled.img`
  width: 100%;
  height: ${({ theme }) => theme.spacing['6xl']};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`
const NewsTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`
const NewsContent = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  flex-grow: 1;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`
const NewsDate = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`

// COMPONENTE COM A LÓGICA DE CORES REVISADA
const NewsCategory = styled.span<{ $category?: News['category'] }>`
  /* 1. Controle de Tamanho: impede que a barra fique gigante */
  display: inline-flex;
  width: fit-content;
  align-items: center;
  justify-content: center;

  /* 2. Espaçamento Interno e Margens: menor para apenas "circular" o texto */
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  padding: 2px 10px; /* Reduzido para ficar compacto */
  
  /* 3. Tipografia */
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 10px; /* Um pouco menor que o xs padrão para badges */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  /* 4. Lógica de Cores baseada no Tema Medieval */
  background: ${({ theme, $category }) => {
    switch ($category) {
      case 'news':
        return theme.colors.info; // Azul para notícias gerais
      case 'event':
        return theme.colors.gold; // Dourado para eventos épicos
      case 'update':
        return theme.colors.success; // Verde para atualizações/sucesso
      case 'maintenance':
        return theme.colors.error; // Vermelho para manutenções
      default:
        return theme.colors.gray;
    }
  }};

  /* 5. Estética Adicional: uma borda sutil para destaque */
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: ${({ theme }) => `calc(${theme.spacing['7xl']} + ${theme.spacing['2xl']})`};
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ModalMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const ModalText = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.8;
  font-size: ${({ theme }) => theme.fontSizes.md};
  white-space: pre-wrap;
`

const ServerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`
const StatusDot = styled.span<{ $online?: boolean }>`
  height: ${({ theme }) => theme.spacing.xs};
  width: ${({ theme }) => theme.spacing.xs};
  background-color: ${({ $online }) => ($online ? '#2ecc71' : '#e74c3c')};
  border-radius: 50%;
  margin-right: ${({ theme }) => theme.spacing.sm};
  display: inline-block;
  animation: ripple 2s infinite;
`
const ServerTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes['xl']};
  }
`
const ServerMeta = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  strong {
    color: ${({ theme }) => theme.colors.white};
  }
`
const RatesContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`
const RateBadge = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => `calc(${theme.spacing.xs} / 4) ${theme.spacing.xs}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
`
const ServerStats = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  justify-content: space-between;
`
const ProgressBarContainer = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.spacing.xs};
  background: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  overflow: hidden;
`
const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: ${({ theme }) =>
    `linear-gradient(90deg, ${theme.colors.gold}, ${theme.colors.lightGold})`};
`

export const Home: React.FC = () => {
  const [selectedNews, setSelectedNews] = useState<News | null>(null)

  const featuredServers = mockServers.slice(0, 3)
  const featuredNews = mockNews.slice(0, 3)

  const handleOpenNews = (news: News) => {
    setSelectedNews(news)
  }

  const handleCloseNews = () => {
    setSelectedNews(null)
  }

  return (
    <>
      <HeroSection role="img" aria-label="Old World Last Chaos">
        <ButtonsOverlay>
          <HeroButtons>
            <ButtonLink size="large" to="/download">
              Baixar Jogo
            </ButtonLink>
            <ButtonLink size="large" variant="secondary" to="/registro">
              Registrar-se
            </ButtonLink>
          </HeroButtons>
        </ButtonsOverlay>
      </HeroSection>

      <SectionDivider />

      <NewsSectionWrapper>
        <ContentContainer>
          <SectionTitle>Últimas Notícias</SectionTitle>
          <NewsGrid>
            {featuredNews.map(news => (
              <TransparentCard key={news.id} hoverable onClick={() => handleOpenNews(news)}>
                {news.image && <NewsImage src={news.image} alt={news.title} />}
                
                {/* AQUI ESTÁ O AJUSTE: Passando a prop $category */}
                <NewsCategory $category={news.category}>
                  {news.category}
                </NewsCategory>

                <NewsTitle>{news.title}</NewsTitle>
                <NewsContent>
                  {news.content.length > 100
                    ? `${news.content.substring(0, 100)}...`
                    : news.content}
                </NewsContent>
                <NewsDate>{new Date(news.date).toLocaleDateString('pt-BR')}</NewsDate>
              </TransparentCard>
            ))}
          </NewsGrid>
        </ContentContainer>
      </NewsSectionWrapper>

      <SectionDivider />

      <HomeRankingsSection />

      <SectionDivider />

      <ServersSectionWrapper>
        <ContentContainer>
          <SectionTitle>Servidores em Destaque</SectionTitle>
          <ServersGrid>
            {featuredServers.map(server => {
              const populationPercent = Math.min((server.players / server.maxPlayers) * 100, 100)
              const isOnline = server.status === 'online'

              return (
                <div key={server.id}>
                  <TransparentCard hoverable>
                    <ServerHeader>
                      <StatusDot $online={isOnline} />
                      <ServerTitle>{server.name}</ServerTitle>
                    </ServerHeader>

                    <ServerMeta>
                      Tipo: <strong>{server.type}</strong>
                    </ServerMeta>
                    <RatesContainer>
                      <RateBadge>XP 5x</RateBadge>
                      <RateBadge>DROP 3x</RateBadge>
                    </RatesContainer>
                    <ServerStats>
                      <span>Jogadores</span>
                      <span>
                        {server.players} / {server.maxPlayers}
                      </span>
                    </ServerStats>
                    <ProgressBarContainer>
                      <ProgressBarFill $percent={populationPercent} />
                    </ProgressBarContainer>
                    <ButtonLink variant="secondary" size="small" fullWidth to="/download">
                      Jogar agora
                    </ButtonLink>
                  </TransparentCard>
                </div>
              )
            })}
          </ServersGrid>
        </ContentContainer>
      </ServersSectionWrapper>

      <Modal isOpen={!!selectedNews} onClose={handleCloseNews} title={selectedNews?.title}>
        {selectedNews && (
          <>
            {selectedNews.image && <ModalImage src={selectedNews.image} alt={selectedNews.title} />}
            <ModalMeta>
              {/* AJUSTE NO MODAL TAMBÉM: Passando a prop $category */}
              <NewsCategory $category={selectedNews.category}>
                {selectedNews.category}
              </NewsCategory>
              <NewsDate>{new Date(selectedNews.date).toLocaleDateString('pt-BR')}</NewsDate>
            </ModalMeta>
            <ModalText>{selectedNews.content}</ModalText>
          </>
        )}
      </Modal>
    </>
  )
}