"use client";
import { useRouter } from 'next/navigation';
import styles from './button-adicionar-sala.module.css';

interface ButtonAdicionarSalaProps {
    numeroSala?: number;
    descricaoSala?: string;
    isNew?: boolean;
    onClick?: () => void;
}

export default function ButtonAdicionarSala({ 
    numeroSala,
    descricaoSala = "Lorem ipsum dolor sit ama...",
    isNew = false,
    onClick 
}: ButtonAdicionarSalaProps) {
    const router = useRouter();

    const handleClick = () => {
        if (onClick) {
            onClick();
        } else if (isNew) {
            router.push('/criar-sala');
        }
    };

    return (
        <div className={styles.buttonWrapper}>
            {/* Botão com N° e descrição */}
            {!isNew && numeroSala && (
                <button className={styles.buttonDescricao} onClick={handleClick}>
                    <span className={styles.numero}>N° {numeroSala}</span>
                    <span className={styles.descricao}>{descricaoSala}</span>
                </button>
            )}
            
            {/* Botão de adicionar */}
            <button 
                className={isNew ? styles.buttonNovo : styles.buttonAdicionar}
                onClick={handleClick}
            >
                <div className={styles.iconPlus}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="2" y="2" width="36" height="36" rx="4" stroke="white" strokeWidth="3"/>
                        <line x1="20" y1="10" x2="20" y2="30" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                        <line x1="10" y1="20" x2="30" y2="20" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                    </svg>
                </div>
            </button>
        </div>
    );
}
