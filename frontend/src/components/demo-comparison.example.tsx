/**
 * 🎯 DEMONSTRAÇÃO: Uso dos Componentes Consolidados
 * 
 * Este arquivo mostra a comparação entre o uso dos componentes antigos
 * e os novos componentes genéricos ActionButton e GameButton.
 */

// ====================================================================
// ❌ ANTES - Usando componentes especializados individuais
// ====================================================================

import {
    AdicionarButton,
    EditarButton,
    DeletarButton,
    SalvarButton,
    CancelarButton,
    CriarButton,
    IniciarButton,
    VoltarButton
} from '@/components';

export function QuestionEditorOLD() {
    return (
        <div>
            {/* Cabeçalho com voltar */}
            <header>
                <VoltarButton onClick={() => router.back()} />
                <h1>Editar Questão</h1>
            </header>

            {/* Formulário */}
            <form>
                <input placeholder="Título da questão" />
                
                {/* Ações do formulário */}
                <div className="form-actions">
                    <SalvarButton onClick={handleSave} disabled={!isValid} />
                    <CancelarButton onClick={handleCancel} />
                </div>
            </form>

            {/* Lista de respostas */}
            <div className="answers">
                {answers.map(answer => (
                    <div key={answer.id} className="answer-item">
                        <span>{answer.text}</span>
                        <div className="actions">
                            <EditarButton onClick={() => handleEditAnswer(answer.id)} />
                            <DeletarButton onClick={() => handleDeleteAnswer(answer.id)} />
                        </div>
                    </div>
                ))}
                <AdicionarButton onClick={handleAddAnswer} title="Adicionar Resposta" />
            </div>

            {/* Botão de criar nova questão */}
            <CriarButton onClick={handleCreateNew}>CRIAR NOVA QUESTÃO</CriarButton>
        </div>
    );
}


// ====================================================================
// ✅ DEPOIS - Usando componentes genéricos consolidados
// ====================================================================

import { ActionButton, GameButton } from '@/components';

export function QuestionEditorNEW() {
    return (
        <div>
            {/* Cabeçalho com voltar */}
            <header>
                <GameButton variant="back" onClick={() => router.back()} />
                <h1>Editar Questão</h1>
            </header>

            {/* Formulário */}
            <form>
                <input placeholder="Título da questão" />
                
                {/* Ações do formulário */}
                <div className="form-actions">
                    <ActionButton action="save" onClick={handleSave} disabled={!isValid} />
                    <ActionButton action="cancel" onClick={handleCancel} />
                </div>
            </form>

            {/* Lista de respostas */}
            <div className="answers">
                {answers.map(answer => (
                    <div key={answer.id} className="answer-item">
                        <span>{answer.text}</span>
                        <div className="actions">
                            <ActionButton action="edit" onClick={() => handleEditAnswer(answer.id)} />
                            <ActionButton action="delete" onClick={() => handleDeleteAnswer(answer.id)} />
                        </div>
                    </div>
                ))}
                <ActionButton action="add" onClick={handleAddAnswer} title="Adicionar Resposta" />
            </div>

            {/* Botão de criar nova questão */}
            <GameButton variant="create" onClick={handleCreateNew}>
                CRIAR NOVA QUESTÃO
            </GameButton>
        </div>
    );
}


// ====================================================================
// 📊 COMPARAÇÃO DE IMPORTS
// ====================================================================

/*
ANTES: 8 imports diferentes
import {
    AdicionarButton,      // 1
    EditarButton,         // 2
    DeletarButton,        // 3
    SalvarButton,         // 4
    CancelarButton,       // 5
    CriarButton,          // 6
    IniciarButton,        // 7
    VoltarButton          // 8
} from '@/components';

DEPOIS: 2 imports genéricos
import { ActionButton, GameButton } from '@/components';
*/


// ====================================================================
// 🎯 MAIS EXEMPLOS
// ====================================================================

