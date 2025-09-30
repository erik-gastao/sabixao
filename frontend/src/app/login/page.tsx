"use client";
import { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
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
            router.push('/');
        } catch (err) {
            setError('Email ou senha incorretos');
            console.error('Erro de login:', err);
        }
    };

    return (
        <div className={styles.loginBackground}>
            {/* Logo fora do formulário */}
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
                <h2 className="text-xl font-bold text-center mb-4">Login</h2>
                
                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleLogin} className="space-y-6">
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
                    
                    <Button type="submit" className="w-full">
                        ENTRAR
                    </Button>
                </form>
                
                <div className="text-center mt-4">
                    <p className="text-gray-800">
                        Não tem uma conta? 
                        <button 
                            className="text-blue-600 ml-1 hover:underline focus:outline-none"
                            onClick={() => router.push('/register')}
                        >
                            Registre-se
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}