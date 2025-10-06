"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Button from '../../components/button';
import styles from './editar-questao.module.css';

export default function EditarQuestao() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Pega os parâmetros da URL (id da sala e id da questão)
    const salaId = searchParams.get('salaId');
    const questaoId = searchParams.get('questaoId');

    const handleVoltar = () => {
        if (salaId) {
            router.push(`/sala/${salaId}`);
        } else {
            router.push('/lista-salas');
        }
    };

    return (
        <div className={styles.editarQuestaoBackground}>
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

            {/* Botão Voltar */}
            <div className={styles.voltarContainer}>
                <Button onClick={handleVoltar}>
                    ← Voltar
                </Button>
            </div>
            
            <div className={styles.formWrapper}>
                <h1 className={styles.title}>Editar Questão {questaoId}</h1>
                
                {/* Conteúdo da página em branco por enquanto */}
                <div className={styles.contentPlaceholder}>
                    <p>Página em construção...</p>
                    <p>Sala ID: {salaId}</p>
                    <p>Questão ID: {questaoId}</p>
                </div>
            </div>
        </div>
    );
}
