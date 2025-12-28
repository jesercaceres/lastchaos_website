import styled from 'styled-components'
import { mockServers } from '../mocks'
import { ServerCard } from '../components/ServerCard'

const ServidoresContainer = styled.div`
  max-width: 1200px;
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
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const ServersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

export const Servidores: React.FC = () => {
  return (
    <ServidoresContainer>
      <Title>Servidores</Title>
      <Description>
        Escolha um servidor e comece sua aventura. Cada servidor oferece uma experiência única de
        jogo.
      </Description>
      <ServersGrid>
        {mockServers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </ServersGrid>
    </ServidoresContainer>
  )
}
