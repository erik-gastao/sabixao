"use client";
import { useState } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './criar-sala.module.css';

export default function CriarSala() {
    const [nomeSala, setNomeSala] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleCriarSala = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!nomeSala) {
            setError('Por favor, digite o nome da sala');
            return;
        }
        
        try {
            console.log('Criando sala:', { nomeSala });
            setError('');
            // Aqui você faria a chamada para a API para criar a sala
            // Após criar, redireciona para a sala com o PIN gerado
            // const pinGerado = '123456'; // Exemplo
            // router.push('/sala/' + pinGerado);
        } catch (err) {
            setError('Erro ao criar sala. Tente novamente.');
            console.error('Erro ao criar sala:', err);
        }
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
                    width={300}
                    height={300}
                    priority
                />
            </div>
            
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Criar Nova Sala</h2>
                
                {error && (
                    <div className={styles.errorMessage}>
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleCriarSala} className={styles.formContent}>
                    <Input 
                        label="Nome da Sala"
                        type="text"
                        value={nomeSala}
                        onChange={(e) => setNomeSala(e.target.value)}
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
                            CRIAR SALA
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
