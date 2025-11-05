# 📁 Guia de Organização de Componentes

## 🎯 Estrutura Organizada por Categoria

O projeto Sabixão agora possui uma estrutura de componentes organizada em **pastas por categoria**, facilitando a navegação, manutenção e escalabilidade do código.

---

## 📂 Estrutura de Pastas

```
src/components/
├── buttons/              🔘 Todos os componentes de botão
│   ├── index.ts         (barrel export)
│   ├── action-button.tsx
│   ├── game-button.tsx
│   ├── button.tsx
│   ├── icon-button.tsx
│   ├── adicionar-button.tsx
│   ├── editar-button.tsx
│   ├── deletar-button.tsx
│   ├── salvar-button.tsx
│   ├── cancelar-button.tsx
│   ├── criar-button.tsx
│   ├── iniciar-button.tsx
│   ├── voltar-button.tsx
│   ├── button-criar-sala.tsx
│   ├── button-adicionar-sala.tsx
│   ├── delete-icon-button.tsx
│   └── *.module.css
│
├── inputs/               📝 Componentes de entrada de dados
│   ├── index.ts
│   ├── input.tsx
│   ├── editable-input.tsx
│   └── *.module.css
│
├── cards/                🎴 Componentes tipo card/cartão
│   ├── index.ts
│   ├── question-type-card.tsx
│   ├── card-resposta.tsx
│   └── *.module.css
│
├── quiz/                 🎮 Componentes específicos de quiz/jogo
│   ├── index.ts
│   ├── timer.tsx
│   ├── question-type-selector.tsx
│   ├── answer-options-editor.tsx
│   └── *.module.css
│
├── icons/                🎨 Componentes de ícones
│   ├── index.ts
│   ├── icone-tipo-questao.tsx
│   └── *.module.css
│
├── ui/                   🎨 Componentes de interface geral
│   ├── index.ts
│   ├── language.tsx
│   └── *.module.css
│
├── index.ts              📦 Barrel export principal
├── README.md             📚 Documentação geral
├── MIGRATION_GUIDE.md    🔄 Guia de migração de botões
├── BUTTON_EXAMPLES.md    💡 Exemplos de uso de botões
├── CONSOLIDATION_SUMMARY.md  📊 Resumo da consolidação
└── ORGANIZATION_GUIDE.md 📁 Este arquivo
```

---

## 🎯 Categorias de Componentes

### 🔘 **buttons/** - Componentes de Botão
**Quando usar:** Qualquer componente que seja clicável e execute uma ação.

**Conteúdo:**
- Botões genéricos (`ActionButton`, `GameButton`)
- Botões base (`Button`, `IconButton`)
- Botões legados especializados
- Cards clicáveis que funcionam como botões

**Exemplos:**
```tsx
import { ActionButton, GameButton, Button } from '@/components';
```

---

### 📝 **inputs/** - Componentes de Input
**Quando usar:** Componentes para entrada de dados pelo usuário.

**Conteúdo:**
- Campos de texto
- Inputs editáveis
- Inputs especializados

**Exemplos:**
```tsx
import { Input, EditableInput } from '@/components';
```

---

### 🎴 **cards/** - Componentes de Card
**Quando usar:** Componentes que exibem informações em formato de cartão (não clicáveis como botão principal).

**Conteúdo:**
- Cards de questão
- Cards de resposta
- Cards informativos

**Exemplos:**
```tsx
import { QuestionTypeCard, CardResposta } from '@/components';
```

---

### 🎮 **quiz/** - Componentes de Quiz
**Quando usar:** Componentes específicos da funcionalidade de quiz/jogo.

**Conteúdo:**
- Timer/cronômetro
- Seletores de tipo de questão
- Editores de opções de resposta
- Componentes de gameplay

**Exemplos:**
```tsx
import { Timer, QuestionTypeSelector, AnswerOptionsEditor } from '@/components';
```

---

### 🎨 **icons/** - Componentes de Ícones
**Quando usar:** Componentes que são primariamente ícones ou visualizações gráficas.

**Conteúdo:**
- Ícones customizados
- Ícones SVG complexos
- Componentes visuais sem interação

**Exemplos:**
```tsx
import { IconeTipoQuestao } from '@/components';
```

---

### 🎨 **ui/** - Componentes de UI Geral
**Quando usar:** Componentes de interface que não se encaixam em outras categorias.

**Conteúdo:**
- Seletores de idioma
- Componentes de layout
- Utilitários de UI

**Exemplos:**
```tsx
import { Language } from '@/components';
```

---

## 📦 Como Importar Componentes

### ✅ Importação Direta (Recomendado)
```tsx
// Importa do barrel export principal
import { Button, Input, Timer, Language } from '@/components';

// Todos os componentes disponíveis de todas as categorias
import {
    // Botões
    ActionButton, GameButton, Button, IconButton,
    
    // Inputs
    Input, EditableInput,
    
    // Cards
    QuestionTypeCard, CardResposta,
    
    // Quiz
    Timer, QuestionTypeSelector, AnswerOptionsEditor,
    
    // Ícones
    IconeTipoQuestao,
    
    // UI
    Language
} from '@/components';
```

