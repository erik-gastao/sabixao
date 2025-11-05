# 📝 Exemplo Prático de Uso dos Botões Consolidados

Este arquivo demonstra o uso dos novos componentes `ActionButton` e `GameButton`.

## 📦 Componentes Criados

### 1. **ActionButton** (`action-button.tsx`)
Componente genérico para botões de ação com ícones.

**Props:**
- `action`: 'add' | 'edit' | 'delete' | 'save' | 'cancel'
- `onClick`: função callback
- `title?`: título customizado (opcional)
- `disabled?`: boolean (opcional)
- `className?`: classes CSS adicionais (opcional)

**Substitui:**
- `AdicionarButton` → `<ActionButton action="add" />`
- `EditarButton` → `<ActionButton action="edit" />`
- `DeletarButton` → `<ActionButton action="delete" />`
- `SalvarButton` → `<ActionButton action="save" />`
- `CancelarButton` → `<ActionButton action="cancel" />`

### 2. **GameButton** (`game-button.tsx`)
Componente genérico para botões principais do jogo.

**Props:**
- `variant?`: 'create' | 'start' | 'back' | 'primary' | 'secondary'
- `onClick?`: função callback
- `children?`: conteúdo customizado (opcional)
- `disabled?`: boolean (opcional)
- `type?`: 'button' | 'submit' | 'reset' (opcional)
- `className?`: classes CSS adicionais (opcional)

**Substitui:**
- `CriarButton` → `<GameButton variant="create" />`
- `IniciarButton` → `<GameButton variant="start" />`
- `VoltarButton` → `<GameButton variant="back" />`

---

## 🎯 Exemplos de Uso

### Exemplo 1: Toolbar de Edição
```tsx
import { ActionButton } from '@/components';

function QuestionToolbar() {
    return (
        <div className={styles.toolbar}>
            <ActionButton 
                action="save" 
                onClick={handleSave} 
                disabled={!isModified}
            />
            <ActionButton 
                action="cancel" 
                onClick={handleCancel} 
            />
        </div>
    );
}
```

### Exemplo 2: Lista com Ações
```tsx
import { ActionButton } from '@/components';

function QuestionList({ questions }) {
    return (
        <div>
            {questions.map(q => (
                <div key={q.id} className={styles.questionItem}>
                    <span>{q.title}</span>
                    <div className={styles.actions}>
                        <ActionButton 
                            action="edit" 
                            onClick={() => handleEdit(q.id)}
                            title="Editar esta questão"
                        />
                        <ActionButton 
                            action="delete" 
                            onClick={() => handleDelete(q.id)}
                            title="Remover questão"
                        />
                    </div>
                </div>
            ))}
            <ActionButton 
                action="add" 
                onClick={handleAddQuestion}
                title="Adicionar nova questão"
            />
        </div>
    );
}
```

### Exemplo 3: Formulário de Sala
```tsx
import { GameButton, ActionButton } from '@/components';

function CreateRoomForm() {
    return (
        <form onSubmit={handleSubmit}>
            <input name="roomName" placeholder="Nome da sala" />
            <input name="pin" placeholder="PIN" />
            
            <div className={styles.formActions}>
                <GameButton 
                    variant="create" 
                    type="submit"
                    disabled={!isValid}
                >
                    CRIAR SALA
                </GameButton>
                <GameButton 
                    variant="back" 
                    onClick={() => router.back()} 
                />
            </div>
        </form>
    );
}
```

### Exemplo 4: Tela de Espera
```tsx
import { GameButton } from '@/components';

function WaitingRoom({ players, onStart, onBack }) {
    const canStart = players.length >= 2;
    
    return (
        <div className={styles.waitingRoom}>
            <h2>Aguardando jogadores...</h2>
            <PlayerList players={players} />
            
            <div className={styles.actions}>
                <GameButton 
                    variant="start"
                    onClick={onStart}
                    disabled={!canStart}
                />
                <GameButton 
                    variant="back"
                    onClick={onBack}
                />
            </div>
        </div>
    );
}
```

### Exemplo 5: Editor de Respostas
```tsx
import { ActionButton } from '@/components';

function AnswerEditor({ answers, onAdd, onEdit, onDelete }) {
    return (
        <div className={styles.answerEditor}>
            {answers.map((answer, index) => (
                <div key={answer.id} className={styles.answer}>
                    <input 
                        value={answer.text} 
                        onChange={(e) => onEdit(answer.id, e.target.value)}
                    />
                    <ActionButton 
                        action="delete"
                        onClick={() => onDelete(answer.id)}
                    />
                </div>
            ))}
            
            <ActionButton 
                action="add"
                onClick={onAdd}
                title="Adicionar resposta"
                disabled={answers.length >= 6}
            />
        </div>
    );
}
```

---

## ✅ Vantagens

1. **Menos código**: Um import em vez de vários
2. **API consistente**: Mesma interface para todos os botões de ação
3. **Type-safe**: TypeScript garante que você use os valores corretos
4. **Manutenível**: Mudanças em um lugar afetam todos os usos
5. **Semântico**: `action="save"` é mais claro que `<SalvarButton />`
6. **Flexível**: Fácil adicionar novas variantes no futuro

---

## 🚀 Como Começar a Usar

1. **Importe os novos componentes:**
```tsx
import { ActionButton, GameButton } from '@/components';
```

2. **Use as props semânticas:**
```tsx
// Em vez de <EditarButton onClick={fn} />
<ActionButton action="edit" onClick={fn} />

// Em vez de <IniciarButton onClick={fn} />
<GameButton variant="start" onClick={fn} />
```

3. **Aproveite os valores padrão:**
```tsx
// Não precisa passar title/children se o padrão servir
<ActionButton action="save" onClick={handleSave} />
// Automaticamente mostra "Salvar" com ícone ✓

<GameButton variant="start" onClick={handleStart} />
// Automaticamente mostra "INICIAR QUIZ"
```

---

## 📚 Documentação Completa

Veja `MIGRATION_GUIDE.md` para:
- Tabela completa de mapeamento
- Exemplos de migração antes/depois
- Patterns de busca e substituição
- Checklist de migração

---

## 🎨 Estilos

Os componentes herdam os estilos dos componentes base:
- `ActionButton` → usa `icon-button.module.css`
- `GameButton` → usa `button.module.css`

Você pode adicionar classes customizadas via prop `className`:
```tsx
<ActionButton 
    action="delete" 
    onClick={handleDelete}
    className={styles.dangerButton}
/>
```

---

## 💡 Dicas

1. **Use tipos TypeScript** para autocomplete:
```tsx
import type { ActionType, GameButtonVariant } from '@/components';

const actions: ActionType[] = ['add', 'edit', 'delete'];
```

2. **Componha facilmente** arrays de botões:
```tsx
const actions = [
    { type: 'edit', handler: handleEdit },
    { type: 'delete', handler: handleDelete }
] as const;

return actions.map(({ type, handler }) => (
    <ActionButton key={type} action={type} onClick={handler} />
));
```

3. **Conditional rendering** simplificado:
```tsx
{isEditing ? (
    <>
        <ActionButton action="save" onClick={handleSave} />
        <ActionButton action="cancel" onClick={handleCancel} />
    </>
) : (
    <ActionButton action="edit" onClick={startEditing} />
)}
```
