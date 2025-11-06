# 🚀 Backend Sabixão - API REST Básica

## ✅ Status Atual

Backend **FUNCIONANDO** com:
- ✅ Express + TypeScript configurado
- ✅ CORS habilitado
- ✅ Dados em memória (sem banco de dados)
- ✅ Endpoints REST funcionais
- ✅ Build compilado com sucesso

---

## 📋 Estrutura Atual

```
backend/
├── src/
│   ├── server.ts          # Ponto de entrada (inicia servidor)
│   ├── app.ts             # Configuração Express + rotas
│   ├── types.ts           # TypeScript types/interfaces
│   ├── data/
│   │   └── store.ts       # Armazenamento em memória + dados seed
│   └── routes/
│       ├── auth.ts        # POST /api/auth/register, /login
│       └── salas.ts       # GET/POST /api/salas + questões
├── dist/                  # Código compilado (gerado pelo build)
├── package.json
└── tsconfig.json
```

---

## 🎯 Endpoints Disponíveis

### 🔐 Autenticação

```http
POST /api/auth/register
Body: { "email": "user@example.com", "password": "senha123", "name": "Nome" }
Response: { "token": "...", "user": { "id": "...", "email": "...", "name": "..." } }

POST /api/auth/login
Body: { "email": "user@example.com", "password": "senha123" }
Response: { "token": "...", "user": { ... } }
```

### 🏠 Salas

```http
GET /api/salas
Query: ?creatorId=uuid (opcional)
Response: [ { "id": "...", "name": "...", "pin": "123456", ... } ]

GET /api/salas/:id
Response: { "id": "...", "name": "Sala Demo", "pin": "123456", "status": "waiting", ... }

GET /api/salas/pin/:pin
Response: { "id": "...", "name": "...", "pin": "123456", ... }

POST /api/salas
Body: { "name": "Minha Sala", "maxPlayers": 50, "creatorId": "uuid" }
Response: { "id": "...", "name": "Minha Sala", "pin": "384729", ... }
```

### ❓ Questões

```http
GET /api/salas/:id/questoes
Response: [
  {
    "id": "...",
    "text": "Qual é a capital do Brasil?",
    "type": "multiple-choice",
    "timeLimit": 30,
    "opcoes": [
      { "id": "...", "text": "Brasília", "isCorrect": true },
      { "id": "...", "text": "Rio de Janeiro", "isCorrect": false }
    ]
  }
]

POST /api/salas/:id/questoes
Body: {
  "text": "Qual é a capital do Brasil?",
  "type": "multiple-choice",
  "timeLimit": 30,
  "opcoes": [
    { "text": "Brasília", "isCorrect": true },
    { "text": "Rio de Janeiro", "isCorrect": false },
    { "text": "São Paulo", "isCorrect": false }
  ]
}
Response: { "id": "...", "salaId": "...", "text": "...", ... }
```

### 🏥 Health Check

```http
GET /health
Response: { "status": "ok", "timestamp": "2025-11-05T..." }
```

---

## 🚀 Como Executar

### Desenvolvimento (com hot-reload)

```bash
cd backend
npm run dev
```

### Build + Produção

```bash
cd backend
npm run build
npm start
```

### A partir da raiz do projeto

```bash
# Desenvolvimento
npm --prefix backend run dev

# Build
npm --prefix backend run build

# Produção
npm --prefix backend start
```

**Servidor roda em:** `http://localhost:3001`

---

## 📦 Dados Iniciais (Seed)

O backend já vem com dados de exemplo:

### Usuário Demo
- **Email:** `demo@sabixao.dev`
- **Senha:** `123456`
- **Nome:** `Demo User`

### Sala Demo
- **Nome:** `Sala Demo`
- **PIN:** `123456`
- **Status:** `waiting`
- **Max Players:** `20`

### Questão Demo
- **Texto:** "Qual é a capital do Brasil?"
- **Tipo:** `multiple-choice`
- **Tempo:** `30 segundos`
- **Opções:**
  - ✅ Brasília (correta)
  - ❌ Rio de Janeiro
  - ❌ São Paulo

---

## 🧪 Testando os Endpoints

### Windows PowerShell

```powershell
# Health check
Invoke-RestMethod http://localhost:3001/health

# Listar salas
Invoke-RestMethod http://localhost:3001/api/salas

# Login
$body = @{ email = "demo@sabixao.dev"; password = "123456" } | ConvertTo-Json
Invoke-RestMethod -Method POST -Uri http://localhost:3001/api/auth/login -ContentType "application/json" -Body $body

# Criar sala
$body = @{ 
  name = "Minha Sala"
  maxPlayers = 50
  creatorId = "uuid-do-usuario"
} | ConvertTo-Json
Invoke-RestMethod -Method POST -Uri http://localhost:3001/api/salas -ContentType "application/json" -Body $body
```

### Linux/Mac (curl)

