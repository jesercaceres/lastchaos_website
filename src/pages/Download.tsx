import styled from 'styled-components'
import { Button, Card } from '../components/ui'

const DownloadContainer = styled.div`
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
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const DownloadSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const DownloadCard = styled(Card)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`

const DownloadButtonWrapper = styled.div`
  margin: ${({ theme }) => theme.spacing.xl} 0;
`

const FileInfo = styled.div`
  margin: ${({ theme }) => theme.spacing.md} 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.darker};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`

const FileInfoTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const FileInfoItem = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
  margin: ${({ theme }) => theme.spacing.xs} 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`

const RequirementsSection = styled.section`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`

const RequirementsTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.gold};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const RequirementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const RequirementCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing.lg};
`

const RequirementCategory = styled.h3`
  font-family: ${({ theme }) => theme.fonts.epic};
  color: ${({ theme }) => theme.colors.gold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.xl};
`

const RequirementList = styled.ul`
  list-style: none;
  padding: 0;
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
          <FileInfo>
            <FileInfoItem>
              <strong>Tamanho:</strong> 3.11 GB
            </FileInfoItem>
            <FileInfoItem>
              <strong>Versão:</strong> 2.5.0
            </FileInfoItem>
            <FileInfoItem>
              <strong>Plataforma:</strong> Windows
            </FileInfoItem>
          </FileInfo>
          <DownloadButtonWrapper>
            <Button size="large" fullWidth onClick={handleDownload}>
              Baixar Agora
            </Button>
          </DownloadButtonWrapper>
        </DownloadCard>

        <DownloadCard>
          <FileInfoTitle>Informações Importantes</FileInfoTitle>
          <FileInfo>
            <FileInfoItem>
              • O download pode levar alguns minutos dependendo da sua conexão
            </FileInfoItem>
            <FileInfoItem>• Certifique-se de ter espaço suficiente no disco</FileInfoItem>
            <FileInfoItem>• Execute o instalador como administrador</FileInfoItem>
            <FileInfoItem>• Antivírus pode solicitar permissão durante a instalação</FileInfoItem>
          </FileInfo>
        </DownloadCard>
      </DownloadSection>

      <RequirementsSection>
        <RequirementsTitle>Requisitos do Sistema</RequirementsTitle>
        <RequirementsGrid>
          <RequirementCard>
            <RequirementCategory>Requisitos Mínimos</RequirementCategory>
            <RequirementList>
              <RequirementItem>Sistema Operacional: Windows 7 ou superior</RequirementItem>
              <RequirementItem>Processador: Intel Core i3 ou equivalente</RequirementItem>
              <RequirementItem>Memória RAM: 4 GB</RequirementItem>
              <RequirementItem>Placa de Vídeo: DirectX 9.0c compatível</RequirementItem>
              <RequirementItem>Espaço em Disco: 5 GB disponíveis</RequirementItem>
              <RequirementItem>Conexão: Internet banda larga</RequirementItem>
            </RequirementList>
          </RequirementCard>

          <RequirementCard>
            <RequirementCategory>Requisitos Recomendados</RequirementCategory>
            <RequirementList>
              <RequirementItem>Sistema Operacional: Windows 10 ou superior</RequirementItem>
              <RequirementItem>Processador: Intel Core i5 ou superior</RequirementItem>
              <RequirementItem>Memória RAM: 8 GB ou mais</RequirementItem>
              <RequirementItem>Placa de Vídeo: NVIDIA GTX 750 ou superior</RequirementItem>
              <RequirementItem>Espaço em Disco: 10 GB disponíveis</RequirementItem>
              <RequirementItem>Conexão: Internet banda larga estável</RequirementItem>
            </RequirementList>
          </RequirementCard>
        </RequirementsGrid>

        <WarningBox>
          <WarningTitle>Aviso de Compatibilidade</WarningTitle>
          <p>
            Este jogo é compatível apenas com sistemas Windows. Para sistemas Mac ou Linux, é
            necessário utilizar emuladores ou máquinas virtuais, o que pode afetar o desempenho do
            jogo.
          </p>
        </WarningBox>
      </RequirementsSection>
    </DownloadContainer>
  )
}