// Exemplo 1: Toolbar de edição
export function EditToolbar() {
    return (
        <div className="toolbar">
            {/* ANTES */}
            {/* <EditarButton onClick={startEdit} />
                <SalvarButton onClick={save} />
                <CancelarButton onClick={cancel} /> */}
            
            {/* DEPOIS */}
            <ActionButton action="edit" onClick={startEdit} />
            <ActionButton action="save" onClick={save} />
            <ActionButton action="cancel" onClick={cancel} />
        </div>
    );
}

// Exemplo 2: Card de sala
export function RoomCard({ room, onEdit, onDelete, onStart }) {
    return (
        <div className="room-card">
            <h3>{room.name}</h3>
            <p>{room.description}</p>
            
            {/* ANTES */}
            {/* <div className="actions">
                    <EditarButton onClick={onEdit} />
                    <DeletarButton onClick={onDelete} />
                    <IniciarButton onClick={onStart}>INICIAR</IniciarButton>
                </div> */}
            
            {/* DEPOIS */}
            <div className="actions">
                <ActionButton action="edit" onClick={onEdit} />
                <ActionButton action="delete" onClick={onDelete} />
                <GameButton variant="start" onClick={onStart}>INICIAR</GameButton>
            </div>
        </div>
    );
}

// Exemplo 3: Formulário de criação
export function CreateRoomForm({ onSubmit, onCancel, onBack }) {
    return (
        <form onSubmit={onSubmit}>
            {/* ANTES */}
            {/* <header>
                    <VoltarButton onClick={onBack} />
                </header> */}
            
            {/* DEPOIS */}
            <header>
                <GameButton variant="back" onClick={onBack} />
            </header>
            
            <input placeholder="Nome da sala" />
            <input placeholder="PIN da sala" />
            
            {/* ANTES */}
            {/* <div className="actions">
                    <CriarButton type="submit">CRIAR SALA</CriarButton>
                    <CancelarButton onClick={onCancel} />
                </div> */}
            
            {/* DEPOIS */}
            <div className="actions">
                <GameButton variant="create" type="submit">CRIAR SALA</GameButton>
                <ActionButton action="cancel" onClick={onCancel} />
            </div>
        </form>
    );
}

// Exemplo 4: Lista com múltiplas ações
export function QuestionList({ questions }) {
    return (
        <div className="question-list">
            {questions.map(q => (
                <div key={q.id} className="question-item">
                    <span>{q.title}</span>
                    
                    {/* ANTES */}
                    {/* <EditarButton onClick={() => handleEdit(q.id)} />
                        <DeletarButton onClick={() => handleDelete(q.id)} /> */}
                    
                    {/* DEPOIS */}
                    <ActionButton action="edit" onClick={() => handleEdit(q.id)} />
                    <ActionButton action="delete" onClick={() => handleDelete(q.id)} />
                </div>
            ))}
            
            {/* ANTES */}
            {/* <AdicionarButton onClick={handleAdd} title="Nova Questão" /> */}
            
            {/* DEPOIS */}
            <ActionButton action="add" onClick={handleAdd} title="Nova Questão" />
        </div>
    );
}


// ====================================================================
// ✨ BENEFÍCIOS DEMONSTRADOS
// ====================================================================

/*
1. REDUÇÃO DE IMPORTS
   - Antes: 8 imports individuais
   - Depois: 2 imports genéricos
   - Redução: 75%

2. API MAIS SEMÂNTICA
   - Antes: <EditarButton onClick={fn} />
   - Depois: <ActionButton action="edit" onClick={fn} />
   - Mais descritivo e autodocumentado

3. TYPE SAFETY
   - TypeScript autocomplete para 'action' e 'variant'
   - Erros detectados em tempo de desenvolvimento
   - IntelliSense mostra opções válidas

4. MANUTENÇÃO
   - Mudanças em ActionButton afetam todos os botões de ação
   - Mudanças em GameButton afetam todos os botões principais
   - Menos arquivos para manter

5. CONSISTÊNCIA
   - Mesma API para ações similares
   - Padrão unificado em todo o projeto
   - Fácil onboarding de novos desenvolvedores

6. FLEXIBILIDADE
   - Fácil adicionar novas ações: apenas adicionar ao type
   - Fácil customizar títulos via prop
   - Suporte a todas as props de Button/IconButton
*/
