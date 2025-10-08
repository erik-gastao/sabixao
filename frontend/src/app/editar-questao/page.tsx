"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/button';
import Input from '../../components/input';
import QuestionTypeSelector from '../../components/question-type-selector';
import AnswerOptionsEditor from '../../components/answer-options-editor';
import styles from './editar-questao.module.css';

type QuestionType = 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso';

interface Option {
    id: number;
    text: string;
    isCorrect: boolean;
}

export default function EditarQuestao() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Pega os parâmetros da URL (id da sala e id da questão)
    const salaId = searchParams.get('salaId');
    const questaoId = searchParams.get('questaoId');

    // Estado da questão
    const [questionType, setQuestionType] = useState<QuestionType>('escolha-unica');
    const [questionText, setQuestionText] = useState('');
    const [timeLimit, setTimeLimit] = useState(30);
    const [options, setOptions] = useState<Option[]>([]);

    const handleVoltar = () => {
        if (salaId) {
            router.push(`/sala/${salaId}`);
        } else {
            router.push('/lista-salas');
        }
    };

    const handleSalvar = () => {
        console.log('Salvando questão:', {
            salaId,
            questaoId,
            questionType,
            questionText,
            timeLimit,
            options
        });
        // Aqui você faria a chamada para a API
        handleVoltar();
    };

    const handleTypeChange = (type: QuestionType) => {
        setQuestionType(type);
        setOptions([]); // Reseta as opções ao mudar o tipo
        console.log('Tipo de pergunta selecionado:', type);
    };

    const handleOptionsChange = (updatedOptions: Option[]) => {
        setOptions(updatedOptions);
    };

    return (
        <div className={styles.editarQuestaoBackground}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/logo.png"
                    alt="Sabixão"
                    width={200}
                    height={200}
                    priority
                />
            </div>

            {/* Botão Voltar */}
            <div className={styles.voltarContainer}>
                <Button onClick={handleVoltar}>
                    ← Voltar
                </Button>
            </div>
            
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>
                    {questaoId === 'new' ? 'Nova Questão' : `Editar Questão ${questaoId}`}
                </h1>
                
                {/* Seletor de tipo */}
                <QuestionTypeSelector 
                    selectedType={questionType}
                    onTypeChange={handleTypeChange}
                />

                {/* Texto da pergunta */}
                <div className={styles.inputContainer}>
                    <Input 
                        label="Texto da pergunta"
                        type="text"
                        value={questionText}
                        onChange={(e) => setQuestionText(e.target.value)}
                        placeholder="Digite sua pergunta aqui..."
                    />
                </div>

                {/* Tempo limite */}
                <div className={styles.inputContainer}>
                    <Input 
                        label="Tempo limite (segundos)"
                        type="number"
                        value={timeLimit}
                        onChange={(e) => setTimeLimit(Number(e.target.value))}
                    />
                </div>

                {/* Opções de resposta */}
                <AnswerOptionsEditor 
                    type={questionType}
                    options={options}
                    onOptionsChange={handleOptionsChange}
                />

                {/* Botões de ação */}
                <div className={styles.actionsContainer}>
                    <Button onClick={handleSalvar} className={styles.saveButton}>
                        SALVAR
                    </Button>
                </div>
            </div>
        </div>
    );
}
