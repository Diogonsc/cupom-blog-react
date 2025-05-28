
# Blog Meu Cupom

Uma aplicação de blog desenvolvida em React com TypeScript, integrada com Material UI e seguindo as melhores práticas de desenvolvimento front-end.

## 🚀 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Material UI** para componentes e design system
- **React Router DOM** para navegação
- **Axios** para requisições HTTP
- **React Query** para gerenciamento de estado e cache
- **Vite** como build tool

## 📋 Funcionalidades

### 🔐 Autenticação
- Tela de login integrada com API ReqRes
- Armazenamento seguro do token no localStorage
- Proteção de rotas autenticadas
- Tratamento de erros de autenticação

### 📰 Gestão de Posts
- Listagem de posts com cards responsivos
- Página de detalhes com conteúdo completo
- Layout adaptativo para mobile e desktop
- Navegação intuitiva entre páginas

### 🎨 Design e UX
- Interface moderna seguindo a identidade visual do Meu Cupom
- Componentes Material UI customizados
- Responsividade total
- Animações e transições suaves

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para executar localmente

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd blog-meu-cupom
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute a aplicação em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:8080
```

### Credenciais para teste
- **Email:** eve.holt@reqres.in
- **Senha:** cityslicka

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── PostCard.tsx
│   └── ProtectedRoute.tsx
├── hooks/              # Custom hooks
│   └── useAuth.tsx
├── pages/              # Páginas da aplicação
│   ├── Login.tsx
│   ├── Posts.tsx
│   └── PostDetail.tsx
├── services/           # Serviços e APIs
│   └── api.ts
├── App.tsx             # Componente principal
└── main.tsx           # Entry point

public/
└── posts.json         # Dados simulados dos posts
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção localmente
- `npm run lint` - Executa verificação de código com ESLint

## 📱 Responsividade

A aplicação foi desenvolvida com design responsivo, garantindo uma experiência otimizada em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎯 Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios Atendidos

- [x] Tela de login com integração ReqRes API
- [x] Armazenamento de token no localStorage
- [x] Redirecionamento após login bem-sucedido
- [x] Tratamento de erros de autenticação
- [x] Listagem de posts com Material UI
- [x] Cards com título, resumo, imagem e botão "Leia mais"
- [x] Página de detalhes com rota dinâmica
- [x] Layout responsivo para mobile e desktop
- [x] Organização de código em componentes
- [x] Uso adequado de hooks React
- [x] Requisições HTTP com Axios
- [x] Header obrigatório x-api-key nas requisições
- [x] Estrutura de pastas organizada

### 🎨 Melhorias Implementadas

- Sistema de autenticação com Context API
- Proteção de rotas
- Loading states e tratamento de erros
- Design system baseado no Material UI
- Animações e transições suaves
- Otimização para SEO
- Código TypeScript tipado

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Gere o build de produção**
```bash
npm run build
```

2. **O build será gerado na pasta `dist/`**

3. **Faça upload dos arquivos para seu provedor de hospedagem**

## 📞 Suporte

Para dúvidas ou sugestões sobre este projeto, entre em contato através dos canais oficiais do Meu Cupom.

---

Desenvolvido com ❤️ para o desafio técnico Meu Cupom
