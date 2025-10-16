"use client";
import { useState } from 'react';
import Button from '../components/button';
import Input from '../components/inputs/input';
import Language from '../components/language';
import FormContainerHome from '../components/containers/formContainer-home';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
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
            
            // Aqui você faria a chamada para a API para validar o PIN e entrar na sala
            // Por enquanto, redireciona direto para a página de espera
            router.push(`/espera/${pinSala}`);
        } catch (err) {
            setError('Sala não encontrada ou PIN incorreto');
            console.error('Erro ao entrar na sala:', err);
        }
    };

    const handleCriarSala = () => {
        router.push('/login');
    };

    return (
        <div className={styles.homeBackground}>
            {/* Componente Language no canto superior direito */}
            <div className={styles.languageContainer}>
                <Language />
            </div>
            
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/logo.png"
                    alt="Sabixão"
                    width={180}
                    height={180}
                    priority
                />
            </div>
            
            <FormContainerHome>
                <h2 className={styles.title}>Entrar ou Criar uma Sala</h2>
                
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
                            CRIAR SALA
                        </Button>
                    </div>
                </form>
            </FormContainerHome>
        </div>
    );
}