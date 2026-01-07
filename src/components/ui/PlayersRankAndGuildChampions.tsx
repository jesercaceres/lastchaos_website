import styled from 'styled-components'
import { Card } from './Card'

const ContainerCard = styled(Card)`
  padding: 0;
  background: rgba(11, 12, 16, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.15);
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.lg};

  /* Ajuste de padding para mobile para ganhar espaço */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }

  &:not(:first-child) {
    border-left: 1px solid rgba(212, 175, 55, 0.12);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    &:not(:first-child) {
      border-left: none;
      border-top: 1px solid rgba(212, 175, 55, 0.12);
    }
  }
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  
  /* Ajuste de fonte no mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  
  /* CORREÇÃO 1: Permitir que o botão caia para a linha de baixo se faltar espaço */
  flex-wrap: wrap; 
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const HeaderCellRight = styled.div`
  text-align: right;
`

const HeaderCellCenter = styled.div`
  text-align: center;
`

/* CORREÇÃO 2: Grid Responsivo para Players */
const TableHeaderPlayers = styled.div`
  display: grid;
  /* Desktop: mantém layout original */
  grid-template-columns: 64px 1fr 110px 80px;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);

  /* Mobile: Removemos a coluna 'Race' (3ª coluna) e ajustamos tamanhos */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 40px 1fr 0px 60px; /* Coluna do meio com 0px para esconder */
    
    /* Esconde visualmente o cabeçalho da Raça */
    & > div:nth-child(3) {
      display: none;
    }
  }
`

const TableHeaderGuilds = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr 90px;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.15);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 40px 1fr 70px;
  }
`

/* CORREÇÃO 3: Grid Responsivo para Linhas de Players */
const RowPlayers = styled.div`
  display: grid;
  /* Desktop */
  grid-template-columns: 64px 1fr 110px 80px;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  /* Mobile: Segue o mesmo padrão do Header */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 40px 1fr 0px 60px;
    
    /* Esconde a coluna de Raça */
    & > div:nth-child(3) {
      display: none;
    }
  }
`

const RowGuilds = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr 90px;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 40px 1fr 70px;
  }
`

const PositionBadge = styled.div<{ $position: number }>`
  width: 42px;
  height: 42px;
  justify-self: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: grid;
  place-items: center;
  font-weight: 800;
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme, $position }) => ($position === 1 ? theme.colors.dark : theme.colors.white)};
  background: ${({ theme, $position }) => {
    if ($position === 1) return `linear-gradient(135deg, ${theme.colors.gold} 0%, ${theme.colors.lightGold} 100%)`
    if ($position === 2) return `linear-gradient(135deg, ${theme.colors.gray} 0%, ${theme.colors.lightGray} 100%)`
    if ($position === 3) return `linear-gradient(135deg, ${theme.colors.brown} 0%, ${theme.colors.lightBrown} 100%)`
    return theme.colors.gray
  }};
  border: 1px solid rgba(255, 255, 255, 0.12);

  /* Ajuste no mobile para o badge ficar menor */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 32px;
    height: 32px;
    font-size: 0.8rem;
  }
`

const Nickname = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  /* Garante que o texto não estoure a coluna */
  min-width: 0; 
`

const RightCell = styled.div`
  color: ${({ theme }) => theme.colors.lightGray};
  font-weight: 800;
  text-align: right;
`

const MutedRightCell = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 800;
  text-align: right;
`

const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`

const CastleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.md};
`

const CastleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.sm} 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`

const CastleName = styled.div`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`

const GuildName = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: 700;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`

export const PlayersRankAndGuildChampionsStyles = {
  ContainerCard,
  Columns,
  Section,
  Title,
  TitleRow,
  HeaderCellRight,
  HeaderCellCenter,
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