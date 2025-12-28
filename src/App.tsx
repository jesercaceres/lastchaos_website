import { ThemeProvider } from 'styled-components'
import { AppRoutes } from './routes'
import { GlobalStyle } from './styles/GlobalStyle'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
