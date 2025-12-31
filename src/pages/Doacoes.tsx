import styled from 'styled-components'
import { mockDonationPackages } from '../mocks'
import { Button, Card } from '../components/ui'

const DoacoesContainer = styled.div`
  max-width: 1200px;
  margin: ${({ theme }) => theme.spacing['2xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  box-sizing: border-box;

  /* Ajuste de altura para viewports altas (limitar espaço vertical excessivo) */
  @media (min-height: 690px) {
    min-height: clamp(500px, calc(100dvh - var(--header-height, 72px)), 760px);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.md};
    margin: ${({ theme }) => theme.spacing.lg} auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
    margin: ${({ theme }) => theme.spacing.md} auto;
  }
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const PackageCard = styled(Card)<{ isPopular?: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  border: ${({ theme, isPopular }) =>
    isPopular ? `3px solid ${theme.colors.gold}` : `2px solid ${theme.colors.gray}`};

  ${({ isPopular, theme }) =>
    isPopular &&
    `
    box-shadow: ${theme.shadows.gold};
    transform: scale(1.05);
    
    @media (max-width: ${theme.breakpoints.large}) {
      transform: scale(1.02);
    }
    
    @media (max-width: ${theme.breakpoints.tablet}) {
      transform: scale(1);
    }
  `}
`

const PopularBadge = styled.div`
  position: absolute;
  top: -15px;
  right: 20px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold} 0%,
    ${({ theme }) => theme.colors.darkGold} 100%
  );
  color: ${({ theme }) => theme.colors.dark};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-transform: uppercase;
  letter-spacing: 1px;
`

const PackageName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const PackageDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  min-height: 60px;
`

const PackagePrice = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;
`

const PriceValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 700;
`

const PriceCurrency = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.lightGray};
`

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ theme }) => theme.spacing.md} 0;
  flex-grow: 1;
`

const BenefitItem = styled.li`
  color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xs};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.md};
    flex-shrink: 0;
  }
`

const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.info}22;
  border: 2px solid ${({ theme }) => theme.colors.info};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.white};
`

const InfoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.info};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`

export const Doacoes: React.FC = () => {
  const handleDonate = (packageId: string) => {
    // Simulação de doação (em produção, aqui seria a integração com gateway de pagamento)
    alert(`Doação para o pacote ${packageId} iniciada! (Simulação)`)
  }

  return (
    <DoacoesContainer>
      <Title>Doações</Title>
      <Description>
        Ajude a manter o servidor funcionando e receba benefícios exclusivos! Escolha um pacote e
        contribua para o desenvolvimento contínuo do jogo.
      </Description>

      <PackagesGrid>
        {mockDonationPackages.map(pkg => (
          <PackageCard key={pkg.id} isPopular={pkg.popular}>
            {pkg.popular && <PopularBadge>Mais Popular</PopularBadge>}
            <PackageName>{pkg.name}</PackageName>
            <PackageDescription>{pkg.description}</PackageDescription>
            <PackagePrice>
              <PriceValue>
                R$ {pkg.price.toFixed(2).replace('.', ',')}
                <PriceCurrency> {pkg.currency}</PriceCurrency>
              </PriceValue>
            </PackagePrice>
            <BenefitsList>
              {pkg.benefits.map((benefit, index) => (
                <BenefitItem key={index}>{benefit}</BenefitItem>
              ))}
            </BenefitsList>
            <Button
              fullWidth
              size="large"
              variant={pkg.popular ? 'primary' : 'secondary'}
              onClick={() => handleDonate(pkg.id)}
            >
              Doar Agora
            </Button>
          </PackageCard>
        ))}
      </PackagesGrid>

      <InfoBox>
        <InfoTitle>ℹ️ Informações Importantes</InfoTitle>
        <p>
          • As doações são processadas de forma segura através de nossos parceiros de pagamento
          <br />
          • Os benefícios são entregues automaticamente após a confirmação do pagamento
          <br />
          • Em caso de dúvidas ou problemas, entre em contato com o suporte
          <br />• As doações ajudam a manter o servidor online e melhorar a experiência de todos
        </p>
      </InfoBox>
    </DoacoesContainer>
  )
}
