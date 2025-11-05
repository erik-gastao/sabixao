"use client";
import Image from 'next/image';
import styles from './tela-leitura.module.css';
import { Timer, IconeTipoQuestao } from '@/components';

interface Opcao {
    id: number;
    texto: string;
}

interface TelaLeituraProps {
    numeroQuestao: number;
    totalQuestoes: number;
    tipo: 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso';
    pergunta: string;
    opcoes: Opcao[];
    tempoSegundos: number;
    onTempoEsgotado: () => void;
    backgroundIndex?: number; // 1, 2 ou 3 para alternar backgrounds
}

export default function TelaLeitura({
    numeroQuestao,
    totalQuestoes,
    tipo,
    pergunta,
    opcoes,
    tempoSegundos,
    onTempoEsgotado,
    backgroundIndex = 1
}: TelaLeituraProps) {
    console.log('TelaLeitura renderizada', { numeroQuestao, backgroundIndex });
    
    const getBackgroundImage = () => {
        switch (backgroundIndex) {
            case 2:
                return '/images/background2.png';
            case 3:
                return '/images/background3.png';
            default:
                return '/images/background.png';
        }
    };

    const getSymbol = (index: number) => {
        const symbols = [
            { shape: 'circle', color: '#EF4444' },    // vermelho
            { shape: 'triangle', color: '#3B82F6' },  // azul
            { shape: 'star', color: '#5A993C' },      // verde
            { shape: 'square', color: '#F59E0B' },    // amarelo
        ];
        return symbols[index % 4];
    };

    const renderSymbol = (index: number) => {
        const symbol = getSymbol(index);
        
        switch (symbol.shape) {
            case 'circle':
                return (
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <circle cx="30" cy="30" r="22" fill="white" />
                    </svg>
                );
            case 'triangle':
                return (
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <polygon points="30,8 52,48 8,48" fill="white" />
                    </svg>
                );
            case 'star':
                return (
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <polygon 
                            points="30,5 36,22 55,22 40,33 45,50 30,40 15,50 20,33 5,22 24,22" 
                            fill="white" 
                        />
                    </svg>
                );
            case 'square':
                return (
                    <svg width="60" height="60" viewBox="0 0 60 60">
                        <rect x="15" y="15" width="30" height="30" rx="4" fill="white" />
                    </svg>
                );
        }
    };

    return (
        <div className={styles.container}>
            <Image
                src={getBackgroundImage()}
                alt="Background"
                fill
                className={styles.background}
                priority
            />

            <div className={styles.content}>
                {/* Logo */}
                <div className={styles.logo}>
                    <Image
                        src="/images/logo.png"
                        alt="Sabixão"
                        width={120}
                        height={120}
                    />
                </div>

                {/* Timer */}
                <div className={styles.timer}>
                    <Timer
                        size="large"
                        onComplete={onTempoEsgotado}
                        showText={false}
                    />
                    <button 
                        onClick={onTempoEsgotado}
                        className={styles.btnTeste}
                    >
                        AVANÇAR (TESTE)
                    </button>
                </div>

                {/* Ícone do tipo de questão */}
                <IconeTipoQuestao tipo={tipo} />

                {/* Título da pergunta */}
                <h1 className={styles.titulo}>
                    Pergunta {numeroQuestao} de {totalQuestoes}
                </h1>

                {/* Texto da pergunta */}
                <p className={styles.pergunta}>{pergunta}</p>

                {/* Prévia dos cards de resposta (com texto) */}
                <div className={styles.respostasPrevia}>
                    {opcoes.map((opcao, index) => (
                        <div 
                            key={opcao.id}
                            className={styles.cardPrevia}
                            style={{ backgroundColor: getSymbol(index).color }}
                        >
                            <div className={styles.simbolo}>
                                {renderSymbol(index)}
                            </div>
                            <span className={styles.textoPrevia}>{opcao.texto}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
