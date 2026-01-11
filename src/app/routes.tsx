import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header, Footer } from '../components/layout'
import { Home, Login, Registro, Download, Comunidade, Regras, Doacoes, Ranking } from '../pages'

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/download" element={<Download />} />
        <Route path="/comunidade" element={<Comunidade />} />
        <Route path="/regras" element={<Regras />} />
        <Route path="/doacoes" element={<Doacoes />} />
        <Route path="/ranking" element={<Ranking />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
