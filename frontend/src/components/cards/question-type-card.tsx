"use client";
import styles from './question-type-card.module.css';

interface QuestionTypeCardProps {
    questionNumber: number;
    totalQuestions: number;
    type: 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso';
    onAnimationComplete?: () => void;
}

export default function QuestionTypeCard({
    questionNumber,
    totalQuestions,
    type,
    onAnimationComplete
}: QuestionTypeCardProps) {
    const getTypeText = () => {
        switch (type) {
            case 'escolha-unica':
                return 'Escolha única';
            case 'multipla-escolha':
                return 'Múltipla escolha';
            case 'verdadeiro-falso':
                return 'Verdadeiro ou Falso';
            default:
                return 'Escolha única';
        }
    };

    const getIcon = () => {
        switch (type) {
            case 'escolha-unica':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                        <rect x="10" y="10" width="80" height="80" rx="15" stroke="white" strokeWidth="6"/>
                        <path d="M30 50 L45 65 L70 35" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
            case 'multipla-escolha':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                        <rect x="10" y="10" width="35" height="35" rx="8" stroke="white" strokeWidth="5"/>
                        <path d="M20 27 L27 34 L38 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        <rect x="55" y="10" width="35" height="35" rx="8" stroke="white" strokeWidth="5"/>
                        <path d="M65 27 L72 34 L83 20" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                        <rect x="10" y="55" width="35" height="35" rx="8" stroke="white" strokeWidth="5"/>
                        <rect x="55" y="55" width="35" height="35" rx="8" stroke="white" strokeWidth="5"/>
                    </svg>
                );
            case 'verdadeiro-falso':
                return (
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
                        <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="6"/>
                        <path d="M30 50 L45 65 L70 40" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                );
        }
    };

    // Animação automática após 2 segundos
    if (onAnimationComplete) {
        setTimeout(() => {
            onAnimationComplete();
        }, 2000);
    }

    return (
        <div className={styles.questionTypeBackground}>
            <div className={styles.container}>
                <div className={styles.questionNumber}>
                    Pergunta {questionNumber} de {totalQuestions} ✨
                </div>

                <div className={styles.iconContainer}>
                    {getIcon()}
                </div>

                <div className={styles.typeText}>
                    {getTypeText()}
                </div>
            </div>
        </div>
    );
}
