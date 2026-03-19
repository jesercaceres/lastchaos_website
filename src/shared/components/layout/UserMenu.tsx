import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const fadeInDown = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(-10px) scale(0.95); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0) scale(1); 
  }
`;

const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(20, 20, 20, 0.8) 0%, rgba(10, 10, 10, 0.95) 100%);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 50px;
  padding: 4px 16px 4px 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  position: relative;
  user-select: none;

  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    box-shadow: 0 0 15px rgba(212, 175, 55, 0.25);
    transform: translateY(-2px);
  }
`;

const AvatarCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.darkGold} 0%, ${({ theme }) => theme.colors.dark} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.sm};
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.6), 0 2px 4px rgba(0, 0, 0, 0.5);
  
  &::before {
    content: '👑'; 
    font-size: 1.2rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: ${({ theme }) => theme.spacing.md};
`;

const WelcomeText = styled.span`
  font-size: 0.65rem;
  color: ${({ theme }) => theme.colors.lightGray};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: -2px;
`;

const UserName = styled.span`
  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

const DropdownIcon = styled.svg<{ isOpen: boolean }>`
  width: 14px;
  height: 14px;
  fill: none;
  stroke: ${({ theme }) => theme.colors.gold};
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  opacity: 0.8;
`;

const DropdownMenu = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 14px);
  right: 0;
  width: 200px;
  background: rgba(15, 15, 15, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.8);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 1000;
  overflow: hidden;
  animation: ${fadeInDown} 0.25s ease-out forwards;
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 28px;
    width: 10px;
    height: 10px;
    background: rgba(15, 15, 15, 0.95);
    border-top: 1px solid rgba(212, 175, 55, 0.3);
    border-left: 1px solid rgba(212, 175, 55, 0.3);
    transform: rotate(45deg);
  }
`;

const DropdownItem = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: ${({ theme }) => theme.colors.lightGray};
  padding: 12px 16px;
  text-align: left;
  font-size: 0.85rem;
  font-family: ${({ theme }) => theme.fonts.body};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.1) 0%, transparent 100%);
    color: ${({ theme }) => theme.colors.gold};
    padding-left: 22px; 
  }

  &.logout {
    color: ${({ theme }) => theme.colors.lightRed};
    
    &:hover {
      background: linear-gradient(90deg, rgba(220, 20, 60, 0.1) 0%, transparent 100%);
      color: ${({ theme }) => theme.colors.red};
    }
  }
`;

export const UserMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!user) return null;

  const handleNavigateToDonation = () => {
    navigate('/donation');
    setMenuOpen(false);
  };

  return (
    <div ref={menuRef} style={{ position: 'relative' }}>
      
      <UserCardContainer onClick={() => setMenuOpen(!menuOpen)}>
        <AvatarCircle />
        <UserInfo>
          <WelcomeText>Saudações,</WelcomeText>
          <UserName>{user.userId}</UserName>
        </UserInfo>
        
        <DropdownIcon isOpen={menuOpen} viewBox="0 0 24 24">
          <polyline points="6 9 12 15 18 9" />
        </DropdownIcon>
      </UserCardContainer>

      <DropdownMenu isOpen={menuOpen}>
        <DropdownItem onClick={handleNavigateToDonation}>
          <span style={{ fontSize: '1.1rem' }}>💎</span> Doações
        </DropdownItem>
        
        <DropdownItem className="logout" onClick={signOut}>
          <span style={{ fontSize: '1.1rem' }}>🚪</span> Sair da Conta
        </DropdownItem>
      </DropdownMenu>

    </div>
  );
};