# 🔄 Guia de Migração - Botões Consolidados

## 📦 Novos Componentes Genéricos

Este guia ajuda a migrar do uso dos botões especializados antigos para os novos componentes genéricos `ActionButton` e `GameButton`.

---

## 🎯 ActionButton

### Substitui
- `AdicionarButton` → `<ActionButton action="add" />`
- `EditarButton` → `<ActionButton action="edit" />`
- `DeletarButton` → `<ActionButton action="delete" />`
- `SalvarButton` → `<ActionButton action="save" />`
- `CancelarButton` → `<ActionButton action="cancel" />`

### Exemplos de Migração

#### ✅ ANTES
```tsx
import { AdicionarButton } from '@/components';

<AdicionarButton 
    onClick={handleAdd}
    title="Adicionar Questão"
    disabled={false}
/>
```

#### ✅ DEPOIS
```tsx
import { ActionButton } from '@/components';

<ActionButton 
    action="add"
    onClick={handleAdd}
    title="Adicionar Questão"
    disabled={false}
/>
```

---

#### ✅ ANTES
```tsx
import { EditarButton, DeletarButton } from '@/components';

<div>
    <EditarButton onClick={handleEdit} />
    <DeletarButton onClick={handleDelete} />
</div>
```

#### ✅ DEPOIS
```tsx
import { ActionButton } from '@/components';

<div>
    <ActionButton action="edit" onClick={handleEdit} />
    <ActionButton action="delete" onClick={handleDelete} />
</div>
```

---

#### ✅ ANTES
```tsx
import { SalvarButton, CancelarButton } from '@/components';

<div className={styles.actions}>
    <SalvarButton onClick={handleSave} disabled={!isValid} />
    <CancelarButton onClick={handleCancel} />
</div>
```

#### ✅ DEPOIS
```tsx
import { ActionButton } from '@/components';

<div className={styles.actions}>
    <ActionButton action="save" onClick={handleSave} disabled={!isValid} />
    <ActionButton action="cancel" onClick={handleCancel} />
</div>
```

---

## 🎮 GameButton

### Substitui
- `CriarButton` → `<GameButton variant="create" />`
- `IniciarButton` → `<GameButton variant="start" />`
- `VoltarButton` → `<GameButton variant="back" />`

### Exemplos de Migração

#### ✅ ANTES
```tsx
import { CriarButton } from '@/components';

<CriarButton onClick={handleCreate}>
    CRIAR SALA
</CriarButton>
```

#### ✅ DEPOIS
```tsx
import { GameButton } from '@/components';

<GameButton variant="create" onClick={handleCreate}>
    CRIAR SALA
</GameButton>

// OU usando o texto padrão
<GameButton variant="create" onClick={handleCreate} />
// Renderiza: "CRIAR"
```

---

#### ✅ ANTES
```tsx
import { IniciarButton } from '@/components';

<IniciarButton onClick={handleStart} disabled={players.length === 0} />
```

#### ✅ DEPOIS
```tsx
import { GameButton } from '@/components';

<GameButton 
    variant="start" 
    onClick={handleStart} 
    disabled={players.length === 0} 
/>
// Renderiza: "INICIAR QUIZ"
```

---

#### ✅ ANTES
```tsx
import { VoltarButton } from '@/components';

<VoltarButton onClick={() => router.back()} />
```

#### ✅ DEPOIS
```tsx
import { GameButton } from '@/components';

<GameButton variant="back" onClick={() => router.back()} />
// Renderiza: "← Voltar"
```

---

## 🚀 Casos de Uso Avançados

### Múltiplas Ações
```tsx
import { ActionButton, GameButton } from '@/components';

function QuestionCard({ question, onEdit, onDelete }) {
    return (
        <div className={styles.card}>
            <h3>{question.title}</h3>
            <div className={styles.actions}>
                <ActionButton action="edit" onClick={onEdit} />
                <ActionButton action="delete" onClick={onDelete} />
            </div>
        </div>
    );
}
```

### Formulário Completo
```tsx
import { ActionButton, GameButton } from '@/components';

function QuestionForm({ onSave, onCancel, isValid }) {
    return (
        <form onSubmit={onSave}>
            {/* ... campos do formulário ... */}
            
            <div className={styles.formActions}>
                <GameButton variant="create" type="submit" disabled={!isValid}>
                    SALVAR QUESTÃO
                </GameButton>
                <ActionButton action="cancel" onClick={onCancel} />
            </div>
        </form>
    );
}
```

### Botão Customizado
```tsx
import { GameButton } from '@/components';

// Quando nenhuma variante padrão se aplica
<GameButton onClick={handleCustomAction} className={styles.customButton}>
    AÇÃO PERSONALIZADA
</GameButton>
```

---

## 📋 Checklist de Migração

Para cada arquivo que usa botões antigos:

