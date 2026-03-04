import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Header, Footer } from '../shared/components/layout'
import { Home, Login, Registro, Download, Comunidade, Regras, Doacoes, Ranking } from '../pages'
import { ForgotPassword } from '../features/forgot-password/ForgotPassword'

const MainLayout = () => (
  <>
    <Outlet /> {/* Onde a página (Home, Ranking) será renderizada */}
    <Footer />
  </>
)

const AuthLayout = () => (
  <>
    <Outlet />
  </>
)

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      {/* O Header fica fora de tudo para aparecer em TODAS as páginas (Igual ao Albion) */}
      <Header />

      <Routes>
        {/* Rotas que usam o Layout Padrão (COM Footer) */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<Download />} />
          <Route path="/comunity" element={<Comunidade />} />
          <Route path="/rules" element={<Regras />} />
          <Route path="/donation" element={<Doacoes />} />
          <Route path="/ranking" element={<Ranking />} />
        </Route>

        {/* Rotas que usam o Layout de Auth (SEM Footer) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recovery" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
