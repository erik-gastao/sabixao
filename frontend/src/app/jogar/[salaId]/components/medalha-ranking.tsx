"use client";
import styles from './medalha-ranking.module.css';

interface MedalhaRankingProps {
    posicao: number;
}

export default function MedalhaRanking({ posicao }: MedalhaRankingProps) {
    const getCorMedalha = () => {
        switch (posicao) {
            case 1:
                return '#F59E0B'; // Ouro
            case 2:
                return '#9CA3AF'; // Prata
            case 3:
                return '#D97706'; // Bronze
            default:
                return '#1E40AF'; // Azul padrão
        }
    };

    const isPodio = posicao <= 3;

    return (
        <div 
            className={`${styles.medalha} ${isPodio ? styles.podio : ''}`}
            style={{ backgroundColor: getCorMedalha() }}
        >
            <span className={styles.posicao}>{posicao}º</span>
        </div>
    );
}
