import React from 'react'
import styled from 'styled-components'

import { PlayersRankAndGuildChampionsStyles, ButtonLink } from '../../../shared/components/ui'
import { mockCastleOwners, mockGuildRating } from '../../../mocks'
import { mockPlayerRating } from '../mocks/playerRating'
import castleIcon from '../../../assets/icons/castle-icon.png'
import leaderGuild from '../../../assets/icons/leaderGuild.png'
import rankingBg from '../../../assets/images/ranking-bg.png'

// --- ESTILOS VISUAIS E ICONOGRAFIA ---

const SectionIcon = styled.img`
  height: 36px; /* Tamanho equilibrado para não brigar com o H3 */
  width: auto;
  object-fit: contain;
  margin-left: 12px;
  vertical-align: middle;
  display: inline-block;
  
  /* Drop Shadow Dourado para integrar o ícone branco ao tema */
  filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.3));
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 0 12px rgba(212, 175, 55, 0.6));
  }

  /* Responsividade fluida */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 28px;
    margin-left: 8px;
  }
`

// Wrapper para agrupar Título + Ícone garantindo centro ótico
const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`

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
  min-height: 100vh;
  align-content: center;
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 10) 0%, transparent 18%),
    linear-gradient(to top, rgba(0, 0, 0, 10) 0%, transparent 50%),
    url(${rankingBg});
  background-position: center;
  background-size: cover;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
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
              
              {/* --- COLUNA 1: PLAYER RATING --- */}
              <PlayersRankAndGuildChampionsStyles.Section>
                <PlayersRankAndGuildChampionsStyles.TitleRow>
                  {/* Título alinhado à esquerda */}
                  <TitleGroup>
                    <PlayersRankAndGuildChampionsStyles.Title>
                      Player Rating
                    </PlayersRankAndGuildChampionsStyles.Title>
                  </TitleGroup>
                  <ButtonLink variant="secondary" size="small" to="/ranking">
                    Ver Ranking
                  </ButtonLink>
                </PlayersRankAndGuildChampionsStyles.TitleRow>

                <PlayersRankAndGuildChampionsStyles.Block>
                  <PlayersRankAndGuildChampionsStyles.TableHeaderPlayers>
                    <div style={{textAlign: 'center'}}>N°</div>
                    <div style={{paddingLeft: '12px'}}>NICKNAME</div>
                    <div style={{textAlign: 'center'}}>RACE</div>
                    <div style={{textAlign: 'center'}}>LVL</div>
                  </PlayersRankAndGuildChampionsStyles.TableHeaderPlayers>

                  {mockPlayerRating.map(player => (
                    <PlayersRankAndGuildChampionsStyles.RowPlayers
                      key={`${player.position}-${player.nickname}`}
                    >
                      <PlayersRankAndGuildChampionsStyles.PositionBadge $position={player.position}>
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

              {/* --- COLUNA 2: GUILD RATING --- */}
              <PlayersRankAndGuildChampionsStyles.Section>
                
                <PlayersRankAndGuildChampionsStyles.TitleRow style={{ justifyContent: 'center' }}>
                  <TitleGroup>
                    <PlayersRankAndGuildChampionsStyles.Title>
                      Guild Rating
                    </PlayersRankAndGuildChampionsStyles.Title>
                    <SectionIcon src={leaderGuild} alt="Guild Icon" />
                  </TitleGroup>
                </PlayersRankAndGuildChampionsStyles.TitleRow>

                <PlayersRankAndGuildChampionsStyles.Block>
                  <PlayersRankAndGuildChampionsStyles.TableHeaderGuilds>
                    <div style={{textAlign: 'center'}}>N°</div>
                    <div style={{paddingLeft: '12px'}}>NAME</div>
                    <div style={{textAlign: 'center'}}>MEM</div>
                  </PlayersRankAndGuildChampionsStyles.TableHeaderGuilds>

                  {mockGuildRating.map(guild => (
                    <PlayersRankAndGuildChampionsStyles.RowGuilds
                      key={`${guild.position}-${guild.name}`}
                    >
                      <PlayersRankAndGuildChampionsStyles.PositionBadge $position={guild.position}>
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

              {/* --- COLUNA 3: CASTLE OWNERS --- */}
              <PlayersRankAndGuildChampionsStyles.Section>
                <PlayersRankAndGuildChampionsStyles.TitleRow style={{ justifyContent: 'center' }}>
                  <TitleGroup>
                    <PlayersRankAndGuildChampionsStyles.Title>
                      Castle Owners
                    </PlayersRankAndGuildChampionsStyles.Title>
                    <SectionIcon src={castleIcon} alt="Castle Icon" />
                  </TitleGroup>
                </PlayersRankAndGuildChampionsStyles.TitleRow>

                <PlayersRankAndGuildChampionsStyles.CastleList>
                  {mockCastleOwners.map(owner => (
                    <PlayersRankAndGuildChampionsStyles.CastleRow key={owner.castle}>
                      <PlayersRankAndGuildChampionsStyles.CastleName>
                        {owner.castle}
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