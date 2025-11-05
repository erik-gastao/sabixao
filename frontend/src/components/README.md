# 📦 Componentes - Sabixão

> 🎯 **Nova Estrutura Organizada!** Componentes agora estão organizados em pastas por categoria.  
> Veja **[ORGANIZATION_GUIDE.md](./ORGANIZATION_GUIDE.md)** para detalhes completos.

---

## 📂 Estrutura de Pastas

```
src/components/
├── buttons/      🔘 Componentes de botão
├── inputs/       📝 Componentes de input
├── cards/        🎴 Componentes de card
├── quiz/         🎮 Componentes de quiz
├── icons/        🎨 Componentes de ícones
├── ui/           🎨 Componentes de UI geral
└── index.ts      📦 Barrel export (importação única)
```

**Importação unificada:**
```tsx
import { Button, Input, Timer, Language } from '@/components';
```

---

## ⚡ Componentes Genéricos (RECOMENDADO)

### 🎯 ActionButton
Componente genérico para botões de ação com ícones.

**Localização:** `buttons/action-button.tsx`

**Props:**
- `action`: `'add' | 'edit' | 'delete' | 'save' | 'cancel'`
- `onClick`: função callback
- `title?`: título customizado (opcional, usa padrão baseado em `action`)
- `disabled?`: boolean (opcional)
- `className?`: classes CSS adicionais (opcional)

**Exemplo:**
```tsx
import { ActionButton } from '@/components';

<ActionButton action="save" onClick={handleSave} />
<ActionButton action="edit" onClick={handleEdit} title="Editar Questão" />
<ActionButton action="delete" onClick={handleDelete} disabled={true} />
```

**Substitui:** `AdicionarButton`, `EditarButton`, `DeletarButton`, `SalvarButton`, `CancelarButton`

---

### 🎮 GameButton
Componente genérico para botões principais do jogo.

**Localização:** `buttons/game-button.tsx`

**Props:**
- `variant?`: `'create' | 'start' | 'back' | 'primary' | 'secondary'`
- `onClick?`: função callback
- `children?`: conteúdo customizado (opcional, usa padrão baseado em `variant`)
- `disabled?`: boolean (opcional)
- `type?`: `'button' | 'submit' | 'reset'` (opcional)
- `className?`: classes CSS adicionais (opcional)

**Exemplo:**
```tsx
import { GameButton } from '@/components';

<GameButton variant="create" onClick={handleCreate} />
<GameButton variant="start" onClick={handleStart} disabled={!canStart} />
<GameButton variant="back" onClick={() => router.back()} />
```

**Substitui:** `CriarButton`, `IniciarButton`, `VoltarButton`

---

## 🔧 Componentes Legados (Deprecated)

> ⚠️ **Nota:** Estes componentes são mantidos para compatibilidade com código existente.  
> Para novos desenvolvimentos, use `ActionButton` ou `GameButton`.

### Botões de Ação Específica

| Componente | Nova Sintaxe | Exemplo |
|------------|--------------|---------|
| `CriarButton` | `<GameButton variant="create" />` | `<GameButton variant="create" onClick={fn} />` |
| `EditarButton` | `<ActionButton action="edit" />` | `<ActionButton action="edit" onClick={fn} />` |
| `SalvarButton` | `<ActionButton action="save" />` | `<ActionButton action="save" onClick={fn} />` |
| `CancelarButton` | `<ActionButton action="cancel" />` | `<ActionButton action="cancel" onClick={fn} />` |
| `DeletarButton` | `<ActionButton action="delete" />` | `<ActionButton action="delete" onClick={fn} />` |
| `AdicionarButton` | `<ActionButton action="add" />` | `<ActionButton action="add" onClick={fn} />` |
| `VoltarButton` | `<GameButton variant="back" />` | `<GameButton variant="back" onClick={fn} />` |
| `IniciarButton` | `<GameButton variant="start" />` | `<GameButton variant="start" onClick={fn} />` |

### Cards de Navegação

| Componente | Função | Props Principais |
|------------|--------|------------------|
| `ButtonCriarSala` | Exibir/criar sala | `nomeSala`, `salaId`, `isNew` |
| `ButtonAdicionarSala` | Exibir/criar questão | `nomePergunta`, `descricaoSala`, `questaoId`, `salaId`, `isNew` |

## 🧩 Componentes Base

| Componente | Descrição |
|------------|-----------|
| `Button` | Botão genérico base |
| `IconButton` | Botão com ícone (base para botões específicos) |
| `Input` | Campo de entrada padrão |
| `EditableInput` | Input com edição inline |
| `Language` | Seletor de idioma |

## 📝 Exemplos de Uso

