# 🎯 Sabixão - Aplicação Mobile Quiz Multiplayer

> **Avaliação 3 - Desenvolvimento Mobile**  
> **Framework:** Ionic + Angular  
> **Refatoração da versão web (Next.js) para mobile nativo**

---

## 📱 Sobre o Projeto

Sabixão é uma aplicação de quiz multiplayer desenvolvida em Ionic/Angular com backend Express + TypeScript. A aplicação permite que usuários criem salas de quiz, gerenciem questões e joguem em tempo real com outros participantes.

### ✅ Requisitos Atendidos

- ✅ Framework **Ionic** com Angular
- ✅ **3 telas** funcionais com navegação
- ✅ **Cada tela com chamadas ao backend**:
  - Login: `POST /api/auth/login`
  - Lista de Salas: `GET /api/salas?creatorId=xxx`
  - Criar Sala: `POST /api/salas`
- ✅ Backend com dados **mockados em memória** (sem banco de dados)
- ✅ Projeto **versionado no GitHub**
- ✅ Protótipo de alta fidelidade incluído
- ✅ Adaptação mobile do conceito original

---

## 🏗️ Estrutura do Projeto

```
sabixao/
├── mobile/              # Aplicação Ionic (Angular)
│   ├── src/
│   │   ├── app/
│   │   │   ├── pages/          # Telas da aplicação
│   │   │   │   ├── login/      # ✅ Tela 1: Login
│   │   │   │   ├── lista-salas/ # ✅ Tela 2: Lista de Salas
│   │   │   │   └── criar-sala/  # ✅ Tela 3: Criar Nova Sala
│   │   │   ├── services/        # Serviços HTTP
│   │   │   │   ├── auth.service.ts    # Autenticação
│   │   │   │   └── salas.service.ts   # CRUD de salas
│   │   │   └── models/          # Interfaces TypeScript
│   │   │       └── models.ts    # Types compartilhados
│   │   └── ...
│   └── package.json
│
├── backend/             # API REST Express + TypeScript
│   ├── src/
│   │   ├── routes/              # Rotas da API
│   │   │   ├── auth.ts          # /api/auth/*
│   │   │   └── salas.ts         # /api/salas/*
│   │   ├── data/
│   │   │   └── store.ts         # Dados em memória (mock)
│   │   ├── types.ts             # Interfaces backend
│   │   ├── app.ts               # Express app
│   │   └── server.ts            # Servidor HTTP
│   ├── QUICKSTART.md            # Documentação do backend
│   └── package.json
│
├── frontend/            # Versão web original (Next.js)
├── prototipo/           # Protótipo Figma (alta fidelidade)
└── README.md            # Este arquivo
```

---

