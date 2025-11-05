"use client";
import styles from './card-resposta.module.css';

interface CardRespostaProps {
    indice: number;
    texto: string;
    onClick: () => void;
    selecionado?: boolean;
    mostrarTexto?: boolean;
    multiplaEscolha?: boolean;
}

export default function CardResposta({ indice, texto, onClick, selecionado, mostrarTexto = true, multiplaEscolha = false }: CardRespostaProps) {
    const getSymbol = () => {
        const symbols = [
            { shape: 'circle', color: '#EF4444' },    // vermelho
            { shape: 'triangle', color: '#3B82F6' },  // azul
            { shape: 'star', color: '#5A993C' },      // verde
            { shape: 'square', color: '#F59E0B' },    // amarelo
        ];
        return symbols[indice % 4];
    };

    const renderSymbol = () => {
        const symbol = getSymbol();
        
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

    const symbol = getSymbol();

    return (
        <button
            onClick={onClick}
            className={`${styles.card} ${selecionado ? styles.selecionado : ''} ${!mostrarTexto ? styles.somenteSimbolos : ''} ${multiplaEscolha ? styles.multiplaEscolha : ''}`}
            style={{ backgroundColor: symbol.color }}
        >
            {multiplaEscolha && (
                <div className={`${styles.checkbox} ${selecionado ? styles.checkboxSelecionado : ''}`}>
                    {selecionado && (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    )}
                </div>
            )}
            <div className={styles.simbolo}>
                {renderSymbol()}
            </div>
            {mostrarTexto && <span className={styles.texto}>{texto}</span>}
        </button>
    );
}
