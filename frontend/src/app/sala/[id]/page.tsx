"use client";
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../../../components/button';
import EditableInput from '../../../components/editable-input';
import ButtonAdicionarSala from '../../../components/button-adicionar-sala';
import styles from './sala.module.css';

export default function Sala() {
    const params = useParams();
    const router = useRouter();
    const salaId = params.id;
    
    // Dados mockados da sala (futuramente virá da API)
    const [sala, setSala] = useState({
        id: salaId,
        nome: 'Sala ABC',
        pin: '123456',
        status: 'Aguardando'
    });

    const [questoes, setQuestoes] = useState([
        { id: 1, texto: 'Quanto é 2 + 2?' },
        { id: 2, texto: 'Qual a capital do Brasil?' },
        { id: 3, texto: 'Quanto é 5 x 5?' },
        { id: 4, texto: 'Qual o maior planeta do sistema solar?' },
        { id: 5, texto: 'Quantos continentes existem?' },
    ]);

    const handleVoltar = () => {
        router.push('/lista-salas');
    };

    const handleAdicionarQuestao = () => {
        const novaQuestao = {
            id: questoes.length + 1,
            texto: 'Nova questão...'
        };
        setQuestoes([...questoes, novaQuestao]);
    };

    const handleDeletarQuestao = (questaoId: number) => {
        setQuestoes(questoes.filter(q => q.id !== questaoId));
        console.log('Questão deletada:', questaoId);
    };

    const handleIniciarQuiz = () => {
        router.push(`/espera/${salaId}`);
    };

    const handleNomeChange = (novoNome: string) => {
        setSala({ ...sala, nome: novoNome });
        console.log('Nome da sala atualizado para:', novoNome);
    };

    return (
        <div className={styles.salaBackground}>
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

            {/* Botão Voltar */}
            <div className={styles.voltarContainer}>
                <Button onClick={handleVoltar}>
                    ← Voltar
                </Button>
            </div>
            
            <div className={styles.formWrapper}>
                {/* Nome da Sala */}
                <div className={styles.nomeSalaContainer}>
                    <label className={styles.label}>Nome da sala:</label>
                    <EditableInput 
                        label="Nome da sala"
                        value={sala.nome}
                        onChange={handleNomeChange}
                    />
                </div>

                {/* Informações da Sala */}
                <div className={styles.infoContainer}>
                    <div className={styles.infoCard}>
                        <span className={styles.infoLabel}>PIN da Sala:</span>
                        <span className={styles.infoValue}>{sala.pin}</span>
                    </div>
                    <div className={styles.infoCard}>
                        <span className={styles.infoLabel}>Status:</span>
                        <span className={`${styles.statusBadge} ${styles[sala.status.toLowerCase()]}`}>
                            {sala.status}
                        </span>
                    </div>
                </div>

                {/* Lista de Questões */}
                <div className={styles.questoesContainer}>
                    <div className={styles.questoesList}>
                        {/* Lista de questões */}
                        {questoes.map((questao, index) => (
                            <ButtonAdicionarSala 
                                key={questao.id}
                                nomePergunta={(index + 1).toString()}
                                descricaoSala={questao.texto}
                                questaoId={questao.id}
                                salaId={salaId as string}
                                onDelete={() => handleDeletarQuestao(questao.id)}
                            />
                        ))}
                        
                        {/* Botão de adicionar - apenas um */}
                        <ButtonAdicionarSala isNew onClick={handleAdicionarQuestao} />
                    </div>
                </div>

                {/* Botão Iniciar Quiz */}
                <div className={styles.iniciarButtonContainer}>
                    <Button 
                        type="button" 
                        className={styles.iniciarButton}
                        onClick={handleIniciarQuiz}
                    >
                        INICIAR QUIZ
                    </Button>
                </div>
            </div>
        </div>
    );
}
