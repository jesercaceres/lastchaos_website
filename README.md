# 🎮 Old World Last Chaos - Site Oficial

Site para o MMORPG Last Chaos desenvolvido com React, TypeScript, Vite e Styled Components.

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

├── main.tsx
├── vite-env.d.ts
├── app/
│   ├── App.tsx
│   ├── main.tsx
│   └── routes.tsx
├── assets/
│   ├── icons/
│   └── images/
├── components/
│   ├── ServerCard.tsx
│   ├── ServerStatusBadge.tsx
│   ├── layout/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── index.ts
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       ├── ButtonLink.tsx
│       ├── Card.tsx
│       ├── CardDonation.tsx
│       ├── CommunityCard.tsx
│       ├── index.ts
│       ├── Input.tsx
│       ├── Modal.tsx
│       ├── PlayersRankAndGuildChampions.tsx
│       └── SectionDivider.tsx
├── features/
│   ├── ranking/
│   │   ├── components/
│   │   │   ├── HomeRankingsSection.tsx
│   │   │   └── RankingPage.tsx
│   │   └── mocks/
│   │       └── playerRating.ts
│   └── servers/
│       ├── types.ts
│       ├── components/
│       │   ├── ServerCard.tsx
│       │   └── ServerStatusBadge.tsx
│       └── mocks/
│           └── servers.ts
├── mocks/
│   ├── castleOwners.ts
│   ├── donationPackages.ts
│   ├── guildRating.ts
│   ├── index.ts
│   ├── news.ts
│   ├── playerRating.ts
│   └── servers.ts
├── pages/
│   ├── Comunidade.tsx
│   ├── Doacoes.tsx
│   ├── Download.tsx
│   ├── Home.tsx
│   ├── index.ts
│   ├── Login.tsx
│   ├── Ranking.tsx
│   ├── Registro.tsx
│   └── Regras.tsx
├── routes/
│   └── index.tsx
├── shared/
│   └── components/
│       ├── layout/
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   └── index.ts
│       └── ui/
│           ├── Badge.tsx
│           ├── Button.tsx
│           ├── ButtonLink.tsx
│           ├── Card.tsx
│           ├── index.ts
│           ├── Input.tsx
│           ├── Modal.tsx
│           ├── PlayersRankAndGuildChampions.tsx
│           ├── RankingCard.tsx
│           └── SectionDivider.tsx
├── styles/
│   ├── GlobalStyle.ts
│   └── theme.ts
└── types/
    ├── index.ts
    └── styled.d.ts
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


## 🔧 Próximos Passos
1. Substituição dados mockados por chamadas de API
2. Implementar autenticação real
3. Integrar gateway de pagamento (para doações)
4. Adicionar gerenciamento de estado (Context API ou Redux)
5. Implementar testes unitários e de integração

## 📄 Licença
© 2025 Jéser Cáceres Marcelino. Todos os direitos reservados.
