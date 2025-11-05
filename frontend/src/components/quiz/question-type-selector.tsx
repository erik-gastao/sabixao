"use client";
import { useState } from 'react';
import styles from './question-type-selector.module.css';

type QuestionType = 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso';

interface QuestionTypeSelectorProps {
    selectedType?: QuestionType;
    onTypeChange: (type: QuestionType) => void;
}

export default function QuestionTypeSelector({
    selectedType = 'escolha-unica',
    onTypeChange
}: QuestionTypeSelectorProps) {
    const [selected, setSelected] = useState<QuestionType>(selectedType);

    const handleTypeClick = (type: QuestionType) => {
        setSelected(type);
        onTypeChange(type);
    };

    const types = [
        {
            id: 'escolha-unica' as QuestionType,
            label: 'Escolha única',
            icon: (
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                    <rect x="10" y="10" width="80" height="80" rx="15" stroke="currentColor" strokeWidth="6"/>
                    <path d="M30 50 L45 65 L70 35" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        },
        {
            id: 'multipla-escolha' as QuestionType,
            label: 'Múltipla escolha',
            icon: (
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                    <rect x="10" y="10" width="35" height="35" rx="8" stroke="currentColor" strokeWidth="5"/>
                    <path d="M20 27 L27 34 L38 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    <rect x="55" y="10" width="35" height="35" rx="8" stroke="currentColor" strokeWidth="5"/>
                    <path d="M65 27 L72 34 L83 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    <rect x="10" y="55" width="35" height="35" rx="8" stroke="currentColor" strokeWidth="5"/>
                    <rect x="55" y="55" width="35" height="35" rx="8" stroke="currentColor" strokeWidth="5"/>
                </svg>
            )
        },
        {
            id: 'verdadeiro-falso' as QuestionType,
            label: 'Verdadeiro ou Falso',
            icon: (
                <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6"/>
                    <path d="M30 50 L45 65 L70 40" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            )
        }
    ];

    return (
        <div className={styles.container}>
            <label className={styles.label}>Tipo de Pergunta:</label>
            <div className={styles.typesContainer}>
                {types.map((type) => (
                    <button
                        key={type.id}
                        type="button"
                        onClick={() => handleTypeClick(type.id)}
                        className={`${styles.typeCard} ${selected === type.id ? styles.selected : ''}`}
                    >
                        <div className={styles.iconWrapper}>
                            {type.icon}
                        </div>
                        <span className={styles.typeLabel}>{type.label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
