import { Server } from '../types'

export const mockServers: Server[] = [
  {
    id: '1',
    name: 'Ares',
    type: 'PvP',
    status: 'online',
    players: 1250,
    maxPlayers: 2000,
    description: 'Servidor PvP competitivo com sistema de clãs e batalhas épicas.',
  },
  {
    id: '2',
    name: 'Hades',
    type: 'PvP',
    status: 'online',
    players: 890,
    maxPlayers: 1500,
    description: 'Servidor PvE focado em exploração e cooperação entre jogadores.',
  },
  {
    id: '3',
    name: 'Zeus',
    type: 'PvP',
    status: 'online',
    players: 450,
    maxPlayers: 1000,
    description: 'Servidor Hard Mode com dificuldade aumentada e recompensas exclusivas.',
  },
  {
    id: '4',
    name: 'Athena',
    type: 'PvP',
    status: 'maintenance',
    players: 0,
    maxPlayers: 2000,
    description: 'Novo servidor PvP em preparação. Em breve disponível!',
  },
  {
    id: '5',
    name: 'Apollo',
    type: 'PvP',
    status: 'offline',
    players: 0,
    maxPlayers: 1500,
    description: 'Servidor temporariamente offline para manutenção.',
  },
]
