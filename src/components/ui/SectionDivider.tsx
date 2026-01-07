import styled from 'styled-components'

const DividerContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%; /* Ocupa a largura total para o gradiente fluir */
  height: 40px; /* Altura suficiente para o ornamento não cortar */
  display: flex;
  align-items: center;
  justify-content: center;

  /* Truque para remover a "faixa feia" ou buraco:
     Margem negativa puxa o elemento de baixo para cima, 
     fazendo o divider "flutuar" na união das seções. */
  margin-bottom: -20px;
  margin-top: -20px;

  z-index: 50; /* Garante que fique acima de tudo */
  pointer-events: none; /* Deixa clicar através dele se necessário */
`

// A linha que desaparece nas pontas (O segredo do Lost Ark)
const GlowingLine = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;

  /* Gradiente invertido: Cor nas pontas -> Transparente no centro */
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray} 0%,
    transparent 50%,
    ${({ theme }) => theme.colors.gray} 100%
  );

  /* Glow sutil e elegante */
  box-shadow: 0 0 20px rgba(156, 163, 175, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.6) 0%,
      transparent 50%,
      rgba(255, 255, 255, 0.6) 100%
    );
    transform: translateY(-50%);
    opacity: 0.5;
  }
`

export const SectionDivider = () => {
  return (
    <DividerContainer>
      <GlowingLine />
    </DividerContainer>
  )
}
