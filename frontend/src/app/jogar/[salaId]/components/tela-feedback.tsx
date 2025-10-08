"use client";
import { useEffect } from 'react';
import styles from './tela-feedback.module.css';

interface TelaFeedbackProps {
    acertou: boolean;
    pontuacao: number;
    onProxima?: () => void;
}

export default function TelaFeedback({ acertou, pontuacao, onProxima }: TelaFeedbackProps) {
    // Auto-avança após 3 segundos - DESABILITADO para testes
    // useEffect(() => {
    //     if (onProxima) {
    //         const timer = setTimeout(() => {
    //             onProxima();
    //         }, 3000);
    //         return () => clearTimeout(timer);
    //     }
    // }, [onProxima]);

    const renderIcone = () => {
        if (!acertou) {
            // Emoji triste para erro
            return (
                <div className={styles.emoji}>😢</div>
            );
        }

        // Coroas baseadas na pontuação
        if (pontuacao === 1000) {
            // Coroa completa (8 pontas)
            return (
                <svg width="120" height="120" viewBox="0 0 120 120" className={styles.coroa}>
                    <defs>
                        <radialGradient id="coroaGradient1000">
                            <stop offset="0%" stopColor="#FCD34D" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </radialGradient>
                    </defs>
                    {/* Corpo da coroa */}
                    <path d="M 20 80 L 30 40 L 40 70 L 50 30 L 60 70 L 70 30 L 80 70 L 90 40 L 100 80 Z" 
                          fill="url(#coroaGradient1000)" stroke="#D97706" strokeWidth="2"/>
                    {/* Pontas superiores */}
                    <polygon points="30,40 25,25 35,35" fill="#FCD34D"/>
                    <polygon points="50,30 45,10 55,25" fill="#FCD34D"/>
                    <polygon points="70,30 65,10 75,25" fill="#FCD34D"/>
                    <polygon points="90,40 85,25 95,35" fill="#FCD34D"/>
                    <polygon points="40,70 37,55 43,65" fill="#FCD34D"/>
                    <polygon points="60,70 57,55 63,65" fill="#FCD34D"/>
                    <polygon points="80,70 77,55 83,65" fill="#FCD34D"/>
                    <polygon points="60,60 55,45 65,55" fill="#FCD34D"/>
                    {/* Base */}
                    <rect x="20" y="80" width="80" height="15" fill="#D97706" rx="3"/>
                </svg>
            );
        } else if (pontuacao >= 900) {
            // Coroa média (6 pontas)
            return (
                <svg width="120" height="120" viewBox="0 0 120 120" className={styles.coroa}>
                    <defs>
                        <radialGradient id="coroaGradient900">
                            <stop offset="0%" stopColor="#FCD34D" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </radialGradient>
                    </defs>
                    {/* Corpo da coroa */}
                    <path d="M 25 80 L 35 45 L 45 70 L 60 35 L 75 70 L 85 45 L 95 80 Z" 
                          fill="url(#coroaGradient900)" stroke="#D97706" strokeWidth="2"/>
                    {/* Pontas superiores */}
                    <polygon points="35,45 30,30 40,40" fill="#FCD34D"/>
                    <polygon points="60,35 55,15 65,30" fill="#FCD34D"/>
                    <polygon points="85,45 80,30 90,40" fill="#FCD34D"/>
                    <polygon points="45,70 42,55 48,65" fill="#FCD34D"/>
                    <polygon points="75,70 72,55 78,65" fill="#FCD34D"/>
                    <polygon points="60,55 55,40 65,50" fill="#FCD34D"/>
                    {/* Base */}
                    <rect x="25" y="80" width="70" height="15" fill="#D97706" rx="3"/>
                </svg>
            );
        } else {
            // Coroa pequena (4 pontas)
            return (
                <svg width="120" height="120" viewBox="0 0 120 120" className={styles.coroa}>
                    <defs>
                        <radialGradient id="coroaGradientSmall">
                            <stop offset="0%" stopColor="#FCD34D" />
                            <stop offset="100%" stopColor="#F59E0B" />
                        </radialGradient>
                    </defs>
                    {/* Corpo da coroa */}
                    <path d="M 30 80 L 40 50 L 50 75 L 70 75 L 80 50 L 90 80 Z" 
                          fill="url(#coroaGradientSmall)" stroke="#D97706" strokeWidth="2"/>
                    {/* Pontas superiores */}
                    <polygon points="40,50 35,35 45,45" fill="#FCD34D"/>
                    <polygon points="60,70 55,50 65,65" fill="#FCD34D"/>
                    <polygon points="80,50 75,35 85,45" fill="#FCD34D"/>
                    <polygon points="50,75 47,60 53,70" fill="#FCD34D"/>
                    {/* Base */}
                    <rect x="30" y="80" width="60" height="12" fill="#D97706" rx="3"/>
                </svg>
            );
        }
    };

    return (
        <div className={styles.container}>
            {/* Background animado com raios */}
            <div className={styles.background}>
                <div className={styles.raios}></div>
                {/* Formas decorativas */}
                <div className={`${styles.forma} ${styles.circulo1}`}></div>
                <div className={`${styles.forma} ${styles.circulo2}`}></div>
                <div className={`${styles.forma} ${styles.circulo3}`}></div>
                <div className={`${styles.forma} ${styles.triangulo1}`}></div>
                <div className={`${styles.forma} ${styles.triangulo2}`}></div>
                <div className={`${styles.forma} ${styles.blob1}`}></div>
                <div className={`${styles.forma} ${styles.blob2}`}></div>
                <div className={`${styles.forma} ${styles.estrela1}`}></div>
                <div className={`${styles.forma} ${styles.estrela2}`}></div>
            </div>

            <div className={styles.content}>
                <h2 className={styles.mensagem}>
                    {acertou ? 'Você acertou' : 'Você errou'}
                </h2>

                <div className={styles.iconeContainer}>
                    {renderIcone()}
                </div>

                <div className={styles.pontuacaoCard}>
                    <span className={styles.pontuacao}>{pontuacao} PTs</span>
                </div>

                {/* Botão de teste para avançar */}
                {onProxima && (
                    <button onClick={onProxima} className={styles.btnTeste}>
                        PRÓXIMA (TESTE)
                    </button>
                )}
            </div>
        </div>
    );
}
