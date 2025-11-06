# 🎨 Protótipo de Alta Fidelidade - Sabixão

## 📱 Adaptação Mobile

Este documento descreve o protótipo de alta fidelidade do Sabixão e as adaptações feitas para a versão mobile.

---

## 🔄 Versão Original (Web - Next.js)

O protótipo original foi desenvolvido para **desktop/web** com as seguintes características:

### Telas Principais (Versão Web)

1. **Home/Landing Page**
   - Logo centralizado
   - Botões grandes: "ENTRAR" e "CRIAR CONTA"
   - Layout horizontal

2. **Login**
   - Formulário centralizado
   - Campos: Email e Senha
   - Botão "ENTRAR"

3. **Criar Conta**
   - Formulário com Nome, Email e Senha
   - Botão "CRIAR CONTA"

4. **Lista de Salas**
   - Grid de cards com salas
   - Informações: Nome, PIN, Status
   - Botão "+CRIAR SALA" no topo

5. **Criar Sala**
   - Formulário: Nome da Sala
   - Input de questões
   - Botão "CRIAR"

6. **Sala de Espera**
   - PIN grande e centralizado
   - Lista de jogadores conectados
   - Botão "INICIAR QUIZ"

7. **Jogo em Andamento**
   - Questão exibida
   - Opções de resposta
   - Timer countdown
   - Ranking atualizado em tempo real

8. **Resultados Finais**
   - Pódio com top 3
   - Lista completa de jogadores
   - Pontuação final

---

## 📲 Adaptações para Mobile (Ionic)

### Mudanças de Design e Justificativas

#### 1. **Navegação**

**Antes (Web):**
- Menu lateral fixo
- Navegação por clique em links

**Depois (Mobile):**
- Navegação por rotas do Ionic
- `ion-back-button` para voltar
- `ion-toolbar` com título em cada tela

**Justificativa:** Mobile usa navegação por pilha (stack), onde você empilha telas e volta usando o botão nativo. É o padrão esperado em apps móveis.

#### 2. **Layout**

**Antes (Web):**
- Layout horizontal com sidebar
- Grid de 3-4 colunas para cards
- Espaçamento amplo

**Depois (Mobile):**
- Layout vertical 100%
- Lista de 1 coluna
- Espaçamento otimizado para toque

**Justificativa:** Telas mobile são verticais e estreitas. Layout de coluna única é mais legível e facilita rolagem com o dedo.

#### 3. **Botões e Ações**

**Antes (Web):**
- Botões de tamanho padrão
- Ícones pequenos
- Hover states

**Depois (Mobile):**
- Botões maiores (min 44px de altura)
- `ion-fab` (Floating Action Button) para criar sala
- Touch states (ripple effect)
- Sem hover (touchscreen não tem hover)

**Justificativa:** Apple e Google recomendam áreas de toque mínimas de 44x44px para usabilidade mobile. FAB é o padrão Material Design para ação principal.

#### 4. **Feedback e Interações**

**Antes (Web):**
- Alerts/modals para feedback
- Tooltips no hover

**Depois (Mobile):**
- `ToastController` para notificações
- Pull to refresh na lista
- Gestos nativos (swipe, tap, long-press)

**Justificativa:** Toasts são menos invasivos que modals em mobile. Pull to refresh é um gesto familiar aos usuários de apps móveis.

#### 5. **Formulários**

**Antes (Web):**
- Labels ao lado dos campos
- Placeholders sutis

**Depois (Mobile):**
- `ion-input` com labels flutuantes
- Keyboard types específicos (`email`, `number`, `password`)
- Auto-focus e teclado nativo

**Justificativa:** Labels flutuantes economizam espaço vertical. Teclados específicos facilitam entrada de dados (ex: @ e . no teclado de email).

#### 6. **Indicadores de Loading**

**Antes (Web):**
- Spinners pequenos inline

**Depois (Mobile):**
- `ion-spinner` maior e centralizado
- Skeleton screens (opcional)
- Pull to refresh indicator

**Justificativa:** Em conexões móveis mais lentas, feedback visual de loading é crucial para UX.

---

## 🎯 Telas Implementadas na Versão Mobile

### ✅ Tela 1: Login

**Componentes Ionic:**
- `ion-card` - Container principal
- `ion-input` - Email e senha
- `ion-button` - Entrar e usar demo
- `ion-spinner` - Loading

**Diferenças do Protótipo:**
- Adicionado botão "Usar Conta Demo" para facilitar testes
- Toast para feedback em vez de alert
- Loading inline no botão

**Chamada Backend:**
```typescript
POST /api/auth/login
{ "email": "demo@sabixao.dev", "password": "123456" }
```

---

### ✅ Tela 2: Lista de Salas

**Componentes Ionic:**
- `ion-toolbar` - Header com logout
- `ion-refresher` - Pull to refresh
- `ion-card` - Cards de salas
- `ion-badge` - Status da sala
- `ion-fab` - Botão flutuante criar

