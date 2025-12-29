import { useState, useEffect, useRef } from 'react'
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
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 414px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`

const HeaderContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: nowrap;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm};
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 414px) {
    gap: ${({ theme }) => theme.spacing.xs};
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  white-space: nowrap;
  flex-shrink: 1;
  min-width: 0;

  font-family: ${({ theme }) => theme.fonts.epic};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 200;
  color: ${({ theme }) => theme.colors.gold};
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: ${({ theme }) => theme.transitions.normal};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
    letter-spacing: 1px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    letter-spacing: 0.5px;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  @media (max-width: 414px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    letter-spacing: 0.5px;
    gap: ${({ theme }) => theme.spacing.xs};
  }

  &:hover {
    text-shadow: ${({ theme }) => theme.shadows.gold};
    transform: scale(1.03);
  }
`

const LogoIcon = styled.img`
  width: 28px;
  height: 28px;
  object-fit: contain;

  @media (max-width: 414px) {
    width: 24px;
    height: 24px;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: nowrap;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: flex;
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
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => theme.spacing.xs}
      ${({ theme }) => theme.spacing.xs};
  }

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
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.sm};
  font-size: 1.5rem;
  width: auto;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: block;
  }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.intermediate} + 1px)) {
    display: none;
  }

  @media (max-width: 414px) {
    padding: ${({ theme }) => theme.spacing.xs};
    margin-left: ${({ theme }) => theme.spacing.xs};
    min-width: 36px;
    min-height: 36px;
  }
`

const MobileNav = styled.nav<{ isOpen: boolean }>`
  display: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    width: 100%;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.darker} 0%,
      ${({ theme }) => theme.colors.dark} 100%
    );
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.xs};
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-bottom: 2px solid ${({ theme }) => theme.colors.gold};
  }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.intermediate} + 1px)) {
    display: none;
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
  const headerRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const setHeaderHeight = () => {
      const height = headerRef.current?.offsetHeight ?? 0
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    }

    setHeaderHeight()
    window.addEventListener('resize', setHeaderHeight)
    return () => window.removeEventListener('resize', setHeaderHeight)
  }, [])

  return (
    <HeaderContainer ref={headerRef as any}>
      <HeaderContent>
        <Logo to="/">
          <LogoIcon src={logo} alt="Old World Last Chaos" />
          OLD WORLD LAST CHAOS
        </Logo>

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

        <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </MobileMenuButton>
      </HeaderContent>

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
    </HeaderContainer>
  )
}