- [ ] Importar `ActionButton` e/ou `GameButton` de `@/components`
- [ ] Substituir componentes antigos pela prop `action` ou `variant` apropriada
- [ ] Verificar se `title`/`children` ainda são necessários (muitos têm valores padrão)
- [ ] Remover imports dos botões antigos
- [ ] Testar funcionalidade (onClick, disabled, etc.)
- [ ] Verificar estilos visuais

---

## 🎨 Referência Rápida de Props

### ActionButton
```typescript
interface ActionButtonProps {
    action: 'add' | 'edit' | 'delete' | 'save' | 'cancel';
    onClick: () => void;
    title?: string;        // Opcional - usa default se não fornecido
    disabled?: boolean;    // Opcional - default: false
    className?: string;    // Opcional - classes CSS adicionais
}
```

**Títulos padrão:**
- `add` → "Adicionar"
- `edit` → "Editar"
- `delete` → "Deletar"
- `save` → "Salvar"
- `cancel` → "Cancelar"

### GameButton
```typescript
interface GameButtonProps {
    variant?: 'create' | 'start' | 'back' | 'primary' | 'secondary';
    onClick?: () => void;
    children?: React.ReactNode;  // Opcional - usa default se não fornecido
    disabled?: boolean;          // Opcional - default: false
    type?: 'button' | 'submit' | 'reset';  // Opcional - default: 'button'
    className?: string;          // Opcional - classes CSS adicionais
}
```

**Conteúdo padrão:**
- `create` → "CRIAR"
- `start` → "INICIAR QUIZ"
- `back` → "← Voltar"
- `primary` → "CONFIRMAR"
- `secondary` → "CANCELAR"

---

## 🔍 Buscar e Substituir (Find & Replace)

Use estes padrões para acelerar a migração:

### Regex para encontrar imports antigos
```regex
import\s+\{\s*(AdicionarButton|EditarButton|DeletarButton|SalvarButton|CancelarButton|CriarButton|IniciarButton|VoltarButton)\s*\}
```

### Substituições simples
- `<AdicionarButton` → `<ActionButton action="add"`
- `<EditarButton` → `<ActionButton action="edit"`
- `<DeletarButton` → `<ActionButton action="delete"`
- `<SalvarButton` → `<ActionButton action="save"`
- `<CancelarButton` → `<ActionButton action="cancel"`
- `<CriarButton` → `<GameButton variant="create"`
- `<IniciarButton` → `<GameButton variant="start"`
- `<VoltarButton` → `<GameButton variant="back"`

---

## 💡 Benefícios da Migração

✅ **Menos imports** - Um componente em vez de muitos  
✅ **API consistente** - Mesma interface para ações similares  
✅ **IntelliSense melhorado** - TypeScript autocomplete para `action` e `variant`  
✅ **Manutenção simplificada** - Mudanças em um lugar afetam todos os botões  
✅ **Bundle menor** - Menos código duplicado  
✅ **Documentação clara** - JSDoc em todos os componentes  

---

## ⚠️ Notas Importantes

1. **Compatibilidade mantida**: Os componentes antigos ainda funcionam, então você pode migrar gradualmente.

2. **Sem breaking changes**: A API dos componentes antigos não mudou, então código existente continua funcionando.

3. **TypeScript**: Os novos componentes têm tipagem completa, então erros serão detectados em tempo de desenvolvimento.

4. **CSS**: Todos os componentes usam os mesmos estilos base (`icon-button.module.css` e `button.module.css`).

---

## 🎯 Exemplo Completo de Migração

### ANTES (página de edição de questão)
```tsx
import { 
    SalvarButton, 
    CancelarButton, 
    AdicionarButton, 
    DeletarButton 
} from '@/components';

export default function EditarQuestao() {
    return (
        <div>
            <form>
                {/* ... */}
                <SalvarButton onClick={handleSave} />
                <CancelarButton onClick={handleCancel} />
            </form>

            <div className={styles.answers}>
                {answers.map(answer => (
                    <div key={answer.id}>
                        {answer.text}
                        <DeletarButton onClick={() => handleDelete(answer.id)} />
                    </div>
                ))}
                <AdicionarButton onClick={handleAddAnswer} />
            </div>
        </div>
    );
}
```

### DEPOIS
```tsx
import { ActionButton, GameButton } from '@/components';

export default function EditarQuestao() {
    return (
        <div>
            <form>
                {/* ... */}
                <ActionButton action="save" onClick={handleSave} />
                <ActionButton action="cancel" onClick={handleCancel} />
            </form>

            <div className={styles.answers}>
                {answers.map(answer => (
                    <div key={answer.id}>
                        {answer.text}
                        <ActionButton 
                            action="delete" 
                            onClick={() => handleDelete(answer.id)} 
                        />
                    </div>
                ))}
                <ActionButton action="add" onClick={handleAddAnswer} />
            </div>
        </div>
    );
}
```

**Resultado:** 4 imports → 2 imports, código mais limpo e semântico! ✨
