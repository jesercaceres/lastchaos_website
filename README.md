# 🎮 Last Chaos - Site Institucional

Site institucional para o MMORPG Last Chaos desenvolvido com React, TypeScript, Vite e Styled Components.

## 🚀 Tecnologias

- **Vite** - Build tool e dev server
- **React 18** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **React Router DOM** - Roteamento
- **Styled Components** - Estilização com CSS-in-JS
- **ESLint + Prettier** - Linting e formatação

## 📦 Instalação

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse `http://localhost:3000` no navegador

## 🏗️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o ESLint
- `npm run format` - Formata o código com Prettier

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens, ícones, etc.
├── components/      # Componentes React
│   ├── ui/         # Componentes UI reutilizáveis
│   └── layout/     # Componentes de layout (Header, Footer)
├── pages/          # Páginas da aplicação
├── routes/         # Configuração de rotas
├── styles/         # Estilos globais e tema
├── types/          # Definições de tipos TypeScript
├── mocks/          # Dados mockados
├── App.tsx         # Componente raiz
└── main.tsx        # Entry point
```

## 🎨 Páginas Disponíveis

- **/** - Home com banner principal, servidores e notícias
- **/login** - Página de login
- **/registro** - Página de registro de novos usuários
- **/download** - Download do cliente do jogo
- **/servidores** - Lista de servidores disponíveis
- **/comunidade** - Links para Discord, Telegram e Fórum
- **/regras** - Regras do servidor
- **/doacoes** - Pacotes de doação

## 🎯 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Tipagem completa com TypeScript
- ✅ Tema medieval/fantasia com cores dourado, vermelho e marrom
- ✅ Componentes reutilizáveis e tipados
- ✅ Formulários com validação
- ✅ Animações suaves e transições
- ✅ Dados mockados para desenvolvimento
- ✅ Pronto para integração com backend

## 📝 Observações

- Não inclui backend
- Não inclui integração real de pagamento
- Dados são mockados (servidores, notícias, pacotes)


## 🔧 Próximos Passos

Para integrar com um backend real:

1. Substituir dados mockados por chamadas de API
2. Implementar autenticação real
3. Integrar gateway de pagamento (para doações)
4. Adicionar gerenciamento de estado (Context API ou Redux)
5. Implementar testes unitários e de integração

## 📄 Licença
© 2025 Jéser Cáceres. Todos os direitos reservados.
