"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ButtonCriarSala from '../../components/button-criar-sala';
import VoltarButton from '../../components/voltar-button';
import styles from './lista-salas.module.css';

export default function ListaSalas() {
    const router = useRouter();
    
    // Exemplo de salas criadas (futuramente virá da API)
    const [salas, setSalas] = useState([
        { id: 1, nome: 'Sala ABC' },
        { id: 2, nome: 'Sala XYZ' },
        { id: 3, nome: 'Quiz Matemática' },
    ]);

    const handleVoltar = () => {
        router.push('/');
    };

    return (
        <div className={styles.listaSalasBackground}>
            {/* Logo */}
            <div className={styles.logoContainer}>
                <Image
                    src="/images/logo.png"
                    alt="Sabixão"
                    width={150}
                    height={150}
                    priority
                />
            </div>

            {/* Botão Voltar */}
            <div className={styles.voltarContainer}>
                <VoltarButton onClick={handleVoltar} />
            </div>
            
            <div className={styles.container}>
                <h1 className={styles.title}>Minhas Salas</h1>
                
                <div className={styles.salasGrid}>
                    {/* Botão de criar nova sala */}
                    <ButtonCriarSala isNew />
                    
                    {/* Lista de salas existentes */}
                    {salas.map((sala) => (
                        <ButtonCriarSala 
                            key={sala.id}
                            salaId={sala.id}
                            nomeSala={sala.nome}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
