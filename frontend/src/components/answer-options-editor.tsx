"use client";
import { useState } from 'react';
import styles from './answer-options-editor.module.css';

interface Option {
    id: number;
    text: string;
    isCorrect: boolean;
}

interface AnswerOptionsEditorProps {
    type: 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso';
    options?: Option[];
    onOptionsChange: (options: Option[]) => void;
}

export default function AnswerOptionsEditor({
    type,
    options = [],
    onOptionsChange
}: AnswerOptionsEditorProps) {
    const [localOptions, setLocalOptions] = useState<Option[]>(
        options.length > 0 ? options : getDefaultOptions(type)
    );

    function getDefaultOptions(questionType: 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso'): Option[] {
        if (questionType === 'verdadeiro-falso') {
            return [
                { id: 1, text: 'Verdadeiro', isCorrect: true },
                { id: 2, text: 'Falso', isCorrect: false }
            ];
        }
        return [
            { id: 1, text: '', isCorrect: false },
            { id: 2, text: '', isCorrect: false },
            { id: 3, text: '', isCorrect: false },
            { id: 4, text: '', isCorrect: false }
        ];
    }

    const getSymbol = (index: number) => {
        const symbols = [
            { shape: 'circle', color: '#EF4444' }, // Vermelho - Círculo
            { shape: 'triangle', color: '#3B82F6' }, // Azul - Triângulo
            { shape: 'star', color: '#5A993C' }, // Verde - Estrela
            { shape: 'square', color: '#F59E0B' } // Amarelo - Quadrado
        ];
        return symbols[index % 4];
    };

    const renderSymbol = (index: number) => {
        const symbol = getSymbol(index);
        
        switch (symbol.shape) {
            case 'circle':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40">
                        <circle cx="20" cy="20" r="15" fill="white" />
                    </svg>
                );
            case 'triangle':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40">
                        <polygon points="20,5 35,32 5,32" fill="white" />
                    </svg>
                );
            case 'star':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40">
                        <polygon 
                            points="20,2 24,15 38,15 26,23 30,36 20,28 10,36 14,23 2,15 16,15" 
                            fill="white" 
                        />
                    </svg>
                );
            case 'square':
                return (
                    <svg width="40" height="40" viewBox="0 0 40 40">
                        <rect x="8" y="8" width="24" height="24" rx="3" fill="white" />
                    </svg>
                );
        }
    };

    const handleTextChange = (id: number, text: string) => {
        const updated = localOptions.map(opt =>
            opt.id === id ? { ...opt, text } : opt
        );
        setLocalOptions(updated);
        onOptionsChange(updated);
    };

    const handleCorrectToggle = (id: number) => {
        let updated;
        if (type === 'escolha-unica' || type === 'verdadeiro-falso') {
            // Apenas uma opção correta
            updated = localOptions.map(opt => ({
                ...opt,
                isCorrect: opt.id === id
            }));
        } else {
            // Múltiplas opções corretas
            updated = localOptions.map(opt =>
                opt.id === id ? { ...opt, isCorrect: !opt.isCorrect } : opt
            );
        }
        setLocalOptions(updated);
        onOptionsChange(updated);
    };

    const handleAddOption = () => {
        if (type === 'verdadeiro-falso') return;
        const newOption: Option = {
            id: Math.max(...localOptions.map(o => o.id)) + 1,
            text: '',
            isCorrect: false
        };
        const updated = [...localOptions, newOption];
        setLocalOptions(updated);
        onOptionsChange(updated);
    };

    const handleRemoveOption = (id: number) => {
        if (type === 'verdadeiro-falso' || localOptions.length <= 2) return;
        const updated = localOptions.filter(opt => opt.id !== id);
        setLocalOptions(updated);
        onOptionsChange(updated);
    };

    if (type === 'verdadeiro-falso') {
        return (
            <div className={styles.container}>
                <label className={styles.label}>Resposta Correta:</label>
                <div className={styles.trueFalseContainer}>
                    {localOptions.map((option) => (
                        <button
                            key={option.id}
                            type="button"
                            onClick={() => handleCorrectToggle(option.id)}
                            className={`${styles.trueFalseOption} ${option.isCorrect ? styles.selected : ''}`}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <label className={styles.label}>
                Opções de Resposta {type === 'multipla-escolha' && '(marque todas as corretas)'}:
            </label>
            <div className={styles.optionsList}>
                {localOptions.map((option, index) => (
                    <div key={option.id} className={styles.optionRow}>
                        <div 
                            className={styles.symbolContainer}
                            style={{ backgroundColor: getSymbol(index).color }}
                        >
                            {renderSymbol(index)}
                        </div>
                        <input
                            type="text"
                            value={option.text}
                            onChange={(e) => handleTextChange(option.id, e.target.value)}
                            placeholder={`Opção ${index + 1}`}
                            className={styles.optionInput}
                        />
                        <button
                            type="button"
                            onClick={() => handleCorrectToggle(option.id)}
                            className={`${styles.correctButton} ${option.isCorrect ? styles.correct : ''}`}
                            title={option.isCorrect ? 'Resposta correta' : 'Marcar como correta'}
                        >
                            {option.isCorrect ? '✓' : '○'}
                        </button>
                        {localOptions.length > 2 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveOption(option.id)}
                                className={styles.removeButton}
                                title="Remover opção"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                ))}
            </div>
            {localOptions.length < 4 && (
                <button
                    type="button"
                    onClick={handleAddOption}
                    className={styles.addButton}
                >
                    + Adicionar Opção
                </button>
            )}
        </div>
    );
}
