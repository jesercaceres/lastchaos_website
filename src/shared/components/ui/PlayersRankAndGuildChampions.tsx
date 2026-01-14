import styled from 'styled-components'
import { Card } from './Card'

// --- 1. DEFINIÇÃO DAS COLUNAS ---
const PLAYER_GRID_TEMPLATE = '50px 1fr 100px 70px'
const PLAYER_GRID_TEMPLATE_MOBILE = '40px 1fr 0px 50px' 

const GUILD_GRID_TEMPLATE = '50px 1fr 80px'
const GUILD_GRID_TEMPLATE_MOBILE = '40px 1fr 60px'

// --- 2. ESTILOS DE ALINHAMENTO (Grid Child Styles) ---
const gridColumnStyles = `
  align-items: center;
  
  /* Coluna 1 (Rank): Centralizada */
  & > *:nth-child(1) {
    justify-self: center;
    text-align: center;
  }

  /* Coluna 2 (Nickname/Name): Esquerda com GAP (Padding) */
  & > *:nth-child(2) {
    justify-self: start;
    text-align: left;
    padding-left: 12px; 
    width: 100%;
  }

  /* Colunas 3 e 4 (Race, Level, Members): CENTRALIZADAS */
  & > *:nth-child(3),
  & > *:nth-child(4) {
    justify-self: center;
    text-align: center;
  }
`

const ContainerCard = styled(Card)`
  padding: 0;
  background: rgba(11, 12, 16, 0.95); /* Levemente mais opaco para legibilidade */
  backdrop-filter: blur(12px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow: 0 10px 30px rgba(0,0,0,0.5); /* Sombra de profundidade */
  overflow: hidden;
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.lg};
  display: flex;
  flex-direction: column;
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  &:not(:first-child) {
    border-left: 1px solid rgba(212, 175, 55, 0.15);
    
    @media (max-width: 1100px) {
      border-left: none;
      border-top: 1px solid rgba(212, 175, 55, 0.15);
    }
  }
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  letter-spacing: 1px;
  line-height: 1; /* Garante alinhamento vertical com ícones */

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  min-height: 48px; /* Altura mínima garantida para alinhar as colunas visualmente */
`

// --- HEADERS ---

const TableHeaderBase = styled.div`
  padding: ${({ theme }) => theme.spacing.sm} 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  display: grid;
  ${gridColumnStyles}
`

const TableHeaderPlayers = styled(TableHeaderBase)`
  grid-template-columns: ${PLAYER_GRID_TEMPLATE};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: ${PLAYER_GRID_TEMPLATE_MOBILE};
    & > *:nth-child(3) { display: none; }
  }
`

const TableHeaderGuilds = styled(TableHeaderBase)`
  grid-template-columns: ${GUILD_GRID_TEMPLATE};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: ${GUILD_GRID_TEMPLATE_MOBILE};
  }
`

// --- ROWS ---

const RowBase = styled.div`
  padding: 10px 0; /* Padding fixo para consistência */
  border-bottom: 1px solid rgba(255, 255, 255, 0.05); /* Borda mais sutil */
  display: grid;
  transition: all 0.2s ease;
  ${gridColumnStyles}

  &:hover {
    background: rgba(212, 175, 55, 0.05); /* Hover dourado sutil */
    transform: translateX(4px); /* Micro-interação de movimento */
  }
  
  &:last-child {
    border-bottom: none;
  }
`

const RowPlayers = styled(RowBase)`
  grid-template-columns: ${PLAYER_GRID_TEMPLATE};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: ${PLAYER_GRID_TEMPLATE_MOBILE};
    & > *:nth-child(3) { display: none; }
  }
`

const RowGuilds = styled(RowBase)`
  grid-template-columns: ${GUILD_GRID_TEMPLATE};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: ${GUILD_GRID_TEMPLATE_MOBILE};
  }
`

// --- COMPONENTES INTERNOS ---

const PositionBadge = styled.div<{ $position: number }>`
  width: 32px;
  height: 32px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: grid;
  place-items: center;
  font-weight: 800;
  font-size: 0.85rem;
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme, $position }) => ($position <= 3 ? '#1a1a1a' : theme.colors.white)};
  
  /* Gradientes mais ricos para os top 3 */
  background: ${({ $position }) => {
    if ($position === 1) return `linear-gradient(135deg, #FFD700 0%, #FDB931 100%)`
    if ($position === 2) return `linear-gradient(135deg, #E0E0E0 0%, #9E9E9E 100%)`
    if ($position === 3) return `linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)`
    return 'rgba(255, 255, 255, 0.08)'
  }};
  
  box-shadow: ${({ $position }) => 
    $position <= 3 ? '0 0 10px rgba(0,0,0,0.5), inset 0 0 5px rgba(255,255,255,0.3)' : 'none'};
  
  border: 1px solid ${({ $position }) => 
    $position <= 3 ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
`

const Nickname = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.body};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;
  transition: color 0.2s;
  
  ${RowBase}:hover & {
    color: ${({ theme }) => theme.colors.gold};
  }
`

// Wrappers simples para manter compatibilidade se usar no Header
const HeaderCellCenter = styled.div``
const HeaderCellRight = styled.div``

const RightCell = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 700;
  font-size: 0.85rem;
`

const MutedRightCell = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 600;
  font-size: 0.85rem;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// --- Castle Section ---
const CastleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const CastleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  &:last-child { border-bottom: none; }
  
  /* Efeito hover para as linhas do castelo */
  transition: transform 0.2s ease;
  &:hover {
    transform: translateX(4px);
    border-bottom-color: rgba(212, 175, 55, 0.2);
  }
`

const CastleName = styled.div`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.md};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const GuildName = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 600;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
  font-size: 0.9rem; 
`

export const PlayersRankAndGuildChampionsStyles = {
  ContainerCard,
  Columns,
  Section,
  Title,
  TitleRow,
  HeaderCellCenter,
  HeaderCellRight,
  TableHeaderPlayers,
  TableHeaderGuilds,
  RowPlayers,
  RowGuilds,
  PositionBadge,
  Nickname,
  RightCell,
  MutedRightCell,
  Block,
  CastleList,
  CastleRow,
  CastleName,
  GuildName,
} as const