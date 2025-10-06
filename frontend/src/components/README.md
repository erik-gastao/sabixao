# 📦 Componentes - Sabixão

## 🎯 Componentes por Ação

### Botões de Ação Específica

| Componente | Ação | Uso | Exemplo |
|------------|------|-----|---------|
| `CriarButton` | Criar | Criar nova entidade | `<CriarButton onClick={handleCriar} />` |
| `EditarButton` | Editar | Ativar modo edição | `<EditarButton onClick={handleEditar} />` |
| `SalvarButton` | Salvar | Salvar alterações | `<SalvarButton onClick={handleSalvar} />` |
| `CancelarButton` | Cancelar | Cancelar operação | `<CancelarButton onClick={handleCancelar} />` |
| `DeletarButton` | Deletar | Remover item | `<DeletarButton onClick={handleDeletar} />` |
| `AdicionarButton` | Adicionar | Adicionar novo item | `<AdicionarButton onClick={handleAdicionar} />` |
| `VoltarButton` | Voltar | Navegação de retorno | `<VoltarButton onClick={handleVoltar} />` |
| `IniciarButton` | Iniciar | Iniciar quiz/jogo | `<IniciarButton onClick={handleIniciar} />` |

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

### Exemplo 1: Página com Voltar e Criar
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

### Exemplo 2: Formulário com Salvar e Cancelar
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

### Exemplo 3: Lista de Salas
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

### Exemplo 4: Lista de Questões
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

## 🔄 Migração de Componentes Antigos

### Antes (Componentes Genéricos)
```tsx
<Button onClick={handleVoltar}>← Voltar</Button>
<Button onClick={handleCriar}>CRIAR</Button>
<IconButton type="edit" onClick={handleEditar} />
<IconButton type="save" onClick={handleSalvar} />
```

### Depois (Componentes Específicos)
```tsx
<VoltarButton onClick={handleVoltar} />
<CriarButton onClick={handleCriar} />
<EditarButton onClick={handleEditar} />
<SalvarButton onClick={handleSalvar} />
```

## ✅ Benefícios

- ✅ **Nomes descritivos**: Cada componente tem nome da sua ação
- ✅ **Auto-documentado**: Código mais legível e fácil de entender
- ✅ **Reutilizável**: Componentes podem ser usados em qualquer lugar
- ✅ **Consistente**: Todos os botões da mesma ação têm o mesmo visual
- ✅ **Manutenível**: Mudanças centralizadas em um único lugar
