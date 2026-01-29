import { DonationPackage } from '../types'

export const mockDonationPackages: DonationPackage[] = [
  {
    id: '1',
    name: 'Basic Package',
    description: 'Ideal para começar no servidor e apoiar o projeto.',
    disclaimer: '',
    price: 20.0,
    currency: 'BRL',
    benefits: [
      '1000 Cash'
      
    ],
  },
  {
    id: '2',
    name: 'Essential Pack',
    description: 'Ótimo equilíbrio entre custo e benefício, com bônus adicional na doação.',
    disclaimer: 'Bônus fixo (não acumulativo)',
    price: 50.0,
    currency: 'BRL',
    benefits: [
      '2.500 Cash',
      ' + Bonus 5%',
    ],
    popular: true,
  },
  {
    id: '3',
    name: 'Legendary Pack',
    description: 'Pensado para quem quer maximizar vantagens e apoiar fortemente o servidor.',
    disclaimer: 'Bônus fixo (não acumulativo)',
    price: 100.0,
    currency: 'BRL',
    benefits: [
      '10.000 Cash',
      '+ Bonus 20%',
    ],
  },

    {
    id: '4',
    name: 'Divine Package',
    description: 'Pensado para quem quer maximizar vantagens e apoiar fortemente o servidor.',
    disclaimer: 'Bônus fixo (não acumulativo)',
    price: 200.0,
    currency: 'BRL',
    benefits: [
      '10.000 Cash',
      '+ Bonus 20%',
    ],
  }
 
]
