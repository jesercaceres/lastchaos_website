import styled from 'styled-components';

export const SectionDivider = styled.div`
  position: relative;
  width: 100%;
  max-width: 1650px; /* Não vai até a borda total, igual ao Lost Ark */
  height: 1px; /* Linha ultra fina */
  margin: 0 auto; /* Centraliza */
  
  /* Removemos margens negativas verticais que quebravam o layout.
     O espaço será controlado pelo padding das seções no Home. */
  
  /* Gradiente: Transparente -> Dourado -> Transparente */
  background: linear-gradient(
    90deg, 
    transparent 0%, 
    ${({ theme }) => theme.colors.gold} 50%, 
    transparent 100%
  );
  
  /* O "Glow" (Brilho) da linha */
  box-shadow: 0 0 10px rgba(212, 175, 55, 0.8);
  
  /* Garante que fique acima de qualquer background */
  z-index: 10;

  /* O Losango Central (Diamond) */
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    
    /* Centraliza e rotaciona */
    transform: translate(-50%, -50%) rotate(45deg);
    
    width: 8px;
    height: 8px;
    
    /* Fundo preto para esconder a linha atrás dele */
    background-color: #000; 
    
    /* Borda dourada */
    border: 1px solid ${({ theme }) => theme.colors.gold};
    
    /* Brilho do losango */
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.gold};
  }
`;