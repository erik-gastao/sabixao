"use client";
import { useState } from 'react';
import Image from 'next/image';
import styles from './tela-questao.module.css';
import Timer from '@/components/timer';
import IconeTipoQuestao from '@/components/icone-tipo-questao';
import CardResposta from '@/components/card-resposta';

interface Opcao {
    id: number;
    texto: string;
}

interface TelaQuestaoProps {
    numeroQuestao: number;
    totalQuestoes: number;
    tipo: 'escolha-unica' | 'multipla-escolha' | 'verdadeiro-falso';
    pergunta: string;
    opcoes: Opcao[];
    tempoSegundos: number;
    onTempoEsgotado: () => void;
    onRespostasSelecionadas: (respostaIds: number[]) => void;
    onEnviarResposta: () => void;
    backgroundIndex?: number; // 1, 2 ou 3 para alternar backgrounds
}

export default function TelaQuestao({
    numeroQuestao,
    totalQuestoes,
    tipo,
    pergunta,
    opcoes,
    tempoSegundos,
    onTempoEsgotado,
    onRespostasSelecionadas,
    onEnviarResposta,
    backgroundIndex = 1
}: TelaQuestaoProps) {
    const [respostasSelecionadas, setRespostasSelecionadas] = useState<number[]>([]);

    const handleRespostaClick = (id: number) => {
        if (tipo === 'escolha-unica' || tipo === 'verdadeiro-falso') {
            // Apenas uma resposta
            const novaSelecao = [id];
            setRespostasSelecionadas(novaSelecao);
            onRespostasSelecionadas(novaSelecao);
        } else {
            // Múltiplas respostas
            const novaSelecao = respostasSelecionadas.includes(id)
                ? respostasSelecionadas.filter(r => r !== id)
                : [...respostasSelecionadas, id];
            setRespostasSelecionadas(novaSelecao);
            onRespostasSelecionadas(novaSelecao);
        }
    };

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

                {/* Grid de respostas */}
                <div className={styles.respostasGrid}>
                    {opcoes.map((opcao, index) => (
                        <CardResposta
                            key={opcao.id}
                            indice={index}
                            texto={opcao.texto}
                            onClick={() => handleRespostaClick(opcao.id)}
                            selecionado={respostasSelecionadas.includes(opcao.id)}
                            mostrarTexto={false}
                            multiplaEscolha={tipo === 'multipla-escolha'}
                        />
                    ))}
                </div>

                {/* Botão Enviar */}
                {respostasSelecionadas.length > 0 && (
                    <button 
                        onClick={onEnviarResposta}
                        className={styles.btnEnviar}
                    >
                        ENVIAR
                    </button>
                )}
            </div>
        </div>
    );
}
