"use client";
import { useState } from 'react';
import Button from '../components/button';
import Input from '../components/input';
import styles from './page.module.css';

export default function TelaInicial() {
    const [nome, setNome] = useState('');
    
    const handleCriar = () => {
        console.log('Criar clicado!', nome);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sabixão</h1>
            
            <div className={styles.formWrapper}>
                <Input 
                    label="Nome da Sala"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                
                <Button onClick={handleCriar} className={styles.createButton}>
                    CRIAR
                </Button>
            </div>
        </div>
    );
}