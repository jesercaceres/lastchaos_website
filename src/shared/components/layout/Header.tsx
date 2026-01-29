import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../../../assets/icons/logo.png'
import { ButtonLink } from '../ui/ButtonLink'

// ... (estilos HeaderContainer, HeaderContent, Logo, LogoIcon, Nav, NavLink) ...

const HeaderContainer = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.lg};
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows.md};
  width: 100%;
  box-sizing: border-box;
  background: rgba(11, 12, 16, 0.95);
  backdrop-filter: blur(10px);
  position: relative;

  @media (max-width: 414px) {
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  }
`

const HeaderContent = styled.div`
  max-width: auto;
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
  z-index: 1001;

  &:hover {
    text-shadow: ${({ theme }) => theme.shadows.gold};
    transform: scale(1.03);
  }
`

const LogoIcon = styled.img`
  max-width: 140px;
  height: auto;
  object-fit: contain;
  display: block;

  @media (max-width: 414px) {
    max-width: 110px;
    width: 100%;
    height: auto;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: nowrap;
  align-items: center;
  margin-right: auto;
  margin-left: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    gap: ${({ theme }) => theme.spacing.sm};
    margin-left: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: flex;
  }
`

const NavLink = styled(Link)<{ isActive?: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.colors.gold : theme.colors.white)};
  text-decoration: none;
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: ${({ theme }) => theme.transitions.normal};
  position: relative;
  white-space: nowrap;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.xs};
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

const AuthButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: none;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.gold};
  padding: 4px 6px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  flex-shrink: 0;
  margin-left: ${({ theme }) => theme.spacing.sm};
  font-size: 1.1rem;
  width: auto;
  height: auto;
  transition: all 0.2s ease;
  z-index: 1002;
  position: relative;

  &:active {
    background: rgba(212, 175, 55, 0.1);
    transform: scale(0.95);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.intermediate}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.intermediate} + 1px)) {
    display: none;
  }

  @media (max-width: 414px) {
    margin-left: ${({ theme }) => theme.spacing.xs};
    font-size: 1rem;
    padding: 3px 6px;
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
    gap: ${({ theme }) => theme.spacing.md};
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gold};
    z-index: 999;
  }

  @media (min-width: calc(${({ theme }) => theme.breakpoints.intermediate} + 1px)) {
    display: none;
  }
`

// Estilo específico para o divisor no menu mobile
const MobileDivider = styled.div`
  height: 1px;
  background: rgba(212, 175, 55, 0.2);
  margin: ${({ theme }) => theme.spacing.xs} 0;
  width: 100%;
`

const navigationItems = [
  { path: '/', label: 'Início' },
  { path: '/download', label: 'Download' },
  { path: '/ranking', label: 'Ranking' },
  { path: '/comunidade', label: 'Comunidade' },
  { path: '/regras', label: 'Regras' },
  { path: '/doacoes', label: 'Doações' },
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [mobileMenuOpen])

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <HeaderContainer ref={headerRef as any}>
      <HeaderContent>
        <Logo to="/" onClick={() => setMobileMenuOpen(false)}>
          <LogoIcon src={logo} alt="Old World Last Chaos" />
        </Logo>

        <Nav>
          {navigationItems.map(item => (
            <NavLink key={item.path} to={item.path} isActive={location.pathname === item.path}>
              {item.label}
            </NavLink>
          ))}
        </Nav>

        <AuthButtonsContainer>
          <ButtonLink to="/login" variant="primary" size="xs">
            Login
          </ButtonLink>
          <ButtonLink to="/registro" variant="secondary" size="xs">
            Registrar
          </ButtonLink>
        </AuthButtonsContainer>

        <MobileMenuButton
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </MobileMenuButton>
      </HeaderContent>

      <MobileNav isOpen={mobileMenuOpen}>
        {navigationItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            isActive={location.pathname === item.path}
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}

        {/* Divisor para separar itens de navegação das ações de conta */}
        <MobileDivider />

        {/* Links de Auth como texto simples no mobile */}
        <NavLink
          to="/login"
          isActive={location.pathname === '/login'}
          onClick={() => setMobileMenuOpen(false)}
        >
          Login
        </NavLink>
        <NavLink
          to="/registro"
          isActive={location.pathname === '/registro'}
          onClick={() => setMobileMenuOpen(false)}
          style={{ color: '#D4AF37', fontWeight: 600 }}
        >
          Registrar-se
        </NavLink>
      </MobileNav>
    </HeaderContainer>
  )
}
