import React from 'react'
import styled, { keyframes } from 'styled-components'
import whatsappIcon from '../assets/icons/whatsapp-icon.png'
import communityBg from '../assets/images/community-bg.png'

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(14px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.45);
  }

  100% {
    box-shadow: 0 0 0 16px rgba(212, 175, 55, 0);
  }
`

const ComunidadeContainer = styled.section`
  width: 100%;
  min-height: calc(100dvh - var(--header-height, 80px) - var(--footer-height, 70px));
  padding: clamp(3rem, 6vw, 5rem) ${({ theme }) => theme.spacing.md};
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:
    linear-gradient(120deg, rgba(5, 5, 5, 0.94) 15%, rgba(26, 26, 26, 0.78) 55%, rgba(5, 5, 5, 0.94) 100%),
    radial-gradient(circle at 15% 15%, rgba(212, 175, 55, 0.2), transparent 35%),
    url(${communityBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: calc(100dvh - var(--header-height, 70px));
    padding-top: calc(var(--header-height, 70px) + 2rem);
    align-items: flex-start;
  }
`

const Surface = styled.div`
  width: min(1120px, 100%);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(12, 12, 12, 0.88) 0%, rgba(21, 21, 21, 0.74) 100%);
  backdrop-filter: blur(6px);
  padding: clamp(1.25rem, 3vw, 2.25rem);
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: clamp(1rem, 2vw, 1.5rem);
  animation: ${fadeInUp} 0.55s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Badge = styled.span`
  width: fit-content;
  padding: 0.35rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  border: 1px solid rgba(212, 175, 55, 0.45);
  background: rgba(212, 175, 55, 0.14);
  color: ${({ theme }) => theme.colors.lightGold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
`

const Title = styled.h1`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: clamp(2.1rem, 4vw, 3.4rem);
  line-height: 1.05;
  color: ${({ theme }) => theme.colors.lightGray};
  text-transform: uppercase;
  letter-spacing: 0.04em;
  text-shadow: 0 10px 30px rgba(0, 0, 0, 0.7);
`

const Highlight = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.gold};
`

const Intro = styled.p`
  margin: 0;
  max-width: 54ch;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1.65;
`

const MainCard = styled.article`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 18px;
  border: 1px solid rgba(212, 175, 55, 0.35);
  background: linear-gradient(160deg, rgba(9, 9, 9, 0.95) 0%, rgba(18, 18, 18, 0.88) 100%);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const IconWrap = styled.div`
  width: 78px;
  height: 78px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(212, 175, 55, 0.5);
  display: grid;
  place-items: center;
  animation: ${pulse} 1.6s ease-out infinite;

  img {
    width: 52px;
    height: 52px;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const CardTitle = styled.h2`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  letter-spacing: 0.03em;
`

const CardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.6;
`

const Cta = styled.a`
  margin-top: 0.25rem;
  width: fit-content;
  min-width: 220px;
  min-height: 46px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.gold} 0%, ${({ theme }) => theme.colors.darkGold} 100%);
  color: ${({ theme }) => theme.colors.dark};
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    filter: brightness(1.08);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    min-width: 0;
  }
`

const Aside = styled.aside`
  border-radius: 18px;
  border: 1px solid rgba(255, 255, 255, 0.09);
  background: linear-gradient(160deg, rgba(7, 7, 7, 0.82) 0%, rgba(15, 15, 15, 0.72) 100%);
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`

const AsideTitle = styled.h3`
  margin: 0;
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.lightGold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const BenefitList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.65rem;
`

const BenefitItem = styled.li`
  border-left: 2px solid ${({ theme }) => theme.colors.gold};
  padding: 0.5rem 0.65rem;
  background: rgba(255, 255, 255, 0.03);
  color: ${({ theme }) => theme.colors.lightGray};
  line-height: 1.45;
`

const Note = styled.p`
  margin: 0.25rem 0 0;
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

export const Comunidade: React.FC = () => (
  <ComunidadeContainer>
    <Surface>
      <Hero>
        <Badge>Community Hub</Badge>
        <Title>
          Entre para a
          <Highlight>elite do Last Chaos</Highlight>
        </Title>
        <Intro>
          Nossa comunidade oficial vive no WhatsApp: avisos rapidos, squads para dungeon, organizacao de eventos e suporte entre jogadores experientes.
        </Intro>

        <MainCard>
          <IconWrap>
            <img src={whatsappIcon} alt="WhatsApp" />
          </IconWrap>

          <CardContent>
            <CardTitle>WhatsApp Oficial</CardTitle>
            <CardText>
              Entre no canal agora e receba noticias do servidor, oportunidades de party e comunicados importantes sem atraso.
            </CardText>
            <Cta href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer">
              Entrar no WhatsApp
            </Cta>
          </CardContent>
        </MainCard>
      </Hero>

      <Aside>
        <AsideTitle>O que voce encontra</AsideTitle>
        <BenefitList>
          <BenefitItem>Alertas de manutencao, eventos e novidades assim que forem publicados.</BenefitItem>
          <BenefitItem>Canal direto para montar party, raid e trocar estrategias em tempo real.</BenefitItem>
          <BenefitItem>Espaco de apoio para novos jogadores com dicas praticas da comunidade.</BenefitItem>
          <BenefitItem>Ambiente moderado para manter conversas objetivas e sem ruido.</BenefitItem>
        </BenefitList>
        <Note>Ative as notificacoes para nao perder anuncios importantes.</Note>
      </Aside>
    </Surface>
  </ComunidadeContainer>
)
