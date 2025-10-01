"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import styles from './lista-salas.module.css';

export default function ListaSalas() {
    const router = useRouter();

    return (
        <div className={styles.listaSalasBackground}>
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
            
            <div className={styles.container}>
                <h1 className={styles.title}>Lista de Salas</h1>
                
                {/* Aqui será implementada a lista de salas conforme seu design */}
                <p className={styles.placeholder}>
                    Aguardando especificações do design...
                </p>
            </div>
        </div>
    );
}
