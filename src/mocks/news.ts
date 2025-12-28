import { News } from '../types'

export const mockNews: News[] = [
  {
    id: '1',
    title: 'Novo Evento: Batalha dos Deuses',
    content:
      'Participe do evento mais épico do ano! A Batalha dos Deuses está começando. Reúna seu clã e lute pela glória eterna.',
    date: '2024-12-20',
    category: 'event',
    image: 'https://via.placeholder.com/600x300?text=Batalha+dos+Deuses',
  },
  {
    id: '2',
    title: 'Atualização 2.5 - Novas Classes Disponíveis',
    content:
      'Descubra as novas classes: Arcano Místico e Cavaleiro Sombrio. Novas habilidades, novos desafios!',
    date: '2024-12-15',
    category: 'update',
    image: 'https://via.placeholder.com/600x300?text=Novas+Classes',
  },
  {
    id: '3',
    title: 'Servidor Athena Em Breve',
    content:
      'Estamos felizes em anunciar o lançamento do novo servidor Athena em breve! Prepare-se para uma nova aventura.',
    date: '2024-12-10',
    category: 'news',
    image: 'https://via.placeholder.com/600x300?text=Servidor+Athena',
  },
  {
    id: '4',
    title: 'Manutenção Programada - 25/12',
    content:
      'Manutenção programada para o dia 25/12 das 02:00 às 06:00 (horário de Brasília). Servidores ficarão offline durante este período.',
    date: '2024-12-18',
    category: 'maintenance',
  },
  {
    id: '5',
    title: 'Torneio de Clãs - Inscrições Abertas',
    content:
      'As inscrições para o Torneio de Clãs estão abertas! Mostre a força do seu clã e ganhe prêmios incríveis.',
    date: '2024-12-12',
    category: 'event',
    image: 'https://via.placeholder.com/600x300?text=Torneio+de+Clãs',
  },
  {
    id: '6',
    title: 'Novos Itens Épicos na Loja',
    content:
      'Conheça os novos itens épicos disponíveis na loja! Armaduras lendárias e armas poderosas esperando por você.',
    date: '2024-12-08',
    category: 'news',
    image: 'https://via.placeholder.com/600x300?text=Novos+Itens',
  },
]
