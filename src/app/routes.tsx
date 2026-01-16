import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { Header, Footer } from '../components/layout'
import { Home, Login, Registro, Download, Comunidade, Regras, Doacoes, Ranking } from '../pages'


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
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/regras" element={<Regras />} />
          <Route path="/doacoes" element={<Doacoes />} />
          <Route path="/ranking" element={<Ranking />} />
        </Route>

        {/* Rotas que usam o Layout de Auth (SEM Footer) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}