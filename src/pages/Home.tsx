import styled from 'styled-components'
import { ButtonLink, Card } from '../components/ui'
import { mockNews, mockServers } from '../mocks'
import heroImage from '../assets/images/oldWorld-lc.png'

const HomeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

const HeroSection = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      transparent 40%
    ),
    url(${heroImage});
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 24vh;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
`

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-direction: row;
  /* Usando a animação global fadeIn */
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

const Section = styled.section`
  margin-block: var(--section-gap, ${({ theme }) => theme.spacing['2xl']});
  padding-block: calc(var(--section-gap, 2.5rem) / 2);
`

const NewsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  min-height: 500px; 
  margin-bottom: ${({ theme }) => theme.spacing.xxl}; 

  @media (max-width: 1440px) {
    margin-bottom: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
    &::after {
      height: clamp(28px, 8vh, 56px);
      margin-top: calc(var(--section-gap, 0.75rem) / 2);
      background-size: 100% 100%, 100% 1.5px;
    }
  }
`

const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
`

// --- ESTILOS DO GRID E NEWS ---

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

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.sm};
    & > div {
        max-width: 100%;
    }
  }
`

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const NewsCard = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
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
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
`

const NewsContent = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  flex-grow: 1;
`

const NewsDate = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
`

const NewsCategory = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
`

// --- ESTILOS ESPECÍFICOS DO CARD DE SERVIDOR ---

const ServerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const StatusDot = styled.span<{ $online?: boolean }>`
  height: 10px;
  width: 10px;
  background-color: ${({ $online }) => ($online ? '#2ecc71' : '#e74c3c')};
  border-radius: 50%;
  display: inline-block;
  margin-right: 12px;
  /* AQUI: Referenciamos a animação 'ripple' definida no GlobalStyle */
  animation: ${({ $online }) => ($online ? 'ripple' : 'none')} 2s infinite;
`

const ServerTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
`

const ServerMeta = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  strong {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }
`

const RatesContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const RateBadge = styled.span`
  background: rgba(255, 215, 0, 0.1);
  color: ${({ theme }) => theme.colors.gold};
  border: 1px solid ${({ theme }) => theme.colors.gold};
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
`

const ServerStats = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  justify-content: space-between;
`

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  margin-top: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  overflow: hidden;
`

const ProgressBarFill = styled.div<{ $percent: number }>`
  height: 100%;
  width: ${({ $percent }) => $percent}%;
  background: linear-gradient(90deg, #d4af37, #f1c40f);
  border-radius: 4px;
  transition: width 1s ease-in-out;
`

export const Home: React.FC = () => {
  const featuredServers = mockServers.slice(0, 3) 
  const featuredNews = mockNews.slice(0, 3)

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

      <HomeContainer>
        <NewsSection>
          <SectionTitle>Últimas Notícias</SectionTitle>
          <NewsGrid>
            {featuredNews.map((news) => (
              <NewsCard key={news.id} hoverable>
                {news.image && <NewsImage src={news.image} alt={news.title} />}
                <NewsCategory>{news.category}</NewsCategory>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsContent>{news.content}</NewsContent>
                <NewsDate>{new Date(news.date).toLocaleDateString('pt-BR')}</NewsDate>
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>
        
        <Section>
          <SectionTitle>Servidores em Destaque</SectionTitle>
          <ServersGrid>
            {featuredServers.map((server) => {
               const populationPercent = Math.min((server.players / server.maxPlayers) * 100, 100);
               const isOnline = server.status === 'online';

               return (
                <div key={server.id}>
                  <Card hoverable>
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
                      <span>{server.players} / {server.maxPlayers}</span>
                    </ServerStats>
                    
                    <ProgressBarContainer>
                      <ProgressBarFill $percent={populationPercent} />
                    </ProgressBarContainer>

                    <ButtonLink variant="secondary" size="small" fullWidth to="/download">
                      Jogar agora
                    </ButtonLink>
                  </Card>
                </div>
               )
            })}
          </ServersGrid>
        </Section>
      </HomeContainer>
    </>
  )
}