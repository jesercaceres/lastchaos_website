import styled from 'styled-components';

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
`;

// A linha que desaparece nas pontas (O segredo do Lost Ark)
const GlowingLine = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 2px;
  position: absolute;
  
  /* Gradiente: Transparente -> Dourado -> Transparente */
  background: radial-gradient(
    ellipse at center, 
    ${({ theme }) => theme.colors.gold} 0%, 
    rgba(212, 175, 55, 0.4) 40%, 
    transparent 80%
  );

  /* Glow externo na linha */
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.5);
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.8) 50%, 
      transparent 100%
    );
    transform: translateY(-50%);
    opacity: 0.6;
  }
`;

// O Ornamento Central (Diamante Complexo)
const CenterOrnament = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  background: #000; /* Fundo preto para cobrir a linha atrás */
  border: 1px solid ${({ theme }) => theme.colors.gold};
  transform: rotate(45deg);
  box-shadow: 
    0 0 10px ${({ theme }) => theme.colors.gold},
    inset 0 0 5px ${({ theme }) => theme.colors.gold};
  z-index: 2;

  /* Detalhe interno do diamante */
  &::after {
    content: '';
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    background: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 5px ${({ theme }) => theme.colors.lightGold};
  }
`;

// Detalhes laterais do ornamento (As "asas" pequenas)
const SideDecoration = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border: 1px solid rgba(212, 175, 55, 0.3);
  transform: rotate(45deg);
  pointer-events: none;
`;

export const SectionDivider = () => {
  return (
    <DividerContainer>
      <GlowingLine />
      {/* Decoração extra sutil ao redor do centro */}
      <SideDecoration /> 
      <CenterOrnament />
    </DividerContainer>
  );
};