**Diferenças do Protótipo:**
- Grid horizontal → Lista vertical
- Botão criar movido para FAB (canto inferior direito)
- Pull to refresh adicionado
- Estado vazio com mensagem

**Chamada Backend:**
```typescript
GET /api/salas?creatorId=xxx
```

---

### ✅ Tela 3: Criar Sala

**Componentes Ionic:**
- `ion-back-button` - Voltar
- `ion-input` - Nome da sala
- `ion-range` - Slider de jogadores (5-50)
- `ion-button` - Criar/Cancelar

**Diferenças do Protótipo:**
- Slider em vez de input numérico
- Info box com explicações
- Back button nativo
- Feedback de PIN gerado via toast

**Chamada Backend:**
```typescript
POST /api/salas
{ "name": "Minha Sala", "maxPlayers": 30, "creatorId": "xxx" }
```

---

## 📊 Comparação Visual

### Desktop (Protótipo Original)
```
┌────────────────────────────────────────┐
│  [Logo]         Sabixão           [≡]  │
├────────────────────────────────────────┤
│                                        │
│  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │Sala 1│  │Sala 2│  │Sala 3│        │
│  └──────┘  └──────┘  └──────┘        │
│                                        │
│  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │Sala 4│  │Sala 5│  │Sala 6│        │
│  └──────┘  └──────┘  └──────┘        │
│                                        │
│           [+ CRIAR SALA]               │
└────────────────────────────────────────┘
```

### Mobile (Ionic - Implementado)
```
┌──────────────────┐
│ Minhas Salas [⎋]│ ← Toolbar
├──────────────────┤
│ Olá, User! 👋    │ ← Header
│ Suas salas       │
├──────────────────┤
│ ⟳ Pull refresh   │ ← Refresher
├──────────────────┤
│ ┌──────────────┐ │
│ │ Sala 1 [🟡] │ │ ← Card
│ │ PIN: 123456  │ │
│ └──────────────┘ │
│                  │
│ ┌──────────────┐ │
│ │ Sala 2 [🟢] │ │
│ │ PIN: 789012  │ │
│ └──────────────┘ │
│                  │
│                  │
│              [+] │ ← FAB
└──────────────────┘
```

---

## 🎨 Paleta de Cores

### Cores do Ionic (Padrão)

- **Primary:** `#3880ff` - Azul (headers, botões principais)
- **Success:** `#2dd36f` - Verde (criar, confirmar)
- **Warning:** `#ffc409` - Amarelo (aguardando)
- **Danger:** `#eb445a` - Vermelho (finalizado, deletar)
- **Medium:** `#92949c` - Cinza (textos secundários)
- **Light:** `#f4f5f8` - Fundo claro

### Aplicação

- **Headers:** Primary blue
- **Botão Criar:** Success green
- **Status Aguardando:** Warning yellow
- **Botão Logout:** Danger red
- **Textos secundários:** Medium gray

---

## 🔄 Fluxo de Navegação

```
Login (/) 
  ↓ Login bem-sucedido
Lista de Salas (/lista-salas)
  ↓ Tap no FAB
Criar Sala (/criar-sala)
  ↓ Sala criada
Lista de Salas (/lista-salas)
```

**Navegação:**
- `Router.navigate()` para ir para frente
- `ion-back-button` ou gesto swipe para voltar
- Logout retorna para Login

---

## 📱 Responsividade

### Breakpoints

- **Mobile:** 0-768px (100% width)
- **Tablet:** 768px+ (max-width 600px centrado)
- **Desktop:** 992px+ (max-width 800px centrado)

### Adaptações

- Cards têm `max-width` para não ficarem largos demais em tablets
- Padding dinâmico baseado no tamanho da tela
- Ionic cuida automaticamente de safe areas (notch do iPhone)

---

## 🚀 Próximas Telas (Não Implementadas)

As seguintes telas do protótipo original **não foram implementadas** por limitação de tempo, mas estão planejadas:

1. **Criar Conta** (Register)
2. **Sala de Espera** (Waiting Room)
3. **Editar Questões**
4. **Jogo em Andamento** (Game Play)
5. **Ranking em Tempo Real**
6. **Resultados Finais**

---

## 📝 Conclusão

As adaptações feitas do protótipo web para mobile seguiram as melhores práticas de design mobile:

- ✅ **Touch-friendly:** Botões grandes, gestos nativos
- ✅ **Mobile-first:** Layout vertical, 1 coluna
- ✅ **Padrões nativos:** FAB, back button, pull to refresh, toasts
- ✅ **Performance:** Lazy loading de páginas
- ✅ **Acessibilidade:** Labels flutuantes, teclados específicos

O resultado é uma aplicação que **parece e funciona** como um app nativo, mantendo a essência do protótipo original.

---

**Protótipo Original:** Figma (conceito web desktop)  
**Implementação Mobile:** Ionic + Angular (adaptado para mobile)  
**Data:** Novembro 2025
