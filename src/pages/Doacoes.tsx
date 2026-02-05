import styled from 'styled-components'
import { mockDonationPackages } from '../mocks'
import { Button } from '../shared/components/ui'
import { CardDonation } from '../features/doacoes/components/CardDonation'
import donateBg from '../assets/images/donate-bg.png'

const BackgroundContainer = styled.div`
  background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 7%, transparent 15%),
    linear-gradient(to top, rgba(0, 0, 0, 0.9) 7%, transparent 30%), url(${donateBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.dark};
`

const DoacoesContainer = styled.div`
  max-width: 1200px; /* Reduzido levemente para compactar o centro */
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg}; /* Reduzido de XL para LG (compactação) */
  width: 100%;
  box-sizing: border-box;

  /* Padding superior reduzido para subir o conteúdo */
  padding-top: calc(var(--header-height, 72px) + 1rem);
  padding-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing.lg};
    padding-top: calc(var(--header-height, 72px) + 1rem);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: calc(var(--header-height, 72px) + 0.5rem);
  }
`

const Title = styled.h1`
  padding-top: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
`

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.md}; /* Reduzido de LG para MD */
  margin-bottom: ${({ theme }) => theme.spacing['2xl']}; /* Reduzido de 2XL para XL */
  max-width: 700px; /* Estreitado para ocupar menos linhas verticais */
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
`

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); /* Minmax reduzido para 240px */
  gap: ${({ theme }) => theme.spacing.md}; /* Gap reduzido de MD para SM */
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    padding: 0 ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`

const PackageCard = styled(CardDonation)<{ isPopular?: boolean }>`
  position: relative;
  padding: ${({ theme }) => theme.spacing.md}; /* Reduzido de LG para MD */
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ theme, isPopular }) =>
    isPopular ? `3px solid ${theme.colors.gold}` : `2px solid ${theme.colors.gray}`};

  ${({ isPopular, theme }) =>
    isPopular &&
    `
    box-shadow: ${theme.shadows.gold};
    transform: scale(1.03); /* Escala reduzida de 1.05 para 1.03 para não ocupar muito espaço */

    &:hover {
      transform: scale(1.03) translateY(-4px);
    }
  `}
`

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  right: 15px;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gold} 0%,
    ${({ theme }) => theme.colors.darkGold} 100%
  );
  color: ${({ theme }) => theme.colors.dark};
  padding: 0.3rem 0.8rem; /* Padding reduzido */
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-weight: 700;
  font-size: 0.7rem; /* Fonte reduzida */
  text-transform: uppercase;
`

const PackageName = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  font-size: ${({ theme }) => theme.fontSizes.xl}; /* Reduzido de 2xl para xl */
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const PackageDescription = styled.p`
  color: ${({ theme }) => theme.colors.lightGold};
  font-size: ${({ theme }) => theme.fontSizes.xs}; /* Reduzido de SM para XS */
  min-height: 45px; /* Reduzido de 60px */
  text-align: center;
`

const PackagePrice = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xs} 0; /* Reduzido */
`
const PriceValue = styled.div`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']}; /* Reduzido de 4xl para 3xl */
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 700;
`

const PriceCurrency = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.lightGray};
`

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  flex-grow: 1;
  margin: ${({ theme }) => theme.spacing.sm} 0;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const BenefitItem = styled.li`
  color: ${({ theme }) => theme.colors.lightGray};
  padding: 3px 0; /* Padding reduzido */
  font-size: ${({ theme }) => theme.fontSizes.xs}; /* Reduzido de SM para XS */
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.success};
    font-size: 0.9rem;
  }
`

const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.info}15; /* Opacidade reduzida */
  border: 1px solid ${({ theme }) => theme.colors.info}; /* Borda mais fina */
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md}; /* Reduzido de LG para MD */
  margin-top: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xs}; /* Fonte reduzida para o box de info */
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
`

const InfoTitle = styled.h3`
  color: ${({ theme }) => theme.colors.info};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`

export const Doacoes: React.FC = () => {
  const handleDonate = (packageId: string) => {
    alert(`Doação para o pacote ${packageId} iniciada! (Simulação)`)
  }

  return (
    <BackgroundContainer>
      <DoacoesContainer>
        <Title>Doações</Title>
        <Description>
          Ajude a manter o servidor funcionando e receba benefícios exclusivos! Escolha um pacote e
          contribua para o desenvolvimento contínuo do jogo.
        </Description>

        <PackagesGrid>
          {mockDonationPackages.map(pkg => (
            <PackageCard key={pkg.id} isPopular={pkg.popular} hoverable>
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
                size="medium" /* Reduzido de Large para Medium */
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
          <p style={{ lineHeight: '1.4' }}>
            • As doações são processadas de forma segura através de nossos parceiros de pagamento.
            <br />
            • Os benefícios são entregues automaticamente após a confirmação do pagamento.
            <br />• Em caso de dúvidas, entre em contato com o suporte.
          </p>
        </InfoBox>
      </DoacoesContainer>
    </BackgroundContainer>
  )
}
