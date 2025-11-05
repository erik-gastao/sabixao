"use client";
import styles from './icone-tipo-questao.module.css';

interface IconeTipoQuestaoProps {
    tipo: 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso';
}

export default function IconeTipoQuestao({ tipo }: IconeTipoQuestaoProps) {
    const renderIcone = () => {
        switch (tipo) {
            case 'escolha-unica':
                return (
                    <svg width="180" height="180" viewBox="0 0 180 180">
                        <circle cx="90" cy="90" r="70" fill="#F59E0B" />
                    </svg>
                );
            case 'multipla-escolha':
                return (
                    <svg width="180" height="180" viewBox="0 0 180 180">
                        <rect x="40" y="40" width="100" height="100" rx="10" fill="#3B82F6" />
                    </svg>
                );
            case 'verdadeiro-falso':
                return (
                    <svg width="180" height="180" viewBox="0 0 180 180">
                        <polygon points="90,20 160,140 20,140" fill="#5A993C" />
                    </svg>
                );
        }
    };

    return (
        <div className={styles.container}>
            {renderIcone()}
        </div>
    );
}
