import { useEffect } from 'react'
import styled from 'styled-components'
import { ModalProps } from '../../types'

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: ${({ isOpen }) => (isOpen ? 'fadeIn' : 'none')} 0.3s ease-in-out;
`

const ModalContainer = styled.div`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.dark} 0%,
    ${({ theme }) => theme.colors.darker} 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.gold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 500px;
  width: 90%;
  max-height: 90dvh;
  overflow-y: auto;
  box-shadow: ${({ theme }) => theme.shadows.xl};
  animation: fadeIn 0.3s ease-in-out;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    transform: rotate(90deg);
  }
`

const ModalTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.gold};
  font-family: ${({ theme }) => theme.fonts.epic};
`

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  // Fechar modal com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevenir scroll do body quando modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Fechar modal">
          ×
        </CloseButton>
        {title && <ModalTitle>{title}</ModalTitle>}
        {children}
      </ModalContainer>
    </Overlay>
  )
}