### ✨ Exemplo 1: Formulário Completo (Componentes Novos)
```tsx
import { ActionButton, GameButton } from '@/components';

export default function CreateRoomPage() {
    return (
        <form onSubmit={handleSubmit}>
            <input name="roomName" />
            
            <div className={styles.actions}>
                <GameButton variant="create" type="submit" disabled={!isValid} />
                <GameButton variant="back" onClick={() => router.back()} />
            </div>
        </form>
    );
}
```

### ✨ Exemplo 2: Lista com Ações (Componentes Novos)
```tsx
import { ActionButton } from '@/components';

export default function QuestionList({ questions }) {
    return (
        <div>
            {questions.map(q => (
                <div key={q.id}>
                    <span>{q.title}</span>
                    <ActionButton action="edit" onClick={() => handleEdit(q.id)} />
                    <ActionButton action="delete" onClick={() => handleDelete(q.id)} />
                </div>
            ))}
            <ActionButton action="add" onClick={handleAddQuestion} />
        </div>
    );
}
```

### 🔧 Exemplo 3: Página com Voltar e Criar (Legado)
```tsx
import { VoltarButton, CriarButton } from '@/components';

export default function MinhaPage() {
    return (
        <>
            <VoltarButton onClick={() => router.back()} />
            <CriarButton onClick={handleCriar} />
        </>
    );
}
```

### 🔧 Exemplo 4: Formulário com Salvar e Cancelar (Legado)
```tsx
import { SalvarButton, CancelarButton } from '@/components';

export default function Formulario() {
    return (
        <div>
            <SalvarButton onClick={handleSalvar} />
            <CancelarButton onClick={handleCancelar} />
        </div>
    );
}
```

### Exemplo 5: Lista de Salas
```tsx
import { ButtonCriarSala } from '@/components';

export default function ListaSalas() {
    return (
        <>
            <ButtonCriarSala isNew />
            <ButtonCriarSala nomeSala="Sala ABC" salaId={1} />
            <ButtonCriarSala nomeSala="Sala XYZ" salaId={2} />
        </>
    );
}
```

### Exemplo 6: Lista de Questões
```tsx
import { ButtonAdicionarSala } from '@/components';

export default function Questoes() {
    return (
        <>
            {questoes.map((q, index) => (
                <ButtonAdicionarSala
                    key={q.id}
                    nomePergunta={(index + 1).toString()}
                    descricaoSala={q.texto}
                    questaoId={q.id}
                    salaId={salaId}
                />
            ))}
            <ButtonAdicionarSala isNew onClick={handleAdicionar} />
        </>
    );
}
```

---

## � Documentação Adicional

- **[MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)**: Guia completo de migração dos componentes antigos para os novos
- **[BUTTON_EXAMPLES.md](./BUTTON_EXAMPLES.md)**: Exemplos práticos de uso dos componentes consolidados

---

## 🔄 Histórico de Consolidação

### Antes (Múltiplos Componentes Especializados)
8 componentes diferentes para ações similares:
```tsx
<CriarButton />, <EditarButton />, <SalvarButton />, <CancelarButton />,
<DeletarButton />, <AdicionarButton />, <VoltarButton />, <IniciarButton />
```

### Depois (2 Componentes Genéricos)
```tsx
// Botões com ícones
<ActionButton action="add" />
<ActionButton action="edit" />
<ActionButton action="delete" />
<ActionButton action="save" />
<ActionButton action="cancel" />

// Botões principais
<GameButton variant="create" />
<GameButton variant="start" />
<GameButton variant="back" />
```

### ✅ Benefícios da Consolidação

- ✅ **Menos imports**: 1-2 imports em vez de 3-8
- ✅ **API consistente**: Mesma interface para ações similares
- ✅ **Type-safe**: TypeScript autocomplete para `action` e `variant`
- ✅ **Manutenível**: Mudanças centralizadas
- ✅ **Bundle menor**: Menos código duplicado
- ✅ **Semântico**: `action="save"` é mais claro que `<SalvarButton />`
- ✅ **Flexível**: Fácil adicionar novas variantes

---

## 🚀 Quick Start

### Opção 1: Usar Componentes Genéricos (Recomendado)
```tsx
import { ActionButton, GameButton } from '@/components';

function MyComponent() {
    return (
        <>
            <ActionButton action="save" onClick={handleSave} />
            <ActionButton action="cancel" onClick={handleCancel} />
            <GameButton variant="back" onClick={() => router.back()} />
        </>
    );
}
```

### Opção 2: Usar Componentes Legados (Compatibilidade)
```tsx
import { SalvarButton, CancelarButton, VoltarButton } from '@/components';

function MyComponent() {
    return (
        <>
            <SalvarButton onClick={handleSave} />
            <CancelarButton onClick={handleCancel} />
            <VoltarButton onClick={() => router.back()} />
        </>
    );
}
```
