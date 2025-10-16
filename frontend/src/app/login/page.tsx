"use client";
import { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/inputs/input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './login.module.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !password) {
            setError('Preencha todos os campos');
            return;
        }
        
        try {
            console.log('Tentando login com:', { email, password });
            setError('');
            // Após login bem-sucedido, redireciona para lista de salas
            router.push('/lista-salas');
        } catch (err) {
            setError('Email ou senha incorretos');
            console.error('Erro de login:', err);
        }
    };

    const handleCriarConta = () => {
        router.push('/criar-conta');
    };

    const handleEntrarSala = () => {
        router.push('/');
    };

    return (
        <div className={styles.loginBackground}>
            {/* Logo fora do formulário */}
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
                <h2 className={styles.title}>Login</h2>
                
                {error && (
                    <div className={styles.errorMessage}>
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleLogin} className={styles.floatingInputContainer}>
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
                    
                    {/* Botões ENTRAR e CRIAR CONTA lado a lado */}
                    <div className={styles.buttonContainer}>
                        <Button type="submit" className={styles.gameButton}>
                            ENTRAR
                        </Button>
                        
                        <Button 
                            type="button" 
                            className={styles.gameButton}
                            onClick={handleCriarConta}
                        >
                            CRIAR CONTA
                        </Button>
                    </div>
                    
                    {/* Botão ENTRAR NA SALA - centralizado */}
                    <div className={styles.centerButtonContainer}>
                        <Button 
                            type="button" 
                            className={styles.gameButtonCentered}
                            onClick={handleEntrarSala}
                        >
                            ENTRAR EM UMA SALA
                        </Button>
                    </div>
                </form>
                
                <div className={styles.forgotPasswordContainer}>
                    <p className={styles.forgotPasswordText}>
                        Esqueceu sua senha? 
                        <button 
                            className={styles.forgotPasswordLink}
                            onClick={() => router.push('/forgot-password')}
                        >
                            Recuperar
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}