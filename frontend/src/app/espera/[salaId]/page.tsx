"use client";
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../../../components/buttons/button';
import Language from '../../../components/language';
import Timer from '../../../components/timer';
import styles from './espera.module.css';

export default function Espera() {
    const params = useParams();
    const router = useRouter();
    const salaId = params.salaId;

    // Estado da sala
    const [sala, setSala] = useState({
        codigo: 'XXXXXX',
        status: 'Aguardando jogadores...'
    });

    // Verificar se o usuário é o criador (mockado - futuramente virá da API/Auth)
    const [isCriador, setIsCriador] = useState(true);

    // Verificar se o usuário está logado (mockado - futuramente virá da API/Auth)
    // Você pode usar localStorage, cookies, ou context para verificar isso
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Controle da contagem regressiva
    const [showTimer, setShowTimer] = useState(false);

    // Lista de jogadores (mockado)
    const [jogadores, setJogadores] = useState([
        { id: 1, nome: 'Nickname', avatar: '👤' },
        { id: 2, nome: 'Nickname', avatar: '👤' },
        { id: 3, nome: 'Nickname', avatar: '👤' },
    ]);

    useEffect(() => {
        // Aqui você pode buscar os dados da sala da API
        // e atualizar em tempo real (WebSocket/Polling)
        
        // Verificar se o usuário está logado
        // Exemplo: verificar localStorage ou cookie
        const userLoggedIn = localStorage.getItem('userToken') !== null;
        setIsLoggedIn(userLoggedIn);
    }, [salaId]);

    const handleSair = () => {
        // Se está logado, vai para lista de salas
        // Se é guest, vai para a página inicial
        if (isLoggedIn) {
            router.push('/lista-salas');
        } else {
            router.push('/');
        }
    };

    const handleIniciar = () => {
        setShowTimer(true);
    };

    const handleTimerComplete = () => {
        setTimeout(() => {
            router.push(`/jogar/${salaId}`);
        }, 0);
    };

    return (
        <div className={styles.esperaBackground}>
            {!showTimer && (
                <>
                    {/* Seletor de Idioma */}
                    <div className={styles.languageContainer}>
                        <Language />
                    </div>

                    {/* Logo */}
                    <div className={styles.logoContainer}>
                        <Image
                            src="/images/logo.png"
                            alt="Sabixão"
                            width={200}
                            height={200}
                            priority
                        />
                    </div>
                </>
            )}

            {/* Container Principal */}
            <div className={styles.mainContainer}>
                {!showTimer ? (
                    <>
                        {/* Código da Sala */}
                        <div className={styles.codigoSala}>
                            Código da sala: <span className={styles.codigo}>{sala.codigo}</span>
                        </div>

                        {/* Status */}
                        <div className={styles.status}>
                            {sala.status}
                        </div>

                        {/* Lista de Jogadores */}
                        <div className={styles.jogadoresList}>
                            {jogadores.map((jogador) => (
                                <div key={jogador.id} className={styles.jogadorCard}>
                                    <span className={styles.avatar}>{jogador.avatar}</span>
                                    <span className={styles.jogadorNome}>{jogador.nome}</span>
                                </div>
                            ))}
                        </div>

                        {/* Botões */}
                        <div className={styles.buttonContainer}>
                            {isCriador && (
                                <Button onClick={handleIniciar} className={styles.btnComecar}>
                                    COMEÇAR JOGO
                                </Button>
                            )}
                            <Button onClick={handleSair} className={styles.btnSair}>
                                SAIR
                            </Button>
                        </div>
                    </>
                ) : (
                    /* Timer de Contagem Regressiva */
                    <div className={styles.timerContainer}>
                        <Timer 
                            size="xlarge"
                            onComplete={handleTimerComplete}
                            autoStart={true}
                            showText={true}
                            text="A partida já vai começar..."
                        />
                        <button 
                            onClick={handleTimerComplete}
                            className={styles.btnTeste}
                        >
                            AVANÇAR (TESTE)
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
