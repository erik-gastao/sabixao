"use client";
import { useState } from 'react';
import { Button, Input } from '@/components';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './criar-conta.module.css';

export default function CriarConta() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleCriarConta = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!nome || !email || !password || !confirmPassword) {
            setError('Preencha todos os campos');
            return;
        }

        if (password !== confirmPassword) {
            setError('As senhas não coincidem');
            return;
        }

        if (password.length < 6) {
            setError('A senha deve ter no mínimo 6 caracteres');
            return;
        }
        
        try {
            console.log('Criando conta:', { nome, email, password });
            setError('');
            // Aqui você faria a chamada para a API para criar a conta
            // Após criar conta, redireciona para lista de salas
            router.push('/lista-salas');
        } catch (err) {
            setError('Erro ao criar conta. Tente novamente.');
            console.error('Erro ao criar conta:', err);
        }
    };

    const handleVoltar = () => {
        router.push('/login');
    };

    return (
        <div className={styles.criarContaBackground}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/logo.png"
                    alt="Sabixão"
                    width={300}
                    height={300}
                    priority
                />
            </div>
            
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Criar Conta</h2>
                
                {error && (
                    <div className={styles.errorMessage}>
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleCriarConta} className={styles.formContent}>
                    <Input 
                        label="Nome"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />

                    <Input 
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    
                    <Input 
                        label="Senha"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <Input 
                        label="Confirmar Senha"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    
                    <div className={styles.buttonContainer}>
                        <Button 
                            type="button" 
                            className={styles.gameButton}
                            onClick={handleVoltar}
                        >
                            VOLTAR
                        </Button>
                        
                        <Button type="submit" className={styles.gameButton}>
                            CRIAR CONTA
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}