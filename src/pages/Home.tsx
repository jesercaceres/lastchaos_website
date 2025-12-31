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
  /* Full-screen immersive hero section */
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
  animation: fadeIn 1.2s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-wrap: wrap;
  }
`

/* `HeroInner` and `HeroContent` removed: their responsibilities are applied
   directly to `HeroSection` so it can span the full viewport width. */

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

/* Specialized section for Últimas Notícias: allow it to occupy the visible
   viewport (minus header) and provide a larger bottom gap before the next section. */
const NewsSection = styled(Section)`
  /* Removemos a altura fixa complexa que causava o problema de sobreposição/colagem */
  display: flex;
  flex-direction: column;
  
  /* Garante um espaço mínimo visualmente agradável */
  min-height: 500px; 
  
  /* O pulo do gato: Margin-bottom fixo e seguro */
  margin-bottom: ${({ theme }) => theme.spacing.xxl}; 

  @media (max-width: 1440px) {
    margin-bottom: 80px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 40px;
    
    /* Mantém seu efeito decorativo se desejar */
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

const ServersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* Utilizando o espaçamento definido no seu tema */
  gap: ${({ theme }) => theme.spacing.lg};

  & > div {
    flex: 1 1 300px; 
    max-width: 400px; /* Limite para não esticar demais */
    width: 100%;
  }

  /* Breakpoint Large */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: ${({ theme }) => theme.spacing.md};
  }

  /* Breakpoint Mobile */
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

const ServerTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
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

const ServerStats = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin: 0 0 ${({ theme }) => theme.spacing.md} 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const Home: React.FC = () => {
  const featuredServers = mockServers
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
          {featuredServers.map((server) => (
            <div key={server.id}>
              <Card hoverable>
                <ServerTitle>{server.name}</ServerTitle>
                <ServerMeta>
                  Tipo: <strong>{server.type}</strong>
                </ServerMeta>
                <ServerStats>
                  {server.players} / {server.maxPlayers} Jogadores
                </ServerStats>
                s
                <ButtonLink variant="secondary" size="small" fullWidth to="/download">
                  Jogar agora
                </ButtonLink>
              </Card>
            </div>
          ))}
        </ServersGrid>
      </Section>
      </HomeContainer>
    </>
  )
}

