"use client";
import { useEffect } from 'react';
import Image from 'next/image';
import styles from './tela-ranking.module.css';
import CardEquipeRanking from './card-equipe-ranking';
import { Button } from '@/components';

interface Equipe {
    id: number;
    nome: string;
    pontuacao: number;
}

interface TelaRankingProps {
    equipes: Equipe[];
    questaoAtual: number;
    totalQuestoes: number;
    onProxima: () => void;
}

export default function TelaRanking({ equipes, questaoAtual, totalQuestoes, onProxima }: TelaRankingProps) {
    // Ordena equipes por pontuação (maior para menor)
    const equipesOrdenadas = [...equipes].sort((a, b) => b.pontuacao - a.pontuacao);

    // Auto-avança após 10 segundos - DESABILITADO para testes
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         onProxima();
    //     }, 10000);

    //     return () => clearTimeout(timer);
    // }, [onProxima]);

    return (
        <div className={styles.container}>
            {/* Background Image */}
            <Image
                src="/images/background-podium.png"
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

                {/* Título */}
                <h1 className={styles.titulo}>Ranking</h1>

                {/* Container do ranking com scroll */}
                <div className={styles.rankingContainer}>
                    <div className={styles.rankingScroll}>
                        {equipesOrdenadas.map((equipe, index) => (
                            <CardEquipeRanking
                                key={equipe.id}
                                posicao={index + 1}
                                nomeEquipe={equipe.nome}
                                pontuacao={equipe.pontuacao}
                            />
                        ))}
                    </div>
                </div>

                {/* Indicador de progresso */}
                <div className={styles.progresso}>
                    <span>Pergunta {questaoAtual} de {totalQuestoes}</span>
                </div>

                {/* Botão Próxima - TESTE */}
                <div className={styles.buttonContainer}>
                    <Button onClick={onProxima} className={styles.btnProxima}>
                        PRÓXIMA (TESTE)
                    </Button>
                </div>
            </div>
        </div>
    );
}
