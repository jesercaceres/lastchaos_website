import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'
import { GlobalStyle } from '../styles/GlobalStyle'
import { theme } from '../styles/theme'
import { AuthProvider } from '../shared/contexts/AuthContext' // <-- 1. Importe o AuthProvider

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </ThemeProvider>
  )
}