### ✅ Importação por Categoria (Quando necessário)
```tsx
// Importa apenas de uma categoria específica
import { ActionButton, GameButton } from '@/components/buttons';
import { Input } from '@/components/inputs';
import { Timer } from '@/components/quiz';
```

---

## 🎯 Convenções de Nomenclatura

### Nomes de Arquivos
- **Componentes:** `kebab-case.tsx` (ex: `action-button.tsx`)
- **Estilos:** `kebab-case.module.css` (ex: `action-button.module.css`)
- **Barrel exports:** `index.ts`

### Nomes de Componentes
- **PascalCase:** `ActionButton`, `GameButton`, `Timer`
- **Descritivos:** O nome deve indicar claramente a função

### Organização de Arquivos
```
component-name.tsx
component-name.module.css
```
Sempre juntos na mesma pasta.

---

## 🔄 Como Adicionar Novos Componentes

### 1. Identificar a Categoria
Determine em qual pasta o componente se encaixa:
- É um botão? → `buttons/`
- É um input? → `inputs/`
- É um card? → `cards/`
- É específico de quiz? → `quiz/`
- É um ícone? → `icons/`
- É UI geral? → `ui/`

### 2. Criar o Componente
```tsx
// src/components/buttons/my-button.tsx
"use client";
import styles from './my-button.module.css';

interface MyButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

export default function MyButton({ onClick, children }: MyButtonProps) {
    return (
        <button className={styles.myButton} onClick={onClick}>
            {children}
        </button>
    );
}
```

### 3. Criar o CSS Module
```css
/* src/components/buttons/my-button.module.css */
.myButton {
    /* estilos */
}
```

### 4. Adicionar ao Barrel Export
```ts
// src/components/buttons/index.ts
export { default as MyButton } from './my-button';
```

### 5. Pronto! Usar o Componente
```tsx
import { MyButton } from '@/components';
```

---

## 🎨 Padrões de Estrutura de Componentes

### Componente Simples
```tsx
"use client";
import styles from './component.module.css';

interface ComponentProps {
    // props
}

export default function Component({ ...props }: ComponentProps) {
    return (
        <div className={styles.container}>
            {/* conteúdo */}
        </div>
    );
}
```

### Componente com Tipos Exportados
```tsx
"use client";
import styles from './component.module.css';

export type VariantType = 'primary' | 'secondary';

interface ComponentProps {
    variant: VariantType;
}

export default function Component({ variant }: ComponentProps) {
    return <div>{/* conteúdo */}</div>;
}
```

---

## 📊 Benefícios da Organização

### ✅ Navegação Facilitada
- Encontre componentes rapidamente pela categoria
- Estrutura lógica e intuitiva
- Menos tempo procurando arquivos

### ✅ Manutenção Simplificada
- Componentes relacionados ficam juntos
- Fácil identificar responsabilidades
- Mudanças em uma categoria são isoladas

### ✅ Escalabilidade
- Fácil adicionar novos componentes
- Estrutura suporta crescimento
- Padrões claros para novos desenvolvedores

### ✅ Imports Limpos
- Barrel exports simplificam importações
- Mesma sintaxe: `import { X } from '@/components'`
- TypeScript autocomplete funciona perfeitamente

### ✅ Reutilização
- Componentes bem organizados são mais fáceis de reutilizar
- Descoberta de componentes existentes
- Evita duplicação

---

## 🔍 Buscar Componentes

### Por Nome
Use o file search do VS Code: `Ctrl+P` e digite o nome

### Por Categoria
Navegue pelas pastas:
```
src/components/buttons/    - Botões
src/components/inputs/     - Inputs
src/components/cards/      - Cards
src/components/quiz/       - Quiz
src/components/icons/      - Ícones
src/components/ui/         - UI
```

### Por Funcionalidade
Use o grep/search: `Ctrl+Shift+F`

---

## 🚀 Migração de Código Existente

### Atualizar Imports
A estrutura antiga ainda funciona graças aos barrel exports:

```tsx
// ✅ Continua funcionando
import { Button } from '@/components';

// ✅ Também funciona
import { Button } from '@/components/buttons';
```

### Não há Breaking Changes
Todos os imports existentes continuam funcionando!

---

## 📚 Documentação Relacionada

- **README.md** - Visão geral dos componentes
- **MIGRATION_GUIDE.md** - Migração de botões consolidados
- **BUTTON_EXAMPLES.md** - Exemplos de uso de botões
- **CONSOLIDATION_SUMMARY.md** - Resumo da consolidação

---

## 🎓 Quick Reference

### Estrutura Rápida
```
buttons/    → Botões e ações clicáveis
inputs/     → Campos de entrada
cards/      → Componentes tipo card
quiz/       → Específicos de quiz/jogo
icons/      → Ícones e elementos visuais
ui/         → UI geral e utilitários
```

### Importação Padrão
```tsx
import { ComponentName } from '@/components';
```

### Adicionar Novo Componente
1. Criar em `src/components/[categoria]/component.tsx`
2. Criar CSS em `src/components/[categoria]/component.module.css`
3. Adicionar export em `src/components/[categoria]/index.ts`
4. Usar: `import { Component } from '@/components';`

---

## ✨ Resultado

Estrutura de componentes **organizada**, **escalável** e **fácil de manter**!

🎉 Happy organizing! 🎉
