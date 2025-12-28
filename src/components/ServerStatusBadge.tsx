import styled from 'styled-components'
import { ServerStatus } from '../types'
import { Badge } from './ui'

const StatusIndicator = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: pulse 2s infinite;
`

interface ServerStatusBadgeProps {
  status: ServerStatus
}

const getStatusConfig = (status: ServerStatus) => {
  switch (status) {
    case 'online':
      return {
        label: 'Online',
        variant: 'success' as const,
        color: '#4CAF50',
      }
    case 'offline':
      return {
        label: 'Offline',
        variant: 'error' as const,
        color: '#F44336',
      }
    case 'maintenance':
      return {
        label: 'Manutenção',
        variant: 'warning' as const,
        color: '#FF9800',
      }
    default:
      return {
        label: 'Desconhecido',
        variant: 'default' as const,
        color: '#9E9E9E',
      }
  }
}

export const ServerStatusBadge: React.FC<ServerStatusBadgeProps> = ({ status }) => {
  const config = getStatusConfig(status)

  return (
    <Badge variant={config.variant}>
      <StatusIndicator style={{ background: config.color }} />
      {config.label}
    </Badge>
  )
}
