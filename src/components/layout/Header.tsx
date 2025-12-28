import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../assets/icons/logo.ico'

const HeaderContainer = styled.header`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.darker} 0%,
    ${({ theme }) => theme.colors.dark} 100%
  );
  border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: ${({ theme }) => theme.shadows.md};
`

const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  flex-wrap: nowrap; /* 🔑 impede quebra no desktop */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  white-space: nowrap; /* 🔑 texto não quebra */
  flex-shrink: 0;      /* 🔑 logo não encolhe */

  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes.xl}; /* menor para nome longo */
  font-weight: 200;
  color: ${({ theme }) => theme.colors.gold};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: ${({ theme }) => theme.transitions.normal};

  &:hover {
    text-shadow: ${({ theme }) => theme.shadows.gold};
    transform: scale(1.03);
  }
`

const LogoIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;
`

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: nowrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
  }
`

const NavLink = styled(Link)<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.gold : theme.colors.white};
  text-decoration: none;
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  padding: ${({ theme }) => theme.spacing.xs}
    ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${({ isActive }) => (isActive ? '80%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.colors.gold};
    transition: ${({ theme }) => theme.transitions.normal};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
    background: rgba(212, 175, 55, 0.1);

    &::after {
      width: 80%;
    }
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing.xs};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`

const MobileNav = styled(Nav)<{ isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`

const navigationItems = [
  { path: '/', label: 'Início' },
  { path: '/servidores', label: 'Servidores' },
  { path: '/download', label: 'Download' },
  { path: '/comunidade', label: 'Comunidade' },
  { path: '/regras', label: 'Regras' },
  { path: '/doacoes', label: 'Doações' },
  { path: '/login', label: 'Login' },
  { path: '/registro', label: 'Registrar' },
]

export const Header: React.FC = () => {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <LogoIcon src={logo} alt="Old World Last Chaos" />
          OLD WORLD LAST CHAOS
        </Logo>

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>

        <MobileNav isOpen={mobileMenuOpen}>
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </MobileNav>

        <Nav>
          {navigationItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              isActive={location.pathname === item.path}
            >
              {item.label}
            </NavLink>
          ))}
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  )
}
