# 🔍 Diagnóstico de Erros 500

## 🎯 Causas Comuns de Erro 500 no Next.js

### 1. **Módulos Não Encontrados**
Componentes ou arquivos CSS referenciados mas não existentes.

### 2. **Erros de Server Components vs Client Components**
Mistura incorreta de componentes de servidor e cliente.

### 3. **Barrel Exports com Problemas**
Imports circulares ou exports incorretos.

---

## 🔍 Verificações Necessárias

### ✅ Passo 1: Verificar se todos os componentes existem

Execute no terminal:
```bash
cd C:\sabixao\frontend
npm run dev
```

Se houver erro, ele aparecerá no terminal.

---

### ✅ Passo 2: Verificar no navegador

1. Abra o navegador em `http://localhost:3000`
2. Abra o Console (F12)
3. Veja qual página dá erro 500
4. Veja a mensagem de erro específica

---

### ✅ Passo 3: Verificar imports circulares

Possível problema: barrel exports podem ter imports circulares.

**Teste:** Temporariamente, tente importar diretamente:
```tsx
// Em vez de:
import { Button } from '@/components';

// Tente:
import Button from '@/components/buttons/button';
```

Se funcionar, o problema está no barrel export.

---

## 🔧 Soluções Possíveis

### Solução 1: Limpar cache do Next.js
```bash
cd C:\sabixao\frontend
Remove-Item -Recurse -Force .next
npm run dev
```

### Solução 2: Reinstalar dependências
```bash
cd C:\sabixao\frontend
Remove-Item -Recurse -Force node_modules
npm install
npm run dev
```

### Solução 3: Verificar barrel exports

Verificar se `components/index.ts` está correto:
```typescript
export * from './buttons';
export * from './inputs';
export * from './cards';
export * from './quiz';
export * from './icons';
export * from './ui';
```

E cada subpasta tem seu próprio `index.ts`.

---

## 📊 Checklist de Diagnóstico

Execute isso no terminal do VS Code:

```powershell
# 1. Verificar se os diretórios existem
Test-Path "C:\sabixao\frontend\src\components\buttons"
Test-Path "C:\sabixao\frontend\src\components\inputs"
Test-Path "C:\sabixao\frontend\src\components\cards"
Test-Path "C:\sabixao\frontend\src\components\quiz"
Test-Path "C:\sabixao\frontend\src\components\icons"
Test-Path "C:\sabixao\frontend\src\components\ui"

# 2. Verificar se os index.ts existem
Test-Path "C:\sabixao\frontend\src\components\buttons\index.ts"
Test-Path "C:\sabixao\frontend\src\components\inputs\index.ts"
Test-Path "C:\sabixao\frontend\src\components\cards\index.ts"
Test-Path "C:\sabixao\frontend\src\components\quiz\index.ts"
Test-Path "C:\sabixao\frontend\src\components\icons\index.ts"
Test-Path "C:\sabixao\frontend\src\components\ui\index.ts"
Test-Path "C:\sabixao\frontend\src\components\index.ts"

# 3. Listar conteúdo de buttons
Get-ChildItem "C:\sabixao\frontend\src\components\buttons" | Select-Object Name
```

---

## 🎯 Próximos Passos

1. **Execute o checklist acima**
2. **Veja o erro específico no navegador**
3. **Compartilhe a mensagem de erro exata**

Assim poderei ajudar com a solução específica!

---

## 💡 Dica

O erro 500 aparece em **runtime**, não em tempo de compilação.

Para ver o erro real:
1. Abra o navegador
2. Pressione F12
3. Vá em "Console" ou "Network"
4. Tente acessar a página que dá erro
5. Veja a mensagem de erro detalhada

**Cole aqui a mensagem de erro que aparecer!**
