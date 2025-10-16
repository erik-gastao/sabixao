"use client";
import { useState } from 'react';
import EntrarHomeButton from '../components/buttons/entrar-home';
import Button from '../components/buttons/button';
import Input from '../components/inputs/input';
import Language from '../components/language';
import FormContainerHome from '../components/containers/formContainer-home';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './page.module.css';
import CriarSalaHomeButton from '../components/buttons/criarSala-home';

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
                        <EntrarHomeButton 
                            type="submit"
                            className={styles.gameButton}
                        />
                        
                        <span className={styles.orText}>OU</span>
                        
                        <CriarSalaHomeButton 
                            className={styles.gameButton}
                            onClick={handleCriarSala}
                        >
                            CRIAR SALA
                        </CriarSalaHomeButton>
                    </div>
                </form>
            </FormContainerHome>
        </div>
    );
}