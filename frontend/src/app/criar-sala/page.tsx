"use client";
import { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import ButtonAdicionarSala from '../../components/button-adicionar-sala';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './criar-sala.module.css';

export default function CriarSala() {
    const [nomeSala, setNomeSala] = useState('');
    const [error, setError] = useState('');
    const [perguntas, setPerguntas] = useState<{ id: number; nome: string; texto: string }[]>([
        { id: 1, nome: 'N° 1', texto: 'Lorem ipsum dolor sit ama...' }
    ]);
    const router = useRouter();

    const handleSalvar = async () => {
        if (!nomeSala) {
            setError('Por favor, digite o nome da sala');
            return;
        }
        
        try {
            console.log('Salvando sala:', { nomeSala, perguntas });
            setError('');
            // Aqui você faria a chamada para a API para salvar a sala
            // Após salvar, redireciona para a lista de salas
            router.push('/lista-salas');
        } catch (err) {
            setError('Erro ao salvar sala. Tente novamente.');
            console.error('Erro ao salvar sala:', err);
        }
    };

    const handleCriarSala = async () => {
        if (!nomeSala) {
            setError('Por favor, digite o nome da sala');
            return;
        }
        
        try {
            console.log('Criando e iniciando sala:', { nomeSala, perguntas });
            setError('');
            // Aqui você faria a chamada para a API para criar a sala
            // Após criar, redireciona para a página da sala (ou espera)
            const salaId = '123'; // ID mockado, virá da API
            router.push(`/sala/${salaId}`);
        } catch (err) {
            setError('Erro ao criar sala. Tente novamente.');
            console.error('Erro ao criar sala:', err);
        }
    };

    const handleAdicionarPergunta = () => {
        const novaPergunta = {
            id: perguntas.length + 1,
            nome: `N° ${perguntas.length + 1}`,
            texto: 'Lorem ipsum dolor sit ama...'
        };
        setPerguntas([...perguntas, novaPergunta]);
    };

    const handleDeletarPergunta = (perguntaId: number) => {
        setPerguntas(perguntas.filter(p => p.id !== perguntaId));
        console.log('Pergunta deletada:', perguntaId);
    };

    const handleVoltar = () => {
        router.push('/lista-salas');
    };

    return (
        <div className={styles.criarSalaBackground}>
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
                <Button onClick={handleVoltar} className={styles.btnVoltar}>
                    ← Voltar
                </Button>
            </div>
            
            <div className={styles.formWrapper}>
                {/* Nome da Sala */}
                <div className={styles.nomeSalaContainer}>
                    <label className={styles.label}>Nome da sala:</label>
                    <Input 
                        label="INPUT"
                        type="text"
                        value={nomeSala}
                        onChange={(e) => setNomeSala(e.target.value)}
                        required
                    />
                </div>

                {/* Lista de Perguntas */}
                <div className={styles.perguntasContainer}>
                    <div className={styles.perguntasList}>
                        {/* Lista de perguntas */}
                        {perguntas.map((pergunta, index) => (
                            <ButtonAdicionarSala 
                                key={pergunta.id}
                                nomePergunta={(index + 1).toString()}
                                descricaoSala={pergunta.texto}
                                onDelete={() => handleDeletarPergunta(pergunta.id)}
                            />
                        ))}
                        
                        {/* Botão de adicionar - apenas um */}
                        <ButtonAdicionarSala isNew onClick={handleAdicionarPergunta} />
                    </div>
                </div>

                {/* Botões de Ação */}
                <div className={styles.actionsButtonContainer}>
                    <Button 
                        type="button" 
                        className={styles.salvarButton}
                        onClick={handleSalvar}
                    >
                        SALVAR
                    </Button>
                    <Button 
                        type="button" 
                        className={styles.criarButton}
                        onClick={handleCriarSala}
                    >
                        CRIAR
                    </Button>
                </div>
            </div>

            {error && (
                <div className={styles.errorMessage}>
                    {error}
                </div>
            )}
        </div>
    );
}

