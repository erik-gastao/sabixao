"use client";
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import QuestionTypeCard from '../../../components/question-type-card';
import TelaLeitura from './components/tela-leitura';
import TelaQuestao from './components/tela-questao';
import TelaFeedback from './components/tela-feedback';
import TelaRanking from './components/tela-ranking';

export default function Jogar() {
    const params = useParams();
    const router = useRouter();
    const salaId = params.salaId;

    // Estados do fluxo
    const [etapa, setEtapa] = useState<'tipo' | 'leitura' | 'resposta' | 'feedback' | 'ranking'>('tipo');
    const [questaoAtual, setQuestaoAtual] = useState(0);
    const [respostasSelecionadas, setRespostasSelecionadas] = useState<number[]>([]);
    const [pontuacaoTotal, setPontuacaoTotal] = useState(0);
    const [pontuacaoQuestao, setPontuacaoQuestao] = useState(0);
    const [acertou, setAcertou] = useState(false);
    const [tempoInicioResposta, setTempoInicioResposta] = useState(0);

    console.log('Etapa atual:', etapa);

    // Dados mockados das perguntas (virá da API)
    const questoes = [
        {
            id: 1,
            tipo: 'escolha-unica' as const,
            pergunta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?',
            opcoes: [
                { id: 1, texto: 'Resposta A' },
                { id: 2, texto: 'Resposta B' },
                { id: 3, texto: 'Resposta C' },
                { id: 4, texto: 'Resposta D' }
            ],
            respostaCorreta: [2],
            tempoLeitura: 15,
            tempoResposta: 15
        },
        {
            id: 2,
            tipo: 'multipla-escolha' as const,
            pergunta: 'Quais são números pares?',
            opcoes: [
                { id: 1, texto: '2' },
                { id: 2, texto: '3' },
                { id: 3, texto: '4' },
                { id: 4, texto: '5' }
            ],
            respostaCorreta: [1, 3],
            tempoLeitura: 15,
            tempoResposta: 15
        },
        {
            id: 3,
            tipo: 'verdadeiro-falso' as const,
            pergunta: 'O Brasil fica na América do Sul?',
            opcoes: [
                { id: 1, texto: 'Verdadeiro' },
                { id: 2, texto: 'Falso' }
            ],
            respostaCorreta: [1],
            tempoLeitura: 15,
            tempoResposta: 15
        }
    ];

    const questaoAtualData = questoes[questaoAtual];

    // Calcula pontuação baseada em acerto e tempo
    const calcularPontuacao = (tempoRestante: number, acertou: boolean): number => {
        if (!acertou) return 0;
        
        const tempoTotal = 15; // Tempo fixo do timer
        const proporcaoTempo = tempoRestante / tempoTotal;
        const pontuacao = Math.round(1000 * proporcaoTempo);
        
        return Math.max(0, Math.min(1000, pontuacao));
    };

    // Handler: Anúncio do tipo completado
    const handleTipoCompleto = () => {
        setEtapa('leitura');
    };

    // Handler: Tempo de leitura esgotado
    const handleLeituraCompleta = () => {
        setEtapa('resposta');
        setTempoInicioResposta(Date.now()); // Marca o início da resposta
    };

    // Handler: Respostas selecionadas
    const handleRespostasSelecionadas = (respostas: number[]) => {
        setRespostasSelecionadas(respostas);
    };
    // Handler: Tempo de resposta esgotado ou enviado
    const processarResposta = () => {
        // Calcula tempo decorrido
        const tempoDecorrido = (Date.now() - tempoInicioResposta) / 1000; // em segundos
        const tempoRestante = Math.max(0, 15 - tempoDecorrido); // Tempo restante
        
        // Verifica se acertou
        const respostasOrdenadas = [...respostasSelecionadas].sort();
        const corretasOrdenadas = [...questaoAtualData.respostaCorreta].sort();
        const acertouQuestao = JSON.stringify(respostasOrdenadas) === JSON.stringify(corretasOrdenadas);
        
        // Calcula pontuação
        const pontos = calcularPontuacao(tempoRestante, acertouQuestao);
        
        setAcertou(acertouQuestao);
        setPontuacaoQuestao(pontos);
        setPontuacaoTotal(pontuacaoTotal + pontos);
        setEtapa('feedback');

        // Auto-avança DESABILITADO para testes
        // setTimeout(() => {
        //     setEtapa('ranking');
        // }, 3000);
    };

    // Handler: Botão ENVIAR clicado
    const handleEnviarResposta = () => {
        processarResposta();
    };

    // Handler: Tempo de resposta esgotado
    const handleRespostaCompleta = () => {
        processarResposta();
    };

    // Handler: Botão PRÓXIMA no ranking
    const handleProximaQuestao = () => {
        if (questaoAtual < questoes.length - 1) {
            // Próxima questão
            setQuestaoAtual(questaoAtual + 1);
            setRespostasSelecionadas([]);
            setEtapa('tipo');
        } else {
            // Fim do quiz - redireciona para ranking final
            router.push(`/resultados/${salaId}`);
        }
    };

    const getBackgroundIndex = () => {
        return (questaoAtual % 3) + 1; // Alterna entre 1, 2 e 3
    };

    return (
        <>
            {etapa === 'tipo' && (
                <QuestionTypeCard 
                    questionNumber={questaoAtual + 1}
                    totalQuestions={questoes.length}
                    type={questaoAtualData.tipo}
                    onAnimationComplete={handleTipoCompleto}
                />
            )}

            {etapa === 'leitura' && (
                <TelaLeitura
                    numeroQuestao={questaoAtual + 1}
                    totalQuestoes={questoes.length}
                    tipo={questaoAtualData.tipo}
                    pergunta={questaoAtualData.pergunta}
                    opcoes={questaoAtualData.opcoes}
                    tempoSegundos={questaoAtualData.tempoLeitura}
                    onTempoEsgotado={handleLeituraCompleta}
                    backgroundIndex={getBackgroundIndex()}
                />
            )}

            {etapa === 'resposta' && (
                <TelaQuestao
                    numeroQuestao={questaoAtual + 1}
                    totalQuestoes={questoes.length}
                    tipo={questaoAtualData.tipo}
                    pergunta={questaoAtualData.pergunta}
                    opcoes={questaoAtualData.opcoes}
                    tempoSegundos={questaoAtualData.tempoResposta}
                    onTempoEsgotado={handleRespostaCompleta}
                    onRespostasSelecionadas={handleRespostasSelecionadas}
                    onEnviarResposta={handleEnviarResposta}
                    backgroundIndex={getBackgroundIndex()}
                />
            )}
            {etapa === 'resposta' && (
                <TelaQuestao
                    numeroQuestao={questaoAtual + 1}
                    totalQuestoes={questoes.length}
                    tipo={questaoAtualData.tipo}
                    pergunta={questaoAtualData.pergunta}
                    opcoes={questaoAtualData.opcoes}
                    tempoSegundos={questaoAtualData.tempoResposta}
                    onTempoEsgotado={handleRespostaCompleta}
                    onRespostasSelecionadas={handleRespostasSelecionadas}
                    onEnviarResposta={handleEnviarResposta}
                    backgroundIndex={getBackgroundIndex()}
                />
            )}

            {etapa === 'feedback' && (
                <TelaFeedback
                    acertou={acertou}
                    pontuacao={pontuacaoQuestao}
                    onProxima={() => setEtapa('ranking')}
                />
            )}

            {etapa === 'ranking' && (
                <TelaRanking
                    equipes={[
                        { id: 1, nome: 'Equipe 1', pontuacao: pontuacaoTotal + pontuacaoQuestao },
                        { id: 2, nome: 'Equipe 2', pontuacao: 800 },
                        { id: 3, nome: 'Equipe 3', pontuacao: 600 },
                    ]}
                    questaoAtual={questaoAtual + 1}
                    totalQuestoes={questoes.length}
                    onProxima={handleProximaQuestao}
                />
            )}
        </>
    );
}
