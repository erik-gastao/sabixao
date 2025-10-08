"use client";
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './resultados.module.css';
import CardEquipeRanking from '../../jogar/[salaId]/components/card-equipe-ranking';
import Button from '../../../components/button';

export default function Resultados() {
    const params = useParams();
    const router = useRouter();
    const salaId = params.salaId;

    // Dados mockados das equipes (virá da API)
    const equipes = [
        { id: 1, nome: 'Equipe Alpha', pontuacao: 2500 },
        { id: 2, nome: 'Equipe Beta', pontuacao: 2100 },
        { id: 3, nome: 'Equipe Gamma', pontuacao: 1800 },
        { id: 4, nome: 'Equipe Delta', pontuacao: 1500 },
        { id: 5, nome: 'Equipe Epsilon', pontuacao: 1200 },
    ];

    // Ordena equipes por pontuação (maior para menor)
    const equipesOrdenadas = [...equipes].sort((a, b) => b.pontuacao - a.pontuacao);

    const handleVoltarInicio = () => {
        router.push('/');
    };

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
                        width={150}
                        height={150}
                    />
                </div>

                {/* Título */}
                <h1 className={styles.titulo}>Resultado Final</h1>
                <p className={styles.subtitulo}>Parabéns a todos os participantes!</p>

                {/* Pódio - Top 3 */}
                <div className={styles.podio}>
                    {/* 2º Lugar */}
                    {equipesOrdenadas[1] && (
                        <div className={styles.posicao2}>
                            <div className={styles.medalha}>🥈</div>
                            <div className={styles.posicaoCard}>
                                <div className={styles.posicaoNumero}>2º</div>
                                <div className={styles.posicaoNome}>{equipesOrdenadas[1].nome}</div>
                                <div className={styles.posicaoPontos}>{equipesOrdenadas[1].pontuacao} pts</div>
                            </div>
                        </div>
                    )}

                    {/* 1º Lugar */}
                    {equipesOrdenadas[0] && (
                        <div className={styles.posicao1}>
                            <div className={styles.medalha}>🥇</div>
                            <div className={styles.posicaoCard}>
                                <div className={styles.posicaoNumero}>1º</div>
                                <div className={styles.posicaoNome}>{equipesOrdenadas[0].nome}</div>
                                <div className={styles.posicaoPontos}>{equipesOrdenadas[0].pontuacao} pts</div>
                            </div>
                        </div>
                    )}

                    {/* 3º Lugar */}
                    {equipesOrdenadas[2] && (
                        <div className={styles.posicao3}>
                            <div className={styles.medalha}>🥉</div>
                            <div className={styles.posicaoCard}>
                                <div className={styles.posicaoNumero}>3º</div>
                                <div className={styles.posicaoNome}>{equipesOrdenadas[2].nome}</div>
                                <div className={styles.posicaoPontos}>{equipesOrdenadas[2].pontuacao} pts</div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Ranking completo */}
                {equipesOrdenadas.length > 3 && (
                    <div className={styles.rankingContainer}>
                        <h2 className={styles.rankingTitulo}>Classificação Completa</h2>
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
                )}

                {/* Botão Voltar */}
                <div className={styles.buttonContainer}>
                    <Button onClick={handleVoltarInicio} className={styles.btnVoltar}>
                        VOLTAR AO INÍCIO
                    </Button>
                </div>
            </div>
        </div>
    );
}
