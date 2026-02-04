import styled from 'styled-components'
import { DownloadButton } from '../features/download/components/DownloadButton'
import backgroundImagem from '../assets/images/download-bg.png'

const BackgroundContainer = styled.div`
  width: 100%;
  background-image: url(${backgroundImagem});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 89vh;
`

const DownloadContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

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
padding-top: ${({ theme }) => theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const DownloadSection = styled.section`
  min-height: 85vh; /* Aumentado para garantir espaço de manobra vertical */
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  justify-content: flex-start; 
  
  /* --- DESKTOP (Telas grandes) --- */
  /* Aumentamos de 50vh para 55vh para descer o botão até a linha da cintura */
  padding-top: 55vh; 
  padding-right: 22%; 

  /* --- NOTEBOOKS / DESKTOP MÉDIO (Telas < 1310px) --- */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    padding-right: 15%;
    padding-top: 53vh;
  }

  /* --- TABLETS (Telas < 768px) --- */
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: center; /* Centraliza no tablet para não ficar cortado */
    padding-right: 0;
    padding-top: 48vh;
  }

  /* --- MOBILE (Telas < 480px) --- */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 42vh; /* No mobile, o fundo corta de forma diferente, então subimos levemente */
  }
`

const DownloadButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
`

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.xl};
`

const RequirementCategory = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const RequirementList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  
`

const RequirementItem = styled.li`
  color: ${({ theme }) => theme.colors.lightGray};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  &::before {
    content: '✓';
    color: ${({ theme }) => theme.colors.success};
    font-weight: bold;
    margin-right: ${({ theme }) => theme.spacing.xs};
  }
`

const WarningBox = styled.div`
  background: ${({ theme }) => theme.colors.warning}22;
  max-width: 1200px;
  border: 2px solid ${({ theme }) => theme.colors.warning};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.white};
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.lg};
`

const WarningTitle = styled.h4`
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 600;
`
const WarningText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
`

const RequirimentBlock = styled.div`
  display: flex;
  flex-direction: column; 
  padding: ${({ theme }) => theme.spacing.md};
  align-items: center;
`

export const Download: React.FC = () => {
  const handleDownload = () => {
    // Simulação de download
    alert('Download iniciado! (Simulação)')
  }

  return (
    
    <DownloadContainer>
      <BackgroundContainer>
      <DownloadSection>
 
       <DownloadButtonWrapper>
  <DownloadButton onClick={handleDownload}>
    Baixar Agora
  </DownloadButton>
</DownloadButtonWrapper>
 
      </DownloadSection>

      </BackgroundContainer>

      
        
        <RequirementsGrid>
          <RequirimentBlock>
            <RequirementCategory>Requisitos Mínimos</RequirementCategory>
            <RequirementList>
              <RequirementItem>Sistema Operacional: Windows 7 ou superior</RequirementItem>
              <RequirementItem>Processador: Intel Core i3 ou equivalente</RequirementItem>
              <RequirementItem>Memória RAM: 4 GB</RequirementItem>
              <RequirementItem>Placa de Vídeo: DirectX 9.0c compatível</RequirementItem>
              <RequirementItem>Espaço em Disco: 5 GB disponíveis</RequirementItem>
              <RequirementItem>Conexão: Internet banda larga</RequirementItem>
            </RequirementList>
            </RequirimentBlock>

            <RequirimentBlock>
            <RequirementCategory>Requisitos Recomendados</RequirementCategory>
            <RequirementList>
              <RequirementItem>Sistema Operacional: Windows 10 ou superior</RequirementItem>
              <RequirementItem>Processador: Intel Core i5 ou superior</RequirementItem>
              <RequirementItem>Memória RAM: 8 GB ou mais</RequirementItem>
              <RequirementItem>Placa de Vídeo: NVIDIA GTX 750 ou superior</RequirementItem>
              <RequirementItem>Espaço em Disco: 10 GB disponíveis</RequirementItem>
              <RequirementItem>Conexão: Internet banda larga estável</RequirementItem>
            </RequirementList>
            </RequirimentBlock>
        </RequirementsGrid>

        <WarningBox>
          <WarningTitle>Aviso de Compatibilidade</WarningTitle>
          <WarningText>
            Este jogo é compatível apenas com sistemas Windows. Para sistemas Mac ou Linux, é
            necessário utilizar emuladores ou máquinas virtuais, o que pode afetar o desempenho do
            jogo.
          </WarningText>
        </WarningBox>
      
    </DownloadContainer>    
    
  )
}
