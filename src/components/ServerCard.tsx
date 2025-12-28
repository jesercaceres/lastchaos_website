import styled from 'styled-components'
import { Server } from '../types'
import { Card, ButtonLink } from './ui'
import { ServerStatusBadge } from './ServerStatusBadge'

const ServerCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 200px;
`

const ServerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`

const ServerName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
`

const ServerType = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: ${({ theme }) => theme.colors.brown};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  text-transform: uppercase;
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const ServerDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  flex-grow: 1;
`

const ServerStats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const PlayerCount = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
`

const ButtonWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacing.sm};
`

interface ServerCardProps {
  server: Server
}

export const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
  return (
    <ServerCardContainer hoverable>
      <ServerHeader>
        <div>
          <ServerName>{server.name}</ServerName>
          <ServerType>{server.type}</ServerType>
        </div>
        <ServerStatusBadge status={server.status} />
      </ServerHeader>

      {server.description && <ServerDescription>{server.description}</ServerDescription>}

      <ServerStats>
        <PlayerCount>
          {server.players} / {server.maxPlayers} Jogadores
        </PlayerCount>
        <ServerStatusBadge status={server.status} />
      </ServerStats>

      <ButtonWrapper>
        <ButtonLink variant="secondary" size="small" fullWidth to="/servidores">
          Ver Detalhes
        </ButtonLink>
      </ButtonWrapper>
    </ServerCardContainer>
  )
}
