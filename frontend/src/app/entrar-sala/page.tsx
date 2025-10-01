"use client";
import { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './entrar-sala.module.css';

export default function EntrarSala() {
    const [nomeJogador, setNomeJogador] = useState('');
    const [pinSala, setPinSala] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleEntrarSala = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!nomeJogador || !pinSala) {
            setError('Preencha todos os campos');
            return;
        }
        
        try {
            console.log('Entrando na sala:', { nomeJogador, pinSala });
            setError('');
            // Aqui você faria a chamada para a API para entrar na sala
            // router.push('/sala/' + pinSala);
        } catch (err) {
            setError('Sala não encontrada ou PIN incorreto');
            console.error('Erro ao entrar na sala:', err);
        }
    };

    const handleCriarSala = () => {
        router.push('/');
    };

    return (
        <div className={styles.entrarSalaBackground}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/logo.png"
                    alt="Sabixão"
                    width={280}
                    height={140}
                    priority
                />
            </div>
            
            <div className={styles.formContainer}>
                {error && (
                    <div className={styles.errorMessage}>
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleEntrarSala} className={styles.formContent}>
                    <Input 
                        label="Nome do jogador"
                        type="text"
                        value={nomeJogador}
                        onChange={(e) => setNomeJogador(e.target.value)}
                        required
                    />
                    
                    <Input 
                        label="PIN"
                        type="text"
                        value={pinSala}
                        onChange={(e) => setPinSala(e.target.value)}
                        required
                        maxLength={6}
                    />
                    
                    {/* Container para os botões */}
                    <div className={styles.buttonContainer}>
                        <Button type="submit" className={styles.gameButton}>
                            ENTRAR
                        </Button>
                        
                        <span className={styles.orText}>OU</span>
                        
                        <Button 
                            type="button" 
                            className={styles.gameButton}
                            onClick={handleCriarSala}
                        >
                            CRIAR
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}