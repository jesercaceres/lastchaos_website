import styled from 'styled-components'
import { Button } from '../components/ui'
import {CardDownload} from '../features/download/components/CardDownload'


const DownloadContainer = styled.div`
  max-width: 100%;
  margin: ${({ theme }) => theme.spacing['2xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
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
const DownloadCard = styled(CardDownload)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm}; 
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const DownloadSection = styled.section`
  display: grid;
  padding: ${({ theme }) => theme.spacing.md};
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  justify-items: center;

  margin-left: auto;
  margin-right: auto; 

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const DownloadButtonWrapper = styled.div`
  max-width: 250px;
  align-self: center;
  padding-top: ${({ theme }) => theme.spacing.sm};
`

const FileInfo = styled.div`
  text-align: left;
  display: inline-block;
`

const DownloadInfo = styled.div`
  text-align: left;
  margin: 0 auto;
  `

const FileInfoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const FileInfoItem = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.fontSizes.xs};
`


const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.sm};
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
  border: 2px solid ${({ theme }) => theme.colors.warning};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.white};
`

const WarningTitle = styled.h4`
  color: ${({ theme }) => theme.colors.warning};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 600;
`

const RequirimentBlock = styled.div`
  display: flex;
  flex-direction: column; 
  padding: ${({ theme }) => theme.spacing.md};
  align-items: center;
`

const InfoBlock = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const Download: React.FC = () => {
  const handleDownload = () => {
    // Simulação de download
    alert('Download iniciado! (Simulação)')
  }

  return (
    <DownloadContainer>
      <Title>Download do Jogo</Title>

      <DownloadSection>
        <DownloadCard>
          <FileInfoTitle>Cliente do Jogo</FileInfoTitle>
          <DownloadInfo>
            <FileInfoItem>
              <strong>Tamanho:</strong> 3.11 GB
            </FileInfoItem>
            <FileInfoItem>
              <strong>Plataforma:</strong> Windows
            </FileInfoItem>
          </DownloadInfo>
          <DownloadButtonWrapper>
            <Button  fullWidth onClick={handleDownload}>
              Baixar Agora
            </Button>
          </DownloadButtonWrapper>
          </DownloadCard>
        <DownloadCard>
        <InfoBlock>
          <FileInfoTitle>Informações Importantes</FileInfoTitle>
          <FileInfo>
            <FileInfoItem>
              • O download pode levar alguns minutos dependendo da sua conexão
            </FileInfoItem>
            <FileInfoItem>• Certifique-se de ter espaço suficiente no disco</FileInfoItem>
            <FileInfoItem>• Execute o instalador como administrador</FileInfoItem>
            <FileInfoItem>• Antivírus pode solicitar permissão durante a instalação</FileInfoItem>
          </FileInfo>
        </InfoBlock>
        </DownloadCard>  
      </DownloadSection>

      
        
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
          <p>
            Este jogo é compatível apenas com sistemas Windows. Para sistemas Mac ou Linux, é
            necessário utilizar emuladores ou máquinas virtuais, o que pode afetar o desempenho do
            jogo.
          </p>
        </WarningBox>
      
    </DownloadContainer>
  )
}
