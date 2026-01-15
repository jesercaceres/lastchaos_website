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

// --- CONTAINER DE CONTEÚDO (Centraliza o conteúdo sobre os backgrounds) ---
const ContentContainer = styled.div`
  max-width: 1440px;
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
    linear-gradient(to top, rgba(0, 0, 0, 10) 0%, transparent 30%), url(${heroImage});
  background-position: center top;
  background-size: cover;
  padding-bottom: 24vh;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
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

// --- WRAPPERS DE FUNDO (Padronizados) ---


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

// 1. Wrapper para Notícias
const NewsSectionWrapper = styled.section`
  ${sectionBaseStyles}
  /* Padding top explícito para afastar do Divider */
  padding-top: ${({ theme }) => theme.spacing.xl};
  background-image: url(${newsBg});
  background-attachment: fixed;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-bottom: ${({ theme }) => theme.spacing['6xl']};
    padding-top: ${({ theme }) => theme.spacing['2xl']};
    background-attachment: scroll;
  }
`

// 2. Wrapper para Servidores
const ServersSectionWrapper = styled.section`
  ${sectionBaseStyles}
  /* Padding top IGUAL ao de notícias para consistência visual */
  padding-top: ${({ theme }) => theme.spacing.xl};
  
  background-image: 
    linear-gradient(to bottom, rgba(0, 0, 0, 10) 0%, transparent 100%), // Topo
    linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 30%),    // Baixo
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
  margin-bottom: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
  text-shadow: 0 4px 15px rgba(0, 0, 0, 1);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

// --- GRIDS E CARDS ---
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

// Card Transparente (Glassmorphism)
const TransparentCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background: rgba(11, 12, 16, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.15);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.gold};
    background: rgba(11, 12, 16, 0.9);
  }
`

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
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
const NewsCategory = styled.span`
  margin-top: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
`

// --- ESTILOS DO MODAL ---
const ModalImage = styled.img`
  width: 100%;
  max-height: 300px;
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

// Estilos internos do card de servidor
const ServerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`
const StatusDot = styled.span<{ $online?: boolean }>`
  height: 10px;
  width: 10px;
  background-color: ${({ $online }) => ($online ? '#2ecc71' : '#e74c3c')};
  border-radius: 50%;
  margin-right: 12px;
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
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
  strong {
    color: white;
  }
`
const RatesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 1rem;
`
const RateBadge = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
`
const ServerStats = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
`
const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
`
const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: linear-gradient(90deg, #d4af37, #f1c40f);
`

// --- COMPONENTE HOME ---
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
            <ButtonLink size="large"  to="/download">
              Baixar Jogo
            </ButtonLink>
            <ButtonLink size="large" variant="secondary" to="/registro">
              Registrar-se
            </ButtonLink>
          </HeroButtons>
        </ButtonsOverlay>
      </HeroSection>

       <SectionDivider />

      {/* SEÇÃO 1: NOTÍCIAS */}
      <NewsSectionWrapper>
        <ContentContainer>
          <SectionTitle>Últimas Notícias</SectionTitle>
          <NewsGrid>
            {featuredNews.map(news => (
              <TransparentCard 
                key={news.id} 
                hoverable 
                onClick={() => handleOpenNews(news)}
              >
                {news.image && <NewsImage src={news.image} alt={news.title} />}
                <NewsCategory>{news.category}</NewsCategory>
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

      {/* SEÇÃO 3: RANKINGS */}
      <HomeRankingsSection />
      
     

      {/* SEÇÃO 2: SERVIDORES */}
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

      <SectionDivider />

      {/* MODAL DE NOTÍCIAS */}
      <Modal 
        isOpen={!!selectedNews} 
        onClose={handleCloseNews} 
        title={selectedNews?.title}
      >
        {selectedNews && (
          <>
            {selectedNews.image && (
              <ModalImage src={selectedNews.image} alt={selectedNews.title} />
            )}
            <ModalMeta>
              <NewsCategory>{selectedNews.category}</NewsCategory>
              <NewsDate>{new Date(selectedNews.date).toLocaleDateString('pt-BR')}</NewsDate>
            </ModalMeta>
            <ModalText>
              {selectedNews.content}
            </ModalText>
          </>
        )}
      </Modal>
    </>
  )
}