```bash
# Health check
curl http://localhost:3001/health

# Listar salas
curl http://localhost:3001/api/salas

# Login
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@sabixao.dev","password":"123456"}'

# Criar sala
curl -X POST http://localhost:3001/api/salas \
  -H "Content-Type: application/json" \
  -d '{"name":"Minha Sala","maxPlayers":50,"creatorId":"uuid-aqui"}'
```

### Navegador

Abra: `http://localhost:3001/health`

---

## ⚡ Resposta à Pergunta: "É possível funcionar sem backend?"

### ✅ SIM, mas com limitações:

#### **Modo Standalone (Sem Backend)**

**Funciona:**
- ✅ Interface do usuário completa
- ✅ Fluxo de telas (criar conta, login, criar sala)
- ✅ Criação de questões (armazenadas localmente)
- ✅ Visualização de componentes
- ✅ Layouts e estilos

**NÃO Funciona:**
- ❌ Persistência de dados (ao recarregar, perde tudo)
- ❌ Multiplayer real-time
- ❌ Compartilhamento de salas via PIN
- ❌ Ranking entre jogadores
- ❌ Autenticação real

#### **Solução para Ionic (Recomendada)**

Para traduzir para Ionic **SEM backend**, você pode:

1. **LocalStorage/IndexedDB** - Armazenar dados no dispositivo
2. **Capacitor Preferences** - Persistência nativa
3. **SQLite Local** - Banco de dados local no app
4. **Mock Data** - Dados fake para demonstração

**Exemplo com LocalStorage:**

```typescript
// services/storage.service.ts
export class StorageService {
  saveSala(sala: Sala) {
    const salas = this.getSalas();
    salas.push(sala);
    localStorage.setItem('salas', JSON.stringify(salas));
  }

  getSalas(): Sala[] {
    const data = localStorage.getItem('salas');
    return data ? JSON.parse(data) : [];
  }
}
```

#### **Recomendação para Hoje**

Para traduzir para Ionic **hoje**, você tem 2 opções:

**Opção 1: Standalone (Mais Rápido)**
- Use LocalStorage para simular backend
- Perfeito para protótipo/demo
- Sem necessidade de servidor

**Opção 2: Com Backend (Completo)**
- Conecte Ionic ao backend via HTTP
- Multiplayer funcional
- Dados persistentes

---

## 📝 Dados em Memória

⚠️ **IMPORTANTE:** Os dados são armazenados em **memória RAM**.

**Isso significa:**
- ✅ Rápido e simples para desenvolvimento
- ✅ Sem necessidade de banco de dados
- ❌ Ao reiniciar o servidor, **TODOS os dados são perdidos**
- ❌ Não é adequado para produção

**Para produção futura, adicionar:**
- PostgreSQL / MySQL
- Prisma ORM (já documentado no README.md original)
- Ou MongoDB

---

## 🔧 Tecnologias Usadas

| Pacote | Versão | Uso |
|--------|--------|-----|
| **express** | 4.19.2 | Framework web |
| **cors** | 2.8.5 | Permitir requisições cross-origin |
| **uuid** | 11.0.3 | Gerar IDs únicos |
| **zod** | 3.23.8 | Validação de schemas |
| **typescript** | 5.6.3 | Tipagem estática |
| **ts-node-dev** | 2.0.0 | Hot-reload dev |

---

## 🎯 Próximos Passos Recomendados

### Curto Prazo (Hoje - Ionic)

1. **Traduzir frontend para Ionic/Angular**
   - Reutilizar estrutura de componentes
   - Adaptar para Ionic UI components
   
2. **Escolher estratégia:**
   - **Standalone:** LocalStorage + Mock data
   - **Com Backend:** HTTP Client conectado a este backend

### Médio Prazo

3. **Adicionar WebSocket** (Socket.io)
   - Multiplayer tempo real
   - Sincronização de ranking
   
4. **Persistência real:**
   - Adicionar SQLite ou PostgreSQL
   - Implementar Prisma ORM

### Longo Prazo

5. **Autenticação JWT real**
6. **Deploy:**
   - Backend: Heroku, Railway, Render
   - Frontend Ionic: Capacitor (iOS/Android)

---

## ✨ Resumo

**Backend está pronto e funcionando!** 🎉

- ✅ Compilação: OK
- ✅ Servidor iniciado: OK (`http://localhost:3001`)
- ✅ Endpoints funcionais: OK
- ✅ CORS habilitado: OK
- ✅ Dados seed: OK

**Para Ionic hoje:**
- Opção rápida: **Standalone** (LocalStorage)
- Opção completa: **Conectar a este backend**

**Comandos úteis:**

```bash
# Iniciar backend
cd backend && npm run dev

# Testar health
# (Abrir navegador em http://localhost:3001/health)

# Ver estrutura
ls backend/src
```

Aguardando próximos passos! 🚀
