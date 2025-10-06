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

    const handleCriarSala = async () => {
        if (!nomeSala) {
            setError('Por favor, digite o nome da sala');
            return;
        }
        
        try {
            console.log('Criando sala:', { nomeSala, perguntas });
            setError('');
            // Aqui você faria a chamada para a API para criar a sala
            // Após criar, redireciona para a lista de salas
            router.push('/lista-salas');
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
                        {perguntas.map((pergunta) => (
                            <ButtonAdicionarSala 
                                key={pergunta.id}
                                nomePergunta={pergunta.nome}
                                descricaoSala={pergunta.texto}
                            />
                        ))}
                        
                        {/* Botões de adicionar */}
                        <ButtonAdicionarSala isNew onClick={handleAdicionarPergunta} />
                        <ButtonAdicionarSala isNew onClick={handleAdicionarPergunta} />
                        <ButtonAdicionarSala isNew onClick={handleAdicionarPergunta} />
                    </div>
                </div>

                {/* Botão Criar */}
                <div className={styles.criarButtonContainer}>
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

