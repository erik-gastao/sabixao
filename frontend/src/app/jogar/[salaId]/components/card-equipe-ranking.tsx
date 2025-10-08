"use client";
import styles from './card-equipe-ranking.module.css';
import MedalhaRanking from './medalha-ranking';

interface CardEquipeRankingProps {
    posicao: number;
    nomeEquipe: string;
    pontuacao: number;
}

export default function CardEquipeRanking({ posicao, nomeEquipe, pontuacao }: CardEquipeRankingProps) {
    return (
        <div className={styles.cardContainer}>
            <MedalhaRanking posicao={posicao} />
            <div className={styles.card}>
                <span className={styles.nome}>{nomeEquipe}</span>
                <span className={styles.pontos}>{pontuacao} PTs</span>
            </div>
        </div>
    );
}
