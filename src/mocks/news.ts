import { News } from '../types'

export const mockNews: News[] = [
  {
    id: '1',
    title: 'Novo Evento: O Natal está chegando em Juno!',
    content:
      'Participe do evento mais épico do ano! Não perca os drops, 2X EXP e recompensas exclusivas de Natal.',
    date: '2025-12-26',
    category: 'event',
    image: '/assets/images/santas-event-news.png',
  },
  {
    id: '2',
    title: 'Festival da Virada: a grande celebraçao!',
    content:
      'Recompensas incríveis aguardam por você no Festival da Virada em Iris! Junte-se ao grande banquete para celebrar com novos desafios e prêmios especiais.',
    date: '2025-12-31',
    category: 'event',
    image: '/assets/images/happy-new-year-news.png',
  },
  {
    id: '3',
    title: 'Lançamento oficial do Servidor Athena',
    content:
      'Estamos felizes em anunciar o lançamento do novo servidor Athena em breve! Prepare-se para uma nova aventura.',
    date: '2024-12-10',
    category: 'news',
    image: '/assets/images/Athenas-release-news.png',
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
