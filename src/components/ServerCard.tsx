import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Server } from '../types'
import { Card, ButtonLink } from './ui'
// Se você não tiver o componente ServerStatusBadge, pode remover a importação e usar a bolinha nova abaixo

// --- 1. Novos Estilos e Animações ---

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(46, 204, 113, 0); }
  100% { box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
`

const ServerCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  min-height: 200px;
  position: relative;
`

const ServerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const StatusDot = styled.span<{ $online?: boolean }>`
  height: 10px;
  width: 10px;
  background-color: ${({ $online }) => ($online ? '#2ecc71' : '#e74c3c')};
  border-radius: 50%;
  display: inline-block;
  margin-right: 12px;
  animation: ${({ $online }) => ($online ? pulse : 'none')} 2s infinite;
`

const ServerName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.gold};
  margin: 0;
`

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ServerType = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};

  strong {
    color: ${({ theme }) => theme.colors.white};
  }
`

// Badges de Rates (Visual Upgrade)
const RatesContainer = styled.div`
  display: flex;
  gap: 8px;
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

// Barra de Progresso
const ProgressSection = styled.div`
  margin-top: auto; /* Empurra para o fundo se sobrar espaço */
`

const ServerStatsText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 6px;
`

const ProgressBarContainer = styled.div`
  width: 100%;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
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

interface ServerCardProps {
  server: Server
}

// --- 2. O Componente Refatorado ---

export const ServerCard: React.FC<ServerCardProps> = ({ server }) => {
  // Lógica da barra de progresso
  const populationPercent = Math.min((server.players / server.maxPlayers) * 100, 100)
  const isOnline = server.status === 'online'

  return (
    <ServerCardContainer hoverable>
      {/* Cabeçalho com Nome e Status Pulsante */}
      <ServerHeader>
        <StatusDot $online={isOnline} />
        <ServerName>{server.name}</ServerName>
      </ServerHeader>

      <MetaContainer>
        <ServerType>
          Tipo: <strong>{server.type}</strong>
        </ServerType>

        {/* Mock de Rates para visual (depois podemos adicionar no types.ts) */}
        <RatesContainer>
          <RateBadge>XP 5x</RateBadge>
          <RateBadge>DROP 3x</RateBadge>
        </RatesContainer>
      </MetaContainer>

      {/* Seção de Players e Barra */}
      <ProgressSection>
        <ServerStatsText>
          <span>População</span>
          <span>
            {server.players} / {server.maxPlayers}
          </span>
        </ServerStatsText>

        <ProgressBarContainer>
          <ProgressBarFill $percent={populationPercent} />
        </ProgressBarContainer>

        <ButtonLink variant="secondary" size="small" fullWidth to="/download">
          Jogar agora
        </ButtonLink>
      </ProgressSection>
    </ServerCardContainer>
  )
}
