import React from 'react'
import styled from 'styled-components'

import { PlayersRankAndGuildChampionsStyles, ButtonLink } from '../../../shared/components/ui'
import { mockCastleOwners, mockGuildRating } from '../../../mocks'
import { mockPlayerRating } from '../mocks/playerRating'

import rankingBg from '../../../assets/images/ranking-bg.png'

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

const RankingsSectionWrapper = styled.section`
  width: 100%;
  position: relative;
  height: 100vh;
  padding-top: ${({ theme }) => theme.spacing['6xl']};
  padding-bottom: ${({ theme }) => theme.spacing['8xl']};
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 10) 0%, transparent 18%),
    linear-gradient(to top, rgba(0, 0, 0, 10) 0%, transparent 50%),
    url(${rankingBg});
  background-position: center;
  background-size: cover;
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

const RankedAndGuildsGrid = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
`

export const HomeRankingsSection: React.FC = () => {
  return (
    <RankingsSectionWrapper>
      <ContentContainer>
        <SectionTitle>Rankings</SectionTitle>

        <RankedAndGuildsGrid>
          <PlayersRankAndGuildChampionsStyles.ContainerCard>
            <PlayersRankAndGuildChampionsStyles.Columns>
              <PlayersRankAndGuildChampionsStyles.Section>
                <PlayersRankAndGuildChampionsStyles.TitleRow>
                  <PlayersRankAndGuildChampionsStyles.Title>
                    Player Rating
                  </PlayersRankAndGuildChampionsStyles.Title>
                  <ButtonLink variant="secondary" size="small" to="/ranking">
                    Ver ranking
                  </ButtonLink>
                </PlayersRankAndGuildChampionsStyles.TitleRow>

                <PlayersRankAndGuildChampionsStyles.Block>
                  <PlayersRankAndGuildChampionsStyles.TableHeaderPlayers>
                    <PlayersRankAndGuildChampionsStyles.HeaderCellCenter>
                      N°
                    </PlayersRankAndGuildChampionsStyles.HeaderCellCenter>
                    <div>Nickname</div>
                    <PlayersRankAndGuildChampionsStyles.HeaderCellRight>
                      Race
                    </PlayersRankAndGuildChampionsStyles.HeaderCellRight>
                    <PlayersRankAndGuildChampionsStyles.HeaderCellRight>
                      Level
                    </PlayersRankAndGuildChampionsStyles.HeaderCellRight>
                  </PlayersRankAndGuildChampionsStyles.TableHeaderPlayers>

                  {mockPlayerRating.map(player => (
                    <PlayersRankAndGuildChampionsStyles.RowPlayers
                      key={`${player.position}-${player.nickname}`}
                    >
                      <PlayersRankAndGuildChampionsStyles.PositionBadge
                        $position={player.position}
                      >
                        {player.position}
                      </PlayersRankAndGuildChampionsStyles.PositionBadge>
                      <PlayersRankAndGuildChampionsStyles.Nickname title={player.nickname}>
                        {player.nickname}
                      </PlayersRankAndGuildChampionsStyles.Nickname>
                      <PlayersRankAndGuildChampionsStyles.MutedRightCell>
                        {player.race}
                      </PlayersRankAndGuildChampionsStyles.MutedRightCell>
                      <PlayersRankAndGuildChampionsStyles.RightCell>
                        {player.level}
                      </PlayersRankAndGuildChampionsStyles.RightCell>
                    </PlayersRankAndGuildChampionsStyles.RowPlayers>
                  ))}
                </PlayersRankAndGuildChampionsStyles.Block>
              </PlayersRankAndGuildChampionsStyles.Section>

              <PlayersRankAndGuildChampionsStyles.Section>
                <PlayersRankAndGuildChampionsStyles.Title>
                  Guild Rating
                </PlayersRankAndGuildChampionsStyles.Title>

                <PlayersRankAndGuildChampionsStyles.Block>
                  <PlayersRankAndGuildChampionsStyles.TableHeaderGuilds>
                    <PlayersRankAndGuildChampionsStyles.HeaderCellCenter>
                      N°
                    </PlayersRankAndGuildChampionsStyles.HeaderCellCenter>
                    <div>Name</div>
                    <PlayersRankAndGuildChampionsStyles.HeaderCellRight>
                      Members
                    </PlayersRankAndGuildChampionsStyles.HeaderCellRight>
                  </PlayersRankAndGuildChampionsStyles.TableHeaderGuilds>

                  {mockGuildRating.map(guild => (
                    <PlayersRankAndGuildChampionsStyles.RowGuilds
                      key={`${guild.position}-${guild.name}`}
                    >
                      <PlayersRankAndGuildChampionsStyles.PositionBadge
                        $position={guild.position}
                      >
                        {guild.position}
                      </PlayersRankAndGuildChampionsStyles.PositionBadge>
                      <PlayersRankAndGuildChampionsStyles.Nickname title={guild.name}>
                        {guild.name}
                      </PlayersRankAndGuildChampionsStyles.Nickname>
                      <PlayersRankAndGuildChampionsStyles.RightCell>
                        {guild.members}
                      </PlayersRankAndGuildChampionsStyles.RightCell>
                    </PlayersRankAndGuildChampionsStyles.RowGuilds>
                  ))}
                </PlayersRankAndGuildChampionsStyles.Block>
              </PlayersRankAndGuildChampionsStyles.Section>

              <PlayersRankAndGuildChampionsStyles.Section>
                <PlayersRankAndGuildChampionsStyles.Title>
                  Castle Owners
                </PlayersRankAndGuildChampionsStyles.Title>

                <PlayersRankAndGuildChampionsStyles.CastleList>
                  {mockCastleOwners.map(owner => (
                    <PlayersRankAndGuildChampionsStyles.CastleRow key={owner.castle}>
                      <PlayersRankAndGuildChampionsStyles.CastleName>
                        Castle in {owner.castle}
                      </PlayersRankAndGuildChampionsStyles.CastleName>
                      <PlayersRankAndGuildChampionsStyles.GuildName title={owner.guildNickname}>
                        {owner.guildNickname}
                      </PlayersRankAndGuildChampionsStyles.GuildName>
                    </PlayersRankAndGuildChampionsStyles.CastleRow>
                  ))}
                </PlayersRankAndGuildChampionsStyles.CastleList>
              </PlayersRankAndGuildChampionsStyles.Section>
            </PlayersRankAndGuildChampionsStyles.Columns>
          </PlayersRankAndGuildChampionsStyles.ContainerCard>
        </RankedAndGuildsGrid>
      </ContentContainer>
    </RankingsSectionWrapper>
  )
}
