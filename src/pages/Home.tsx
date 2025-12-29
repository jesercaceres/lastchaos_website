import styled from 'styled-components'
import { ButtonLink, Card } from '../components/ui'
import { mockNews, mockServers } from '../mocks'

const HomeContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
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
  position: relative;
  /* Make hero fill the visible viewport minus the header height. Use 100dvh for mobile viewport correctness. */
  min-height: calc(100dvh - var(--header-height, 0px));
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      135deg,
      rgba(26, 26, 26, 0.9) 0%,
      rgba(13, 13, 13, 0.95) 100%
    ),
    url('https://via.placeholder.com/1920x1080?text=Last+Chaos+Hero') center/cover;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  overflow: hidden;

  /* Ensure reasonable minimums on small viewports and limit excessive height on very tall screens */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: max(360px, calc(100dvh - var(--header-height, 0px)));
  }

  @media (min-height: 900px) {
    min-height: min(calc(100dvh - var(--header-height, 0px)), 760px);
  }
`

const HeroContent = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
  z-index: 1;
`

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: ${({ theme }) => theme.spacing.md};
  animation: fadeIn 0.8s ease-in-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`

const HeroSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  animation: fadeIn 1s ease-in-out;
`

const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeIn 1.2s ease-in-out;
`

const Section = styled.section`
  /* Use a reusable, responsive section gap while keeping natural DOM flow */
  margin-block: var(--section-gap, ${({ theme }) => theme.spacing['2xl']});
  padding-block: calc(var(--section-gap, 2.5rem) / 2);
`

/* Specialized section for Últimas Notícias: allow it to occupy the visible
   viewport (minus header) and provide a larger bottom gap before the next section. */
const NewsSection = styled(Section)`
  min-height: max(420px, calc(100dvh - var(--header-height, 0px)));
  /* use a decorative in-flow divider instead of a large empty gap */
  margin-block-end: var(--section-gap, 1rem);

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: clamp(36px, 6vh, 72px);
    margin-top: calc(var(--section-gap, 1rem) / 2);
    /* layered background: soft vertical fade + thin centered gold line */
    background-image:
      linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.35) 30%, rgba(0,0,0,0.35) 70%, rgba(0,0,0,0)),
      linear-gradient(90deg, transparent calc(50% - 1px), ${({ theme }) => theme.colors.gold} 50%, transparent calc(50% + 1px));
    background-repeat: no-repeat, no-repeat;
    background-size: 100% 100%, 100% 2px;
    background-position: center center, center 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 360px;
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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
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

export const Home: React.FC = () => {
  const featuredServers = mockServers.filter((server) => server.status === 'online').slice(0, 3)
  const featuredNews = mockNews.slice(0, 3)

  return (
    <HomeContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Last Chaos</HeroTitle>
          <HeroSubtitle>The Best Legend MMORPG</HeroSubtitle>
          <HeroButtons>
            <ButtonLink size="large" to="/download">
              Baixar Jogo
            </ButtonLink>
            <ButtonLink size="large" variant="secondary" to="/registro">
              Registrar-se
            </ButtonLink>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

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
                <h3 style={{ color: '#D4AF37', fontFamily: "'Cinzel', serif", marginBottom: '1rem' }}>
                  {server.name}
                </h3>
                <p style={{ color: '#999', marginBottom: '0.5rem' }}>
                  Tipo: <strong style={{ color: '#fff' }}>{server.type}</strong>
                </p>
                <p style={{ color: '#999', marginBottom: '1rem' }}>
                  {server.players} / {server.maxPlayers} Jogadores
                </p>
                <ButtonLink variant="secondary" size="small" fullWidth to="/servidores">
                  Ver Detalhes
                </ButtonLink>
              </Card>
            </div>
          ))}
        </ServersGrid>
      </Section>
    </HomeContainer>
  )
}
