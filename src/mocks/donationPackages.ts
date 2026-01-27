import { DonationPackage } from '../types'

export const mockDonationPackages: DonationPackage[] = [
  {
    id: '1',
    name: 'Starter Pack',
    description: 'Perfeito para começar sua jornada no farm de SP!',
    price: 19.9,
    currency: 'BRL',
    benefits: [
      '500 SPB',
      'Poção de SP x50',
      'Attack boost x20', 
      'Algum item adicional',
    ],
  },
  {
    id: '2',
    name: 'Essential Pack',
    description: 'Para jogadores que buscam poder',
    price: 49.9,
    currency: 'BRL',
    benefits: [
      '1.500 XPB',
      '1.500 SPB',
      'Estrela do poder x30',
      'Suco do sábio x5',
      'Poção de SP x15',
      'Título Exclusivo'
    ],
    popular: true,
  },
  {
    id: '3',
    name: 'Legendary Pack',
    description: 'A experiência definitiva',
    price: 99.9,
    currency: 'BRL',
    benefits: [
      '1500 XPB',
      'Estrela do poder x50',
      'Suco do sábio x10',
      'Montaria Lendária',
      'Título Lendário'
    ],
  },
 
]
