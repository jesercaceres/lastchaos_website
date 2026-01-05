import React from 'react'
import styled from 'styled-components'

import { PlayersRankAndGuildChampionsStyles } from '../components/ui'
import { mockPlayerRating } from '../mocks'

const RankingContainer = styled.div`
  max-width: 1200px;
  margin: ${({ theme }) => theme.spacing['2xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  box-sizing: border-box;

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

const ControlsRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.lightGray};
`

const Select = styled.select`
  background: rgba(11, 12, 16, 0.8);
  color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  outline: none;

  &:focus {
    border-color: rgba(212, 175, 55, 0.45);
  }
`

type PlayerRatingItem = (typeof mockPlayerRating)[number]

// Enquanto o mock não tiver 50/100 itens, expande de forma determinística.
// Quando tiver API, basta remover isso e usar a lista real.
function expandPlayers(base: PlayerRatingItem[], size: number): PlayerRatingItem[] {
  if (base.length >= size) {
    return base
      .slice()
      .sort((a, b) => a.position - b.position)
      .slice(0, size)
  }

  const races = ['Titan', 'Knight', 'Mage', 'Rogue', 'Healer']
  const out: PlayerRatingItem[] = []
  for (let i = 1; i <= size; i++) {
    const seed = base[(i - 1) % base.length]
    out.push({
      ...seed,
      position: i,
      nickname: i <= base.length ? seed.nickname : `${seed.nickname}-${i}`,
      race: races[(i - 1) % races.length] as PlayerRatingItem['race'],
      level: seed.level, // depois você troca pelo valor real da API
    })
  }
  return out
}

export const Ranking: React.FC = () => {
  const [limit, setLimit] = React.useState<50 | 100>(50)

  const players100 = React.useMemo(() => expandPlayers(mockPlayerRating, 100), [])
  const players = React.useMemo(() => players100.slice(0, limit), [players100, limit])

  return (
    <RankingContainer>
      <Title>Ranking de Jogadores</Title>

      <ControlsRow>
        <span>Exibir:</span>
        <Select value={limit} onChange={e => setLimit(Number(e.target.value) as 50 | 100)}>
          <option value={50}>Top 50</option>
          <option value={100}>Top 100</option>
        </Select>
      </ControlsRow>

      <PlayersRankAndGuildChampionsStyles.ContainerCard>
        <PlayersRankAndGuildChampionsStyles.Section>
          <PlayersRankAndGuildChampionsStyles.Title>Player Rating</PlayersRankAndGuildChampionsStyles.Title>

          <PlayersRankAndGuildChampionsStyles.Block>
            <PlayersRankAndGuildChampionsStyles.TableHeaderPlayers>
              <PlayersRankAndGuildChampionsStyles.HeaderCellCenter>N°</PlayersRankAndGuildChampionsStyles.HeaderCellCenter>
              <div>Nickname</div>
              <PlayersRankAndGuildChampionsStyles.HeaderCellRight>Race</PlayersRankAndGuildChampionsStyles.HeaderCellRight>
              <PlayersRankAndGuildChampionsStyles.HeaderCellRight>Level</PlayersRankAndGuildChampionsStyles.HeaderCellRight>
            </PlayersRankAndGuildChampionsStyles.TableHeaderPlayers>

            {players.map(player => (
              <PlayersRankAndGuildChampionsStyles.RowPlayers key={`${player.position}-${player.nickname}`}>
                <PlayersRankAndGuildChampionsStyles.PositionBadge $position={player.position}>
                  {player.position}
                </PlayersRankAndGuildChampionsStyles.PositionBadge>

                <PlayersRankAndGuildChampionsStyles.Nickname title={player.nickname}>
                  {player.nickname}
                </PlayersRankAndGuildChampionsStyles.Nickname>

                <PlayersRankAndGuildChampionsStyles.MutedRightCell>{player.race}</PlayersRankAndGuildChampionsStyles.MutedRightCell>
                <PlayersRankAndGuildChampionsStyles.RightCell>{player.level}</PlayersRankAndGuildChampionsStyles.RightCell>
              </PlayersRankAndGuildChampionsStyles.RowPlayers>
            ))}
          </PlayersRankAndGuildChampionsStyles.Block>
        </PlayersRankAndGuildChampionsStyles.Section>
      </PlayersRankAndGuildChampionsStyles.ContainerCard>
    </RankingContainer>
  )
}