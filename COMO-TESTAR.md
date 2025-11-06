# 🧪 GUIA DE TESTES - Sabixão Mobile

## 🚀 Passo a Passo para Testar

### 1️⃣ Iniciar o Backend

Abra um terminal (PowerShell ou CMD) e execute:

```bash
cd C:\sabixao\backend
npm run dev
```

**✅ Resultado esperado:**
```
🚀 Sabixão backend rodando em http://localhost:3001
```

**Deixe este terminal aberto!** O backend precisa ficar rodando.

---

### 2️⃣ Iniciar o Mobile

Abra **OUTRO terminal** (novo terminal, não feche o anterior) e execute:

```bash
cd C:\sabixao\mobile
ionic serve
```

**✅ Resultado esperado:**
- O navegador abrirá automaticamente em `http://localhost:8100`
- Você verá a tela de Login do Sabixão

**Deixe este terminal também aberto!**

---

### 3️⃣ Testar a Aplicação

Agora você tem 2 terminais abertos:
- Terminal 1: Backend rodando
- Terminal 2: Mobile rodando

No navegador (`http://localhost:8100`):

#### 📱 TESTE 1: Login (Tela 1)

1. Você verá a tela de login com o logo "🎯 Sabixão"
2. **Opção A - Usar Conta Demo:**
   - Clique no botão **"Usar Conta Demo"**
   - Os campos serão preenchidos automaticamente
   - Clique em **"ENTRAR"**

3. **Opção B - Digite Manualmente:**
   - Email: `demo@sabixao.dev`
   - Senha: `123456`
   - Clique em **"ENTRAR"**

**✅ O que deve acontecer:**
- Você verá um **toast verde** no topo: "Bem-vindo, Demo User!"
- Será redirecionado automaticamente para Lista de Salas

**🔌 Chamada ao Backend:**
```http
POST http://localhost:3001/api/auth/login
```

---

#### 📱 TESTE 2: Lista de Salas (Tela 2)

Após o login, você verá:

1. **Header:** "Olá, Demo User! 👋"
2. **Uma sala já existente:**
   - Nome: "Sala Demo"
   - PIN: 123456
   - Status: Aguardando (badge amarelo)
   - Max Jogadores: 20

**Ações para testar:**

1. **Pull to Refresh:**
   - Arraste a tela para baixo e solte
   - Verá o spinner de refresh
   - Lista será recarregada do backend

2. **Logout:**
   - Clique no ícone de logout no canto superior direito
   - Será redirecionado para tela de Login

**✅ O que deve acontecer:**
- Lista carrega com a sala demo
- Pull to refresh funciona
- Logout retorna para login

**🔌 Chamada ao Backend:**
```http
GET http://localhost:3001/api/salas?creatorId=<id-do-usuario>
```

---

#### 📱 TESTE 3: Criar Nova Sala (Tela 3)

Na tela de Lista de Salas:

1. **Clique no botão verde "+" no canto inferior direito** (FAB - Floating Action Button)
2. Você será levado para tela "Criar Nova Sala"

**Preencha o formulário:**

1. **Nome da Sala:**
   - Digite: "Minha Sala de Teste"

2. **Máximo de Jogadores:**
   - Use o slider para escolher um número (5 a 50)
   - Sugestão: deixe em 20 ou mude para 30

3. **Clique em "CRIAR SALA"**

**✅ O que deve acontecer:**
- Você verá um **toast verde**: "Sala criada com PIN: XXXXXX" (número gerado)
- Será redirecionado para Lista de Salas
- **Sua nova sala aparecerá na lista!**

**🔌 Chamada ao Backend:**
```http
POST http://localhost:3001/api/salas
{ "name": "Minha Sala de Teste", "maxPlayers": 30, "creatorId": "..." }
```

---

## 🔍 Como Verificar se Está Funcionando

### ✅ Checklist de Testes

