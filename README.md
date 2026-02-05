# 🎮 Old World Last Chaos - Site Oficial

**Portal web completo e responsivo para o MMORPG Old World Last Chaos**, oferecendo funcionalidades essenciais para jogadores, como informações de servidor, ranking, comunidade, downloads, cadastro no game e sistema de doações.

Desenvolvido com **React 18**, **TypeScript**, **Vite** e **Styled Components** para proporcionar uma experiência rápida, segura e visualmente atraente.

> ⚠️ **Status**: Este projeto ainda está em **desenvolvimento contínuo**. Funcionalidades e design podem sofrer alterações. Em breve será integrado a uma API Backend para funcionalidades completas. Inteiramente desenvolvido por **Jéser Cáceres Marcelino**.

---

## 📋 Índice

- [✨ Características](#-características)
- [🚀 Tecnologias](#-tecnologias)
- [📋 Pré-requisitos](#-pré-requisitos)
- [📦 Instalação e Configuração](#-instalação-e-configuração)
- [🏗️ Estrutura do Projeto](#-estrutura-do-projeto)
- [📄 Páginas Disponíveis](#-páginas-disponíveis)
- [🎨 Componentes Principais](#-componentes-principais)
- [🔧 Scripts Disponíveis](#-scripts-disponíveis)
- [🚀 Build e Deploy](#-build-e-deploy)
- [📱 Responsividade](#-responsividade)
- [🔮 Próximos Passos](#-próximos-passos)
- [📄 Licença](#-licença)

---

## 🚧 Status do Projeto

| Aspecto | Status |
|--------|--------|
| **Frontend** | ✅ Em desenvolvimento |
| **Componentes UI** | ✅ 80% completo |
| **Páginas** | ✅ 70% completo |
| **Design Responsivo** | ✅ Implementado |
| **Backend API** | 🔄 Em Desenvolvimento |
| **Autenticação Real** | ⏳ Próximo |
| **Sistema de Pagamento** | ⏳ Próximo |

Este projeto é desenvolvido **100% por Jéser Cáceres Marcelino** como um projeto pessoal e de aprendizado. Mudanças e melhorias contínuas são esperadas.

---

- ✅ **Design Responsivo** - Otimizado para desktop, tablet e mobile
- ✅ **Tipagem Completa** - TypeScript em todo o projeto para segurança de tipos
- ✅ **Componentes Reutilizáveis** - Biblioteca UI consistente e bem organizada
- ✅ **Sistema de Roteamento** - Navegação intuitiva com React Router
- ✅ **Tema Customizável** - Sistema de temas para fácil manutenção de cores e estilos
- ✅ **Animações Suaves** - Transições elegantes e efeitos visuais
- ✅ **Dados Mockados** - Pronto para desenvolvimento sem backend
- ✅ **Performance Otimizada** - Vite garante builds rápidos e lazy loading
- ✅ **Code Quality** - ESLint e Prettier para consistência de código
- ✅ **SEO Friendly** - Estrutura preparada para otimizações

---

## 🚀 Tecnologias

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| **React** | 18.2.0 | Biblioteca UI |
| **React Router DOM** | 6.20.0 | Roteamento de páginas |
| **TypeScript** | 5.2.2 | Tipagem estática |
| **Vite** | 5.0.8 | Build tool e dev server |
| **Styled Components** | 6.1.1 | Estilização CSS-in-JS |
| **ESLint** | 8.55.0 | Linting de código |
| **Prettier** | 3.1.1 | Formatação de código |

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16.0.0 ou superior)
- **npm** (versão 8.0.0 ou superior) ou **yarn**

Para verificar as versões instaladas:

```bash
node --version
npm --version
```

---

## 📦 Instalação e Configuração

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/lastchaos-front-end.git
cd lastchaos-front-end
```

### 2️⃣ Instalar Dependências

```bash
npm install
# ou
yarn install
```

### 3️⃣ Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

O servidor iniciará em `http://localhost:5173` (ou outra porta disponível).

### 4️⃣ Abrir no Navegador

Acesse [http://localhost:5173](http://localhost:5173) para visualizar o site.

---

## 🏗️ Estrutura do Projeto

```
lastchaos-front-end/
├── public/                    # Arquivos estáticos públicos
│   └── assets/
│       └── images/           # Imagens e gráficos
├── src/
│   ├── main.tsx              # Ponto de entrada da aplicação
│   ├── vite-env.d.ts         # Tipos do Vite
│   │
│   ├── app/
│   │   ├── App.tsx           # Componente raiz da aplicação
│   │   └── routes.tsx        # Definição de rotas
│   │
│   ├── assets/               # Recursos (ícones, imagens, etc)
│   │   ├── icons/
│   │   └── images/
│   │
│   ├── features/             # Features isoladas e reutilizáveis
│   │   ├── community/
│   │   │   └── components/   # Componentes de comunidade
│   │   ├── doacoes/          # Sistema de doações
│   │   │   ├── components/
│   │   │   └── mocks/        # Dados mockados
│   │   ├── download/         # Seção de download do cliente
│   │   │   ├── components/
│   │   │   └── mocks/
│   │   ├── ranking/          # Sistema de ranking
│   │   │   ├── components/
│   │   │   └── mocks/        # Dados de ranking mockados
│   │   └── servers/          # Informações de servidores
│   │       ├── types.ts      # Tipos TypeScript
│   │       ├── components/
│   │       └── mocks/        # Servidores mockados
│   │
│   ├── mocks/                # Dados mockados globais
│   │   ├── castleOwners.ts
│   │   ├── guildRating.ts
│   │   ├── news.ts
│   │   ├── servers.ts
│   │   └── index.ts
│   │
│   ├── pages/                # Páginas da aplicação
│   │   ├── Home.tsx          # Página inicial
│   │   ├── Login.tsx         # Autenticação
│   │   ├── Registro.tsx      # Cadastro novo usuário
│   │   ├── Download.tsx      # Download do cliente
│   │   ├── Comunidade.tsx    # Links da comunidade
│   │   ├── Regras.tsx        # Regras do servidor
│   │   ├── RankingPage.tsx   # Ranking de jogadores
│   │   ├── Doacoes.tsx       # Sistema de doações
│   │   └── index.ts
│   │
│   ├── shared/               # Componentes compartilhados
│   │   └── components/
│   │       ├── layout/       # Header e Footer
│   │       │   ├── Header.tsx
│   │       │   ├── Footer.tsx
│   │       │   └── index.ts
│   │       └── ui/           # Componentes UI genéricos
│   │           ├── Button.tsx
│   │           ├── ButtonLink.tsx
│   │           ├── Card.tsx
│   │           ├── Badge.tsx
│   │           ├── Input.tsx
│   │           ├── Modal.tsx
│   │           ├── RankingCard.tsx
│   │           ├── PlayersRankAndGuildChampions.tsx
│   │           ├── SectionDivider.tsx
│   │           └── index.ts
│   │
│   ├── styles/               # Estilos globais
│   │   ├── GlobalStyle.ts    # Estilos globais da aplicação
│   │   └── theme.ts          # Configuração de tema
│   │
│   └── types/                # Tipos TypeScript globais
│       ├── index.ts
│       └── styled.d.ts       # Augmentações de tipos
│
├── index.html                # HTML principal
├── tsconfig.json             # Configuração TypeScript
├── tsconfig.node.json        # TypeScript para vite
├── vite.config.ts            # Configuração do Vite
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
```

### Descrição das Pastas:

| Pasta | Descrição |
|-------|-----------|
| **src/features** | Features isoladas com sua própria estrutura (componentes, tipos, mocks) |
| **src/shared** | Componentes genéricos reutilizáveis em toda a aplicação |
| **src/pages** | Componentes de página (cada página é uma rota) |
| **src/mocks** | Dados simulados para desenvolvimento sem API |
| **src/styles** | Configurações globais de tema e estilos |
| **src/types** | Tipos e interfaces TypeScript globais |

---

## 📄 Páginas Disponíveis

| Página | Rota | Descrição |
|--------|------|-----------|
| **Home** | `/` | Página inicial com banner, notícias e servidores |
| **Download** | `/download` | Área para download do cliente do jogo |
| **Ranking** | `/ranking` | Ranking de jogadores e guilds |
| **Comunidade** | `/comunidade` | Links para Discord, Telegram, Fórum |
| **Doações** | `/doacoes` | Pacotes de doação premium |
| **Regras** | `/regras` | Regras do servidor |
| **Login** | `/login` | Autenticação de usuários |
| **Registro** | `/registro` | Cadastro de novos jogadores |

---

## 🎨 Componentes Principais

### Componentes UI Reutilizáveis
- **Button** - Botão customizável com variações
- **ButtonLink** - Botão que funciona como link
- **Card** - Container genérico com estilo padronizado
- **Badge** - Pequenas tags para status e informações
- **Input** - Campo de entrada com validação
- **Modal** - Componente modal para diálogos
- **RankingCard** - Card especializado para ranking
- **PlayersRankAndGuildChampions** - Painel de ranking combinado

### Componentes de Layout
- **Header** - Barra de navegação superior
- **Footer** - Rodapé com informações

### Componentes de Features
- **ServerCard** - Card para exibir informações de servidor
- **ServerStatusBadge** - Badge de status do servidor
- **CardDownload** - Card para downloads
- **CardDonation** - Card para pacotes de doação
- **CommunityCard** - Card para links de comunidade
- **HomeRankingsSection** - Seção de ranking na home

---

## 🔧 Scripts Disponíveis

```bash
# Inicia servidor de desenvolvimento com hot reload
npm run dev

# Compila TypeScript e cria build otimizado para produção
npm run build

# Visualiza o build de produção localmente
npm run preview

# Executa ESLint para verificar qualidade do código
npm run lint

# Formata automaticamente o código com Prettier
npm run format
```

---

## 🚀 Build e Deploy

### 1. Criar Build de Produção

```bash
npm run build
```

Isso gerará uma pasta `dist/` com os arquivos otimizados para produção.

### 2. Testar Build Localmente

```bash
npm run preview
```

### 3. Deploy Comum

O projeto pode ser deployado em:

- **Vercel** - `npm install -g vercel && vercel`
- **Netlify** - Conectar repositório GitHub e fazer deploy automático
- **GitHub Pages** - Servir arquivos estáticos da pasta `dist/`
- **Servidor próprio** - Copiar arquivos de `dist/` para servidor web (Nginx, Apache)

---

## 📱 Responsividade

O site é totalmente responsivo e projetado com *mobile-first*:

- **Mobile** - Otimizado para telas pequenas (< 640px)
- **Tablet** - Layout adaptado (640px - 1024px)
- **Desktop** - Experiência full (> 1024px)

---

## 🔮 Próximos Passos

### Fase 1: Backend Integration (🔄 Em Desenvolvimento)
- [ ] Criar API REST backend (Node.js/Express ou Django)
- [ ] Substituir dados mockados por chamadas de API real
- [ ] Implementar autenticação real (JWT tokens)
- [ ] Conectar banco de dados

### Fase 2: Features Avançadas
- [ ] Integrar gateway de pagamento (para doações)
- [ ] Adicionar gerenciamento de estado avançado
- [ ] Implementar notificações em tempo real (WebSockets)
- [ ] Sistema de chat da comunidade

### Fase 3: Qualidade e Testes
- [ ] Implementar testes unitários (Jest + React Testing Library)
- [ ] Testes de integração
- [ ] Testes E2E (Cypress ou Playwright)
- [ ] Aumentar cobertura de testes

### Fase 4: Otimização e Deploy
- [ ] Implementar PWA (Progressive Web App)
- [ ] Otimizações de SEO avançado
- [ ] Analytics e tracking de usuários
- [ ] Internacionalização (i18n) - EN, ES, PT
- [ ] Deploy em servidor em produção

---

## 🤝 Como Contribuir

Como este é um projeto pessoal em desenvolvimento, contribuições são limitadas neste momento. No entanto, você pode:

- 💡 Sugerir features via Issues
- 🐛 Relatar bugs encontrados
- 💬 Dar feedback e ideias
- ⭐ Deixar uma estrela se gostou do projeto

Quando o projeto estiver mais maduro, abrirei para contribuições via Pull Requests.

---

## 📧 Contato

- **Desenvolvedor**: Jéser Cáceres Marcelino
- **GitHub**: https://github.com/jesercaceres
- **Email**: cjeser99@gmail.com

---

## 📄 Licença

© 2025 Jéser Cáceres Marcelino. Todos os direitos reservados.

Este projeto é desenvolvido de forma independente e não é afiliado oficialmente com Last Chaos ou suas editoras.

---

**Desenvolvido com ❤️ por uma única pessoa, para a comunidade Last Chaos**
