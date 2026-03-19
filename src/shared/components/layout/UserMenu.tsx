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

const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
`;

const NotificationContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const BellIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: #dcb75f;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.6));
`;

const NotificationBadge = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #d32f2f;
  color: white;
  font-size: 0.65rem;
  font-weight: bold;
  min-width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #111;
  padding: 0 4px;
`;

const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #24262a 0%, #141518 100%);
  border: 1px solid #7a6128;
  border-top: 1px solid #c2a65d;
  border-bottom: 2px solid #291f0c;
  border-radius: 4px;
  padding: 8px 16px 8px 28px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  position: relative;
  user-select: none;
  margin-left: 18px; 
  
  &:hover {
    border-color: #dcb75f;
    background: linear-gradient(180deg, #2b2e33 0%, #18191c 100%);
  }
`;

const AvatarCircle = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2px solid #8e7436;
  background: linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6), inset 0 2px 4px rgba(255, 255, 255, 0.1);
  position: absolute;
  left: -22px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;

  &::before {
    content: '👤'; 
    font-size: 1.3rem;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 1.1rem;
  color: #ebdcb9;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
`;

const DropdownIcon = styled.svg<{ isOpen: boolean }>`
  width: 14px;
  height: 14px;
  fill: none;
  stroke: #ebdcb9;
  stroke-width: 2.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  opacity: 0.8;
  margin-left: 10px;
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
    <UserMenuWrapper ref={menuRef}>
      
      <NotificationContainer>
        <BellIcon viewBox="0 0 24 24">
          <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
        </BellIcon>
        <NotificationBadge>1</NotificationBadge>
      </NotificationContainer>

      <div style={{ position: 'relative' }}>
        <UserCardContainer onClick={() => setMenuOpen(!menuOpen)}>
          <AvatarCircle />
          <UserInfo>
            <UserName>{user.userId || 'ArthurusMMO'}</UserName>
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

    </UserMenuWrapper>
  );
};