| Teste | O que fazer | Resultado esperado |
|-------|-------------|-------------------|
| 1. Backend | `npm run dev` no backend | Mensagem "🚀 Sabixão backend rodando" |
| 2. Mobile | `ionic serve` no mobile | Navegador abre em localhost:8100 |
| 3. Login - Demo | Clicar "Usar Conta Demo" → "ENTRAR" | Toast verde + redireciona |
| 4. Lista Salas | Ver a lista após login | Sala Demo aparece |
| 5. Pull Refresh | Arrastar tela para baixo | Spinner + recarrega |
| 6. Criar Sala | FAB (+) → preencher → criar | Toast com PIN + lista atualiza |
| 7. Nova sala | Ver lista após criar | Nova sala aparece |
| 8. Logout | Clicar ícone logout | Volta para login |

---

## 🎥 Fluxo Completo de Teste (3 minutos)

```
1. Login com demo → 2. Ver lista → 3. Pull refresh → 
4. Criar sala → 5. Ver nova sala → 6. Logout → 7. Login novamente
```

---

## 📱 Testando em Modo Mobile (Chrome DevTools)

Para ver a aplicação em formato mobile:

1. Abra `http://localhost:8100` no Chrome
2. Pressione **F12** (DevTools)
3. Clique no ícone de **dispositivo mobile** (Toggle device toolbar)
4. Escolha um dispositivo: "iPhone 12 Pro" ou "Pixel 5"

Agora você verá a aplicação em proporções mobile!

---

## 🛠️ Problemas Comuns

### ❌ "Cannot connect to backend"

**Solução:**
1. Verifique se o backend está rodando
2. Vá no terminal do backend
3. Deve aparecer: "🚀 Sabixão backend rodando em http://localhost:3001"
4. Se não estiver, execute: `cd backend && npm run dev`

### ❌ "ionic: comando não encontrado"

**Solução:**
```bash
npm install -g @ionic/cli
```

Depois execute novamente: `ionic serve`

### ❌ Login não funciona

**Solução:**
- Use exatamente: `demo@sabixao.dev` / `123456`
- Ou clique em "Usar Conta Demo"
- Verifique se o backend está rodando

### ❌ Porta 3001 ou 8100 já em uso

**Solução Backend:**
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <numero> /F
```

**Solução Mobile:**
```bash
# Usar outra porta
ionic serve --port 8200
```

---

## 🧪 Testando os Endpoints Diretamente (Opcional)

### Teste o Backend Manualmente

**1. Health Check:**
Abra no navegador: `http://localhost:3001/health`

Deve retornar:
```json
{"status":"ok","timestamp":"2025-11-05T..."}
```

**2. Login via PowerShell:**
```powershell
$body = @{
    email = "demo@sabixao.dev"
    password = "123456"
} | ConvertTo-Json

Invoke-RestMethod -Method POST -Uri http://localhost:3001/api/auth/login -ContentType "application/json" -Body $body
```

**3. Listar Salas:**
```powershell
Invoke-RestMethod http://localhost:3001/api/salas
```

---

## 📹 Gravando Vídeo do Teste (Para Apresentação)

Se precisar gravar:

1. Use **OBS Studio** (gratuito)
2. Ou **Windows Game Bar**: `Win + G`
3. Mostre:
   - Login funcionando
   - Lista de salas carregando
   - Pull to refresh
   - Criação de nova sala
   - Nova sala aparecendo

---

## ✅ Testes Completados

Depois de fazer todos os testes acima, você terá verificado:

- ✅ Backend rodando e respondendo
- ✅ Mobile rodando no navegador
- ✅ Login com autenticação (POST /api/auth/login)
- ✅ Lista de salas (GET /api/salas)
- ✅ Pull to refresh funcional
- ✅ Criar nova sala (POST /api/salas)
- ✅ Navegação entre telas
- ✅ Componentes Ionic funcionando
- ✅ Toast notifications
- ✅ Loading states
- ✅ Logout

---

## 🎯 Próximo Passo: Build para Produção (Opcional)

Se quiser gerar o build final:

```bash
cd mobile
npm run build
```

Os arquivos estarão em: `mobile/www/`

---

**Pronto para testar! Qualquer problema, me avise! 🚀**