## 🚀 Como Executar

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** 20+ ([Download](https://nodejs.org))
- **npm** (vem com Node.js)
- **Git** ([Download](https://git-scm.com))

### 1️⃣ Clonar o Repositório

```bash
git clone https://github.com/erik-gastao/sabixao.git
cd sabixao
```

### 2️⃣ Instalar Dependências do Backend

```bash
cd backend
npm install
```

### 3️⃣ Instalar Dependências do Mobile

```bash
cd ../mobile
npm install
```

### 4️⃣ Iniciar o Backend

**Em um terminal separado:**

```bash
cd backend
npm run dev
```

O backend estará rodando em: **`http://localhost:3001`**

**Saída esperada:**
```
🚀 Sabixão backend rodando em http://localhost:3001
```

### 5️⃣ Iniciar a Aplicação Mobile

**Em outro terminal:**

```bash
cd mobile
ionic serve
```

A aplicação abrirá automaticamente no navegador em: **`http://localhost:8100`**

---

## 🧪 Como Testar

### Fluxo Completo de Teste

#### 1. **Tela de Login** (Tela 1 - Chamada: POST /api/auth/login)

1. Abra `http://localhost:8100`
2. Você verá a tela de login do Sabixão
3. Clique em **"Usar Conta Demo"** para preencher automaticamente
4. Ou digite manualmente:
   - **Email:** `demo@sabixao.dev`
   - **Senha:** `123456`
5. Clique em **"ENTRAR"**
6. ✅ **Verificar:** Mensagem de sucesso "Bem-vindo, Demo User!" aparece

#### 2. **Lista de Salas** (Tela 2 - Chamada: GET /api/salas)

1. Após o login, você é redirecionado automaticamente
2. Verá a mensagem: "Olá, Demo User! 👋"
3. Uma sala demo já aparece: **"Sala Demo"** com PIN **123456**
4. ✅ **Verificar:** A sala está listada com status, PIN e data de criação
5. Para recarregar: arraste a tela para baixo (pull to refresh)

#### 3. **Criar Nova Sala** (Tela 3 - Chamada: POST /api/salas)

1. Clique no **botão verde com "+"** no canto inferior direito
2. Digite um nome para a sala (ex: "Minha Sala de Teste")
3. Ajuste o número de jogadores usando o slider (5 a 50)
4. Clique em **"CRIAR SALA"**
5. ✅ **Verificar:** Mensagem de sucesso com o PIN gerado aparece
6. Você é redirecionado para a lista de salas
7. ✅ **Verificar:** A nova sala aparece na lista

---

## � Testar no Android Studio

### 📋 Pré-requisitos

- Android Studio instalado
- Java JDK 17
- Android SDK configurado

### 🚀 Passos Rápidos

```bash
# 1. Já foi feito: Plataforma Android adicionada ✅
cd mobile

# 2. Configurar IP do backend (IMPORTANTE!)
# Edite: mobile/src/environments/environment.ts
# Para emulador: apiUrl: 'http://10.0.2.2:3001/api'
# Para físico: apiUrl: 'http://192.168.X.X:3001/api'

# 3. Build e sincronizar
ionic build
npx cap sync android

# 4. Abrir no Android Studio
# File → Open → Selecione: C:\sabixao\mobile\android

# 5. Aguardar Gradle build (5-10 min na primeira vez)

# 6. Criar emulador (Device Manager)
# Pixel 5/6 + API 33/34

# 7. Iniciar backend
cd ..\backend
npm run dev

# 8. No Android Studio: Run ▶️
```

**📖 Guia completo:** Veja `TESTAR-ANDROID.md` e `mobile/ANDROID-QUICKSTART.md`

---

## �🔌 Endpoints da API Utilizados

### 🔐 Autenticação (Tela 1: Login)

```http
POST http://localhost:3001/api/auth/login
Content-Type: application/json

{
  "email": "demo@sabixao.dev",
  "password": "123456"
}
```

**Resposta:**
```json
{
  "token": "base64_token_here",
  "user": {
    "id": "uuid",
    "email": "demo@sabixao.dev",
    "name": "Demo User"
  }
}
```

### 🏠 Listar Salas (Tela 2: Lista de Salas)

```http
GET http://localhost:3001/api/salas?creatorId=uuid
```

**Resposta:**
```json
[
  {
    "id": "uuid",
    "name": "Sala Demo",
    "pin": "123456",
    "creatorId": "uuid",
    "status": "waiting",
    "maxPlayers": 20,
    "createdAt": "2025-11-05T..."
  }
]
```

### ➕ Criar Sala (Tela 3: Criar Sala)

```http
POST http://localhost:3001/api/salas
Content-Type: application/json

{
  "name": "Minha Nova Sala",
  "maxPlayers": 30,
  "creatorId": "uuid"
}
```

**Resposta:**
```json
{
  "id": "uuid",
  "name": "Minha Nova Sala",
  "pin": "384729",
  "creatorId": "uuid",
  "status": "waiting",
  "maxPlayers": 30,
  "createdAt": "2025-11-05T..."
}
```

---

## 📱 Funcionalidades Implementadas

### ✅ Tela 1: Login (`/login`)

**Componentes Ionic Utilizados:**
- `ion-card` - Card do formulário
- `ion-input` - Campos de entrada
- `ion-button` - Botões de ação
- `ion-spinner` - Loading durante requisição
- `ToastController` - Notificações

**Chamada ao Backend:**
- `POST /api/auth/login`
- Armazena token no localStorage
- Gerencia sessão do usuário

**Recursos:**
- Validação de campos obrigatórios
- Botão "Usar Conta Demo" para facilitar testes
- Feedback visual de loading
- Mensagens de erro/sucesso via toast
- Redirecionamento automático após login

### ✅ Tela 2: Lista de Salas (`/lista-salas`)

**Componentes Ionic Utilizados:**
- `ion-card` - Cards de cada sala
- `ion-badge` - Status da sala (Aguardando/Em andamento)
- `ion-fab` - Botão flutuante de criar
- `ion-refresher` - Pull to refresh
- `ion-list` - Lista de salas

**Chamada ao Backend:**
- `GET /api/salas?creatorId=xxx`
- Filtra salas do usuário logado

**Recursos:**
- Exibe nome, PIN, status e max players de cada sala
- Pull to refresh para atualizar lista
- Botão de logout
- Navegação para criar nova sala
- Estado vazio com mensagem amigável
- Cores dinâmicas baseadas no status

### ✅ Tela 3: Criar Sala (`/criar-sala`)

**Componentes Ionic Utilizados:**
- `ion-back-button` - Voltar para lista
- `ion-input` - Nome da sala
- `ion-range` - Slider de max players (5-50)
- `ion-button` - Criar ou cancelar

**Chamada ao Backend:**
- `POST /api/salas`
- Cria sala com PIN único gerado automaticamente

**Recursos:**
- Slider interativo para selecionar jogadores
- Validação do nome da sala
- Informações sobre o que será criado
- Feedback de sucesso com o PIN gerado
- Redirecionamento automático após criação

---

## 🎨 Design Mobile-First

### Adaptações para Mobile

- ✅ **Navegação por rotas** do Ionic Router
- ✅ **Pull to refresh** na lista de salas
- ✅ **Floating Action Button** para criar sala
- ✅ **Toast notifications** para feedback
- ✅ **Loading states** em todas as requisições
- ✅ **Validações de formulário** em tempo real
- ✅ **Gestos mobile** (swipe, tap, pull)
- ✅ **Cores e temas** do Ionic Design System

### Componentes Ionic Utilizados

- `IonCard` - Cards informativos
- `IonInput` - Campos de texto
- `IonButton` - Botões de ação
- `IonToolbar` - Barras de navegação
- `IonBadge` - Status tags
- `IonRange` - Sliders
- `IonFab` - Floating action button
- `IonRefresher` - Pull to refresh
- `IonSpinner` - Loading indicators
- `IonBackButton` - Navegação voltar

---

## 🗂️ Arquitetura do Código

### Services (Camada de Dados)

#### `AuthService`
- Gerencia autenticação
- Armazena token no localStorage
- Observable do usuário atual
- Métodos: `login()`, `register()`, `logout()`, `isAuthenticated()`

#### `SalasService`
- Gerencia CRUD de salas
- Comunicação com API REST
- Métodos: `getSalas()`, `createSala()`, `getSalaById()`, `getSalaByPin()`

### Models (Tipos TypeScript)

```typescript
interface User {
  id: string;
  email: string;
  name: string;
}

interface Sala {
  id: string;
  name: string;
  pin: string;
  creatorId: string;
  status: 'waiting' | 'running' | 'finished';
  maxPlayers: number;
  createdAt: string;
}
```

---

## 🔧 Tecnologias Utilizadas

### Frontend Mobile

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Ionic** | 8+ | Framework mobile |
| **Angular** | 18+ | Framework frontend |
| **Capacitor** | 6+ | Bridge nativo |
| **TypeScript** | 5+ | Tipagem estática |
| **RxJS** | 7+ | Programação reativa |

### Backend

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| **Express** | 4.19.2 | Framework web |
| **TypeScript** | 5.6.3 | Tipagem estática |
| **CORS** | 2.8.5 | Cross-origin |
| **Zod** | 3.23.8 | Validação |

---

## 📖 Protótipo de Alta Fidelidade

O protótipo Figma original está disponível em:  
📁 **`/prototipo/`**

### Adaptações Feitas para Mobile

1. **Layout vertical** otimizado para telas pequenas
2. **Botões maiores** para toque com dedos
3. **Pull to refresh** adicionado
4. **Floating Action Button** para criar sala
5. **Toast notifications** em vez de modals
6. **Back button** nativo do Ionic

**Justificativa:** O protótipo original era para web desktop. A adaptação mobile priorizou usabilidade em dispositivos touchscreen e navegação por gestos.

---

## 🧪 Testando Sem o Backend

Para testar a aplicação **standalone** (sem backend), você pode modificar os services para usar dados mockados localmente:

```typescript
// Exemplo: auth.service.ts com mock
login(credentials: LoginRequest): Observable<AuthResponse> {
  // Mock response
  const mockResponse = {
    token: 'mock_token',
    user: { id: '1', email: credentials.email, name: 'User' }
  };
  return of(mockResponse).pipe(delay(500));
}
```

---

## 🚀 Build para Produção

### Web (PWA)

```bash
cd mobile
ionic build --prod
```

Arquivos gerados em: `mobile/www/`

### Android

```bash
cd mobile
ionic capacitor add android
ionic capacitor sync android
ionic capacitor open android
```

### iOS

```bash
cd mobile
ionic capacitor add ios
ionic capacitor sync ios
ionic capacitor open ios
```

---

## 📝 Comandos Úteis

### Backend

```bash
# Desenvolvimento
cd backend && npm run dev

# Build
cd backend && npm run build

# Produção
cd backend && npm start

# Testar endpoint
curl http://localhost:3001/health
```

### Mobile

```bash
# Desenvolvimento
cd mobile && ionic serve

# Build
cd mobile && ionic build

# Executar no Android
cd mobile && ionic capacitor run android

# Executar no iOS
cd mobile && ionic capacitor run ios

# Preview no navegador
cd mobile && ionic serve --lab
```

---

## ⚠️ Troubleshooting

### Erro: "Cannot connect to backend"

**Solução:** Certifique-se de que o backend está rodando:
```bash
cd backend
npm run dev
```
Deve aparecer: `🚀 Sabixão backend rodando em http://localhost:3001`

### Erro: "ionic: command not found"

**Solução:** Instale o Ionic CLI globalmente:
```bash
npm install -g @ionic/cli
```

### Erro de CORS

**Solução:** O backend já está configurado com CORS habilitado. Verifique se está usando `http://localhost:3001` e não `http://127.0.0.1:3001`.

### Login não funciona

**Solução:** Use as credenciais demo:
- Email: `demo@sabixao.dev`
- Senha: `123456`

---

## 👥 Equipe

- **Desenvolvedor:** Erik Gastão
- **Matéria:** Desenvolvimento Mobile
- **Avaliação:** 3 - Aplicação Mobile Nativa

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

---

## ✅ Checklist de Entrega

- ✅ Framework Ionic utilizado
- ✅ Mínimo de 3 telas implementadas
- ✅ Cada tela com ao menos 1 chamada ao backend
- ✅ Backend com dados mockados (sem banco)
- ✅ Projeto versionado no GitHub
- ✅ Protótipo de alta fidelidade incluído
- ✅ README com comandos exatos de execução
- ✅ Adaptação mobile do conceito original
- ✅ Refatoração da versão web anterior

---

**Data de Entrega:** 05/11/2025  
**Repositório:** https://github.com/erik-gastao/sabixao

🎯 **Aplicação pronta para avaliação!**
